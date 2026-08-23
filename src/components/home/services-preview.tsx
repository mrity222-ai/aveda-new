'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const capabilitiesServices = [
  {
    title: 'Web Development',
    slug: 'web-development',
    href: '/services/web-development',
    subtitle: 'High-Performance Web Applications & Next.js Architecture',
    desc: 'Custom enterprise web platforms, e-commerce systems, and ultra-fast web development built for high conversion.',
    image: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
  },
  {
    title: 'App Development',
    slug: 'app-development',
    href: '/services/app-development',
    subtitle: 'Cross-Platform iOS & Android Mobile Products',
    desc: 'Native and cross-platform mobile apps engineered with Flutter, React Native, and robust cloud API backends.',
    image: '/ins/sleek_modern_manufacturing_facility_with_advanced_robotics_clean_white_floors.png',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    href: '/services/ui-ux-design',
    subtitle: 'User-Centric Enterprise Design Systems',
    desc: 'Modern interface design, interactive prototyping, and seamless user experiences that delight clients.',
    image: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png',
  },
  {
    title: 'Digital & Performance Marketing',
    slug: 'digital-marketing',
    href: '/services/digital-marketing',
    subtitle: 'Data-Driven Campaign Management & ROI',
    desc: 'Multi-channel acquisition, targeted ad campaigns, lead nurturing engines, and high-ROI digital strategy.',
    image: '/ins/heartfelt_community_center_or_modern_ngo_workspace_with_wa.png',
  },
  {
    title: 'SEO & Optimization',
    slug: 'seo-optimization',
    href: '/services/seo-optimization',
    subtitle: 'Technical SEO, Content Scaling & Search Dominance',
    desc: 'Rank #1 on Google with technical SEO audits, keyword strategy, speed optimization, and domain authority.',
    image: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
  },
  {
    title: 'AI & Automation',
    slug: 'ai-automation',
    href: '/services/ai-automation',
    subtitle: 'Agentic AI Workflows, Voice AI & WhatsApp Engines',
    desc: 'Transform business operations with autonomous AI agents, voice calling bots, WhatsApp CRM automation, and LLM integrations.',
    image: '/ins/sleek_modern_manufacturing_facility_with_advanced_robotics_clean_white_floors.png',
  },
  {
    title: 'Political Campaigning with AI',
    slug: 'political-campaigning',
    href: '/services/political-campaigning',
    subtitle: 'Voter Analytics, Spatial Intelligence & Targeted Outreach',
    desc: 'AI-powered voter sentiment mapping, automated voter outreach, and strategic data intelligence for high-impact campaigns.',
    image: '/ins/modern_political_campaign_headquarters_with_minimalis.png',
  },
];

export default function ServicesPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeService = capabilitiesServices[selectedIndex];

  return (
    <section className="relative bg-[#6b0526] text-white py-6 md:py-8 overflow-hidden border-b border-red-950">
      
      {/* Angled Stripe Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-90 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="capabilities-pattern" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#ffffff" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capabilities-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Top Header Grid (Matching Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-5">
          <div className="lg:col-span-6">
            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
              Capabilities
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-inter text-base sm:text-lg lg:text-xl text-red-100/90 leading-relaxed max-w-xl font-normal">
              Explore our full suite of enterprise digital transformation solutions, web engineering, and AI automation engines.
            </p>
          </div>
        </div>

        {/* Interactive Main Grid (Left Menu Items + Right Graphic Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 7 Interactive Service Titles (Exact Screenshot List Style) */}
          <div className="lg:col-span-6 space-y-1">
            {capabilitiesServices.map((service, idx) => {
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => setSelectedIndex(idx)}
                  className={cn(
                    'group flex items-center justify-between px-5 py-3.5 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) cursor-pointer select-none rounded-xl transform',
                    isSelected
                      ? 'bg-[#880b33] text-white font-bold border-l-4 border-white shadow-xl scale-[1.02] translate-x-1'
                      : 'text-white/80 hover:text-white hover:bg-white/10 hover:translate-x-1'
                  )}
                >
                  <span className="font-soehne text-lg sm:text-xl lg:text-2xl tracking-tight leading-snug transition-transform duration-300 group-hover:translate-x-0.5">
                    {service.title}
                  </span>
                  
                  <Link
                    href={service.href}
                    className={cn(
                      'transition-all duration-300 p-1 hover:text-red-300',
                      isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
                    )}
                    title={`Go to ${service.title}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              );
            })}

            {/* Bottom View All Services Action Button */}
            <div className="pt-6">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 h-12 rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 active:scale-95">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Graphic Feature Box with Smooth Scaling & Text Loading */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] lg:h-[480px] w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl group transition-all duration-700 hover:border-red-400/50">
            
            {/* Background Graphic Image with Zoom & Scale */}
            <Image
              key={activeService.slug}
              src={activeService.image}
              alt={activeService.title}
              fill
              priority
              className="object-cover object-center transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 animate-in fade-in zoom-in-95"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Content Overlay Card with Text Slide & Scale Loading Effect */}
            <div 
              key={`content-${activeService.slug}`} 
              className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <span className="text-red-400 font-bold uppercase tracking-widest text-xs inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                FEATURED CAPABILITY
              </span>
              
              <h3 className="font-soehne text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                {activeService.title}
              </h3>
              
              <p className="font-inter text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-lg">
                {activeService.desc}
              </p>

              <div className="pt-2">
                <Link
                  href={activeService.href}
                  className="font-inter text-xs font-bold uppercase tracking-widest text-white hover:text-red-400 transition-all duration-300 inline-flex items-center gap-1.5 hover:gap-2.5"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}