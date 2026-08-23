import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'SaaS Subscription & Usage Agreement | Aveda Technologies',
  description: 'Enterprise contract governing access to Aveda Technologies SaaS platforms, CRM, HRMS, marketing engine, usage limits, and licensing terms.',
};

export default function SaasAgreementPage() {
  const sections: LegalSection[] = [
    {
      title: 'Grant of License',
      content: [
        'Subject to plan payment and compliance, Aveda Technologies grants the customer a non-exclusive, non-transferable, limited right to access and use the subscribed SaaS platform during the subscription term.',
      ],
    },
    {
      title: 'Account Management & Credentials',
      content: [
        'The customer is solely responsible for maintaining credential security, user roles, access permissions, and all activities conducted through its organizational account.',
      ],
    },
    {
      title: 'Usage Quotas & System Limits',
      content: [
        'SaaS plans may specify usage caps regarding API calls, storage volume, active user accounts, WhatsApp/email messages, or AI execution tokens. Exceeding plan quotas requires plan upgrades.',
      ],
    },
    {
      title: 'Ownership of Customer Data',
      content: [
        'The customer retains full ownership of business data uploaded into the SaaS platform. Aveda Technologies processes customer data solely to provide, maintain, and support the SaaS services.',
      ],
    },
    {
      title: 'SLA Uptime & Scheduled Maintenance',
      content: [
        'We target high availability for our SaaS infrastructure. Maintenance windows are scheduled during low-traffic periods with advance system notifications where feasible.',
      ],
    },
    {
      title: 'Termination & Data Export',
      content: [
        'Upon contract termination, customers may request a data export within 30 days prior to permanent data purging in accordance with data retention regulations.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="SaaS & Cloud Contracting"
      title="SaaS Subscription & Usage Agreement"
      description="Contractual agreement governing software licensing, account security, usage quotas, and enterprise SaaS platform SLA commitments."
      sections={sections}
      contactEmail="legal@avedatechnologies.com"
    />
  );
}
