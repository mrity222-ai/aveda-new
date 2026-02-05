'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code2,
  Smartphone,
  PenTool,
  LineChart,
  Search,
  Cpu,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'High-performance and scalable websites built to grow your business.',
    icon: Code2,
    href: '/services/web-development',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description:
      'Powerful Android & iOS apps designed for performance and usability.',
    icon: Smartphone,
    href: '/services/app-development',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital & Performance Marketing',
    description:
      'AI-driven campaigns that generate leads, sales, and visibility.',
    icon: LineChart,
    href: '/services/digital-marketing',
  },
  {
    slug: 'seo-optimization',
    title: 'SEO & Optimization',
    description: 'Rank higher, load faster, and convert better with smart SEO.',
    icon: Search,
    href: '/services/seo-optimization',
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Smart, scalable, and result-driven digital solutions powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <Card
              key={service.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-lg border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700"
          style={{ animationDelay: '500ms' }}
        >
          <Button asChild size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
