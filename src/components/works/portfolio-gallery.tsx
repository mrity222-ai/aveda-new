'use client';

import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function PortfolioGallery() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project, index) => (
          <div
            key={project.slug}
            id={project.slug}
            className="group relative h-96 overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              data-ai-hint={project.image.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
              <Badge
                variant="outline"
                className="w-fit border-white/20 bg-white/10 backdrop-blur-md"
              >
                {project.tags.join(', ')}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
