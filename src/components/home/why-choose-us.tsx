
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';
import { MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectsToShow = portfolioProjects.slice(0, 6);

export default function PortfolioPreview() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="container relative z-10">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="mb-2 font-semibold text-primary">Our Latest Work</p>
          <h2 className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
            Showcasing Digital Excellence
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Projects since 2024
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsToShow.map((project, index) => (
            <Link 
              key={project.slug} 
              href={`/works#${project.slug}`}
              className="group block animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                className={cn(
                  "relative overflow-hidden rounded-3xl border bg-card transition-all duration-300 soft-shadow hover:border-primary",
                  "h-[400px] group-hover:scale-[1.02] hover:-translate-y-2"
                )}
              >
                <div className="relative h-full w-full rounded-3xl">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={project.image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <Badge variant="outline" className="border-white/20 bg-black/20 text-white backdrop-blur-md">
                      {project.category}
                    </Badge>
                    <h3 className="mt-4 font-headline text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8"
          >
            <Link href="/works">
              VIEW ALL PROJECTS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
