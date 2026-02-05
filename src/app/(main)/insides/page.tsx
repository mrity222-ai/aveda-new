'use client';

import { useState, useMemo } from 'react';
import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/insides/blog-post-card';
import { cn } from '@/lib/utils';

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
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-primary/20 opacity-30"></div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            AI-Driven Insights That Shape Decisions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Data, strategy, and intelligence for business and political success.
          </p>
        </div>
      </section>

      {/* Categories and Posts Section */}
      <div className="container py-20 md:py-28">
        {/* Category Filters */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b border-border">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'relative border-b-2 pb-3 text-sm font-medium transition-colors',
                activeCategory === category
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
           <div className="py-16 text-center text-muted-foreground">
            <p className="text-lg font-semibold">Coming Soon</p>
            <p>No insights available for this category yet. Check back soon for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
