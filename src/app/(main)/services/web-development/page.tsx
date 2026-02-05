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
  BookOpen,
  Rocket,
  Building2,
  Vote,
  Store,
  Cog,
  Server,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';


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
    const heroImage = PlaceHolderImages.find((img) => img.id === 'service-web-dev');
    const detailImage = PlaceHolderImages.find((img) => img.id === 'service-web-dev-detail');

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
        'Corporate Websites & Portals',
        'E-commerce Platforms',
        'SaaS Products & Dashboards',
        'CMS & API Development',
    ];

    const processSteps = [
        { icon: BookOpen, title: "Requirement & Strategy", description: "We start by understanding your goals, audience, and market to create a winning strategy."},
        { icon: Layers, title: "UI/UX & Architecture", description: "We design intuitive user interfaces and a robust architecture that forms the foundation of your project."},
        { icon: Code, title: "Development & Integration", description: "Our expert developers bring the designs to life with clean, efficient code and seamless integrations."},
        { icon: Cog, title: "Testing & Optimization", description: "Rigorous testing across devices ensures a bug-free, high-performance product before launch."},
        { icon: Rocket, title: "Launch & Support", description: "We manage the deployment process and provide ongoing support to ensure your website runs smoothly."},
    ];

    const technologies = [
        { icon: Code, name: 'React & Next.js' },
        { icon: Server, name: 'Node.js & Laravel' },
        { icon: Database, name: 'Headless CMS' },
        { icon: Cloud, name: 'AWS & Cloud' },
    ];
    
    const whoIsThisFor = [
        { icon: Building2, title: 'Businesses & Enterprises' },
        { icon: Rocket, title: 'Startups & SaaS Founders' },
        { icon: Store, title: 'E-commerce Brands' },
        { icon: Vote, title: 'Political & Public Platforms' },
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
                <div className="absolute inset-0 z-0 opacity-20">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
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

            {/* Why This Works Section */}
            <section className="py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">Why Our Web Development Works</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whyThisWorks.map((value) => (
                        <div key={value.title} className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <value.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground">{value.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="bg-secondary py-20 md:py-28">
              <div className="container items-center gap-16 md:grid md:grid-cols-2">
                  <div className="mt-8 md:mt-0">
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">Web Development</h2>
                      <p className="mt-4 text-lg text-muted-foreground">We build high-performance, secure, and scalable websites that drive business growth. Every solution is tailored to your goals and users.</p>
                      
                      <ul className="mt-8 space-y-4">
                          {includedServices.map((detail) => (
                              <li key={detail} className="flex items-center gap-3">
                                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                                  <span className="text-muted-foreground">{detail}</span>
                              </li>
                          ))}
                      </ul>
                      <Button asChild size="lg" className="mt-8" variant="outline">
                          <Link href="/services">Explore More</Link>
                      </Button>
                  </div>
                   <div className="relative h-96 w-full md:h-[500px] mt-8 md:mt-0">
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
              </div>
            </section>

            {/* How Our Process Works Section */}
            <section className="py-20 md:py-28">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-16">Our Development Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn("p-6 rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10", index % 2 === 0 ? "text-left" : "text-right")}>
                                        <Badge variant='outline' className={cn("mb-2", index % 2 !== 0 && 'ml-auto block w-fit' )}>Step {index + 1}</Badge>
                                        <h3 className="font-headline text-xl font-semibold">{step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-border">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Technologies Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">Technologies We Use</h2>
                     <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {technologies.map((tech) => (
                        <div key={tech.name} className="group flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 hover:-translate-y-2">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-primary ring-8 ring-card transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/20">
                                <tech.icon className="h-10 w-10" />
                            </div>
                            <h3 className="mt-2 font-semibold">{tech.name}</h3>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Who is this for + Results Section */}
            <section className="py-20 md:py-28">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Who This Is For</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Our web development services are perfect for organizations that need a powerful, reliable, and scalable online presence.</p>
                         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {whoIsThisFor.map((item) => (
                                <div key={item.title} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                         <h2 className="font-headline text-3xl font-bold md:text-4xl text-center md:text-left">Results & Impact</h2>
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                            {results.map((stat) => (
                                <div key={stat.label}>
                                <p className="font-headline text-5xl font-bold text-primary">{stat.value}</p>
                                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to Build a Website That Performs?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact">
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
