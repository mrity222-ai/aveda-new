'use client';

import * as React from 'react';
import { MapPin, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const countries = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    cities: ['Toronto', 'Vancouver', 'Calgary', 'Ottawa', 'Montreal'],
    services: ['AI Automation', 'CRM/ERP', 'Website Development'],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    services: ['Solar Websites', 'Construction CRM', 'AI Automation', 'Digital Marketing'],
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    cities: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Eindhoven'],
    services: ['AI Automation', 'SaaS Development', 'CRM Automation'],
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    cities: ['Stockholm', 'Gothenburg', 'Malmö'],
    services: ['AI Automation', 'Website Development', 'Business Automation'],
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    cities: ['Oslo', 'Bergen', 'Stavanger'],
    services: ['AI Automation', 'CRM Development', 'Automation Consulting'],
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    cities: ['Zurich', 'Geneva', 'Basel', 'Lausanne'],
    services: ['AI Automation', 'ERP', 'Business Process Automation'],
  },
];

export default function CountriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container relative z-10">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p className="mb-2 font-semibold text-primary">Global Expertise</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Countries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Aveda Technologies provides high-performance digital systems and AI automation to 
            forward-thinking businesses across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={cn(
                'group relative flex flex-col rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 soft-shadow hover:shadow-xl animate-in fade-in slide-in-from-bottom-12'
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-4xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> Key Locations
                </p>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city) => (
                    <span key={city} className="text-[11px] font-medium px-2.5 py-1 bg-secondary rounded-full text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mt-auto pt-6 border-t border-border/50">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Specialized Services</p>
                {country.services.map((service) => (
                  <div key={service} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
           <Button asChild size="lg" className="rounded-full px-8 shadow-xl shadow-primary/10">
            <Link href="/contact?service=International+Consultation">
              Get International Project Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
