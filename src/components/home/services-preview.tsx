'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: 'Delivering Seamless Experiences',
    description: 'We build fast, scalable, and secure websites that transform complex workflows into effortless digital journeys.',
    slug: 'web-development',
  },
  {
    title: 'Orchestrating Unified Frameworks',
    description: 'From concept to launch, we craft high-performance mobile applications with clean architecture and smooth UX.',
    slug: 'app-development',
  },
  {
    title: 'Compounding Growth & Impact',
    description: 'AI-driven automation, SEO, and performance marketing designed to accelerate growth and maximize results.',
    slug: 'digital-marketing',
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-28">
      {/* Particle/Glow effects */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="mb-2 font-semibold text-primary">Our Services</p>
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            One Service. Multiple Powerful Solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                'group relative rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-12',
                index === 1 && 'lg:translate-y-6', // for height variation
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Gradient Glow */}
              <div
                className={cn(
                  'absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40'
                )}
              />
              {/* Card background pattern */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)]" />

              <div className="relative z-10 flex h-full flex-col">
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 flex-grow text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-8 inline-flex items-center font-semibold text-accent transition-all group-hover:text-primary group-hover:gap-3"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
