import { redirect } from 'next/navigation';

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ planId: string }>;
}) {
  const { planId } = await params;
  redirect(`/contact?plan=${encodeURIComponent(planId)}`);
}
