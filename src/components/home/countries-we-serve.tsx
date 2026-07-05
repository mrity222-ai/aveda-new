'use client';

import * as React from 'react';
import { MapPin, Globe, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
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
    services: ['Solar Websites', 'Construction CRM', 'AI Automation'],
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    cities: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Eindhoven'],
    services: ['SaaS Development', 'CRM Automation', 'AI Automation'],
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    cities: ['Stockholm', 'Gothenburg', 'Malmö'],
    services: ['AI Automation', 'Business Automation', 'Website Development'],
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    cities: ['Oslo', 'Bergen', 'Stavanger'],
    services: ['CRM Development', 'AI Automation', 'Automation Consulting'],
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    cities: ['Zurich', 'Geneva', 'Basel', 'Lausanne'],
    services: ['ERP', 'AI Automation', 'Business Process Automation'],
  },
];

export default function CountriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('/nn.svg')] bg-center opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
            <Sparkles className="h-3 w-3 mr-2 animate-pulse" />
            Global Reach
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Countries We Serve <span className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent drop-shadow-primary-glow">Globally</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400 leading-relaxed">
            Helping businesses across high-growth global markets with AI Automation, CRM/ERP, SaaS and Website Development solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={cn(
                'group relative flex flex-col rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500',
                'hover:-translate-y-3 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_20px_80px_-15px_rgba(255,0,0,0.15)]',
                'animate-in fade-in slide-in-from-bottom-12'
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-4xl shadow-inner border border-white/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                    {country.flag}
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                </div>

                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/70 mb-4 flex items-center gap-2">
                    <MapPin className="h-3 w-3" /> Strategic Hubs
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {country.cities.map((city) => (
                      <span key={city} className="text-[12px] font-semibold px-3 py-1.5 bg-white/5 rounded-lg text-slate-300 border border-white/5 group-hover:bg-primary/10 group-hover:text-white group-hover:border-primary/20 transition-all duration-300">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/70 mb-2">Core Expertise</p>
                  {country.services.map((service) => (
                    <div key={service} className="flex items-center gap-3 text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
           <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_10px_40px_-10px_rgba(255,0,0,0.5)] transition-all hover:scale-105 active:scale-95">
            <Link href="/contact?service=International+Project">
              Start Global Project Discussion <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
