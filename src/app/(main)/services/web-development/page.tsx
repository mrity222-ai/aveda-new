
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Zap,
  ShieldCheck,
  Scaling,
  SearchCode,
  CheckCircle,
  MoveRight,
  Code,
  Database,
  Cloud,
  Layers,
  Lightbulb,
  Rocket,
  Building2,
  Vote,
  Store,
  Server,
  FileCode,
  Cpu,
  Container,
  Wind,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { portfolioProjects } from '@/lib/data';


const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export default function WebDevelopmentPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const detailImage = PlaceHolderImages.find((img) => img.id === 'service-web-dev-detail');
    const webProjects = portfolioProjects.filter(p => ['corporate-website', 'ed-tech-portal', 'project-management-saas'].includes(p.slug));

    const whyThisWorks = [
        {
            icon: Zap,
            title: 'Lightning-Fast Performance',
            description: 'We build optimized websites that load in milliseconds, ensuring a seamless user experience.',
        },
        {
            icon: ShieldCheck,
            title: 'Enterprise-Grade Security',
            description: 'Security is at the core of our development process, protecting your data and your users.',
        },
        {
            icon: Scaling,
            title: 'Scalable Architecture',
            description: 'Our solutions are built to grow with your business, handling traffic spikes with ease.',
        },
        {
            icon: SearchCode,
            title: 'SEO-Ready Development',
            description: 'We follow best practices to ensure your website is loved by search engines from day one.',
        },
    ];

    const includedServices = [
        'Corporate Websites',
        'E-commerce Platforms',
        'SaaS Products',
        'CMS & API Development',
    ];

    const processSteps = [
        { icon: Lightbulb, title: "Requirement & Strategy", description: "We start by understanding your goals, audience, and market to create a winning strategy."},
        { icon: Layers, title: "UI/UX & Architecture", description: "We design intuitive user interfaces and a robust architecture that forms the foundation of your project."},
        { icon: Code, title: "Development & Integration", description: "Our expert developers bring the designs to life with clean, efficient code and seamless integrations."},
        { icon: ShieldCheck, title: "Testing & Optimization", description: "Rigorous testing across devices ensures a bug-free, high-performance product before launch."},
        { icon: Rocket, title: "Launch & Support", description: "We manage the deployment process and provide ongoing support to ensure your website runs smoothly."},
    ];

    const technologies = [
        { icon: Code, name: 'REACT & NEXT.JS' },
        { icon: Server, name: 'NODE.JS & LARAVEL' },
        { icon: FileCode, name: 'C++, HTML, CSS' },
        { icon: Layers, name: 'HEADLESS CMS' },
        { icon: FileCode, name: 'PYTHON, PHP, JAVA' },
        { icon: Database, name: 'MYSQL & MONGODB' },
        { icon: Cloud, name: 'AWS & GOOGLE CLOUD' },
        { icon: Container, name: 'DEVOPS & DOCKER' },
        { icon: Cpu, name: 'AI & MACHINE LEARNING' },
        { icon: Wind, name: 'TAILWIND CSS' },
    ];
    
    const whoIsThisFor = [
        { icon: Building2, title: 'Businesses & Enterprises', description: 'Scalable architecture that grows with your enterprise.' },
        { icon: Rocket, title: 'Startups & SaaS Founders', description: 'Rapid MVP development to get your vision to market fast.' },
        { icon: Store, title: 'E-commerce Brands', description: 'Conversion-optimized platforms designed to boost sales.' },
        { icon: Vote, title: 'Political & Public Platforms', description: 'Secure and high-availability solutions for public outreach.' },
    ];

    const results = [
        { value: '2x', label: 'Faster Load Times'},
        { value: '30%', label: 'Higher Conversions'},
        { value: '100%', label: 'Secure & Scalable'},
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Web Development background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl animate-blur-in">
                        High-Performance Websites That Scale With Your Business
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        We build secure, scalable, and conversion-ready websites—from corporate portals to complex SaaS platforms.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact">Get Free Website Consultation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/works">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Our Web Development Works Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-foreground">Why Our Web Development Works</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whyThisWorks.map((value, index) => (
                        <div 
                            key={value.title} 
                            className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-12"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative z-10 text-center">
                                <div className="flex justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                                        <value.icon className="h-10 w-10 transition-transform duration-300 group-hover:animate-pulse" />
                                    </div>
                                </div>
                                <h3 className="mt-6 font-headline text-xl font-bold text-foreground">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-20 md:py-28">
                <div className="container">
                     <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Web Showcase</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Explore some of the web experiences we've crafted.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {webProjects.map((project) => (
                            <Link key={project.slug} href={`/works#${project.slug}`} className="group block">
                                <div className="relative h-[450px] overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                                    <Image
                                        src={project.image.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105"
                                        data-ai-hint={project.image.imageHint}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                        <h3 className="font-headline text-2xl font-bold drop-shadow-sm">{project.title}</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="w-fit border-white/20 bg-black/20 text-white backdrop-blur-md">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-28">
                <div className="container relative z-10 grid items-center gap-16 md:grid-cols-2">
                    {/* Left Side (Content) */}
                    <div className="animate-in fade-in slide-in-from-left-12 duration-700">
                        <h2 className="font-headline text-4xl font-bold uppercase tracking-wider text-foreground md:text-5xl">
                            WEB DEVELOPMENT
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground/80">
                            We build high-performance, secure, and scalable websites that drive business growth. Every solution is tailored to your goals and users.
                        </p>
                        
                        <ul className="mt-8 space-y-4">
                            {includedServices.map((detail) => (
                                <li key={detail} className="flex items-center gap-4 text-lg">
                                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                                    <span className="text-muted-foreground">{detail}</span>
                                </li>
                            ))}
                        </ul>
                        <Button asChild size="lg" className="mt-10 bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                            <Link href="/services">Explore More</Link>
                        </Button>
                    </div>

                    {/* Right Side (Visual Hero) */}
                    <div className="relative h-[500px] w-full md:h-[600px] animate-in fade-in zoom-in-90 duration-700">
                        <div className="relative h-full w-full overflow-hidden rounded-lg border bg-card p-2 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                            {detailImage && (
                                <Image
                                    src={detailImage.imageUrl}
                                    alt={detailImage.description}
                                    fill
                                    className="rounded-md object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    data-ai-hint={detailImage.imageHint}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* How Our Process Works Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container relative z-10">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-24 text-foreground">Our Development Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn(
                                    "group relative overflow-hidden p-6 rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg", 
                                    index % 2 === 0 ? "text-left" : "text-right"
                                )}>
                                    <div className={cn("absolute top-0 font-headline text-8xl font-bold text-primary/10 -translate-y-4 transition-transform duration-300 group-hover:scale-110", index % 2 === 0 ? "right-0 translate-x-4" : "left-0 -translate-x-4")}>
                                        0{index + 1}
                                    </div>
                                    <div className="relative">
                                        <h3 className="font-headline text-xl font-semibold text-foreground">{step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary p-2 rounded-lg border-2 border-primary/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Technologies Section */}
            <section className="bg-background py-20 md:py-28 relative">
                <div className="container text-center relative z-10">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-foreground">Technologies We Use</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {technologies.map((tech) => (
                        <div key={tech.name} className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                            <div className="relative flex flex-col items-center justify-center gap-4">
                                <tech.icon className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary" />
                                <p className="font-semibold text-sm text-center uppercase tracking-wider text-foreground">{tech.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Who is this for + Results Section */}
            <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
                <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left Side: "Who This Is For" */}
                    <div>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-foreground">Who This Is For</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Our web development services are perfect for organizations that need a powerful, reliable, and scalable online presence.</p>
                        <div className="mt-8 grid grid-cols-1 gap-6">
                            {whoIsThisFor.map((item) => (
                                <div key={item.title} className="group relative rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                                    <div className="relative flex items-start gap-6">
                                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                                            <item.icon className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-headline text-xl font-bold text-foreground">{item.title}</h3>
                                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: "Results & Impact" */}
                    <div className="space-y-8">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-center md:text-left text-foreground">Results & Impact</h2>
                        <div className="space-y-6">
                            {results.map((stat) => (
                                <div key={stat.label} className="group relative rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                                    <div className="relative flex items-center justify-between gap-4">
                                        <p className="font-headline text-5xl font-bold text-primary">{stat.value}</p>
                                        <p className="text-right text-lg font-medium text-muted-foreground">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


             {/* Final CTA */}
            <section className="relative overflow-hidden border-t border-border bg-card py-20">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Ready to Build a Website That Performs background"
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        Ready to Build a Website That Performs?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=Web+Development">
                            Start Your Project <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <a href="https://wa.me/919012887697" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
