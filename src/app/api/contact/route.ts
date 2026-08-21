import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'muhammadtakiahmed@icloud.com';

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  website?: string;
  hp_field?: string;
}

// Basic HTML escaping helper to prevent HTML/script injection in email templates
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// In-memory rate limiting per IP (max 5 submissions per 10 minutes)
const ipMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const timestamps = (ipMap.get(ip) || []).filter((t) => now - t < windowMs);
  if (timestamps.length >= 5) {
    return true;
  }
  timestamps.push(now);
  ipMap.set(ip, timestamps);
  return false;
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Raydrim Contact API endpoint. Please submit inquiries via POST.',
  });
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactPayload;

    // Honeypot check for spam bots
    if (body.website || body.hp_field) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for reaching out to Raydrim!',
      });
    }

    const errors: Record<string, string> = {};

    // Validate Full Name
    if (!body.name || body.name.trim().length < 2) {
      errors.name = 'Full name is required (minimum 2 characters).';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = 'Please provide a valid work email address.';
    }

    // Validate Message
    if (!body.message || body.message.trim().length < 10) {
      errors.message = 'Project details message must be at least 10 characters long.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your inputs.',
          errors,
        },
        { status: 400 }
      );
    }

    const clientName = escapeHtml(body.name.trim());
    const clientEmail = escapeHtml(body.email.trim());
    const company = escapeHtml(body.company?.trim() || 'Not specified');
    const service = escapeHtml(body.service || 'General Inquiry');
    const budget = escapeHtml(body.budget || 'Not specified');
    const projectMessage = escapeHtml(body.message.trim());
    const timestamp = new Date().toISOString();

    // Send notification email to owner via Resend
    await resend.emails.send({
      from: 'Raydrim Contact Form <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: clientEmail,
      subject: `🟢 New Project Inquiry from ${clientName} — ${service}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #0d0d0f; color: #e8e4dc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0a6b3a, #10b461); padding: 28px 32px;">
            <h1 style="margin: 0; font-size: 22px; color: #fff;">🚀 New Project Inquiry — Raydrim</h1>
            <p style="margin: 6px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">Received ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; color: #8b8b8b; width: 140px; vertical-align: top;">Client Name</td>
                <td style="padding: 10px 0; font-weight: 600;">${clientName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8b8b8b; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${clientEmail}" style="color: #10b461; text-decoration: none;">${clientEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8b8b8b; vertical-align: top;">Company</td>
                <td style="padding: 10px 0;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8b8b8b; vertical-align: top;">Service</td>
                <td style="padding: 10px 0;"><span style="background: #0a6b3a; padding: 3px 10px; border-radius: 20px; font-size: 13px;">${service}</span></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8b8b8b; vertical-align: top;">Budget Range</td>
                <td style="padding: 10px 0; font-weight: 600;">${budget}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background: #1a1a1e; border-radius: 8px; border-left: 3px solid #10b461;">
              <p style="margin: 0 0 8px; color: #8b8b8b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Project Details</p>
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${projectMessage}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #555;">Submitted at ${timestamp} • Reply directly to this email to reach the client.</p>
          </div>
        </div>
      `,
    });

    // Send auto-reply confirmation to client
    await resend.emails.send({
      from: 'Raydrim <onboarding@resend.dev>',
      to: clientEmail,
      subject: `Thank you for reaching out, ${clientName}! — Raydrim`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #fafaf8; color: #1a1a1e; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0a6b3a, #10b461); padding: 28px 32px;">
            <h1 style="margin: 0; font-size: 22px; color: #fff;">Thank you, ${clientName}! ✨</h1>
          </div>
          <div style="padding: 28px 32px;">
            <p style="font-size: 15px; line-height: 1.7;">I have received your project inquiry and will review your requirements personally.</p>
            <div style="background: #f0f0ec; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;"><strong>⏱ Next Steps:</strong></p>
              <ul style="margin: 10px 0 0; padding-left: 20px; font-size: 14px; line-height: 2;">
                <li>I will review your project details and respond within <strong>24 hours</strong></li>
                <li>You will receive a preliminary technical assessment and cost estimate</li>
              </ul>
            </div>
            <p style="font-size: 14px; color: #666;">If you have any urgent details to add, reply directly to this email or reach me at <a href="mailto:muhammadtakiahmed@icloud.com" style="color: #0a6b3a;">muhammadtakiahmed@icloud.com</a>.</p>
            <p style="margin-top: 24px; font-size: 14px;">Best regards,<br/><strong>Muhammad Taki Ahmed</strong><br/>Founder & Developer, Raydrim</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out to Raydrim! I will review your project details and contact you within 24 hours.',
        timestamp,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('[API/Contact] Error handling submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again or email us directly at muhammadtakiahmed@icloud.com.',
      },
      { status: 500 }
    );
  }
}
