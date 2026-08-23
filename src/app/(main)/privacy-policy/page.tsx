import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy | DPDP Act 2023 Compliant | Aveda Technologies',
  description: 'Privacy Policy for Aveda Technologies, compliant with India Digital Personal Data Protection Act (DPDP Act, 2023) and global data processing standards.',
};

export default function PrivacyPolicyPage() {
  const sections: LegalSection[] = [
    {
      title: 'Information We Collect',
      content: ['We may collect the following categories of data:'],
      list: [
        'Personal Information: Name, Email, Phone number, Company name, Billing information, and Communication details.',
        'Account Information for SaaS: Username, Login credentials, User roles, Organization information, and Subscription details.',
        'Transaction Information: Order ID, Invoice details, Payment status, and Billing logs. Payment authentication info (CVV, UPI PIN, passwords) is never stored by Aveda Technologies.',
      ],
    },
    {
      title: 'Technical & System Information',
      content: [
        'We automatically collect technical data such as IP address, browser type, device information, operating system, usage logs, referral URLs, and cookies to ensure security and optimize platform performance.',
      ],
    },
    {
      title: 'How We Use Information',
      content: ['We process personal data to:'],
      list: [
        'Deliver software development, WaaS, and SaaS services.',
        'Manage customer accounts, billing, and subscription renewals.',
        'Provide customer support, troubleshooting, and platform security.',
        'Detect fraud, unauthorized usage, and infrastructure security risks.',
        'Comply with Indian legal obligations including the Digital Personal Data Protection Act, 2023 (DPDP Act).',
      ],
    },
    {
      title: 'SaaS Data & Data Fiduciary Responsibilities',
      content: [
        'When customers use Aveda Technologies SaaS products (CRM, HRMS, Marketing Automation), they upload data into the platform. Customers remain Data Fiduciaries responsible for ensuring proper consent and legal authority to collect data.',
        'Aveda Technologies acts as a Data Processor to maintain, secure, and support the SaaS platform.',
      ],
    },
    {
      title: 'Third-Party Processors & Payment Gateways',
      content: [
        'We work with trusted third-party providers for payments (Razorpay), cloud infrastructure (AWS/Google Cloud), AI APIs, email, and WhatsApp communications.',
        'Payment processing is governed by Razorpay Privacy Policy and compliance frameworks for secure transaction handling.',
      ],
    },
    {
      title: 'Cookies & Analytics',
      content: [
        'We use essential cookies for authentication and security, preference cookies, and analytics cookies to evaluate traffic and improve platform experience.',
      ],
    },
    {
      title: 'Data Security & Safeguards',
      content: [
        'We implement reasonable technical and organizational safeguards including encryption, access controls, logging, and security monitoring to protect personal information.',
      ],
    },
    {
      title: 'Data Retention & Rights Under DPDP Act 2023',
      content: [
        'Under the DPDP Act 2023, individuals have rights regarding their personal data, including data access, correction, erasure, consent withdrawal, and grievance redressal.',
        'Requests may be sent to privacy@avedatechnologies.com.',
      ],
    },
    {
      title: 'Data Sharing & Regulatory Compliance',
      content: [
        'We do not sell personal data. Information is only shared with authorized technology providers, payment gateways, legal advisors, or regulatory authorities when legally required.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Privacy & Compliance"
      title="Privacy Policy (DPDP Act 2023 Compliant)"
      description="Aveda Technologies is committed to protecting your personal data in compliance with India's Digital Personal Data Protection Act, 2023 (DPDP Act)."
      sections={sections}
      contactEmail="privacy@avedatechnologies.com"
    />
  );
}
