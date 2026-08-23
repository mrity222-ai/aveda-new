import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ScrollReveal from '@/components/common/scroll-reveal';
import {
  Target,
  TrendingUp,
  Users,
  BrainCircuit,
  Repeat,
  Megaphone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AI-Driven Digital & Performance Marketing | Aveda Technologies',
  description: 'Grow faster with our AI-driven digital marketing services, including performance ads, lead generation, and political campaigning.',
};

export default function DigitalMarketingPage() {
  const includedServices = [
    { icon: Users, text: 'Social Media Marketing (Meta, Instagram)'},
    { icon: Target, text: 'Performance Ads (Meta & Google)'},
    { icon: BrainCircuit, text: 'AI Audience Targeting & Segmentation'},
    { icon: TrendingUp, text: 'Lead Generation Campaigns'},
    { icon: Repeat, text: 'Retargeting & Funnel Optimization'},
    { icon: Megaphone, text: 'Political Digital Campaigning'},
  ];

  const marketingProjects = portfolioProjects.filter(p => ['b2b-seo-strategy', 'political-dashboard', 'ada-chikankari'].includes(p.slug)).slice(0, 3);

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="marketing-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#marketing-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Digital Marketing &amp; Growth</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Grow faster with AI-driven digital marketing
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            We accelerate business revenue through data-driven SEO, performance marketing campaigns, and automated lead generation workflows focused on measurable ROI.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asChild size="lg" className="h-13 px-8 text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all">
              <Link href="/contact?service=Digital+Marketing">Get Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 border-b border-slate-200 bg-[#f8fafc]">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <h3 className="font-soehne text-2xl font-bold text-slate-950">100K+</h3>
            <p className="font-inter text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Targeted Reach</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <h3 className="font-soehne text-2xl font-bold text-red-600">200%</h3>
            <p className="font-inter text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Average Client ROI</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <h3 className="font-soehne text-2xl font-bold text-slate-950">50+</h3>
            <p className="font-inter text-xs text-slate-600 uppercase tracking-wider font-semibold mt-1">Active Global Campaigns</p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              High-ROI Marketing Suite
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              Full-spectrum marketing solutions tailored for high customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service) => (
              <div key={service.text} className="group rounded-2xl border border-slate-200 bg-white p-6 flex items-center gap-4 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="font-soehne text-xs sm:text-sm font-bold text-slate-900 leading-snug">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Card */}
      <CtaSection
        badgeText="Let's Collaborate"
        title="Ready to Accelerate Growth With AI Marketing?"
        description="Partner with our performance marketing and AI strategy team to scale lead generation and customer acquisition."
        primaryCtaText="Start Project"
        primaryCtaLink="/contact?service=Digital+Marketing"
        secondaryCtaText="Book Discovery Call"
        secondaryCtaLink="https://wa.me/919532758070"
      />

    </div>
  );
}
