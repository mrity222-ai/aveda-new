'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  badgeText?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function CtaSection({
  badgeText = "Let's Collaborate",
  title = "Have an idea? Let's build your next digital product.",
  description = "Partner with our team of expert designers and engineers to transform your vision into reality. Scalable web, mobile, and AI solutions built for measurable growth.",
  primaryCtaText = "Start Project",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Book Discovery Call",
  secondaryCtaLink = "https://wa.me/919532758070",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20 text-slate-950 border-t border-slate-200/80 selection:bg-red-600 selection:text-white">
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="rounded-[32px] sm:rounded-[44px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-[#fff2f2] p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden shadow-xl">
          
          {/* Ambient Corner Glow Gradients */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-red-400/10 rounded-full filter blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-500/15 rounded-full filter blur-[100px] pointer-events-none" />

          {/* Top Pill Chip */}
          <Badge variant="outline" className="mb-6 border-red-200/90 bg-red-50/80 text-red-600 px-4 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-2xs">
            {badgeText}
          </Badge>

          {/* Headline */}
          <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-5 max-w-4xl mx-auto">
            {title}
          </h2>

          {/* Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base bg-[#e52e2e] hover:bg-red-700 text-white rounded-2xl shadow-xl shadow-red-600/30 transition-all font-medium"
            >
              <Link href={primaryCtaLink}>
                {primaryCtaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-slate-200 bg-white text-slate-900 hover:bg-slate-50 rounded-2xl font-medium shadow-xs transition-all"
            >
              {secondaryCtaLink.startsWith('http') ? (
                <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-slate-700" />
                  <span>{secondaryCtaText}</span>
                </a>
              ) : (
                <Link href={secondaryCtaLink} className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-slate-700" />
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}