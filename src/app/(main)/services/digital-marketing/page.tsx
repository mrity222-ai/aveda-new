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

    const whatYouGet = [
        'High-quality social media creatives',
        'Full campaign setup & management',
        'Advanced audience targeting & segmentation',
        'Brand awareness & lead generation ads',
        'Detailed monthly performance report',
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

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                <div className="absolute inset-0 z-0 opacity-20">
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
                            <Link href="/contact">Get Free Strategy Call</Link>
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
                          <Link href="/contact">Launch Campaign @ ₹5,000</Link>
                      </Button>
                  </div>
              </div>
            </section>

             {/* What You Get Section */}
             <section className="py-20 md:py-28">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">What You Get in Our ₹5,000 Plan</h2>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border border-primary/50 bg-card p-8 shadow-xl shadow-primary/10">
                            <h3 className="font-headline text-2xl font-bold">Starter Plan</h3>
                            <p className="text-muted-foreground">Perfect for getting started.</p>
                            <div className="my-6 text-4xl font-bold">₹5,000 <span className="text-base font-normal text-muted-foreground">/ month</span></div>
                            <ul className="space-y-4">
                                {whatYouGet.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-lg border border-border bg-card p-8 opacity-70">
                            <h3 className="font-headline text-2xl font-bold flex items-center justify-between">
                                Growth Plan
                                <Badge variant="outline">Upgrade</Badge>
                            </h3>
                            <p className="text-muted-foreground">For growing businesses.</p>
                            <div className="my-6 text-4xl font-bold">₹15,000 <span className="text-base font-normal text-muted-foreground">/ month</span></div>
                            <p className="text-center text-muted-foreground">Includes everything in Starter, plus advanced analytics and more ad spend.</p>
                        </div>
                        <div className="rounded-lg border border-border bg-card p-8 opacity-70">
                            <h3 className="font-headline text-2xl font-bold flex items-center justify-between">
                                Scale Plan
                                <Badge variant="outline">Upgrade</Badge>
                            </h3>
                            <p className="text-muted-foreground">For market leaders.</p>
                             <div className="my-6 text-4xl font-bold">₹30,000+ <span className="text-base font-normal text-muted-foreground">/ month</span></div>
                             <p className="text-center text-muted-foreground">Fully customized strategy, dedicated account manager, and multi-platform campaigns.</p>
                        </div>
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
