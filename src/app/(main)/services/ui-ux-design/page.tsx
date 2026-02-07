
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Search,
  LayoutGrid,
  Palette,
  Eye,
  CheckCircle,
  MoveRight,
  Figma,
  PenTool,
  Bot,
  Box,
  Gem,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';

export default function UiUxDesignPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const detailImage = PlaceHolderImages.find((img) => img.id === 'service-ui-ux-detail');
    const uiuxProjects = portfolioProjects.filter(p => ['b2b-healthtech-ui-ux-overhaul', 'ai-sales-crm', 'yoga-app'].includes(p.slug)).slice(0, 3);

    const processSteps = [
        { icon: Search, title: 'User Research & Personas', description: 'Deeply understanding your users to build products they love.' },
        { icon: LayoutGrid, title: 'Wireframing & Prototyping', description: 'Structuring and testing the user flow before a single line of code is written.' },
        { icon: Palette, title: 'Intuitive UI Design', description: 'Creating visually stunning and easy-to-navigate interfaces.' },
        { icon: Eye, title: 'Usability Testing', description: 'Ensuring the final product is flawless and meets user expectations.' },
    ];

    const tools = [
        { icon: Figma, name: 'Figma' },
        { icon: Box, name: 'Adobe XD' },
        { icon: Gem, name: 'Sketch' },
        { icon: PenTool, name: 'Pen & Paper' },
        { icon: Bot, name: 'AI Design Tools' },
    ];
    
    const ourApproach = [
        'User-Centric Philosophy',
        'Conversion-Driven Design',
        'Mobile-First & Responsive',
        'Accessibility & Inclusivity',
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                 <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="UI/UX Design background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
                        Intuitive UI/UX for Exceptional User Experiences
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        We design beautiful, functional, and user-centric interfaces that drive engagement and conversions.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=UI%2FUX+Design">Get a Quote</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/works">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Split-Screen Section */}
            <section className="bg-black py-20 md:py-28">
              <div className="container items-center gap-16 md:grid md:grid-cols-2">
                  <div className="relative h-96 w-full md:h-[500px]">
                      {detailImage && (
                          <Image
                          src={detailImage.imageUrl}
                          alt={detailImage.description}
                          fill
                          className="rounded-lg object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          data-ai-hint={detailImage.imageHint}
                          />
                      )}
                  </div>
                  <div className="mt-8 md:mt-0">
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">Functional Beauty, Built for Conversion</h2>
                      <p className="mt-4 text-lg text-muted-foreground">Our design philosophy is simple: create interfaces that are not only aesthetically pleasing but also intuitive and effective. We focus on user-centric design to ensure your digital product solves real problems and achieves your business goals.</p>
                      
                      <ul className="mt-8 space-y-6">
                          {processSteps.map((step) => (
                              <li key={step.title} className="flex items-start gap-4">
                                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <step.icon className="h-6 w-6" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 md:py-28">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Approach to Design</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We combine creativity with a strategic process to deliver designs that are both beautiful and effective.</p>
                         <ul className="mt-8 space-y-4">
                            {ourApproach.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-lg">
                                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="grid grid-cols-2 gap-8">
                        {uiuxProjects.map(project => {
                           const projectImage = portfolioProjects.find(p => p.slug === project.slug)?.image;
                           return (
                             <Link href={`/works#${project.slug}`} key={project.slug} className="group relative h-64 overflow-hidden rounded-lg">
                               {projectImage && (
                                 <Image
                                   src={projectImage.imageUrl}
                                   alt={project.title}
                                   fill
                                   className="object-cover transition-all duration-500 group-hover:scale-105"
                                   data-ai-hint={projectImage.imageHint}
                                 />
                               )}
                               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                               <div className="absolute bottom-4 left-4">
                                 <h3 className="font-headline text-lg font-bold text-white">{project.title}</h3>
                               </div>
                             </Link>
                           );
                         })}
                    </div>
                </div>
            </section>

             {/* Tools We Use Section */}
            <section className="bg-black py-20 md:py-28 relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-destructive/10 to-transparent opacity-50 blur-3xl" />
                <div className="container text-center relative z-10">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-white">Tools We Use</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {tools.map((tool) => (
                        <div key={tool.name} className="group relative rounded-2xl border border-destructive/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-2xl hover:shadow-destructive/20 hover:-translate-y-1">
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                            <div className="relative flex flex-col items-center justify-center gap-4">
                                <div className="flex h-20 w-20 items-center justify-center">
                                    <tool.icon className="h-10 w-10 text-white/80 transition-all duration-300 group-hover:text-destructive group-hover:drop-shadow-[0_0_10px_hsl(var(--destructive)/0.8)]" />
                                </div>
                                <p className="font-semibold text-sm text-center uppercase tracking-wider text-white">{tool.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to Create an Unforgettable User Experience?
                    </h2>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/contact?service=UI%2FUX+Design">
                            Discuss Your Project <MoveRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
