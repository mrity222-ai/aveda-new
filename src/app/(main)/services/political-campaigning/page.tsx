import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ScrollReveal from '@/components/common/scroll-reveal';
import {
  Shield,
  Target,
  Users,
  Bot,
  PieChart,
  Lightbulb,
  Megaphone,
  BrainCircuit,
  Cpu,
  Signal,
  Award,
  ShieldCheck,
  Zap,
  Globe,
  Mic,
  PenSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Political Campaigning with AI | Aveda Technologies',
  description: 'Win elections with data-driven precision. Aveda Technologies uses AI for voter targeting, constituency analysis, and sentiment analysis to create winning campaigns.',
};

export default function PoliticalCampaigningPage() {
  const howAiWins = [
    {
      icon: Target,
      title: 'AI Voter Targeting',
      description: 'Identify and reach key voter segments with unparalleled precision using predictive analytics.',
    },
    {
      icon: PieChart,
      title: 'Constituency Analysis',
      description: 'Gain deep insights into demographics, past results, and local issues to tailor your strategy.',
    },
    {
      icon: Bot,
      title: 'Sentiment Analysis',
      description: 'Track public opinion and media narratives in real-time to control the conversation.',
    },
    {
      icon: Users,
      title: 'Booth-Level Strategy',
      description: 'Deploy hyper-local digital campaigns that influence voters at the booth level.',
    },
  ];

  const whyChooseUs = [
    {
      icon: BrainCircuit,
      title: 'Political Acumen + AI Tech',
      description: 'We merge deep political strategy with cutting-edge AI for a decisive electoral advantage.'
    },
    {
      icon: Cpu,
      title: 'Data-Driven AI Models',
      description: 'Advanced analytics drive every decision, from voter targeting to real-time sentiment tracking.'
    },
    {
      icon: ShieldCheck,
      title: 'Ethical & Compliant',
      description: 'Our strategies strictly adhere to Election Commission guidelines and data privacy regulations.'
    },
    {
      icon: Signal,
      title: 'Digital War Room',
      description: 'Our digital war room provides live insights to adapt and respond to the campaign landscape instantly.'
    },
    {
      icon: Award,
      title: 'Proven Electoral Track Record',
      description: 'We have a history of delivering measurable results in high-stakes political campaigns.'
    }
  ];

  const prServices = [
    { icon: Megaphone, title: 'Strategic Messaging', description: 'Crafting high-impact narratives that resonate with the electorate.' },
    { icon: Shield, title: 'Crisis Neutralization', description: 'Rapid response protocols to protect your reputation in real-time.' },
    { icon: Globe, title: 'Digital Dominance', description: 'Data-driven social media strategies to mobilize millions.' },
    { icon: Mic, title: 'Media Diplomacy', description: 'Exclusive positioning with top-tier journalists and media houses.' },
    { icon: PenSquare, title: 'Legacy Branding', description: 'Long-term positioning to establish you as a visionary leader.' },
  ];

  return (
    <div className="bg-[#f5f2eb] text-slate-900 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="political-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#d3ccbe" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#political-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>AI Political Strategy</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Political campaigning with artificial intelligence
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Winning elections in the digital age requires data-driven precision, booth-level spatial intelligence, voter sentiment mapping, and AI war-room narrative control.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asChild size="lg" className="h-13 px-8 text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all">
              <Link href="/contact?service=Political+Campaigning">Launch Campaign <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How AI Wins Elections */}
      <section className="py-8 md:py-11 border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              How AI Wins Elections
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              Transforming voter data into targeted electoral momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howAiWins.map((item) => (
              <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950 mb-2">{item.title}</h3>
                <p className="font-inter text-[10px] text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Political PR & Legacy Section */}
      <section className="py-8 md:py-11 border-b border-slate-200 bg-[#f8fafc]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Political PR & Executive Reputation
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              Strategic image management and legacy building for leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {prServices.map((service) => (
              <div key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-soehne text-lg font-bold text-slate-950 mb-1">{service.title}</h3>
                <p className="font-inter text-[10px] text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-soehne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              Why Aveda For Your Political Campaign?
            </h2>
            <p className="font-inter text-slate-700 text-base mt-2">
              Deep political acumen combined with advanced data technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature) => (
              <div key={feature.title} className="group rounded-2xl border border-slate-200 bg-white p-6 flex items-start gap-4 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-soehne text-base font-bold text-slate-950 mb-1">{feature.title}</h3>
                  <p className="font-inter text-xs text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Card */}
      <CtaSection
        badgeText="Let's Collaborate"
        title="Ready to Launch a Winning Political Campaign?"
        description="Leverage voter intelligence, AI narrative modeling, and ground digital strategies for election victory."
        primaryCtaText="Start Project"
        primaryCtaLink="/contact?service=Political+Campaigning"
        secondaryCtaText="Book Discovery Call"
        secondaryCtaLink="https://wa.me/919532758070"
      />

    </div>
  );
}
