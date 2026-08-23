import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Data Processing Agreement (DPA) | DPDP Act 2023 | Aveda Technologies',
  description: 'Data Processing Agreement (DPA) defining legal roles, data fiduciary commitments, security standards, sub-processor obligations, and compliance with DPDP Act 2023.',
};

export default function DpaPage() {
  const sections: LegalSection[] = [
    {
      title: 'Legal Roles & Purpose',
      content: [
        'This Data Processing Agreement ("DPA") governs data processing operations performed by Aveda Technologies on behalf of enterprise customers utilizing HRMS, CRM, and SaaS automation platforms.',
        'The Customer acts as Data Fiduciary (Data Controller) determining processing purposes. Aveda Technologies acts as Data Processor (Data Processor) executing services under customer instructions.',
      ],
    },
    {
      title: 'Scope of Processing',
      content: [
        'Aveda Technologies processes personal and business data solely to deliver the contracted SaaS features, maintain system integrity, prevent fraud, provide technical support, and ensure security.',
      ],
    },
    {
      title: 'Technical & Organizational Security Safeguards',
      content: ['We maintain appropriate security controls including:'],
      list: [
        'Role-Based Access Control (RBAC) and Multi-Factor Authentication',
        'Data encryption in transit (TLS 1.3) and at rest (AES-256)',
        'Continuous security monitoring, vulnerability scanning, and audit logging',
        'Automated database backups and disaster recovery protocols',
      ],
    },
    {
      title: 'Sub-Processor Management',
      content: [
        'Aveda Technologies engages vetted sub-processors for cloud hosting (AWS/Google Cloud), payment aggregation (Razorpay), and communication channels (WhatsApp API). Sub-processors are bound by strict data protection terms.',
      ],
    },
    {
      title: 'Security Incident Notification & Response',
      content: [
        'In the event of a confirmed security breach impacting customer personal data, Aveda Technologies will notify affected customers without undue delay and take swift remedial action as required by Indian law.',
      ],
    },
    {
      title: 'Termination & Data Return / Deletion',
      content: [
        'Upon contract expiration or account termination, customer data will be deleted or returned in accordance with contractual terms and statutory retention requirements.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Enterprise Data Protection"
      title="Data Processing Agreement (DPA)"
      description="Legal agreement governing enterprise data processing, Data Fiduciary obligations, security controls, and DPDP Act 2023 compliance."
      sections={sections}
      contactEmail="privacy@avedatechnologies.com"
    />
  );
}
