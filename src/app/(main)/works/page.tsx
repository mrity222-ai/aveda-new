
import type { Metadata } from 'next';
import PortfolioGallery from '@/components/works/portfolio-gallery';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio to see the impact we have made for our clients across various industries with our web development, AI, and marketing solutions.',
  openGraph: {
    title: 'Portfolio',
    description: 'Explore our portfolio to see the impact we have made for our clients across various industries with our web development, AI, and marketing solutions.',
  },
  twitter: {
    title: 'Portfolio',
    description: 'Explore our portfolio to see the impact we have made for our clients across various industries with our web development, AI, and marketing solutions.',
  }
};

import ScrollReveal from '@/components/common/scroll-reveal';
import HeroBackground from '@/components/common/hero-background';

export default function WorksPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Portfolio</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Showcasing client impact &amp; live enterprise deployments
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We take pride in the software and AI solutions we build. Explore our portfolio of live websites, SaaS platforms, and enterprise projects across diverse sectors.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <ScrollReveal variant="fade-up">
        <section className="container py-12 md:py-24">
          <PortfolioGallery />
        </section>
      </ScrollReveal>
    </div>
  );
}
