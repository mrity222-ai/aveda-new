'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const newsCards = [
  {
    slug: 'ai-innovation-engine',
    category: 'Press Release',
    date: 'August 06, 2026',
    title: 'Aveda Technologies Launches Global AI Innovation Engine for Enterprise Scale',
    image: '/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png',
  },
  {
    slug: 'saas-innovation-award',
    category: 'News',
    date: 'August 04, 2026',
    title: 'Aveda Technologies Wins Top AI Automation & SaaS Innovation Excellence Award',
    image: '/ins/luxury_corporate_office_skyscraper_interior_with_glass_w.png',
  },
  {
    slug: 'digital-transformation-report',
    category: 'Insight',
    date: 'July 29, 2026',
    title: 'Aveda Technologies Featured in Global Enterprise Digital Transformation Report 2026',
    image: '/ins/high_end_real_estate_architectural_photography_of_a_mini.png',
  },
  {
    slug: 'whatsapp-automation-case-study',
    category: 'Case Study',
    date: 'July 15, 2026',
    title: 'How Multi-Channel WhatsApp Automation Reduced Support Workload by 85%',
    image: '/ins/modern_university_architecture_or_a_high_tech_classroom_wit.png',
  },
];

export default function InsightsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % newsCards.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + newsCards.length) % newsCards.length);
  };

  // Get current 3 visible cards (wrapping around)
  const visibleCards = [
    newsCards[startIndex],
    newsCards[(startIndex + 1) % newsCards.length],
    newsCards[(startIndex + 2) % newsCards.length],
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-6 md:py-10 text-slate-950 border-t border-slate-200">
      {/* Geometric Isometric Diamond Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="insights-diamond-grid" width="140" height="140" patternUnits="userSpaceOnUse">
              <path d="M 70 0 L 140 70 L 70 140 L 0 70 Z" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              <path d="M 35 35 L 105 105 M 105 35 L 35 105" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#insights-diamond-grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header Layout: Left Title & Right Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-5 sm:mb-6">
          <div className="max-w-2xl">
            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-[1.2] mb-3">
              What&apos;s New
            </h2>
            <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed">
              Stay connected with our latest updates, press releases, and upcoming events.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#1c1b18] hover:bg-red-600 text-white flex items-center justify-center transition-colors duration-300 shadow-md group"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#1c1b18] hover:bg-red-600 text-white flex items-center justify-center transition-colors duration-300 shadow-md group"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* 3 Column Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleCards.map((card, idx) => (
            <Link
              key={`${card.slug}-${idx}`}
              href={`/insights/${card.slug}`}
              className="group relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 flex flex-col justify-between p-6 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay for optimal legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/20" />
              </div>

              {/* Top Tag Badge */}
              <div className="relative z-10">
                <span className="inline-block bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {card.category} <span className="mx-1 text-white/60">|</span> {card.date}
                </span>
              </div>

              {/* Bottom Content & Link */}
              <div className="relative z-10 pt-16">
                <h3 className="font-soehne text-xl sm:text-2xl font-light text-white leading-snug tracking-[-0.02em] mb-4 group-hover:text-red-400 transition-colors">
                  {card.title}
                </h3>
                <div className="inline-flex items-center text-xs font-semibold text-white/90 group-hover:text-red-400 transition-colors gap-1">
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}