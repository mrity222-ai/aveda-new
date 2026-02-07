'use client';

import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function PortfolioGallery() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <div
            key={project.slug}
            id={project.slug}
            className="group relative overflow-hidden rounded-2xl border border-destructive/30 bg-card/50 p-1 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--destructive)/0.3)]"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-destructive/50 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
            <div className="relative overflow-hidden rounded-[15px] bg-black">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <Badge variant="destructive">{project.category}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
