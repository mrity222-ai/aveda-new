import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Aveda Technologies',
  description: 'Refund & Cancellation Policy for software development, SaaS subscriptions, WaaS plans, and consulting services.',
};

export default function RefundPolicyPage() {
  const sections: LegalSection[] = [
    {
      title: 'SaaS Subscriptions',
      content: [
        'SaaS subscriptions (Marketing Automation Engine, HRMS, CRM) and WaaS plans are billed in advance according to the selected billing frequency (monthly, quarterly, or annual).',
        'Unless expressly stated in a custom enterprise contract, subscription fees already paid are non-refundable.',
      ],
    },
    {
      title: 'Subscription Cancellation',
      content: [
        'Customers may cancel future subscription billing at any time through their account settings or by emailing support@avedatechnologies.com.',
        'Cancellation prevents future scheduled charges but does not automatically refund amounts already successfully billed for the current active billing cycle.',
      ],
    },
    {
      title: 'AutoPay & Recurring Payments',
      content: [
        'Where AutoPay or recurring payment e-mandate has been registered, charges occur automatically at the start of each billing period. To avoid the next billing cycle charge, cancellation must be initiated prior to the renewal date.',
      ],
    },
    {
      title: 'Custom Development Projects',
      content: [
        'For custom website, app, or software engineering projects:',
        'Advance project deposits or milestone payments are non-refundable once engineering/design work has commenced.',
        'Refund eligibility for custom builds is governed strictly by the executed Statement of Work (SOW) or commercial contract.',
      ],
    },
    {
      title: 'Third-Party Charges',
      content: [
        'Third-party expenses including domain registration, SSL certificates, cloud hosting, API credits, WhatsApp messaging charges, and advertising spend are strictly non-refundable.',
      ],
    },
    {
      title: 'Failed Payments & Grace Period',
      content: [
        'If a recurring payment fails, Aveda Technologies may provide a 3 to 7 day grace period. Services may be restricted or suspended if payment is not cleared within the grace window.',
      ],
    },
    {
      title: 'Refund Processing',
      content: [
        'Approved refunds will be processed back to the original payment method within 5 to 10 business days depending on bank/payment gateway processing timelines.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Financial Policy"
      title="Refund & Cancellation Policy"
      description="Clear guidelines regarding SaaS subscriptions, custom software builds, AutoPay cancellations, and refund processing."
      sections={sections}
      contactEmail="billing@avedatechnologies.com"
    />
  );
}
