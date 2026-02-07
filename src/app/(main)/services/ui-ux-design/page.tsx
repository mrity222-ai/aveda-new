
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  MoveRight,
  Figma,
  PenTool,
  Bot,
  Box,
  Gem,
  Fingerprint,
  BoxSelect,
  Wand2,
  SearchCheck,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';

export default function UiUxDesignPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const detailImage = PlaceHolderImages.find((img) => img.id === 'service-ui-ux-detail');
    const uiuxProjects = portfolioProjects.filter(p => ['b2b-healthtech-ui-ux-overhaul', 'ai-sales-crm', 'yoga-app'].includes(p.slug)).slice(0, 3);

    const processSteps = [
        { icon: Fingerprint, title: 'User Research & Personas', description: 'Deeply understanding your users to build products they love.' },
        { icon: BoxSelect, title: 'Wireframing & Prototyping', description: 'Structuring and testing the user flow before a single line of code is written.' },
        { icon: Wand2, title: 'Intuitive UI Design', description: 'Creating visually stunning and easy-to-navigate interfaces.' },
        { icon: SearchCheck, title: 'Usability Testing', description: 'Ensuring the final product is flawless and meets user expectations.' },
    ];

    const tools = [
        { icon: Figma, name: 'Figma' },
        { icon: Box, name: 'Adobe XD' },
        { icon: Gem, name: 'Sketch' },
        { icon: PenTool, name: 'Pen & Paper' },
        { icon: Bot, name: 'AI Design Tools' },
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
              <div className="container grid items-center gap-16 lg:grid-cols-5">
                  {/* Left Side (Content) */}
                  <div className="lg:col-span-3">
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">
                        <span className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">Functional Beauty</span>, Built for Conversion
                      </h2>
                      <p className="mt-4 text-lg text-muted-foreground">Our design philosophy is simple: create interfaces that are not only aesthetically pleasing but also intuitive and effective. We focus on user-centric design to ensure your digital product solves real problems and achieves your business goals.</p>
                      
                      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {processSteps.map((step) => (
                              <div key={step.title} className="group relative overflow-hidden rounded-2xl border border-destructive/20 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-destructive/70 hover:shadow-2xl hover:shadow-destructive/10">
                                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                                <div className="relative">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-all duration-300 group-hover:bg-destructive group-hover:text-destructive-foreground group-hover:scale-110">
                                    <step.icon className="h-6 w-6" />
                                  </div>
                                  <h3 className="mt-4 font-semibold">{step.title}</h3>
                                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                                </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Right Side (Visual Hero) */}
                  <div className="relative mt-16 h-96 w-full lg:col-span-2 lg:mt-0 lg:h-[500px]">
                      {detailImage && (
                          <Image
                          src={detailImage.imageUrl}
                          alt={detailImage.description}
                          fill
                          className="rounded-lg object-contain"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          data-ai-hint={detailImage.imageHint}
                          />
                      )}
                  </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-background py-20 md:py-28">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Design Showcase</h2>
                        <p className="mt-4 text-lg text-muted-foreground">See how we've crafted exceptional user experiences.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {uiuxProjects.map((project) => (
                            <Link key={project.slug} href={`/works#${project.slug}`} className="group block">
                                <div className="relative h-[450px] overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                                    <Image
                                        src={project.image.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                                        data-ai-hint={project.image.imageHint}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                        <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="w-fit border-white/20 bg-white/10 backdrop-blur-md">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
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
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
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
