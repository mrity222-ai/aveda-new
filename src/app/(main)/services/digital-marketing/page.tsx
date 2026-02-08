
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Target,
  TrendingUp,
  Users,
  MoveRight,
  BrainCircuit,
  Repeat,
  Megaphone,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
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

export default function DigitalMarketingPage() {
    const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    
    const includedServices = [
        { icon: Users, text: 'Social Media Marketing (Meta, Instagram)'},
        { icon: Target, text: 'Performance Ads (Meta & Google)'},
        { icon: BrainCircuit, text: 'AI Audience Targeting & Segmentation'},
        { icon: TrendingUp, text: 'Lead Generation Campaigns'},
        { icon: Repeat, text: 'Retargeting & Funnel Optimization'},
        { icon: Megaphone, text: 'Political Digital Campaigning'},
    ];
    
    const marketingImage = PlaceHolderImages.find(
        (img) => img.id === 'service-digital-marketing-detail'
      );
      
    const marketingProjects = portfolioProjects.filter(p => ['b2b-seo-strategy', 'political-dashboard', 'ada-chikankari'].includes(p.slug)).slice(0, 3);

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroBgImage && (
                        <Image
                            src={heroBgImage.imageUrl}
                            alt="Digital Marketing background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroBgImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
                        Grow Faster With AI-Driven Digital Marketing
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        Get leads, sales, and visibility starting at just ₹5,000/month.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" variant="default">
                            <Link href="/services/digital-marketing/pricing">View Pricing Plans</Link>
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

            {/* Digital Marketing & Results Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container grid md:grid-cols-1 gap-16 items-center">
                    {/* Left Side (Content) */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-700">
                        <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
                            Campaigns Crafted by Us, <br />
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Results Driven for You
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We accelerate your business growth through data-driven SEO, targeted digital campaigns, and a relentless focus on performance.
                        </p>
                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div className="rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                                <h3 className="font-headline text-4xl font-bold text-primary">100K+</h3>
                                <p className="mt-2 text-muted-foreground">Reach Generated</p>
                            </div>
                            <div className="rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                                <h3 className="font-headline text-4xl font-bold text-primary">200%</h3>
                                <p className="mt-2 text-muted-foreground">Avg. ROI</p>
                            </div>
                            <div className="rounded-xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                                <h3 className="font-headline text-4xl font-bold text-primary">50+</h3>
                                <p className="mt-2 text-muted-foreground">Happy Clients</p>
                            </div>
                        </div>
                        <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105">
                            <Link href="/contact">
                                Get in Touch <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="bg-background py-20 md:py-28">
              <div className="container items-center gap-16 md:grid md:grid-cols-2">
                  <div className="relative h-96 w-full md:h-[500px]">
                      {marketingImage && (
                          <Image
                          src={marketingImage.imageUrl}
                          alt={marketingImage.description}
                          fill
                          className="rounded-lg object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          data-ai-hint={marketingImage.imageHint}
                          />
                      )}
                  </div>
                  <div className="mt-8 md:mt-0">
                      <Badge variant="destructive" className="mb-4">Starting at ₹5,000 / month</Badge>
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">Digital &amp; Performance Marketing</h2>
                      <p className="mt-4 text-lg text-muted-foreground">We don't just run ads; we build AI-predictive models to forecast sales, use psychographic funnels to target user behavior, and provide real-time ROI dashboards. Our AI-powered campaigns generate leads, sales, and influence.</p>
                      
                      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {includedServices.map((service) => (
                              <div key={service.text} className="group relative rounded-lg border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                                <div className="flex items-center gap-4">
                                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <service.icon className="h-5 w-5" />
                                  </div>
                                  <span className="text-sm text-muted-foreground">{service.text}</span>
                                </div>
                              </div>
                          ))}
                      </div>
                      <Button asChild size="lg" className="mt-8 w-full bg-primary text-primary-foreground transition-all hover:scale-105">
                          <Link href="/services/digital-marketing/pricing">View Pricing &amp; Plans</Link>
                      </Button>
                  </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Success Stories</h2>
                        <p className="mt-4 text-lg text-muted-foreground">See how we've helped clients achieve their marketing goals.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {marketingProjects.map((project) => (
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-foreground">
                                        <h3 className="font-headline text-2xl font-bold drop-shadow-sm">{project.title}</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="w-fit border-white/20 bg-black/10 text-white backdrop-blur-md">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

             {/* Final CTA */}
             <section className="relative overflow-hidden bg-card border-t py-20 md:py-28">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroBgImage && (
                        <Image
                            src={heroBgImage.imageUrl}
                            alt="Ready to Grow With AI Marketing background"
                            fill
                            className="object-cover"
                            data-ai-hint={heroBgImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        Ready to Grow With AI Marketing?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=Digital+Marketing">
                              Get FREE Strategy Call
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <a href="https://wa.me/919012887697" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">Only 3 slots available for this month.</p>
                </div>
            </section>
        </div>
    );
}
