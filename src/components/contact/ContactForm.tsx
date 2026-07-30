'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { SERVICE_OPTIONS, BUDGET_RANGES } from '@/data/contactData';
import { ContactFormData } from '@/types';
import { Send, CheckCircle2, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: 'Web Applications',
    budget: '$5k – $15k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (planParam === 'starter') {
      setFormData((prev) => ({ ...prev, budget: '$2.5k – $5k', service: 'Web Applications' }));
    } else if (planParam === 'growth') {
      setFormData((prev) => ({ ...prev, budget: '$5k – $15k', service: 'Web Applications' }));
    } else if (planParam === 'enterprise') {
      setFormData((prev) => ({ ...prev, budget: '$30k+', service: 'Custom Enterprise Consulting' }));
    }
  }, [planParam]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Full name is required (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid work email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide project details (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setServerError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (err: unknown) {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <GlassCard className={styles.formCard} hoverEffect={false}>
        <div className={styles.successCard}>
          <div className={styles.successIconWrapper}>
            <CheckCircle2 size={40} />
          </div>
          <h3 className={styles.successTitle}>Inquiry Received!</h3>
          <p className={styles.successMsg}>
            Thank you, <strong>{formData.name}</strong>. Our senior architecture team has received your project details. We will contact you at <strong>{formData.email}</strong> within 2 hours.
          </p>
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                service: 'Web Applications',
                budget: '$5k – $15k',
                message: '',
              });
            }}
          >
            Submit Another Project Request
          </Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={styles.formCard} hoverEffect={false}>
      {serverError && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: 'var(--radius-md)', color: '#f87171', marginBottom: '24px', fontSize: '0.9rem' }}>
          <AlertCircle size={18} />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          {/* Full Name */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="name">
              <span>Full Name</span>
              <span className={styles.requiredStar}>*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>

          {/* Work Email */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="email">
              <span>Work Email</span>
              <span className={styles.requiredStar}>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="s.jenkins@company.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          {/* Company Name */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="company">
              <span>Company / Organization</span>
            </label>
            <input
              id="company"
              type="text"
              placeholder="e.g. Nexus Tech Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={styles.input}
            />
          </div>

          {/* Service Dropdown */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="service">
              <span>Primary Service Interested In</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={styles.select}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Selector */}
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>
              <span>Estimated Project Budget Range</span>
            </label>
            <div className={styles.budgetGrid}>
              {BUDGET_RANGES.map((b) => {
                const isSelected = formData.budget === b;
                return (
                  <button
                    key={b}
                    type="button"
                    className={`${styles.budgetButton} ${isSelected ? styles.activeBudget : ''}`}
                    onClick={() => setFormData({ ...formData, budget: b })}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Details Textarea */}
          <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
            <label className={styles.label} htmlFor="message">
              <span>Project Details & Objectives</span>
              <span className={styles.requiredStar}>*</span>
            </label>
            <textarea
              id="message"
              placeholder="Tell us about your goals, timelines, key features, or technical requirements..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>
        </div>

        {/* Footer & Submit */}
        <div className={styles.formFooter}>
          <div className={styles.securityNote}>
            <ShieldCheck size={18} className="text-jungle-400" />
            <span>Strict NDA & 256-Bit SSL Encrypted Submission</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            icon={loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          >
            {loading ? 'Transmitting Details...' : 'Send Project Proposal'}
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
