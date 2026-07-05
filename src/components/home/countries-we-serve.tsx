'use client';

import * as React from 'react';
import { ArrowRight, Building2, Globe2, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const countries = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    cities: ['Toronto', 'Vancouver', 'Calgary', 'Ottawa', 'Montreal'],
    href: '/locations/canada'
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    cities: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Eindhoven'],
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    cities: ['Stockholm', 'Gothenburg', 'Malmö'],
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    cities: ['Oslo', 'Bergen', 'Stavanger'],
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    cities: ['Zurich', 'Geneva', 'Basel', 'Lausanne'],
  },
];

export default function CountriesWeServe() {
  const [activeCountry, setActiveCountry] = React.useState(countries[0].name);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 text-slate-900 border-y border-slate-100">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Branding & Info */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-8 duration-1000">
            <Badge variant="outline" className="mb-6 rounded-full border-blue-200 bg-blue-50 text-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              OUR GLOBAL PRESENCE
            </Badge>
            
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
              Countries We Serve <br /> 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Globally</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Aveda Technologies provides high-performance digital systems and AI automation to forward-thinking businesses across high-growth global markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-blue-100 bg-blue-50/30 transition-all hover:shadow-lg hover:shadow-blue-100/50 hover:bg-white group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Head Office</h3>
                  <p className="text-sm text-slate-500 font-medium">Lucknow, India</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-indigo-100 bg-indigo-50/30 transition-all hover:shadow-lg hover:shadow-indigo-100/50 hover:bg-white group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">International Coverage</h3>
                  <p className="text-sm text-slate-500 font-medium">High-Paying Markets</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-xl shadow-blue-100 transition-all hover:scale-105 active:scale-95">
              <Link href="/contact?service=International+Project">
                Start Global Project Discussion <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Column: Interactive Market Grid */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="rounded-[2.5rem] border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-100/30 lg:p-12 relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -z-10" />
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-between border-b border-slate-50 pb-6">
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    Global Markets
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select a country to view hubs</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {countries.map((country) => (
                  <div key={country.name} className="relative">
                    <button
                      onClick={() => setActiveCountry(activeCountry === country.name ? '' : country.name)}
                      className={cn(
                        "w-full flex flex-col p-5 rounded-2xl border transition-all duration-300 text-left group relative overflow-hidden",
                        activeCountry === country.name 
                          ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200" 
                          : "bg-slate-50/50 border-slate-100 text-slate-900 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-50"
                      )}
                    >
                      <div className="relative z-10 flex items-center justify-between mb-3">
                        <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{country.flag}</span>
                        <div className={cn(
                          "h-8 w-8 rounded-full flex items-center justify-center transition-all",
                          activeCountry === country.name ? "bg-white text-blue-600 rotate-90" : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                        )}>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <span className="font-bold text-lg tracking-tight">{country.name}</span>
                        <p className={cn(
                            "text-[10px] uppercase font-black tracking-widest mt-1 transition-opacity",
                            activeCountry === country.name ? "text-blue-100" : "text-slate-400 opacity-60"
                        )}>
                            {activeCountry === country.name ? 'Active Strategic Hubs' : 'View Strategic Hubs'}
                        </p>
                      </div>
                    </button>
                    
                    {/* Hubs/Cities revealed on select */}
                    <div className={cn(
                      "grid transition-all duration-300 ease-in-out overflow-hidden",
                      activeCountry === country.name ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 h-0"
                    )}>
                      <div className="min-h-0 bg-blue-50/50 rounded-2xl border border-blue-100 p-4">
                        <div className="flex flex-wrap gap-2">
                          {country.cities.map(city => (
                            <span key={city} className="text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg bg-white text-blue-600 border border-blue-100 shadow-sm">
                              {city}
                            </span>
                          ))}
                        </div>
                        {country.href && (
                          <Button asChild variant="link" className="mt-4 p-0 h-auto text-blue-600 font-bold group/link">
                            <Link href={country.href}>
                              Visit {country.name} Office Page <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}