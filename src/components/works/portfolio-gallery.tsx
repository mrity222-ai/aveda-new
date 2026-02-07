'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function PortfolioGallery() {
  const filteredProjects = useMemo(() => {
    // Filters are removed for this zig-zag showcase layout.
    return portfolioProjects;
  }, []);

  return (
    <div className="mt-20">
      <div className="space-y-20 md:space-y-28">
        {filteredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <section key={project.slug} id={project.slug} className="scroll-mt-20 relative">
              
              <div className={cn(
                "absolute -translate-y-1/2 w-1/2 h-full rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse", 
                isReversed ? "top-1/2 -right-1/4 bg-destructive/30" : "top-1/2 -left-1/4 bg-destructive/20"
              )} style={{ animationDelay: `${index * 1.5}s` }} />

              <div className="grid items-center gap-16 md:grid-cols-2">
                <div className={cn("relative h-96 w-full md:h-[500px]", isReversed && 'md:order-last')}>
                  <div className="group relative h-full w-full">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-destructive/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative h-full overflow-hidden rounded-[15px] border border-destructive/30 bg-black/50 p-2 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--destructive)/0.3)]">
                      <Image 
                        src={project.image.imageUrl} 
                        alt={project.title} 
                        fill 
                        className="rounded-md object-cover" 
                        sizes="(max-width: 768px) 100vw, 50vw" 
                        data-ai-hint={project.image.imageHint} 
                      />
                    </div>
                  </div>
                </div>

                <div className={cn("space-y-6", isReversed && 'md:order-first')}>
                  <Badge variant="destructive">{project.category}</Badge>
                  <h2 className="font-headline text-3xl font-bold">{project.title}</h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground">Client Goal</h4>
                      <p>{project.clientGoal}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Results</h4>
                      <p>{project.results}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline" className="border-border/50 bg-black/30 backdrop-blur-sm">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p>No projects to display.</p>
          </div>
        )}
      </div>
    </div>
  );
}
