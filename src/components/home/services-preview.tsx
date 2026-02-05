'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code2,
  Smartphone,
  LineChart,
  Search,
  Zap,
  ShieldCheck,
  Scaling,
  Rocket,
  LayoutGrid,
  Target,
  Users,
  TrendingUp,
  Gauge,
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'High-performance and scalable websites built to grow your business and drive conversions.',
    icon: Code2,
    href: '/services/web-development',
    highlights: [
      { icon: Zap, text: 'Lightning Fast' },
      { icon: ShieldCheck, text: 'Secure & Reliable' },
      { icon: Scaling, text: 'Built to Scale' },
    ],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description:
      'Powerful Android & iOS apps designed for performance, usability, and a great user experience.',
    icon: Smartphone,
    href: '/services/app-development',
    highlights: [
      { icon: Smartphone, text: 'iOS & Android' },
      { icon: Rocket, text: 'High Performance' },
      { icon: LayoutGrid, text: 'Intuitive UX' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital & Performance Marketing',
    description:
      'AI-driven digital marketing campaigns that generate leads, sales, and measurable ROI.',
    icon: LineChart,
    href: '/services/digital-marketing',
    highlights: [
      { icon: Target, text: 'AI Targeting' },
      { icon: LineChart, text: 'Growth Focused' },
      { icon: Users, text: 'Audience Engagement' },
    ],
  },
  {
    slug: 'seo-optimization',
    title: 'SEO & Optimization',
    description:
      'Rank higher, load faster, and convert better with our data-driven SEO & optimization strategies.',
    icon: Search,
    href: '/services/seo-optimization',
    highlights: [
      { icon: TrendingUp, text: 'Higher Rankings' },
      { icon: Gauge, text: 'Faster Load Times' },
      { icon: Search, text: 'Better Visibility' },
    ],
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Expertise in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Select a service to explore how we create impact using AI and technology.
          </p>
        </div>

        <Tabs defaultValue="web-development" className="w-full">
          <div className="min-h-[420px]">
            {servicesData.map((service) => (
              <TabsContent key={service.slug} value={service.slug}>
                <Card className="w-full max-w-4xl mx-auto text-center animate-in fade-in zoom-in-95 duration-500">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-base max-w-2xl mx-auto">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="my-8 grid grid-cols-3 gap-8">
                      {service.highlights.map((highlight) => (
                        <div key={highlight.text} className="flex flex-col items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <highlight.icon className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="link" className="text-primary">
                      <Link href={service.href}>
                        Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>

          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 mt-12 bg-transparent p-0">
            {servicesData.map((service) => (
              <TabsTrigger
                key={service.slug}
                value={service.slug}
                className="relative h-auto flex-col gap-3 rounded-lg border border-border bg-card p-6 text-muted-foreground shadow-sm transition-all hover:border-primary/50 hover:shadow-md data-[state=active]:border-primary/50 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-primary/10"
              >
                <service.icon className="h-8 w-8 transition-colors data-[state=active]:text-primary" />
                <span className="font-semibold">{service.title}</span>
                <div className="absolute bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 data-[state=active]:w-full"></div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div
          className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700"
          style={{ animationDelay: '500ms', animationFillMode: 'both' }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}