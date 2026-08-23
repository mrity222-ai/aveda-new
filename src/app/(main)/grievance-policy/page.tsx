import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Grievance Redressal Policy | DPDP Act 2023 | Aveda Technologies',
  description: 'Grievance Redressal Mechanism for customer complaints, privacy concerns, payment issues, and data subject requests under DPDP Act 2023.',
};

export default function GrievancePolicyPage() {
  const sections: LegalSection[] = [
    {
      title: 'Commitment & Scope',
      content: [
        'Aveda Technologies is committed to resolving customer grievances, data privacy concerns, payment queries, and service issues in a fair, transparent, and timely manner as required by India Digital Personal Data Protection Act, 2023 (DPDP Act).',
      ],
    },
    {
      title: 'Designated Grievance Officer Details',
      content: [
        'Designated Grievance Officer: Legal & Compliance Head',
        'Grievance Email: grievance@avedatechnologies.com',
        'Direct Phone: +91 9532758070 / +91 522 3397515',
        'Registered Address: Aveda Technologies, Lucknow, Uttar Pradesh, India - 226010',
      ],
    },
    {
      title: 'How to Submit a Complaint',
      content: ['To ensure swift resolution, your grievance notice should include:'],
      list: [
        'Your Full Name and Registered Email / Phone Number',
        'Account / Invoice / Order ID (where applicable)',
        'Clear description of the issue or data protection request',
        'Relevant supporting documents, screenshots, or receipts',
      ],
    },
    {
      title: 'Acknowledgement & Timelines',
      content: [
        'Grievance Acknowledgement: Within 24 to 48 hours of receipt.',
        'Investigation & Resolution: Target resolution within 15 to 30 days depending on the nature and legal complexity of the request.',
      ],
    },
    {
      title: 'Reporting Security Vulnerabilities',
      content: [
        'Security vulnerabilities or breach disclosures should be immediately reported to security@avedatechnologies.com prior to public disclosure.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Compliance & Support"
      title="Grievance Redressal Policy"
      description="Designated officer details, complaint submission process, and resolution timelines under India DPDP Act 2023."
      sections={sections}
      contactEmail="grievance@avedatechnologies.com"
    />
  );
}
