import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Cpu, Layers, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/common/scroll-reveal';
import HeroBackground from '@/components/common/hero-background';

export const metadata: Metadata = {
  title: 'Products and Platforms | Aveda Technologies Proprietary SaaS Suite',
  description: 'Explore proprietary SaaS platforms and AI products built by Aveda Technologies—including Marketing Automation Engine, HRMS Workplace SaaS, AI Sales CRM, and Voice AI Calling Agents.',
};

const platforms = [
  {
    slug: 'marketing-automation',
    name: 'Aveda Marketing Automation',
    desc: 'A next-gen agentic marketing platform enabling automated WhatsApp broadcasts, lead nurturing workflows, and multi-channel campaign execution with CRM sync.',
    link: '/contact?service=Marketing-Automation-SaaS',
    status: 'Upcoming',
  },
  {
    slug: 'hrms-workplace',
    name: 'Aveda HRMS Workplace SaaS',
    desc: 'A platform providing end-to-end workforce visibility by automating attendance, payroll processing, leave approvals, and real-time employee productivity metrics.',
    link: '/contact?service=HRMS-SaaS',
    status: 'Upcoming',
  },
  {
    slug: 'ai-sales-crm',
    name: 'AI Sales CRM & Intelligence',
    desc: 'An AI-powered sales CRM designed to provide actionable lead qualification, automated pipeline management, and predictive revenue forecasting for scaling sales teams.',
    link: '/contact?service=AI-CRM-SaaS',
    status: 'Upcoming',
  },
  {
    slug: 'voice-calling-ai',
    name: 'Aveda Voice AI Calling Platform',
    desc: 'Autonomous voice AI calling agents engineered for 24/7 lead qualification, multi-turn phone dialogs, intelligent call routing, and real-time sentiment analytics.',
    link: '/contact?service=AI-Calling-Agents',
    status: 'Upcoming',
  },
  {
    slug: 'waas-engine',
    name: 'Aveda WaaS (Website as a Service)',
    desc: 'Continuous digital presence managed as a product, providing ultra-fast Next.js architecture, edge deployment, instant maintenance, and continuous performance tuning.',
    link: '/services/web-development',
    status: 'Live',
  },
  {
    slug: 'political-intelligence',
    name: 'Political Campaign AI Intelligence',
    desc: 'Spatial voter analytics, voter sentiment mapping, and automated campaign intelligence platform built for strategic political campaign dominance.',
    link: '/services/political-campaigning',
    status: 'Live',
  },
  {
    slug: 'media-making-branding-political',
    name: 'Media Making & Branding Political',
    desc: 'AI-driven media synthesis, political video creation, digital branding war-rooms, and multi-platform narrative control engineered for high-impact election campaigns.',
    link: '/contact?service=Media-Making-Branding-Political',
    status: 'Upcoming',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter antialiased min-h-screen">
      
      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Products</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Accelerating the digital future with intelligent platforms
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore our proprietary SaaS suites, autonomous AI agents, and enterprise-grade platforms designed to automate work and drive exponential growth.
          </p>
        </div>
      </section>

      {/* -------------------- SECTION 2: OUR APPROACH SECTION -------------------- */}
      <ScrollReveal variant="fade-up">
        <section className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                  Our Approach
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
                  Aveda Technologies builds customized proprietary SaaS platforms and enterprise AI solutions for clients across industries to enable them to transform at speed, bring agility, resilience, and efficiency to their operations. We strive to solve our customers&apos; real, on-ground challenges and help them scale to create a better digital world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* -------------------- SECTION 3: OUR PLATFORMS AND SOLUTIONS GRID -------------------- */}
      <ScrollReveal variant="fade-up">
        <section className="py-20 md:py-32 bg-[#f1f5f9] border-b border-slate-200 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-16">
              <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                Our Platforms and Solutions
              </h2>
              
              {/* Arrow Controls */}
              <div className="flex items-center space-x-3 shrink-0">
                <button className="w-11 h-11 rounded-full border border-slate-700 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button className="w-11 h-11 rounded-full border border-slate-700 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 7 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform.slug}
                  className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[280px] hover:-translate-y-1.5 relative overflow-hidden group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-soehne text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                        {platform.name}
                      </h3>
                      {platform.status === 'Upcoming' ? (
                        <span className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white rounded-full shadow-sm">
                          ⚡ UPCOMING
                        </span>
                      ) : (
                        <span className="shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white rounded-full shadow-sm">
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="font-inter text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                      {platform.desc}
                    </p>
                  </div>

                  <Link
                    href={platform.link}
                    className="font-inter text-xs font-bold uppercase tracking-widest text-slate-950 hover:text-red-600 transition-colors inline-flex items-center gap-1 mt-auto pt-4 border-t border-slate-100"
                  >
                    <span>{platform.status === 'Upcoming' ? 'GET EARLY ACCESS' : 'LEARN MORE'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Red Accent Line */}
            <div className="mt-16 h-1 bg-red-600 w-1/3 rounded-full" />
          </div>
        </section>
      </ScrollReveal>

      {/* -------------------- SECTION 4: DEEP MAROON HIGHLIGHT BANNER -------------------- */}
      <section className="relative bg-[#6b0526] text-white py-24 md:py-32 px-6 overflow-hidden">
        {/* Angled Stripe Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="maroon-angled-stripes" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#ffffff" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#maroon-angled-stripes)" />
          </svg>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          {/* Floating White Card */}
          <div className="max-w-md bg-white text-slate-900 p-8 sm:p-10 shadow-2xl border border-white/20 rounded-2xl">
            <h3 className="font-soehne text-2xl sm:text-3xl font-bold text-slate-950 mb-4 tracking-tight">
              Aveda Enterprise SaaS Suite
            </h3>
            <p className="font-inter text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              Aveda Technologies enhances enterprise capabilities with proprietary SaaS platforms—providing turnkey access to automated lead conversion, HR management, and predictive sales AI without relying on third-party SaaS vendors.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 h-11 rounded-xl">
              <Link href="/contact">LEARN MORE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* -------------------- SECTION 5: LEADING THE WAY -------------------- */}
      <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="flex items-center justify-between gap-6 mb-12">
            <h2 className="font-soehne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Leading the Way
            </h2>
            <div className="flex items-center space-x-3 shrink-0">
              <button className="w-11 h-11 rounded-full border border-slate-700 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-11 h-11 rounded-full border border-slate-700 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article / Feature Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative h-[300px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png"
                alt="Commercial Product Catalog Architecture"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 lg:pl-6">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
                BLOG / INSIGHT
              </span>
              <h3 className="font-soehne text-2xl sm:text-3xl font-bold text-slate-950 leading-tight tracking-tight">
                Enterprise SaaS Architecture & AI Agent Playbook 2026
              </h3>
              <p className="font-inter text-xs sm:text-sm text-slate-700 leading-relaxed max-w-lg">
                Discover how leading enterprises combine modular SaaS engines, agentic AI workflows, and edge computing to accelerate time-to-market.
              </p>
              <Link
                href="/insights/ai-innovation-engine"
                className="font-inter text-xs font-bold uppercase tracking-widest text-slate-950 hover:text-red-600 transition-colors inline-flex items-center gap-1 pt-2"
              >
                <span>READ MORE</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Red Accent Line */}
          <div className="mt-16 h-1 bg-red-600 w-1/3 mx-auto rounded-full" />
        </div>
      </section>

    </div>
  );
}
