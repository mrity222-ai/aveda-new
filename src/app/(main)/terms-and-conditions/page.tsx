import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Aveda Technologies',
  description: 'Terms & Conditions governing the use of Aveda Technologies website, SaaS products, CRM, HRMS, and IT services.',
};

export default function TermsPage() {
  const sections: LegalSection[] = [
    {
      title: 'Eligibility',
      content: ['You confirm that:'],
      list: [
        'You are legally capable of entering into a binding agreement.',
        'Information provided by you is accurate and complete.',
        'You have authority to act for an organization where applicable.',
        'You will use our services only for lawful purposes.',
      ],
    },
    {
      title: 'Services Provided',
      content: ['Aveda Technologies may provide:'],
      list: [
        'Website development & WaaS subscriptions',
        'Software development & mobile application development',
        'UI/UX design & enterprise design systems',
        'SaaS products (Marketing Automation Engine, HRMS, AI Sales CRM)',
        'AI and automation workflows',
        'Digital marketing, SEO and performance marketing',
        'API integrations, technical consulting, maintenance and support',
      ],
    },
    {
      title: 'SaaS Services & Subscriptions',
      content: [
        'Certain Aveda Technologies products are provided through subscription plans (monthly, quarterly, annual, or custom enterprise plans). Features, storage, users, usage limits, integrations and support may vary by plan.',
      ],
    },
    {
      title: 'Payments & Payment Gateways',
      content: [
        'Payments may be processed through third-party payment providers, including Razorpay or other providers selected by Aveda Technologies.',
        'Payment transactions are subject to the applicable payment provider terms and privacy policy. Razorpay current terms expressly cover payment aggregation and recurring payment/e-mandate services.',
      ],
    },
    {
      title: 'Third-Party Services',
      content: [
        'Our products may depend on third-party providers including payment gateways, cloud hosting, AI providers, email/WhatsApp APIs, social media platforms, analytics, and authentication providers.',
        'Aveda Technologies is not responsible for independent failures, policy changes, outages, or restrictions imposed by third-party providers.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'Aveda Technologies retains ownership of its proprietary software, frameworks, source code, libraries, APIs, automation workflows, templates, algorithms, designs, documentation, and SaaS infrastructure.',
        'Client ownership of specific custom deliverables shall be determined by the applicable agreement. Payment for a service does not automatically transfer ownership of Aveda Technologies underlying core technology.',
      ],
    },
    {
      title: 'Client Content & Data',
      content: [
        'The client remains responsible for content, documents, images, videos, customer records, databases, and other information provided to Aveda Technologies.',
        'The client confirms that it has all necessary rights and permissions to provide such content.',
      ],
    },
    {
      title: 'Prohibited Activities',
      content: ['You must not:'],
      list: [
        'Attempt unauthorized access to our infrastructure.',
        'Reverse engineer our proprietary SaaS systems.',
        'Upload malware or abuse APIs.',
        'Circumvent subscription restrictions or usage limits.',
        'Use our systems for fraud or unlawful activities.',
        'Attack or disrupt our infrastructure or violate intellectual property rights.',
      ],
    },
    {
      title: 'Service Availability',
      content: [
        'We aim to provide reliable services but do not guarantee uninterrupted availability. Temporary interruptions may occur because of maintenance, infrastructure failures, third-party outages, or circumstances beyond our control.',
      ],
    },
    {
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by applicable law, Aveda Technologies shall not be liable for indirect, incidental, special or consequential losses, including loss of profits, revenue, business opportunities, or data.',
      ],
    },
    {
      title: 'Suspension & Termination',
      content: [
        'We may suspend or restrict an account for non-payment, fraud, security concerns, abuse, violation of these Terms, or illegal activities.',
      ],
    },
    {
      title: 'Governing Law & Dispute Resolution',
      content: [
        'These Terms shall be governed by the laws of India. Subject to applicable law, disputes shall be subject to the competent courts at Lucknow, Uttar Pradesh, India.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Legal Structure"
      title="Terms & Conditions"
      description="These Terms & Conditions govern your access to and use of Aveda Technologies website, applications, SaaS products, and IT services."
      sections={sections}
      contactEmail="legal@avedatechnologies.com"
    />
  );
}
