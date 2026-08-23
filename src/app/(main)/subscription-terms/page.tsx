import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Subscription & AutoPay Terms | Razorpay e-Mandates | Aveda Technologies',
  description: 'Terms governing recurring SaaS subscriptions, Razorpay AutoPay e-mandate registration, explicit customer consent, and cancellation.',
};

export default function SubscriptionTermsPage() {
  const sections: LegalSection[] = [
    {
      title: 'Recurring SaaS Subscriptions',
      content: [
        'Aveda Technologies offers recurring subscription options (monthly, quarterly, annual) for SaaS tools (Marketing Automation, HRMS, Sales CRM) and Website as a Service (WaaS) plans.',
      ],
    },
    {
      title: 'AutoPay & Customer Consent Requirements',
      content: [
        'Activating AutoPay or e-mandate requires explicit customer consent and multi-factor authentication as mandated by RBI recurring payment regulations and Razorpay merchant terms.',
        'By registering an e-mandate, you authorize Razorpay to automatically debit your account on the scheduled renewal date.',
      ],
    },
    {
      title: 'Billing Cycle & Price Modifications',
      content: [
        'Subscriptions auto-renew at the end of each billing term unless cancelled. If pricing is revised, advance notification will be sent prior to the next billing cycle.',
      ],
    },
    {
      title: 'Cancellation Procedure',
      content: [
        'You can cancel recurring payments anytime prior to the next billing cycle via your dashboard or by emailing billing@avedatechnologies.com. Cancellation stops future charges but does not refund past periods.',
      ],
    },
    {
      title: 'Failed AutoPay & Account Status',
      content: [
        'If an AutoPay transaction fails, payment retries will occur over a grace period. Unpaid accounts may face temporary service restrictions after notice.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Subscriptions & AutoPay"
      title="Subscription & AutoPay Terms"
      description="Terms for recurring billing, Razorpay e-mandate registration, explicit consent compliance, and automatic renewals."
      sections={sections}
      contactEmail="billing@avedatechnologies.com"
    />
  );
}
