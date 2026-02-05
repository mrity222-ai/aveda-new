import Link from 'next/link';
import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPreview() {
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into some of our successful projects.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.slug}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{project.category}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={`/works#${project.slug}`}>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/works">View All Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
