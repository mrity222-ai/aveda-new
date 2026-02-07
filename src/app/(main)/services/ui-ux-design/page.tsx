
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
  Bot
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';

const AdobeXdIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.42 3H4.01c-.75 0-1.42.37-1.42 1.25v15.5C2.59 20.63 3.26 21 4.01 21h15.98c.75 0 1.42-.37 1.42-1.25V10.7z" fill="#FF61F6"/>
        <path d="M21.41 3h-7.99l7.99 7.7V4.25C21.41 3.37 20.74 3 19.99 3z" fill="#EF41C6"/>
        <path d="M9.53 15.22a.49.49 0 0 1-.35-.14l-2.04-2.09c-.19-.2-.19-.51 0-.71s.5-.2.69 0l2.04 2.1c.19.2.19.51 0 .71-.1.1-.23.13-.34.13zm4.59-5.11h-2.1c-.28 0-.5.22-.5.5v.06c0 .28.22.5.5.5h1.56l-2.07 2.87a.49.49 0 0 0 .02.68l.06.05c.18.15.46.12.61-.06l2.39-3.32v.02h.01V10.6c0-.27-.22-.49-.5-.49z" fill="#00003A"/>
    </svg>
)

const SketchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.23 3.68l11.54 0-2.89 2.8-2.88-2.8-2.89 2.8L6.23 3.68zM3.41 6.48l8.59 8.34 8.59-8.34-5.73 5.56-2.86-2.78-2.86 2.78L3.41 6.48zM12 14.82l-8.59-8.34h17.18L12 14.82zM6.23 20.32l2.88-2.8 2.89 2.8 2.88-2.8 2.89 2.8-5.77-5.6-5.77 5.6z" fill="#FDB300"/>
    </svg>
)

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
        { icon: AdobeXdIcon, name: 'Adobe XD' },
        { icon: SketchIcon, name: 'Sketch' },
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
            <section className="bg-secondary py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">Tools We Use</h2>
                    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
                        {tools.map((tool) => (
                        <div key={tool.name} className="group flex flex-col items-center gap-4">
                           <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-primary ring-8 ring-card transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground group-hover:bg-primary">
                             <tool.icon />
                           </div>
                           <p className="font-semibold">{tool.name}</p>
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
