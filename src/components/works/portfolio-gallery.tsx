'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const filters = ['All', 'Web/App', 'AI Tools', 'Political Tech'];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolioProjects;
    }
    return portfolioProjects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="mt-16">
      {/* Filter Bar */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
        {filters.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'destructive' : 'outline'}
            className={cn(
              'rounded-full transition-all duration-300',
              activeFilter === filter ? 'shadow-[0_0_15px_hsl(var(--destructive)/0.5)]' : 'border-border/50 text-muted-foreground hover:border-destructive hover:text-destructive'
            )}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
        {filteredProjects.map((project) => (
          <div key={project.slug} id={project.slug} className="group relative mb-8 break-inside-avoid overflow-hidden rounded-2xl border border-destructive/30 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--destructive)/0.4)]">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-destructive/50 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

            <div className="relative">
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.image.imageHint}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-destructive/30 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="font-headline text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 text-sm font-semibold text-white drop-shadow-md">{project.results}</p>
              </div>

              {/* Content visible by default */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 group-hover:opacity-0">
                 <Badge variant="destructive">{project.category}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          <p>No projects to display for this category.</p>
        </div>
      )}
    </div>
  );
}
