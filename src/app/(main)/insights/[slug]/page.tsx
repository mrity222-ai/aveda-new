import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight, Linkedin, Twitter, Instagram, Mail, Calendar, MapPin, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticleData {
  slug: string;
  category: string;
  date: string;
  location: string;
  title: string;
  lead: string;
  paragraphs: string[];
  quotes?: {
    speaker: string;
    role: string;
    text: string;
  }[];
  aboutText: string;
  image: string;
}

const articlesMap: Record<string, ArticleData> = {
  'ai-innovation-engine': {
    slug: 'ai-innovation-engine',
    category: 'Press Release',
    date: 'AUGUST 06, 2026',
    location: 'LUCKNOW & TORONTO',
    title: "Aveda Technologies' AI-Powered Business-Aware Assurance Solution Wins Global Tech Excellence Catalyst Award",
    lead: "Aveda Technologies (NSE: AVEDA), a premier global provider of AI automation and enterprise software solutions, announced today that its AI-powered Autonomous Operations and Business-Aware Assurance suite has been recognized with the prestigious Best Moonshot Catalyst Award at DTW Ignite 2026.",
    paragraphs: [
      "Evaluated by an international panel of enterprise technology experts and AI architects, the Catalyst initiative assesses solutions based on technical innovation, real-world business impact, proof of concept, and architectural scalability. The recognition underscores Aveda Technologies' leadership in helping global organizations accelerate autonomous workflows through agentic AI and graph intelligence.",
      "Developed as part of a multi-enterprise transformation initiative, Aveda Technologies' Business-Aware Assurance framework enables enterprises to intelligently identify, prioritize, and resolve operational bottlenecks based on customer and revenue impact rather than isolated system metrics alone. Designed to support Level 4 autonomous operations, the solution demonstrated end-to-end automation exceeding 92 percent across multiple complex operational scenarios, significantly reducing manual intervention while expanding service resilience.",
      "As the lead systems integrator and solution orchestrator for the initiative, Aveda Technologies combined agentic AI models, graph neural networks (GNNs), digital twins, and open API frameworks to build an intelligent assurance ecosystem. The framework correlates real-time telemetry across multi-cloud and edge environments, enabling automated fault prediction, instant root-cause analysis, and predictive lead qualification at scale.",
      "Unlike conventional monitoring tools that primarily track isolated system alerts, the Business-Aware Assurance framework connects operational events directly with business outcomes—correlating performance with revenue streams, customer satisfaction, and SLA compliance. This enables scaling businesses to prioritize remediation based on critical business impact rather than alarm volume, dramatically reducing Mean Time to Resolution (MTTR).",
      "The recognition reinforces Aveda Technologies' industry leadership in applying AI agents, graph intelligence, and open enterprise standards to resolve real-world software challenges. By advancing business-aware assurance, Aveda Technologies continues to empower enterprises to build more intelligent, resilient, and autonomous digital ecosystems capable of delivering superior customer experiences."
    ],
    quotes: [
      {
        speaker: "Deepak Yadav",
        role: "Lead Automation Architect & Technical Strategist, Aveda Technologies",
        text: "As modern enterprise architectures grow increasingly multi-cloud and complex, scaling businesses require autonomous operations. A key challenge is correlating system telemetry with actual business outcomes. This recognition reflects our deep focus on applying agentic AI, graph intelligence, and real-time automation to help enterprise leaders eliminate operational friction."
      },
      {
        speaker: "Raj Mani",
        role: "Head of AI & Growth Solutions, Aveda Technologies",
        text: "This milestone demonstrates the transformative power of unifying enterprise data with autonomous AI agents. By placing business impact at the heart of automated workflows, our solutions empower global clients to conquer cross-domain complexity and accelerate digital growth."
      }
    ],
    aboutText: "Aveda Technologies is a leading AI Automation and Custom Software Development company delivering proprietary SaaS platforms, enterprise CRM/ERP systems, mobile applications, and digital transformation to global clients across India, Canada, Australia, Netherlands, and North America. With proprietary products like Marketing Automation Engine, HRMS Workplace SaaS, and AI Sales CRM, Aveda Technologies empowers businesses to scale without limits.",
    image: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png'
  },
  'saas-innovation-award': {
    slug: 'saas-innovation-award',
    category: 'News',
    date: 'AUGUST 04, 2026',
    location: 'NOIDA & GLOBAL',
    title: 'Aveda Technologies Wins Top AI Automation & SaaS Innovation Excellence Award at Tech Summit 2026',
    lead: 'Aveda Technologies has been honored with the Top AI Automation & SaaS Innovation Award for its proprietary suite of enterprise automation tools, including Marketing Automation Engine and HRMS Workplace Management SaaS.',
    paragraphs: [
      'The annual Tech Summit brings together global technology leaders, enterprise developers, and AI researchers to celebrate groundbreaking advancements in business software. Aveda Technologies was selected for its revolutionary multi-channel WhatsApp automation architecture and agentic AI calling models.',
      'The judging committee highlighted Aveda Technologies\' ability to seamlessly bridge complex backend LLM pipelines with user-friendly business dashboards, enabling non-technical teams to deploy autonomous AI agents within minutes.',
      'With over 5 completed enterprise projects and 3 proprietary SaaS platforms deployed across global markets, Aveda Technologies continues to redefine how businesses automate customer acquisition, HR operations, and lead nurturing.'
    ],
    quotes: [
      {
        speaker: 'Saloni',
        role: 'IT Head & Lead Developer, Aveda Technologies',
        text: 'Winning this award validates our commitment to building production-ready, highly reliable AI automation systems that solve real business problems with measurable ROI.'
      }
    ],
    aboutText: 'Aveda Technologies delivers custom software development, AI calling agents, WhatsApp automation, web & mobile applications, and digital marketing solutions for scaling enterprises worldwide.',
    image: '/ins/luxury_corporate_office_skyscraper_interior_with_glass_w.png'
  },
  'digital-transformation-report': {
    slug: 'digital-transformation-report',
    category: 'Insight',
    date: 'JULY 29, 2026',
    location: 'LUCKNOW & GLOBAL',
    title: 'Aveda Technologies Featured in Global Enterprise Digital Transformation Report 2026',
    lead: 'Aveda Technologies has been featured in the 2026 Global Enterprise Digital Transformation Report as a high-growth technology partner driving AI adoption across mid-market and enterprise businesses.',
    paragraphs: [
      'The comprehensive benchmark report analyzes over 500 technology firms worldwide, highlighting leaders in cloud engineering, AI automation, and custom SaaS architecture.',
      'The report commended Aveda Technologies for its Website as a Service (WaaS) model and end-to-end digital engineering capabilities that accelerate time-to-market for enterprise clients by up to 60 percent.',
      'By offering modular, scalable software architecture paired with 24/7 autonomous AI calling agents, Aveda Technologies provides a future-proof roadmap for organizations navigating rapid market shifts.'
    ],
    aboutText: 'Aveda Technologies builds proprietary SaaS products and delivers enterprise technology solutions helping businesses accelerate digital growth.',
    image: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png'
  },
  'whatsapp-automation-case-study': {
    slug: 'whatsapp-automation-case-study',
    category: 'Case Study',
    date: 'JULY 15, 2026',
    location: 'DELHI NCR & GLOBAL',
    title: 'How Multi-Channel WhatsApp Automation Reduced Enterprise Support Workload by 85%',
    lead: 'A deep-dive case study into how Aveda Technologies\' proprietary Marketing & Support Automation Engine helped a high-growth enterprise automate 100,000+ monthly customer conversations.',
    paragraphs: [
      'In today\'s instant messaging economy, customers expect immediate responses. Traditional email ticketing and manual chat support create bottlenecks, leading to dropped leads and lower conversion rates.',
      'Aveda Technologies deployed an end-to-end WhatsApp Business API solution powered by agentic AI that automatically qualifies incoming leads, answers complex FAQs, schedules appointments, and synchronizes real-time data with central CRM databases.',
      'The outcome was a 85% reduction in manual support ticket volume, a 3.4x boost in lead conversion rates, and 24/7 customer resolution without expanding support headcount.'
    ],
    aboutText: 'Aveda Technologies specializes in AI calling agents, WhatsApp messaging automation, custom web/mobile development, and full-stack enterprise solutions.',
    image: '/ins/modern_university_architecture_or_a_high_tech_classroom_wit.png'
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesMap[resolvedParams.slug] || articlesMap['ai-innovation-engine'];
  return {
    title: `${article.title} | Aveda Technologies Insights`,
    description: article.lead,
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articlesMap[resolvedParams.slug] || articlesMap['ai-innovation-engine'];

  return (
    <div className="bg-[#f5f2eb] text-slate-950 font-inter antialiased min-h-screen">
      {/* -------------------- BREADCRUMB BAR -------------------- */}
      <div className="bg-[#eee8dc] border-b border-[#e2dcd0] py-3.5 px-6">
        <div className="container max-w-6xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-950 font-medium overflow-x-auto">
          <Link href="/" className="hover:text-red-600 transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/insides" className="hover:text-red-600 transition-colors shrink-0">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-red-600 font-semibold truncate">{article.category}</span>
        </div>
      </div>

      {/* -------------------- HERO BANNER (TECH MAHINDRA DARK NAVY GRID STYLE) -------------------- */}
      <section className="relative bg-[#06081e] text-white py-12 sm:py-12 px-6 overflow-hidden border-b border-slate-800">
        {/* Geometric Isometric Linear Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.22] z-0 overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="article-hero-grid" width="160" height="160" patternUnits="userSpaceOnUse">
                <path d="M 160 0 L 0 160 M 0 0 L 160 160 M 80 0 L 80 160 M 0 80 L 160 80" fill="none" stroke="#ffffff" strokeWidth="1.2" />
                <path d="M 0 40 L 160 40 M 0 120 L 160 120 M 40 0 L 40 160 M 120 0 L 120 160" fill="none" stroke="#ffffff" strokeWidth="0.6" strokeDasharray="3 3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#article-hero-grid)" />
          </svg>
        </div>

        {/* Radial Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/15 pointer-events-none z-0" />

        <div className="container relative z-10 max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-6 border-red-500/50 bg-red-500/10 text-red-400 uppercase tracking-widest text-xs px-3.5 py-1">
            {article.category}
          </Badge>
          
          <h1 className="font-soehne text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-[1.12] text-white max-w-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* -------------------- MAIN ARTICLE BODY (WARM CREAM DESIGN) -------------------- */}
      <section className="py-12 sm:py-14 px-6">
        <div className="container max-w-4xl mx-auto">
          
          {/* Dateline & Location */}
          <div className="mb-8 pb-6 border-b border-[#e2dcd0] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-950">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>{article.location}</span>
              <span className="text-slate-400">|</span>
              <Calendar className="w-4 h-4 text-red-600 ml-1" />
              <span>{article.date}</span>
            </div>

            <Button asChild size="sm" variant="outline" className="rounded-full border-[#d8d2c4] bg-[#faf8f3] text-slate-950 hover:bg-white text-xs">
              <Link href="/insides">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Insights
              </Link>
            </Button>
          </div>

          {/* Lead Paragraph */}
          <p className="font-inter text-lg sm:text-xl font-semibold text-slate-950 leading-relaxed mb-8">
            <span className="font-bold text-slate-950 underline decoration-red-600/40 underline-offset-4 mr-2">
              Aveda Technologies
            </span>
            {article.lead}
          </p>

          {/* Featured Article Image */}
          {article.image && (
            <div className="relative w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl mb-10 border border-[#e2dcd0]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-slate-950 leading-relaxed font-normal">
            {article.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Executive Quotes Section */}
          {article.quotes && article.quotes.length > 0 && (
            <div className="my-12 space-y-6">
              {article.quotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#eee8dc]/70 border-l-4 border-red-600 border-y border-r border-[#e2dcd0] shadow-sm"
                >
                  <p className="font-inter text-base sm:text-lg italic text-slate-950 leading-relaxed mb-4">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-soehne text-base font-bold text-slate-950">
                      {quote.speaker}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-950 font-medium">
                      {quote.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* About Aveda Technologies Section */}
          <div className="mt-12 pt-10 border-t border-[#e2dcd0]">
            <h2 className="font-soehne text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mb-4">
              About Aveda Technologies
            </h2>
            <p className="font-inter text-base text-slate-950 leading-relaxed mb-8">
              {article.aboutText}
            </p>

            <p className="text-xs sm:text-sm font-semibold text-slate-950 mb-4">
              For more information on how Aveda Technologies can accelerate your business scale, please visit{' '}
              <Link href="/contact" className="text-red-600 hover:underline font-bold">
                https://avedatechnologies.com/contact
              </Link>
            </p>

            {/* Social Channels & Media Contact */}
            <div className="pt-6 border-t border-[#e2dcd0] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-2">
                  Our Social Media Channels
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1c1b18] hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1c1b18] hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/avedatechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1c1b18] hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-1">
                  For media & press inquiries:
                </p>
                <a
                  href="mailto:info@avedatechnologies.com"
                  className="text-xs sm:text-sm text-red-600 hover:underline font-semibold flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: info@avedatechnologies.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
