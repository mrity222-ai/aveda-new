'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  HeartPulse,
  GraduationCap,
  Building2,
  Rocket,
  Sun,
  Home,
  Factory,
  Plane,
  Utensils,
  Hotel,
  Sparkles,
  Dumbbell,
  Globe,
  Vote,
  ArrowRight,
} from 'lucide-react';

interface LocationIndustriesSectionProps {
  countryName?: string;
}

export function LocationIndustriesSection({ countryName = 'Global' }: LocationIndustriesSectionProps) {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: HeartPulse,
      iconColor: 'text-purple-600',
      bgImage: '/ins/high_end_professional_photography_of_a_modern_medica.png',
      href: '/contact?service=Healthcare-Solutions',
    },
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
      iconColor: 'text-red-600',
      bgImage: '/ins/modern_university_architecture_or_a_high_tech_classroom_wit.png',
      href: '/contact?service=Education-Solutions',
    },
    {
      id: 'business',
      title: 'Business & Enterprise',
      icon: Building2,
      iconColor: 'text-amber-600',
      bgImage: '/ins/luxury_corporate_office_skyscraper_interior_with_glass_w.png',
      href: '/contact?service=Enterprise-Solutions',
    },
    {
      id: 'saas',
      title: 'Startups & SaaS',
      icon: Rocket,
      iconColor: 'text-indigo-600',
      bgImage: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
      href: '/contact?service=SaaS-Solutions',
    },
    {
      id: 'solar',
      title: 'Solar Energy',
      icon: Sun,
      iconColor: 'text-yellow-600',
      bgImage: '/ins/a_field_of_sleek_solar_panels_under_a_clear_sky_with_a.png',
      href: '/contact?service=Solar-Solutions',
    },
    {
      id: 'realestate',
      title: 'Real Estate',
      icon: Home,
      iconColor: 'text-emerald-600',
      bgImage: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png',
      href: '/contact?service=RealEstate-Solutions',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      iconColor: 'text-cyan-600',
      bgImage: '/ins/sleek_modern_manufacturing_facility_with_advanced_robotics_clean_white_floors.png',
      href: '/contact?service=Manufacturing-Solutions',
    },
    {
      id: 'travel',
      title: 'Travel & Aviation',
      icon: Plane,
      iconColor: 'text-sky-600',
      bgImage: '/ins/luxury_travel_scene_a_wing_of_a_private_jet_over_clouds_or_a.png',
      href: '/contact?service=Travel-Solutions',
    },
    {
      id: 'restaurant',
      title: 'Restaurant & Dining',
      icon: Utensils,
      iconColor: 'text-orange-600',
      bgImage: '/ins/high_end_minimalist_restaurant_interior_with_moody_li.png',
      href: '/contact?service=Restaurant-Solutions',
    },
    {
      id: 'hotel',
      title: 'Hotel & Hospitality',
      icon: Hotel,
      iconColor: 'text-rose-600',
      bgImage: '/ins/luxury_hotel_lobby_with_grand_architecture_elegant_lighting_.png',
      href: '/contact?service=Hospitality-Solutions',
    },
    {
      id: 'beauty',
      title: 'Beauty & Wellness',
      icon: Sparkles,
      iconColor: 'text-pink-600',
      bgImage: '/ins/modern_luxury_beauty_salon_interior_with_soft_lightin.png',
      href: '/contact?service=Wellness-Solutions',
    },
    {
      id: 'fitness',
      title: 'Fitness & Gyms',
      icon: Dumbbell,
      iconColor: 'text-teal-600',
      bgImage: '/ins/minimalist_modern_gym_interior_with_sleek_equipment_so.png',
      href: '/contact?service=Fitness-Solutions',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#f8fafc]">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <Badge variant="outline" className="mb-4 border-red-200 text-red-600 bg-red-50 text-xs font-bold uppercase tracking-wider">
            INDUSTRIES WE SERVE
          </Badge>
          <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-[1.2] mb-3">
            Specialized Solutions for {countryName} Enterprises
          </h2>
          <p className="font-inter text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Empowering global enterprises through precision engineering and deep-tech innovation across critical sectors in {countryName}.
          </p>
        </div>

        {/* 4 Cards Per Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative h-[250px] overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1.5"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-105"
                style={{ backgroundImage: `url('${item.bgImage}')` }}
              />

              {/* Gradient Card Overlay for High Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Bottom Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-4 z-10 flex flex-col justify-end h-full">
                <div className="bg-white/95 backdrop-blur-xl border border-white/80 p-3 rounded-2xl flex items-center justify-between transition-all group-hover:border-red-300 shadow-lg">
                  <div className="flex items-center gap-2">
                    <item.icon className={cn('w-4 h-4 shrink-0', item.iconColor)} />
                    <h3 className="font-soehne text-sm font-bold tracking-tight text-slate-950 truncate">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
