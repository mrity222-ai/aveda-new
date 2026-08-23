'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
import ScrollReveal from '@/components/common/scroll-reveal';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';

export default function IndustriesClient() {
  const bentoIndustries = [
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
    {
      id: 'ngo',
      title: 'NGO & Community',
      icon: Globe,
      iconColor: 'text-green-600',
      bgImage: '/ins/heartfelt_community_center_or_modern_ngo_workspace_with_wa.png',
      href: '/contact?service=NGO-Solutions',
    },
    {
      id: 'political',
      title: 'Political Organizations',
      icon: Vote,
      iconColor: 'text-purple-600',
      bgImage: '/ins/modern_political_campaign_headquarters_with_minimalis.png',
      href: '/services/political-campaigning',
    },
  ];

  return (
    <div className="bg-[#f3f4f6] text-slate-900 font-inter antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Industries</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Driving digital transformation across global industries
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            As industries converge and new opportunities emerge, we re-imagine strategy, AI automation platforms, and software solutions for enterprise scale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow z-10 py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 max-w-3xl">
            <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700 bg-purple-50">
              Domain Expertise
            </Badge>
            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.2]">
              Industries We Serve
            </h2>
            <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed">
              Empowering global enterprises through precision engineering and deep-tech innovation across critical sectors.
            </p>
          </div>

          {/* 14 Industries Grid (Exactly 4 cards per row) */}
          <ScrollReveal variant="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bentoIndustries.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group relative h-[260px] overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-purple-500/40 hover:-translate-y-1.5"
                >
                  {/* Background Image with Zoom */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-85 transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.bgImage}')` }}
                  />

                  {/* Gradient Card Overlay for High Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Bottom Overlay Content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 z-10 flex flex-col justify-end h-full">
                    <div className="bg-white/90 backdrop-blur-xl border border-white/80 p-3.5 rounded-2xl flex items-center justify-between transition-all group-hover:border-purple-300 shadow-lg">
                      <div className="flex items-center gap-2">
                        <item.icon className={cn('w-5 h-5 shrink-0', item.iconColor)} />
                        <h3 className="font-soehne text-base sm:text-lg font-bold tracking-tight text-slate-900 truncate">
                          {item.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Bottom Enterprise CTA Card */}
          <ScrollReveal variant="fade-up" delay={150}>
            <CtaSection
              badgeText="Custom Enterprise Solutions"
              title="Can't find your industry? Let's build your solution."
              description="We build custom, high-performance digital solutions tailored to the unique challenges of any business sector."
              primaryCtaText="Start Project"
              primaryCtaLink="/contact"
              secondaryCtaText="Book Discovery Call"
              secondaryCtaLink="https://wa.me/919532758070"
            />
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
