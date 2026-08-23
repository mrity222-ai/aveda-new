import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuit, Target, TrendingUp, Users, MoveRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PurposePromiseTabs } from '@/components/about/purpose-promise-tabs';
import ScrollReveal from '@/components/common/scroll-reveal';
import HeroBackground from '@/components/common/hero-background';

export const metadata: Metadata = {
  title: 'About Us | Leading AI Automation & Software Development Company',
  description: 'Learn about Aveda Technologies, a premier Software Development Company and AI Automation provider. We deliver custom business applications, CRM ERP solutions, and digital transformation globally.',
};

export default function AboutPage() {
  const values = [
    {
      icon: BrainCircuit,
      title: 'AI-First Approach',
      description: 'We are a leading AI Automation Company integrating advanced AI agents and machine learning into every scalable software solution.',
    },
    {
      icon: Target,
      title: 'Data-Driven Strategies',
      description: 'Our software engineering services are backed by data intelligence, ensuring precision and measurable ROI for digital transformation.',
    },
    {
      icon: TrendingUp,
      title: 'Performance & ROI Focused',
      description: 'As a top SaaS Development Company, we focus on delivering tangible returns through automated workflows and custom business apps.',
    },
    {
      icon: Users,
      title: 'Global Technology Partner',
      description: 'We provide a unique blend of technical expertise and strategic consulting for businesses in India, Canada, and Australia.',
    },
  ];

  const partners = [
    { name: 'Hostinger', imageUrl: '/par/1.png' },
    { name: 'Google Cloud', imageUrl: '/par/2.png' },
    { name: 'AWS', imageUrl: '/par/3.png' },
    { name: 'Figma', imageUrl: '/par/4.png' },
    { name: 'Next.js', imageUrl: '/par/5.jpg' },
    { name: 'GoDaddy', imageUrl: '/par/6.png' },
    { name: 'Vercel', imageUrl: '/par/7.png' },
  ];

  const recognitions = [
    { name: 'ISO Certified', imageId: 'cert-iso' },
    { name: 'MSME Registered', imageId: 'cert-msme' },
    { name: 'Startup India', imageId: 'cert-startup-india' },
    { name: 'Made in India', imageId: 'cert-made-in-india' },
    { name: 'Digital India', imageId: 'cert-digital-india' },
  ];

  const leadership = [
    {
      name: 'Deepak Yadav',
      designation: 'AUTOMATION DEVELOPER',
      imageId: 'leader-deepak',
      bioLink: '/deepak-yadav',
    },
    {
      name: 'Raj Mani',
      designation: 'AI & DIGITAL Makreting specialist',
      imageId: 'leader-raj',
      bioLink: '/about',
    },
    {
      name: 'Priyashu Yadav',
      designation: 'Business Growth Specialist',
      imageId: 'testimonial-3',
      bioLink: '#',
    },
    {
      name: 'Saloni',
      designation: 'IT Head / Lead Developer',
      imageUrl: '/img/saloni.jpeg',
      bioLink: '#',
    },
    {
      name: 'Ajeet Pal',
      designation: 'Lead Web Developer',
      imageUrl: '/img/ajeet.png',
      bioLink: '#',
    }
  ];

  return (
    <div className="bg-background text-foreground font-body">
      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>About</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Empowering businesses with intelligent AI &amp; software
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We build custom AI solutions, SaaS products, and enterprise software that transform how organizations communicate, automate, and scale with efficiency and precision.
          </p>
        </div>
      </section>

      {/* -------------------- SECTION 2: SCALE AT SPEED FEATURE BANNER (MATCHING SCREENSHOT) -------------------- */}
      <ScrollReveal variant="fade-up">
        <section className="relative min-h-[60vh] bg-[#f5f2eb] text-slate-900 overflow-hidden flex items-center py-16 md:py-24 border-b border-[#e2dcd0]">
          {/* Isometric Diamond Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="scale-at-speed-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 80 40 L 40 80 L 0 40 Z" fill="none" stroke="#d3ccbe" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#scale-at-speed-grid)" />
            </svg>
          </div>

          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[45vh]">
              
              {/* Left Content Column */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6 z-10 py-4">
                <div>
                  <h2 className="font-soehne text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 tracking-tight leading-tight mb-2">
                    Build Smarter. Scale Faster.
                  </h2>
                  <h3 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                    with Aveda Technologies
                  </h3>
                </div>

                <p className="font-inter text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl">
                  Our promise to help enterprises across industries transform at speed and bring agility, resilience, and efficiency to their businesses.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 h-12 rounded-none shadow-md">
                    <Link href="/contact">KNOW MORE</Link>
                  </Button>

                  <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-xs uppercase tracking-widest px-8 h-12 rounded-none bg-transparent transition-colors">
                    <Link href="/about">OUR BRAND STORY</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Slanted Racing / Speed Image Cutout */}
              <div className="lg:col-span-6 relative h-[340px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
                  <Image
                    src="/ins/clean_minimalist_software_dashboard_interface_on_a_sleek.png"
                    alt="Scale at Speed Performance Engineering"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* -------------------- SECTION 3: INTERACTIVE PURPOSE, PROMISE, MISSION & VALUES TABS -------------------- */}
      <ScrollReveal variant="fade-up">
        <PurposePromiseTabs />
      </ScrollReveal>

      {/* Partners */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="container relative z-10 text-center">
          <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary uppercase tracking-widest px-4 py-1">
            Global Technology Partners
          </Badge>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            Innovating with the World’s Best
          </h2>
          <div className="mt-16 w-full overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="relative h-16 w-40 shrink-0 mx-8">
                  <Image
                    src={partner.imageUrl}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative overflow-hidden bg-secondary/50 py-24">
        <div className="container">
          <div className="grid items-center gap-20 md:grid-cols-2">
            <div className="relative flex items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
              <div className="absolute h-96 w-96 rounded-full border border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
              <BrainCircuit className="relative h-64 w-64 text-primary opacity-80" />
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-bold text-primary uppercase tracking-widest text-xs">Who We Are</p>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl leading-tight">
                  Powering Your Vision with <span className="text-primary">AI-First</span> Innovation
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aveda Technologies is a top-tier Software Development Company providing Custom Software Development, AI Automation Services, and Enterprise Software Solutions. We combine deep engineering expertise with AI to create measurable digital impact for businesses in Lucknow, Noida, and across the globe.
              </p>
              <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border bg-card p-8 soft-shadow transition-all hover:-translate-y-1">
                      <h3 className="text-4xl font-bold text-primary">50+</h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">Custom Business Applications</p>
                  </div>
                  <div className="rounded-2xl border bg-card p-8 soft-shadow transition-all hover:-translate-y-1">
                      <h3 className="text-4xl font-bold text-primary">AI</h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">Powered Growth Solutions</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Different */}
      <section className="bg-background py-24">
        <div className="container text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Our Core Expertise
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold md:text-5xl leading-tight">
                Your Trusted <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Digital Transformation</span> Partner for Scalable Software.
            </h2>
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {values.map((value, index) => (
                    <div key={value.title} 
                         className="group relative overflow-hidden rounded-3xl border bg-card p-10 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary soft-shadow"
                         style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[10deg]">
                           <value.icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-8 text-2xl font-bold tracking-tight">{value.title}</h3>
                        <p className="mt-4 text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* -------------------- THE BIG THINKERS: THOUGHT LEADERSHIP BANNER -------------------- */}
      <section className="relative bg-[#6b0526] text-white py-20 md:py-24 overflow-hidden">
        {/* Angled Stripe Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="big-thinkers-stripes" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#ffffff" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#big-thinkers-stripes)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Top Tag: The Big Thinkers */}
            <div className="flex items-center gap-1.5 font-soehne text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-white">The</span>
              <span className="bg-red-600 text-white px-2.5 py-0.5 rounded-sm">Big</span>
              <span className="text-white">Thinkers</span>
            </div>

            {/* Headline */}
            <h2 className="font-soehne text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white max-w-4xl">
              Move Fast, Don&apos;t Break Things: Balancing AI Innovation with Enterprise Growth & Governance
            </h2>
          </div>
        </div>
      </section>
      
      {/* Recognition */}
      <section className="bg-background py-24">
        <div className="container text-center">
          <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary uppercase px-4 py-1">
              Our Credentials
          </Badge>
          <h2 className="mt-6 text-3xl font-bold md:text-5xl">Nationally Recognized. <span className="text-primary">Globally Trusted.</span></h2>
          
          <div className="mt-20 flex flex-wrap justify-center gap-12">
              {recognitions.map((rec, index) => {
                const image = PlaceHolderImages.find(p => p.id === rec.imageId);
                return (
                  <div key={rec.name} 
                       className="group flex flex-col items-center gap-6 text-center animate-in fade-in slide-in-from-bottom-12 duration-700"
                       style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-[2.5rem] border bg-card transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:rotate-6 soft-shadow">
                      {image && (
                         <div className="relative h-16 w-16">
                          <Image 
                            src={image.imageUrl} 
                            alt={`${rec.name} Recognition Logo`} 
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={image.imageHint}
                            />
                         </div>
                      )}
                    </div>
                    <p className="font-bold text-sm text-muted-foreground transition-colors group-hover:text-primary uppercase tracking-widest">{rec.name}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
