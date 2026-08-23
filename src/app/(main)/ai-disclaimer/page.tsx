import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'AI & Automation Disclaimer | Aveda Technologies',
  description: 'AI & Automation Disclaimer covering artificial intelligence model outputs, autonomous workflows, human oversight, and third-party AI APIs.',
};

export default function AiDisclaimerPage() {
  const sections: LegalSection[] = [
    {
      title: 'Nature of AI & Machine Learning Outputs',
      content: [
        'Aveda Technologies integrates generative AI, LLMs, and autonomous agent workflows across its products.',
        'AI models generate responses based on probabilistic data. Outputs may occasionally contain incorrect information, hallucinated context, or biased data.',
      ],
    },
    {
      title: 'Requirement for Human Oversight',
      content: [
        'AI tools and automated workflows are designed to assist business operations, not replace qualified human judgment.',
        'For high-impact medical, legal, financial, or political decisions, human verification is strictly required.',
      ],
    },
    {
      title: 'Autonomous Workflows & API Triggers',
      content: [
        'Automation systems execute actions based on configured triggers, third-party webhooks, and rules. Clients are responsible for testing workflow logic before live deployment.',
      ],
    },
    {
      title: 'Third-Party AI Models',
      content: [
        'Features utilizing third-party AI APIs (OpenAI, Anthropic, Google Gemini) are subject to provider availability, token limits, and third-party terms of service.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="AI Ethics & Governance"
      title="AI & Automation Disclaimer"
      description="Guidelines and responsibilities regarding artificial intelligence outputs, autonomous workflows, and human-in-the-loop oversight."
      sections={sections}
      contactEmail="legal@avedatechnologies.com"
    />
  );
}
