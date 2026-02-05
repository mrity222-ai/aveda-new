'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Smartphone, LineChart, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const servicesData = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Scalable, secure, and high-performance websites built to grow your business.',
    icon: Code2,
    href: '/services/web-development',
  },
  {
    num: '02',
    title: 'App Development',
    description:
      'Intuitive Android & iOS apps engineered for speed and usability.',
    icon: Smartphone,
    href: '/services/app-development',
  },
  {
    num: '03',
    title: 'Digital & Performance Marketing',
    description: 'AI-driven campaigns that convert traffic into measurable growth.',
    icon: LineChart,
    href: '/services/digital-marketing',
  },
  {
    num: '04',
    title: 'SEO & Optimization',
    description:
      'Improve visibility, speed, and rankings with data-backed SEO strategies.',
    icon: Search,
    href: '/services/seo-optimization',
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div
          className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Services That Drive Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Smart, scalable solutions designed for performance, growth, and
            impact.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {servicesData.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block py-8 transition-all duration-300 hover:bg-primary/5 animate-in fade-in slide-in-from-left"
              style={{
                animationDelay: `${index * 150 + 500}ms`,
                animationFillMode: 'both',
              }}
            >
              <div className="flex items-center justify-between gap-8 px-4">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-headline text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <service.icon className="h-10 w-10 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700"
          style={{ animationDelay: '1000ms', animationFillMode: 'both' }}
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
