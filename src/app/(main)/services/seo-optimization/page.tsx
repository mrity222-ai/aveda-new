
'use client';

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
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
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
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
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
            <section className="bg-black py-20 md:py-28 relative">
                <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--chart-4)/0.1)_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4 text-white drop-shadow-[0_0_10px_hsl(var(--chart-4)/0.5)]">Why Local SEO Matters</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">AI-powered marketing plans designed for growth, visibility, and influence.</p>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whyLocalSeo.map((value) => (
                        <div key={value.title} className="group rounded-2xl border border-chart-4/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-chart-4/40 hover:shadow-2xl hover:shadow-chart-4/20 hover:-translate-y-1">
                             <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-chart-4 via-transparent to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                            <div className="relative flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-chart-4/20 to-accent/20 text-white ring-8 ring-white/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--chart-4)/0.5)]">
                                    <value.icon className="h-8 w-8 transition-transform duration-300 group-hover:animate-pulse" />
                                </div>
                                <h3 className="mt-6 font-headline text-xl font-semibold text-white">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* What is GEO Tagging Section */}
            <section className="bg-black py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--destructive)/0.1)_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                    <div className="mt-8 md:mt-0 animate-in fade-in slide-in-from-right-12 duration-700">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-white">What is GEO Tagging?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">GEO tagging embeds precise location data into your website's content, images, and posts. This tells search engines exactly where you are and what areas you serve, giving you a powerful advantage in local search results.</p>
                        
                        <div className="mt-8 grid gap-4">
                            <div className="group relative rounded-xl border border-destructive/20 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-xl hover:shadow-destructive/10">
                                <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-destructive via-transparent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                                <div className="relative flex items-center gap-4">
                                    <MapPin className="h-6 w-6 text-destructive flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-white">Location Tagging</h3>
                                        <p className="text-sm text-muted-foreground">For images, pages, and posts.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="group relative rounded-xl border border-destructive/20 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-xl hover:shadow-destructive/10">
                                 <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-destructive via-transparent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                                <div className="relative flex items-center gap-4">
                                    <Crosshair className="h-6 w-6 text-destructive flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-white">City-wise Targeting</h3>
                                        <p className="text-sm text-muted-foreground">Precision keyword targeting.</p>
                                    </div>
                                </div>
                            </div>
                             <div className="group relative rounded-xl border border-destructive/20 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-destructive/40 hover:shadow-xl hover:shadow-destructive/10">
                                 <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-destructive via-transparent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                                <div className="relative flex items-center gap-4">
                                    <Rocket className="h-6 w-6 text-destructive flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-semibold text-white">Hyper-local Boost</h3>
                                        <p className="text-sm text-muted-foreground">A visibility boost for your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Our Local SEO Services Section */}
            <section className="bg-black py-20 md:py-28 relative">
                <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--destructive)/0.1)_1px,transparent_1px)] [background-size:32px_32px]"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-white drop-shadow-[0_0_10px_hsl(var(--destructive)/0.5)]">Our Local SEO Services</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                        <div key={service.title} className="group relative overflow-hidden rounded-2xl border border-destructive/20 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:border-destructive/40 hover:shadow-2xl hover:shadow-destructive/20 hover:-translate-y-2">
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                            <div className="relative z-10 flex h-full flex-col items-center text-center">
                                <div className="flex-grow">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive ring-8 ring-destructive/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-destructive group-hover:text-destructive-foreground group-hover:shadow-[0_0_20px_hsl(var(--destructive)/0.5)]">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="mt-6 font-headline text-xl font-semibold text-white">{service.title}</h3>
                                </div>
                                <div className="mt-4">
                                    <Link href="#" className="text-sm font-medium text-destructive opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
            <section id="roadmap" className="bg-black py-20 md:py-28 relative">
                <div className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-t from-destructive/10 to-transparent opacity-30 blur-3xl" />
                <div className="container relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-white">Our 5-Month Local SEO Roadmap</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A clear path to dominating local search results, from foundational audits to long-term growth and ranking.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-destructive/20 shadow-[0_0_10px_hsl(var(--destructive)/0.5)] -translate-x-1/2"></div>
                        {roadmapSteps.map((step, index) => (
                            <div key={step.phase} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                    <div className={cn(
                                        "group relative overflow-hidden p-6 rounded-2xl border border-destructive/30 bg-black/50 backdrop-blur-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-destructive/20", 
                                        index % 2 === 0 ? "text-left" : "text-right"
                                    )}>
                                        <div className="relative">
                                            <p className="font-headline text-destructive">{step.phase}</p>
                                            <h3 className="mt-2 font-headline text-xl font-semibold text-white">{step.focus}</h3>
                                            <p className="mt-2 text-muted-foreground">{step.deliverable}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-2 rounded-lg border-2 border-destructive/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="font-headline text-2xl font-bold text-white">Live Results Counter</h3>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            <div className="rounded-2xl border border-destructive/20 bg-black/50 p-6 backdrop-blur-lg">
                                <p className="font-headline text-5xl font-bold text-destructive drop-shadow-[0_0_10px_hsl(var(--destructive)/0.7)]">12,450+</p>
                                <p className="mt-2 text-muted-foreground">Total Local Leads Generated</p>
                            </div>
                            <div className="rounded-2xl border border-destructive/20 bg-black/50 p-6 backdrop-blur-lg">
                                <p className="font-headline text-5xl font-bold text-destructive drop-shadow-[0_0_10px_hsl(var(--destructive)/0.7)]">500+</p>
                                <p className="mt-2 text-muted-foreground">Google Maps Rankings Secured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Futuristic Dashboard Section */}
            <section className="bg-black py-20 md:py-28 relative">
                <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--destructive)/0.1)_1px,transparent_1px)] [background-size:32px_32px]"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4 text-white drop-shadow-[0_0_10px_hsl(var(--destructive)/0.5)]">Your Command Center for Local SEO</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        Visualize your local dominance with our real-time, holographic city map dashboard, tracking every pin, keyword, and conversion.
                    </p>
                    <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-destructive/30 shadow-2xl shadow-destructive/20 bg-black/50 p-2 backdrop-blur-sm">
                        {futuristicDashboardImage && (
                            <Image
                                src={futuristicDashboardImage.imageUrl}
                                alt={futuristicDashboardImage.description}
                                fill
                                className="object-cover rounded-lg"
                                data-ai-hint={futuristicDashboardImage.imageHint}
                            />
                        )}
                         <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

    