'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  HeartPulse,
  GraduationCap,
  Sun,
  Building2,
  Rocket,
  Plane,
  Factory,
  Home,
  MoveRight,
} from 'lucide-react';

const marqueeCards = [
  {
    title: 'Healthcare',
    icon: HeartPulse,
    desc: 'Secure patient portals, telemedicine platforms, and advanced diagnostic AI integrations.',
    bgImage: '/ins/high_end_professional_photography_of_a_modern_medica.png',
    iconColor: 'text-red-600',
    href: '/contact?service=Healthcare-Solutions',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    desc: 'LMS platforms, student analytics, and immersive virtual learning environments.',
    bgImage: '/ins/modern_university_architecture_or_a_high_tech_classroom_wit.png',
    iconColor: 'text-red-500',
    href: '/contact?service=Education-Solutions',
  },
  {
    title: 'Energy & Solar',
    icon: Sun,
    desc: 'Smart grid monitoring, sustainability reporting dashboards, and IoT integrations.',
    bgImage: '/ins/a_field_of_sleek_solar_panels_under_a_clear_sky_with_a.png',
    iconColor: 'text-amber-500',
    href: '/contact?service=Solar-Solutions',
  },
  {
    title: 'Finance & Banking',
    icon: Building2,
    desc: 'High-frequency trading platforms, secure payment gateways, and automated risk analysis.',
    bgImage: '/ins/luxury_corporate_office_skyscraper_interior_with_glass_w.png',
    iconColor: 'text-indigo-500',
    href: '/contact?service=Enterprise-Solutions',
  },
  {
    title: 'Startups & SaaS',
    icon: Rocket,
    desc: 'MVP engineering, scalable multi-tenant SaaS platforms, and automated CI/CD workflows.',
    bgImage: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
    iconColor: 'text-rose-500',
    href: '/contact?service=SaaS-Solutions',
  },
  {
    title: 'Travel & Aviation',
    icon: Plane,
    desc: 'Dynamic booking engines, luxury tour package managers, and AI itinerary generators.',
    bgImage: '/ins/luxury_travel_scene_a_wing_of_a_private_jet_over_clouds_or_a.png',
    iconColor: 'text-sky-500',
    href: '/contact?service=Travel-Solutions',
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    desc: 'Smart factory automation, IoT tracking, inventory intelligence, and custom ERPs.',
    bgImage: '/ins/sleek_modern_manufacturing_facility_with_advanced_robotics_clean_white_floors.png',
    iconColor: 'text-emerald-500',
    href: '/contact?service=Manufacturing-Solutions',
  },
  {
    title: 'Real Estate',
    icon: Home,
    desc: 'Property catalogs, 3D virtual tours, instant inquiry captures, and CRM integrations.',
    bgImage: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png',
    iconColor: 'text-teal-500',
    href: '/contact?service=RealEstate-Solutions',
  },
];

export default function IndustriesMarquee() {
  return (
    <section className="py-6 md:py-10 lg:py-11 bg-[#f3f4f6] border-t border-neutral-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-5 sm:mb-6">
        <Badge variant="outline" className="mb-4 border-red-200 text-red-700 bg-red-50 uppercase tracking-widest text-xs">
          Domain Expertise
        </Badge>
        <h2 className="font-soehne text-[20px] sm:text-[32px] lg:text-[38px] font-light tracking-[-0.05em] leading-[1.05] text-slate-950 mb-6">
          Solutions Built for{' '}
          <span className="bg-gradient-to-r from-red-600 via-red-600 to-red-600 bg-clip-text text-transparent font-light">
            Every Industry
          </span>
        </h2>
        <p className="font-inter text-slate-950 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          We build websites, AI automation, CRM systems, and digital platforms tailored for every business sector.
        </p>
      </div>

      {/* Marquee Container with Fade Edges */}
      <div className="relative w-full overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#f3f4f6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#f3f4f6] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-4 sm:gap-6 px-4 sm:px-6 group-hover:[animation-play-state:paused]">
          {[...marqueeCards, ...marqueeCards].map((card, idx) => (
            <Link
              key={`${card.title}-${idx}`}
              href={card.href}
              className="relative w-[260px] sm:w-[360px] md:w-[420px] h-[240px] sm:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden group/card cursor-pointer transition-transform duration-500 hover:-translate-y-2 group-hover:scale-[0.98] hover:!scale-100 border border-neutral-200/80 shrink-0 shadow-sm"
            >
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                style={{ backgroundImage: `url('${card.bgImage}')` }}
              />

              {/* Dark Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end h-full z-10">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                  <card.icon className={cn('w-5 h-5 sm:w-6 sm:h-6', card.iconColor)} />
                  <h3 className="font-soehne text-xl sm:text-2xl font-light text-white tracking-[-0.03em]">
                    {card.title}
                  </h3>
                </div>

                <p className="font-inter text-xs sm:text-sm text-neutral-200 mb-3 sm:mb-4 opacity-90 sm:opacity-0 transform translate-y-0 sm:translate-y-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0 line-clamp-2">
                  {card.desc}
                </p>

                <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-red-400 group-hover/card:text-white transition-colors opacity-100 sm:opacity-0 transform translate-y-0 sm:translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 delay-75">
                  <span>Explore Solutions</span>
                  <MoveRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
