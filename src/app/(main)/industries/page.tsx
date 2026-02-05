import Link from 'next/link';

const industryColumns = [
  [
    {
      title: 'Overview',
      description: 'End-to-end AI, digital, and performance solutions customized by industry.',
      href: '#',
    },
    {
      title: 'Political & Public Sector',
      description: 'AI-driven voter analysis, sentiment tracking, and digital campaigning.',
      href: '#',
    },
    {
      title: 'Startups & MSMEs',
      description: 'Growth-focused AI marketing and automation for rapid scaling.',
      href: '#',
    },
    {
      title: 'Cybersecurity',
      description: 'AI-based threat detection, secure platforms, and data protection.',
      href: '#',
    },
  ],
  [
    {
      title: 'Financial Services',
      description: 'AI marketing, lead intelligence, and compliance-ready digital systems.',
      href: '#',
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'Patient engagement, AI analytics, and digital outreach solutions.',
      href: '#',
    },
    {
      title: 'Education & EdTech',
      description: 'AI-powered admissions marketing, LMS platforms, and automation.',
      href: '#',
    },
    {
      title: 'Real Estate',
      description: 'AI lead scoring, performance ads, and CRM automation.',
      href: '#',
    },
  ],
  [
    {
      title: 'Media & Entertainment',
      description: 'Audience analytics, viral content strategy, and AI performance marketing.',
      href: '#',
    },
    {
      title: 'E-commerce & D2C',
      description: 'Conversion optimization, AI retargeting, and growth automation.',
      href: '#',
    },
    {
      title: 'Hospitality & Restaurants',
      description: 'Local SEO, AI ads, and reputation management.',
      href: '#',
    },
    {
      title: 'Public Awareness Campaigns',
      description: 'Narrative control, trend prediction, and digital influence with AI.',
      href: '#',
    },
  ],
  [
    {
      title: 'Smart Cities',
      description: 'AI dashboards, citizen engagement, and digital governance tools.',
      href: '#',
    },
    {
      title: 'Telecommunications',
      description: 'Data-driven growth, AI customer insights, and automation.',
      href: '#',
    },
    {
      title: 'Manufacturing',
      description: 'B2B lead systems, AI analytics, and digital branding.',
      href: '#',
    },
    {
      title: 'Technology & SaaS',
      description: 'Product-led growth, AI onboarding, and performance funnels.',
      href: '#',
    },
  ],
];

export default function IndustriesPage() {
  return (
    <div className="py-20 md:py-28 bg-background text-gray-900">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-black md:text-5xl uppercase">
            INDUSTRIES WE SERVE
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            AI-powered solutions across high-impact industries
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {industryColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8">
              {column.map((item) => (
                <Link key={item.title} href={item.href} className="group block">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-lg text-black">{item.title}</h3>
                    <span className="ml-2 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      →
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
