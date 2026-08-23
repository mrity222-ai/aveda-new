import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Technology Partners | Aveda Technologies Global Ecosystem',
  description: 'Explore the global technology partners and cloud ecosystem powering Aveda Technologies—including AWS, Google Cloud, Hostinger, Figma, Next.js, GoDaddy, and Vercel.',
};

// Exact 7 Partner Logo Images from public/par/ matching About Us page
const technologyPartners = [
  {
    name: 'Hostinger',
    logo: '/par/1.png',
  },
  {
    name: 'Google Cloud',
    logo: '/par/2.png',
  },
  {
    name: 'AWS',
    logo: '/par/3.png',
  },
  {
    name: 'Figma',
    logo: '/par/4.png',
  },
  {
    name: 'Next.js',
    logo: '/par/5.jpg',
  },
  {
    name: 'GoDaddy',
    logo: '/par/6.png',
  },
  {
    name: 'Vercel',
    logo: '/par/7.png',
  },
];

export default function TechnologyPartnersPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-950 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-partners-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-partners-pinstripes)" />
        </svg>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto pt-20 pb-32 px-6">
        
        {/* Page Header */}
        <div className="mb-14">
          <h1 className="font-soehne text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 mb-2 leading-tight">
            Technology Partners
          </h1>
          <p className="font-inter text-base sm:text-lg text-slate-950 font-normal">
            Global Technology Partners Ecosystem
          </p>
        </div>

        {/* Section Title */}
        <div className="mb-10">
          <h2 className="font-soehne text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Key Technology Partners
          </h2>
        </div>

        {/* 4 Column Logo Grid: ONLY Logo Images (No Titles or Descriptions) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center mb-24">
          {technologyPartners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-6 h-28 sm:h-32 w-full bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-xl hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-12 sm:h-14 w-36 sm:w-44 overflow-hidden flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Ecosystem Philosophy Card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">
                Technology Synergy
              </Badge>
              <h3 className="font-soehne text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Empowering Enterprises with World-Class Partner Alliances
              </h3>
              <p className="font-inter text-base text-slate-950 leading-relaxed max-w-2xl">
                Aveda Technologies integrates deeply with leading cloud infrastructure, AI compute engines, and enterprise software platforms to build high-speed custom solutions for global clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-950">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Enterprise Multi-Cloud Integration</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-950">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Agentic AI & Compute Orchestration</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-950">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Global Security & ISO Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-950">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Turnkey SaaS Ecosystem Delivery</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <Button asChild size="lg" className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-red-600/20 w-full sm:w-auto">
                <Link href="/contact">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
