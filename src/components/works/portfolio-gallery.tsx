
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioProjects, blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ExternalLink, ArrowUpRight, Sparkles, Lightbulb, BookOpen, Layers } from 'lucide-react';

const categories = [
  'All',
  'Solar & Energy',
  'Healthcare',
  'SaaS & AI Tools',
  'Web & E-Commerce',
  'Education & Travel',
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return portfolioProjects;
    if (activeCategory === 'Solar & Energy') {
      return portfolioProjects.filter((p) => p.category === 'Solar EPC' || p.tags.some(t => t.toLowerCase().includes('solar')));
    }
    if (activeCategory === 'Healthcare') {
      return portfolioProjects.filter((p) => p.tags.some(t => t.toLowerCase().includes('health')));
    }
    if (activeCategory === 'SaaS & AI Tools') {
      return portfolioProjects.filter((p) => p.category === 'AI Tools' || p.tags.includes('SaaS'));
    }
    if (activeCategory === 'Web & E-Commerce') {
      return portfolioProjects.filter((p) => p.category === 'Web/App' || p.category === 'UI/UX Design');
    }
    if (activeCategory === 'Education & Travel') {
      return portfolioProjects.filter((p) => p.tags.some(t => t.toLowerCase().includes('travel') || t.toLowerCase().includes('school')));
    }
    return portfolioProjects;
  }, [activeCategory]);

  return (
    <div className="space-y-16">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300',
              activeCategory === cat
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                : 'bg-slate-100 text-slate-950 hover:bg-slate-200 hover:text-slate-950'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={project.slug}
            id={project.slug}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1.5"
          >
            {/* Project Image Container */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={project.image.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Category Badge top right */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-slate-950/80 backdrop-blur-md text-white border-white/20 text-[10px] font-mono uppercase tracking-widest px-3 py-1">
                  {project.category || 'Case Study'}
                </Badge>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-grow bg-white">
              <div>
                <h3 className="font-soehne text-xl font-bold text-slate-950 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="mt-2 text-xs text-slate-950 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-medium text-slate-950"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={`/contact?project=${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:text-red-600 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                )}

                <Link
                  href="/insides"
                  className="text-[11px] text-slate-400 hover:text-slate-950 transition-colors"
                >
                  Read Insights →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* -------------------- INDUSTRY INSIGHTS CROSS-PROMOTION -------------------- */}
      <div className="mt-14 rounded-3xl bg-slate-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Industry & Tech Insights</span>
          </div>

          <h2 className="font-soehne text-3xl sm:text-4xl font-bold tracking-tight">
            Looking for Deep Industry Analysis & Strategies?
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Explore our curated insights on AI automation, web engineering trends, and political campaign intelligence across diverse enterprise sectors.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-6 py-2.5 text-xs uppercase tracking-wider">
              <Link href="/insides">
                Explore Industry Insights <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-slate-700 text-white hover:bg-slate-800 rounded-full px-6 py-2.5 text-xs uppercase tracking-wider">
              <Link href="/industries">
                View All Industries <Layers className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
