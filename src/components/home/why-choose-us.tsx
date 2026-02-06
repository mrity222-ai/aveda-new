import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoveRight } from 'lucide-react';
import { portfolioProjects } from '@/lib/data';

const projectsToShow = portfolioProjects.slice(0, 4);

const ProjectCards = ({ 'aria-hidden': ariaHidden = false }: { 'aria-hidden'?: boolean }) => (
    <div className="flex shrink-0 gap-8 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden={ariaHidden}>
        {projectsToShow.map((project, index) => (
            <div 
                key={ariaHidden ? `${project.slug}-dup-${index}` : `${project.slug}-${index}`}
                className="shrink-0 w-[90%] md:w-[40%] lg:w-[30%] group/card"
            >
                <Link href={`/works#${project.slug}`} className="block">
                    <div 
                        className="relative rounded-2xl bg-card/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 h-[450px] overflow-hidden transform md:rotate-3 group-hover/card:rotate-0 group-hover/card:scale-105 group-hover/card:shadow-primary/30"
                    >
                        <div className="p-6">
                            <Badge variant="outline">{project.category}</Badge>
                            <h3 className="font-headline text-xl mt-4 text-foreground">{project.title}</h3>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-3/4">
                            <Image
                                src={project.image.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                                data-ai-hint={project.image.imageHint}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent"></div>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
);


export default function PortfolioPreview() {
  return (
    <section className="bg-gradient-to-b from-secondary/20 to-background py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="md:flex md:items-center md:justify-between mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-2xl">
                <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                    Our Work, Designed to Perform
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A showcase of high-impact digital products and experiences.
                </p>
            </div>
            <div className="mt-6 md:mt-0">
                <Button asChild variant="outline">
                    <Link href="/works">
                        View Full Portfolio <MoveRight className="ml-2" />
                    </Link>
                </Button>
            </div>
        </div>

        <div className="relative group flex gap-8 overflow-x-hidden">
            <ProjectCards />
            <ProjectCards aria-hidden={true} />
        </div>
      </div>
    </section>
  );
}
