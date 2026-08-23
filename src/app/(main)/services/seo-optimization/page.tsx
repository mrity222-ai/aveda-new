import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ScrollReveal from '@/components/common/scroll-reveal';
import {
  MapPin,
  TrendingUp,
  PhoneCall,
  Star,
  Building,
  Search,
  ImageIcon,
  Bookmark,
  Award,
  ScanSearch,
  Crosshair,
  Rocket,
  Store,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'SEO & Search Optimization Services | Aveda Technologies',
  description: 'Rank higher on Google Maps & local search using AI-powered Local SEO and GEO tagging strategies.',
};

export default function SeoOptimizationPage() {
  const whyLocalSeo = [
    {
      icon: Search,
      title: 'Appear in "Near Me" Searches',
      description: 'Capture high-intent customers actively looking for your services in their immediate area.',
    },
    {
      icon: MapPin,
      title: 'Rank Higher on Google Maps',
      description: 'Become a top suggestion in the Google Map Pack, driving directions and foot traffic to you.',
    },
    {
      icon: PhoneCall,
      title: 'Get More Local Calls & Visits',
      description: 'Convert local searchers into paying customers with prominent contact info and location.',
    },
    {
      icon: Star,
      title: 'Build Local Search Authority',
      description: 'Establish your brand as a credible and reliable local market leader in your region.',
    },
  ];

  const services = [
    { icon: Building, title: 'Google Business Profile Optimization' },
    { icon: Search, title: 'Local Keyword Research' },
    { icon: ImageIcon, title: 'GEO Tagged Content & Images' },
    { icon: TrendingUp, title: 'Map Pack Ranking Optimization' },
    { icon: Bookmark, title: 'Local Citations & Directory Listings' },
    { icon: Award, title: 'Review & Reputation Management' },
  ];

  const roadmapSteps = [
    { phase: "Month 1: Foundation", focus: "Audit & Strategy", deliverable: "Detailed SEO Health Report & Keyword Matrix.", icon: ScanSearch },
    { phase: "Month 2: Optimization", focus: "Google Business Profile", deliverable: "Profile Verification & 360° GMB Optimization.", icon: Store },
    { phase: "Month 3: Geo-Targeting", focus: "Content & Images", deliverable: "GEO-Tagged Image Uploads & City-Specific Pages.", icon: MapPin },
    { phase: "Month 4: Authority", focus: "Citations & Reviews", deliverable: "50+ Local Directory Listings & Reputation Setup.", icon: Bookmark },
    { phase: "Month 5 & Beyond", focus: "Scaling & Growth", deliverable: "Top 3 Map Pack Ranking & Monthly ROI Analytics.", icon: TrendingUp },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="seo-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seo-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Search Engine Optimization</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Get found first in your target markets
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Rank higher on Google Maps and organic search results using AI-powered Local SEO, technical optimization, and GEO-tagging strategies.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asChild size="lg" className="h-13 px-8 text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all">
              <Link href="/contact?service=SEO+Optimization">Free Local SEO Audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Why Local Search Engine Optimization Matters
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              High-intent organic visibility designed for local leadership and commercial conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLocalSeo.map((item) => (
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

      {/* Services Grid */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Our Local SEO Services
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              End-to-end technical, content, and Google Maps optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-6 flex items-center gap-4 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="font-soehne text-xs sm:text-sm font-bold text-slate-900 leading-snug">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Month Roadmap */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Our 5-Month Local SEO Roadmap
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              A structured, transparent path to local search domination.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {roadmapSteps.map((step, idx) => (
              <div key={step.phase} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-red-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white font-soehne font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950">{step.phase} — <span className="text-red-600">{step.focus}</span></h3>
                    <p className="font-inter text-[10px] text-slate-600 mt-1">{step.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Card */}
      <CtaSection
        badgeText="Let's Collaborate"
        title="Ready to Dominate Local Search & Organic Rankings?"
        description="Partner with our technical SEO and AI search specialists to capture top rankings and organic customer growth."
        primaryCtaText="Start Project"
        primaryCtaLink="/contact?service=SEO+Optimization"
        secondaryCtaText="Book Discovery Call"
        secondaryCtaLink="https://wa.me/919532758070"
      />

    </div>
  );
}
