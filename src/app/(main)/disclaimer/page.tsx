import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Disclaimer | Aveda Technologies',
  description: 'General technology disclaimer, AI disclaimer, marketing ROI disclaimer, and third-party platform limitations.',
};

export default function DisclaimerPage() {
  const sections: LegalSection[] = [
    {
      title: 'General Information & Results Disclaimer',
      content: [
        'Information provided by Aveda Technologies across its website, software, SaaS platforms, and marketing literature is for general technology service and business growth purposes.',
        'Aveda Technologies does not guarantee specific revenue figures, exact lead quantities, fixed conversion rates, or specific search engine ranking positions.',
      ],
    },
    {
      title: 'AI & Automation Disclaimer',
      content: [
        'AI-generated outputs, automated sentiment analytics, and LLM responses may occasionally contain inaccuracies, hallucinations, or incomplete data.',
        'Users should maintain human oversight for high-impact legal, financial, or political decisions.',
      ],
    },
    {
      title: 'Marketing & Performance Advertising',
      content: [
        'Digital marketing and ad performance depend on external parameters including ad platform algorithms (Meta/Google), market competition, audience behavior, and campaign budgets.',
      ],
    },
    {
      title: 'Third-Party Platform Dependence',
      content: [
        'Aveda Technologies is not responsible for policy changes, API suspensions, rate limits, or outages imposed by third-party platforms (WhatsApp Business API, Google Cloud, Meta, Razorpay).',
      ],
    },
    {
      title: 'External Links & Resources',
      content: [
        'Our website may link to third-party sites. We do not endorse or take responsibility for content, policies, or privacy practices on external sites.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="General Legal Notice"
      title="Disclaimer"
      description="Important legal disclaimers regarding business growth guarantees, AI-generated content, marketing ROI, and third-party APIs."
      sections={sections}
      contactEmail="legal@avedatechnologies.com"
    />
  );
}
