'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/insides/blog-post-card';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);
  
  const featuredPost = blogPosts[0];
  const formattedDate = new Date(featuredPost.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            AI-Driven Insights That Shape Decisions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            Data, strategy, and intelligence for business and political success.
          </p>
        </div>
      </section>

      {/* Featured Post and Categories Section */}
      <div className="container py-20 md:py-28">
        
        {/* Featured Post */}
        <section className="mb-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 items-center">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden group animate-in fade-in slide-in-from-left-12 duration-700">
                    <Image
                        src={featuredPost.image.imageUrl}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={featuredPost.image.imageHint}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="animate-in fade-in slide-in-from-right-12 duration-700">
                    <Badge variant="outline" className="mb-4 text-primary border-primary">{featuredPost.category}</Badge>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        <Link href={`/insides#${featuredPost.slug}`} className="hover:text-primary transition-colors">{featuredPost.title}</Link>
                    </h2>
                    <div className="mt-4 flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{formattedDate}</span>
                        </div>
                    </div>
                    <p className="mt-4 text-muted-foreground line-clamp-3">
                        {featuredPost.content}
                    </p>
                    <Button asChild className="mt-6">
                        <Link href={`/insides#${featuredPost.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Category Filters */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b">
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
            {filteredPosts.map((post, index) => (
              <div
                key={post.slug}
                id={post.slug}
                className="animate-in fade-in slide-in-from-bottom-16 duration-500 scroll-mt-20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogPostCard post={post} />
              </div>
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
