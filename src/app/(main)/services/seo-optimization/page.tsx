
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  TrendingUp,
  PhoneCall,
  Star,
  CheckCircle,
  MoveRight,
  Building,
  HeartPulse,
  Vote,
  Search,
  ImageIcon,
  Bookmark,
  Award,
  ScanSearch,
  Crosshair,
  FileText,
  BarChart,
  Store,
  Wrench,
  Hospital,
  Rocket,
  Layers,
  Code,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';


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

  const AnimatedNumber = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = React.useState(0);
    const ref = React.useRef<HTMLSpanElement>(null);
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const end = value;
            if (start === end) {
              setDisplayValue(end);
              return;
            };
  
            const duration = 2000;
            let startTime: number | null = null;
  
            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const current = Math.floor(progress * (end - start) + start);
              setDisplayValue(current);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setDisplayValue(end);
              }
            };
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
  
      const currentRef = ref.current;
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [value]);
  
    return <span ref={ref}>{displayValue.toLocaleString()}</span>;
  };

export default function SeoOptimizationPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const geoTaggingImage = PlaceHolderImages.find((img) => img.id === 'service-seo-map');
    const futuristicDashboardImage = PlaceHolderImages.find((img) => img.id === 'futuristic-seo-dashboard');
    
    const whyLocalSeo = [
        {
            icon: Search,
            title: 'Appear in “Near Me” Searches',
            description: 'Capture high-intent customers actively looking for your services in their immediate area.',
        },
        {
            icon: MapPin,
            title: 'Rank Higher on Google Maps',
            description: 'Become a top suggestion in the Google Map Pack, driving directions and foot traffic to you.',
        },
        {
            icon: PhoneCall,
            title: 'Get More Local Calls & Visits',
            description: 'Convert local searchers into paying customers with prominent contact info and location.',
        },
        {
            icon: Star,
            title: 'Build Trust in Your Area',
            description: 'Establish your brand as a credible and reliable local authority in your community or constituency.',
        },
    ];

    const services = [
        { icon: Building, title: 'Google Business Profile Optimization' },
        { icon: Search, title: 'Local Keyword Research' },
        { icon: ImageIcon, title: 'GEO Tagged Content & Images' },
        { icon: TrendingUp, title: 'Map Pack Ranking Optimization' },
        { icon: Bookmark, title: 'Local Citations & Listings' },
        { icon: Award, title: 'Review & Reputation Management' },
    ];

    const roadmapSteps = [
        { phase: "Month 1: Foundation", focus: "Audit & Strategy", deliverable: "Detailed SEO Health Report & City Keyword List.", icon: ScanSearch },
        { phase: "Month 2: Optimization", focus: "Google Business Profile", deliverable: "Profile Verification & 360° GMB Optimization.", icon: Store },
        { phase: "Month 3: Geo-Targeting", focus: "Content & Images", deliverable: "GEO-Tagged Image Uploads & City-Specific Pages.", icon: MapPin },
        { phase: "Month 4: Authority", focus: "Citations & Reviews", deliverable: "50+ Local Directory Listings & Reputation Setup.", icon: Bookmark },
        { phase: "Month 5 & Beyond", focus: "Scaling & Growth", deliverable: "Top 3 Map Pack Ranking & Monthly ROI Analytics.", icon: TrendingUp },
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative flex h-screen items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                        src={heroImage.imageUrl}
                        alt="SEO Optimization background"
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-accent md:text-6xl animate-blur-in">
                        Get Found First in Your City
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        Rank higher on Google Maps & local search using AI-powered Local SEO and GEO tagging strategies.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=SEO+Optimization">Get Free Local SEO Audit</Link>
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

            {/* Why Local SEO Matters Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4 text-accent">Why Local SEO Matters</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">AI-powered marketing plans designed for growth, visibility, and influence.</p>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whyLocalSeo.map((value) => (
                        <div key={value.title} className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 shadow-lg hover:shadow-xl hover:-translate-y-1">
                            <div className="relative flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                                    <value.icon className="h-8 w-8 transition-transform duration-300 group-hover:animate-pulse" />
                                </div>
                                <h3 className="mt-6 font-headline text-xl font-semibold text-accent">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* What is GEO Tagging Section */}
            <section className="bg-background py-20 md:py-28 relative overflow-hidden">
                <div className="container relative z-10 grid items-center gap-16 md:grid-cols-2">
                    <div className="relative h-96 w-full md:h-[500px] animate-in fade-in zoom-in-90 duration-700">
                        {geoTaggingImage && (
                            <Image
                            src={geoTaggingImage.imageUrl}
                            alt={geoTaggingImage.description}
                            fill
                            className="rounded-lg object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={geoTaggingImage.imageHint}
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    </div>
                    <div className="mt-8 md:mt-0 animate-in fade-in slide-in-from-right-12 duration-700">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">What is GEO Tagging?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">GEO tagging embeds precise location data into your website's content, images, and posts. This tells search engines exactly where you are and what areas you serve, giving you a powerful advantage in local search results.</p>
                        
                        <div className="mt-8 grid gap-4">
                            <div className="group relative rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary/40 shadow-lg">
                                <div className="relative flex items-center gap-4">
                                    <MapPin className="h-6 w-6 text-primary flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-accent">Location Tagging</h3>
                                        <p className="text-sm text-muted-foreground">For images, pages, and posts.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="group relative rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary/40 shadow-lg">
                                <div className="relative flex items-center gap-4">
                                    <Crosshair className="h-6 w-6 text-primary flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-accent">City-wise Targeting</h3>
                                        <p className="text-sm text-muted-foreground">Precision keyword targeting.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="group relative rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary/40 shadow-lg">
                                <div className="relative flex items-center gap-4">
                                    <Rocket className="h-6 w-6 text-primary flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-accent">Hyper-local Boost</h3>
                                        <p className="text-sm text-muted-foreground">A visibility boost for your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Our Local SEO Services Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-accent">Our Local SEO Services</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                        <div key={service.title} className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:border-primary/40 shadow-xl hover:-translate-y-2">
                            <div className="relative z-10 flex h-full flex-col items-center text-center">
                                <div className="flex-grow">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="mt-6 font-headline text-xl font-semibold text-accent">{service.title}</h3>
                                </div>
                                <div className="mt-4">
                                    <Link href="#" className="text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        View Case Study <MoveRight className="inline-block h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Roadmap Section */}
            <section id="roadmap" className="bg-background py-20 md:py-28 relative">
                <div className="container relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Our 5-Month Local SEO Roadmap</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A clear path to dominating local search results, from foundational audits to long-term growth and ranking.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                        {roadmapSteps.map((step, index) => (
                            <div key={step.phase} className={cn("relative mb-16 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-12" : "pl-12")}>
                                    <div className={cn(
                                        "group relative overflow-hidden p-6 rounded-2xl border bg-card shadow-lg", 
                                        "transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50"
                                    )}>
                                        <div className={cn("absolute top-0 font-headline text-8xl font-bold text-primary/10 -translate-y-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary/20", index % 2 === 0 ? "right-0 translate-x-4" : "left-0 -translate-x-4")}>
                                            0{index + 1}
                                        </div>
                                        <div className="relative">
                                            <p className="font-headline text-primary">{step.phase}</p>
                                            <h3 className="mt-2 font-headline text-xl font-semibold text-accent">{step.focus}</h3>
                                            <p className="mt-2 text-muted-foreground">{step.deliverable}</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="font-headline text-2xl font-bold text-accent">Live Results Counter</h3>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            <div className="rounded-2xl border bg-card p-6 soft-shadow">
                                <p className="font-headline text-5xl font-bold text-primary">
                                    <AnimatedNumber value={12450} />+
                                </p>
                                <p className="mt-2 text-muted-foreground">Total Local Leads Generated</p>
                            </div>
                            <div className="rounded-2xl border bg-card p-6 soft-shadow">
                                <p className="font-headline text-5xl font-bold text-primary">
                                    <AnimatedNumber value={500} />+
                                </p>
                                <p className="mt-2 text-muted-foreground">Google Maps Rankings Secured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Futuristic Dashboard Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4 text-accent">Your Command Center for Local SEO</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        Visualize your local dominance with our real-time dashboard, tracking every pin, keyword, and conversion.
                    </p>
                    <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10 bg-card p-2">
                        {futuristicDashboardImage && (
                            <Image
                                src={futuristicDashboardImage.imageUrl}
                                alt={futuristicDashboardImage.description}
                                fill
                                className="object-cover rounded-lg"
                                data-ai-hint={futuristicDashboardImage.imageHint}
                            />
                        )}
                         <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/50 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden border-t border-border bg-card py-20">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Ready to Dominate Local Search background"
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        Ready to Dominate Local Search?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=SEO+Optimization">
                                Get Your Free Audit <MoveRight className="ml-2 h-5 w-5" />
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
