import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Cookie Policy | Aveda Technologies',
  description: 'Cookie Policy explaining how Aveda Technologies uses cookies and tracking technologies across its website and SaaS applications.',
};

export default function CookiePolicyPage() {
  const sections: LegalSection[] = [
    {
      title: 'What Are Cookies?',
      content: [
        'Cookies are small text files stored on your device when you visit a website. They help recognize your session, store preferences, and understand website interaction.',
      ],
    },
    {
      title: 'Types of Cookies We Use',
      content: ['We utilize the following cookie categories:'],
      list: [
        'Essential Cookies: Necessary for secure login, session authentication, and core website functionality.',
        'Preference Cookies: Remember your user preferences, regional settings, and theme choices.',
        'Analytics Cookies: Help us measure web traffic, user flow, and platform performance.',
        'Marketing Cookies: Track ad campaign efficiency and attribution across digital platforms.',
      ],
    },
    {
      title: 'Third-Party Cookies',
      content: [
        'Third-party services integrated into our site (Google Analytics, Razorpay payment gateway, embedded media) may place cookies to enable security, payment authentication, or performance tracking.',
      ],
    },
    {
      title: 'Managing Cookie Preferences',
      content: [
        'You can disable or manage cookies through your web browser settings. Disabling essential cookies may impact your ability to log in or use certain SaaS platform features.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Privacy & Web Safety"
      title="Cookie Policy"
      description="Details on how cookies, session storage, and analytical technologies are used on Aveda Technologies platforms."
      sections={sections}
      contactEmail="privacy@avedatechnologies.com"
    />
  );
}
