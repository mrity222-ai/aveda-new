import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Target,
  LayoutTemplate,
  TrendingUp,
  Users,
  CheckCircle,
  MoveRight,
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
    const whyThisWorks = [
        {
            icon: Target,
            title: 'AI-Based Targeting',
            description: 'Precision audience targeting using advanced AI models to maximize reach and engagement.',
        },
        {
            icon: LayoutTemplate,
            title: 'High-Converting Landing Pages',
            description: 'Custom-designed landing pages optimized for conversion and a seamless user experience.',
        },
        {
            icon: TrendingUp,
            title: 'Real-Time Performance Tracking',
            description: 'Live dashboards to monitor campaign performance, track ROI, and make data-driven decisions.',
        },
        {
            icon: Users,
            title: 'Political & Business Expertise',
            description: 'Specialized strategies for both corporate marketing and political campaign intelligence.',
        },
    ];

    const includedServices = [
        'Social Media Marketing (Meta, Instagram)',
        'Performance Ads (Meta & Google)',
        'AI Audience Targeting & Segmentation',
        'Lead Generation Campaigns',
        'Retargeting & Funnel Optimization',
        'Political Digital Campaigning',
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/30"></div>
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

            {/* Why This Works Section */}
            <section className="py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">Why Our Approach Works</h2>
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
            <section className="py-20 md:py-28 bg-secondary">
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
                      <Badge variant="default" className="mb-4 bg-primary/10 text-primary">Starting at ₹5,000 / month</Badge>
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">Digital & Performance Marketing</h2>
                      <p className="mt-4 text-lg text-muted-foreground">AI-powered campaigns that generate leads, sales, and influence.</p>
                      
                      <ul className="mt-8 space-y-4">
                          {includedServices.map((detail) => (
                              <li key={detail} className="flex items-center gap-3">
                                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                                  <span className="text-muted-foreground">{detail}</span>
                              </li>
                          ))}
                      </ul>
                      <Button asChild size="lg" className="mt-8">
                          <Link href="/services/digital-marketing/pricing">View Pricing & Plans</Link>
                      </Button>
                  </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-background py-20 md:py-28">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Success Stories</h2>
                        <p className="mt-4 text-lg text-muted-foreground">See how we've helped clients achieve their marketing goals.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {marketingProjects.map((project) => (
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

             {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to Accelerate Your Growth?
                    </h2>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/contact">
                        Get Your Free Strategy Call <MoveRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
