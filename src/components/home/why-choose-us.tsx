'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const showcaseProjects = [
  {
    title: 'Marketing Automation Engine',
    category: 'Proprietary SaaS',
    subCategory: 'SaaS Product 1',
    description:
      'Our proprietary multi-channel marketing automation platform that automates WhatsApp broadcasts, lead nurturing, and CRM sync.',
    image: '/pot/saas.png',
    techs: ['SaaS Product', 'WhatsApp API', 'Lead Nurturing', 'Automated ROI'],
    isFeatured: true,
    websiteUrl: '/contact?service=Marketing-Automation-SaaS',
  },
  {
    title: 'HRMS Workplace Management SaaS',
    category: 'Proprietary SaaS',
    subCategory: 'SaaS Product 2',
    description:
      'Proprietary Human Resource Management System automating attendance, leave approvals, payroll processing, and employee metrics.',
    image: '/pot/erp.png',
    techs: ['SaaS Product', 'HRMS Automation', 'Payroll Engine', 'Workplace AI'],
    isFeatured: false,
    websiteUrl: '/contact?service=HRMS-SaaS',
  },
  {
    title: 'Shiv Mahaluxmi Solar Energy',
    category: 'Solar Energy',
    subCategory: 'Client Project',
    description:
      'Best Solar Company in Meerut providing premier Rooftop Solar Systems for Residential, Commercial & Industrial setups.',
    image: '/pot/shiv mahaluxmi.png',
    techs: ['Solar EPC', 'Rooftop Installer', 'Clean Energy', 'Meerut'],
    isFeatured: false,
    websiteUrl: 'https://shivmahaluxmisolar.com/',
  },
  {
    title: 'ONS Sustainable Energy Solutions',
    category: 'Solar EPC',
    subCategory: 'Client Project',
    description:
      'Leading Solar EPC Company in India specializing in Residential, Commercial & Industrial Solar power installations.',
    image: '/pot/ONS Sustainable Energy.png',
    techs: ['Solar EPC', 'Industrial Solar', 'Green Energy', 'India'],
    isFeatured: false,
    websiteUrl: 'https://ons.co.in/',
  },
  {
    title: 'Sky Renewable',
    category: 'Renewable Energy',
    subCategory: 'Client Project',
    description:
      'A Complete Solar Solution delivering turn-key solar power plants, green energy engineering, and maintenance.',
    image: '/pot/sky renewable.png',
    techs: ['Complete Solar', 'Renewables', 'Turnkey Solutions'],
    isFeatured: false,
    websiteUrl: 'https://skyrenewable.in/',
  },
  {
    title: 'AI Sales CRM & Lead Intelligence',
    category: 'Proprietary SaaS',
    subCategory: 'SaaS Product 3',
    description:
      'AI-driven lead qualification and sales forecasting CRM built for scaling sales teams and automating pipeline stages.',
    image: '/pot/ai.png',
    techs: ['AI Sales CRM', 'Predictive AI', 'Lead Qualification'],
    isFeatured: false,
    websiteUrl: '/contact?service=AI-CRM-SaaS',
  },
];

export default function PortfolioPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f3f4f6] py-7 md:py-10 text-slate-950 border-t border-neutral-200/80 selection:bg-red-600 selection:text-white">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-red-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-red-400/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-6">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-red-200 text-red-700 bg-red-50">
              5+ Delivered Projects & 3 Proprietary SaaS Products
            </Badge>

            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-[1.2]">
              Client Projects & Proprietary SaaS Solutions
            </h2>
            <p className="font-inter mt-3 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              Explore our live client projects across Solar Energy, AI Platforms, SaaS, Healthcare, and Education platforms.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-neutral-200 bg-neutral-50 backdrop-blur-xl flex items-center justify-center text-slate-950 hover:bg-neutral-100 hover:border-red-400 transition-all shadow-sm"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-neutral-200 bg-neutral-50 backdrop-blur-xl flex items-center justify-center text-slate-950 hover:bg-neutral-100 hover:border-red-400 transition-all shadow-sm"
              aria-label="Next Project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8 pt-2 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {showcaseProjects.map((project) => {
            const isExternal = project.websiteUrl.startsWith('http');
            return (
              <a
                key={project.title}
                href={project.websiteUrl}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
                className={cn(
                  'group relative rounded-[32px] overflow-hidden border border-neutral-200/80 bg-white p-8 flex flex-col justify-end transition-all duration-500 hover:-translate-y-2 hover:border-red-600/40 hover:shadow-2xl shadow-sm shrink-0 snap-center',
                  project.isFeatured
                    ? 'w-[90vw] md:w-[700px] min-h-[460px]'
                    : 'w-[90vw] md:w-[460px] min-h-[460px]'
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />
                </div>

                {/* Top Category Badges */}
                <div className="relative z-10 flex gap-2 mb-auto">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-red-600 text-white border border-red-500 shadow-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.subCategory && (
                    <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/20 backdrop-blur-md">
                      {project.subCategory}
                    </span>
                  )}
                </div>

                {/* Bottom Content Layer */}
                <div className="relative z-10 pt-16">
                  <h3 className="font-soehne text-3xl sm:text-4xl font-light text-white mb-3 tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="font-inter text-neutral-200 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-medium text-white backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-red-400 font-semibold text-sm group-hover:text-white transition-colors">
                    <span>{isExternal ? 'Visit Live Website' : 'Explore Case Study'}</span>
                    {isExternal ? (
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
