'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import HeroBackground from '@/components/common/hero-background';
import { ShieldCheck, Mail, ChevronRight, FileText } from 'lucide-react';

export interface LegalSection {
  title: string;
  content?: string[];
  list?: string[];
}

interface LegalPageLayoutProps {
  category: string;
  title: string;
  effectiveDate?: string;
  lastUpdated?: string;
  description: string;
  sections: LegalSection[];
  contactEmail?: string;
}

export default function LegalPageLayout({
  category,
  title,
  effectiveDate = '24/08/2026',
  lastUpdated = '24/08/2026',
  description,
  sections,
  contactEmail = 'legal@avedatechnologies.com',
}: LegalPageLayoutProps) {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter antialiased min-h-screen">
      {/* Dark 3D Isometric Hero Header */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 border-slate-800 bg-slate-900/90 text-slate-200 px-4 py-1 text-xs font-semibold rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-red-500" />
            {category}
          </Badge>
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-4">
            {title}
          </h1>
          <p className="font-inter text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-6">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono">
            <span>Effective Date: {effectiveDate}</span>
            <span>•</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xl space-y-10">
            
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4 border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                <h2 className="font-soehne text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 text-xs font-mono font-bold border border-red-100">
                    {idx + 1}
                  </span>
                  {section.title}
                </h2>

                {section.content && section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="font-inter text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2.5 pt-2 pl-4">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-inter">
                        <ChevronRight className="h-4 w-4 text-red-600 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Footer Support Banner */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-soehne text-base sm:text-lg font-bold text-slate-900">Have questions regarding this policy?</h3>
                <p className="font-inter text-xs sm:text-sm text-slate-600 mt-1">Our legal & privacy compliance team is here to assist you.</p>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                <Mail className="w-4 h-4 text-red-500" />
                <span>Contact Legal Team</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
