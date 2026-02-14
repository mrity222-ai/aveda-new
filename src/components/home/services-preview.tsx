'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, PenTool, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesData = [
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Web Development',
    description: 'We build high-performance, secure, and scalable websites that drive business growth and deliver seamless digital experiences.',
  },
  {
    slug: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    description: 'From concept to launch, we create engaging and intuitive mobile applications for iOS and Android with modern architecture.',
  },
  {
    slug: 'ui-ux-design',
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Our design process is centered around users. We craft beautiful, functional, and user-friendly interfaces that convert.',
  },
  {
    slug: 'digital-marketing',
    icon: LineChart,
    title: 'Digital & Performance Marketing',
    description: 'We run data-driven marketing campaigns designed to increase visibility, engagement, and measurable ROI.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="container relative z-10">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="mb-2 font-semibold text-primary">Our Services</p>
          <h2 className="text-3xl font-bold tracking-tight text-accent md:text-4xl">
            A Complete Suite of Digital Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
            To transform your business and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                'group relative rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary soft-shadow animate-in fade-in slide-in-from-bottom-12'
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-accent">
                  {service.title}
                </h3>
                <p className="mt-4 flex-grow text-sm text-foreground/80">
                  {service.description}
                </p>
                <div className="mt-6 pt-4 border-t border-border space-y-2">
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href={`/services/${service.slug}`}>
                      View More
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
           <Button asChild size="lg">
            <Link href="/services">
              View More Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
