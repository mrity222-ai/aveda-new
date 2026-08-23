
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Sparkles, Lightbulb, BookOpen, Layers } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/insides/blog-post-card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/common/scroll-reveal';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';

const categories = [
  'All',
  'AI & Automation',
  'Digital & Performance Marketing',
  'Political Campaign Intelligence',
  'SEO & Growth',
  'Web & App Trends',
];

export default function InsidesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = blogPosts[0];
  const formattedDate = new Date(featuredPost.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-[#f3f4f6] text-slate-900 font-inter antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Insights</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            AI-driven insights shaping future-ready enterprises
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover strategic data intelligence, deep-tech research, and actionable guidance for enterprise scalability and digital transformation.
          </p>
        </div>
      </section>

      {/* -------------------- MAIN CONTENT SECTION -------------------- */}
      <main className="flex-grow z-10 py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Section Header */}
          <div className="mb-12 md:mb-16 max-w-3xl">
            <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700 bg-purple-50">
              Strategic Intelligence
            </Badge>
            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.2]">
              Thought Leadership & Case Studies
            </h2>
            <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed">
              Explore deep dives into AI engineering, performance marketing, political sentiment analytics, and enterprise web solutions.
            </p>
          </div>

          {/* Featured Post Card (Industries Bento Card Styling) */}
          <section className="mb-16">
            <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-purple-500/40 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src={featuredPost.image.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-purple-600 text-white font-mono text-[10px] uppercase tracking-wider">
                      Featured
                    </Badge>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
                    {featuredPost.category}
                  </Badge>
                  
                  <h3 className="font-soehne text-2xl sm:text-3xl font-bold text-slate-950 group-hover:text-purple-600 transition-colors leading-tight">
                    <Link href={`/insides#${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h3>

                  <div className="flex items-center space-x-6 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-purple-600" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-purple-600" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {featuredPost.content}
                  </p>

                  <div className="pt-2">
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-500 hover:to-red-500 text-white font-bold rounded-2xl px-6 py-2.5 text-xs uppercase tracking-wider">
                      <Link href={`/insides#${featuredPost.slug}`}>
                        Read Featured Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filters (Matching Industries Pill Style) */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border',
                  activeCategory === category
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20 scale-105'
                    : 'bg-white text-slate-700 border-neutral-200 hover:bg-neutral-100 hover:text-slate-900'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.slug}
                  id={post.slug}
                  className="animate-in fade-in slide-in-from-bottom-12 duration-500 scroll-mt-20"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-500">
              <p className="text-lg font-semibold">Coming Soon</p>
              <p className="text-xs">No insights available for this category yet. Check back soon for updates.</p>
            </div>
          )}

          {/* -------------------- PORTFOLIO SECTION OF THE INDUSTRIES INSIGHTS -------------------- */}
          <ScrollReveal variant="fade-up">
            <section className="mt-20 pt-16 border-t border-slate-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest block mb-2">
                    / Proven Track Record /
                  </span>
                  <h2 className="font-soehne text-3xl md:text-4xl font-bold text-slate-950 tracking-tight">
                    Featured Industry Deployments & Live Sites
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                    See how our strategy and engineering insights translate into live, high-performing websites and solar platforms.
                  </p>
                </div>

                <Button asChild className="bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-full px-6 py-2.5 text-xs uppercase tracking-wider shrink-0 shadow-md">
                  <Link href="/works">
                    View Full Portfolio →
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Project 1 */}
                <div className="group rounded-3xl border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-1.5">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-950">
                    <Image
                      src="/pot/shiv mahaluxmi.png"
                      alt="Shiv Mahaluxmi Solar"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] uppercase font-mono tracking-wider">
                      Solar Energy
                    </Badge>
                  </div>
                  <h3 className="font-soehne text-lg font-bold text-slate-950 group-hover:text-purple-600 transition-colors">
                    Shiv Mahaluxmi Solar Energy
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Rooftop Solar EPC installer web platform powering commercial and residential energy solutions.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a href="https://shivmahaluxmisolar.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-purple-600 hover:underline">
                      Visit Live Site ↗
                    </a>
                    <Link href="/industries" className="text-[11px] text-slate-500 hover:text-slate-900">
                      Energy Industry →
                    </Link>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group rounded-3xl border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-1.5">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-950">
                    <Image
                      src="/pot/kavika.png"
                      alt="Kavika Group"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] uppercase font-mono tracking-wider">
                      Eco Sanitation
                    </Badge>
                  </div>
                  <h3 className="font-soehne text-lg font-bold text-slate-950 group-hover:text-purple-600 transition-colors">
                    Kavika Enterprise Group
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Sustainable bio-toilet & wastewater treatment engineering infrastructure portal.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a href="https://kavikagroup.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-purple-600 hover:underline">
                      Visit Live Site ↗
                    </a>
                    <Link href="/industries" className="text-[11px] text-slate-500 hover:text-slate-900">
                      CleanTech Industry →
                    </Link>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group rounded-3xl border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-1.5">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-950">
                    <Image
                      src="/pot/sky renewable.png"
                      alt="Sky Renewable"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] uppercase font-mono tracking-wider">
                      Green Engineering
                    </Badge>
                  </div>
                  <h3 className="font-soehne text-lg font-bold text-slate-950 group-hover:text-purple-600 transition-colors">
                    Sky Renewable Solutions
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Complete solar power engineering & turn-key renewable installations digital portal.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a href="https://skyrenewable.in/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-purple-600 hover:underline">
                      Visit Live Site ↗
                    </a>
                    <Link href="/industries" className="text-[11px] text-slate-500 hover:text-slate-900">
                      Energy Industry →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* -------------------- BOTTOM ENTERPRISE CTA (MATCHING INDUSTRIES UI) -------------------- */}
          <ScrollReveal variant="fade-up" delay={150}>
            <CtaSection
              badgeText="Custom Research & Consulting"
              title="Need specialized research for your sector?"
              description="Our AI strategy experts and data analysts craft custom market reports, voter intelligence models, and digital transformation blueprints."
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
