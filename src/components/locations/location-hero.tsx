'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroBackground from '@/components/common/hero-background';

interface LocationHeroProps {
  country: string;
  cities: string[];
  headlineLine1?: string;
  headlineLine2?: string;
  description?: string;
}

export default function LocationHero({
  country,
  cities,
  headlineLine1,
  headlineLine2,
  description,
}: LocationHeroProps) {
  const defaultDescription = `Aveda Technologies builds proprietary SaaS products and delivers AI automation, custom software development, web and mobile applications, cloud solutions, UI/UX design, digital marketing, and enterprise technology solutions for businesses in ${cities.join(', ')} to help accelerate growth in ${country}.`;

  return (
    <section className="relative flex flex-col justify-between min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#050505] text-white pt-24 pb-0 selection:bg-red-600 selection:text-white">
      
      {/* -------------------- 3D ISOMETRIC CUBE WIREFRAME BACKGROUND PATTERN -------------------- */}
      <HeroBackground />

      {/* Center Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* -------------------- HERO MAIN CONTENT -------------------- */}
      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center my-auto py-12 sm:py-20 flex flex-col items-center justify-center">
        
        {/* Main Title */}
        <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] max-w-4xl mx-auto">
          {headlineLine1 || "Empower Your Business in"} {headlineLine2 || country} <br className="hidden sm:inline" />
          <span className="text-white">with AI-Driven Solutions</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="font-inter mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
          {description || defaultDescription}
        </p>

        {/* Start Your Project CTA Button */}
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="h-13 px-8 text-base bg-[#ff3b30] hover:bg-[#e03126] text-white font-medium rounded-xl shadow-lg shadow-red-600/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </div>

      </div>

      {/* -------------------- TRUSTED BY AMAZING BRANDS BAR -------------------- */}
      <div className="relative z-10 w-full mt-auto">
        <div className="text-center mb-6">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            TRUSTED BY AMAZING BRANDS
          </span>
        </div>

        {/* Brand Logos Dark Footer Bar */}
        <div className="w-full bg-[#0b0b0c] border-t border-white/10 py-6 px-6">
          <div className="container mx-auto max-w-5xl flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 opacity-90">
            
            {/* 1. META Logo */}
            <div className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M16.8 6c-1.8 0-3.3.9-4.3 2.3C11.5 6.9 10 6 8.2 6 5.3 6 3 8.3 3 11.2c0 3.4 2.8 6.4 7.2 10.4l1.8 1.6 1.8-1.6c4.4-4 7.2-7 7.2-10.4C21 8.3 18.7 6 15.8 6z" />
              </svg>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">Meta</span>
            </div>

            {/* 2. GOOGLE Logo */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-white font-sans">Google</span>
            </div>

            {/* 3. MICROSOFT Logo */}
            <div className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <div className="bg-[#F25022] w-2.5 h-2.5" />
                <div className="bg-[#7FBA00] w-2.5 h-2.5" />
                <div className="bg-[#00A4EF] w-2.5 h-2.5" />
                <div className="bg-[#FFB900] w-2.5 h-2.5" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white font-sans">Microsoft</span>
            </div>

            {/* 4. CONTABO Logo */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-7h-4V7h4v1z" />
              </svg>
              <span className="font-extrabold text-xl tracking-wider text-white font-sans uppercase">CONTABO</span>
            </div>

            {/* 5. VERCEL Logo */}
            <div className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 116 100">
                <path d="M57.5 0L115 100H0L57.5 0Z" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-white font-sans">Vercel</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
