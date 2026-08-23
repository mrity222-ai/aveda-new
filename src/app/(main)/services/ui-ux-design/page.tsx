import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ScrollReveal from '@/components/common/scroll-reveal';
import {
  Figma,
  PenTool,
  Bot,
  Box,
  Gem,
  Fingerprint,
  BoxSelect,
  Wand2,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Intuitive UI/UX Design Services | Aveda Technologies',
  description: 'We design beautiful, functional, and user-centric interfaces that drive engagement, increase conversions, and provide exceptional user experiences.',
};

export default function UiUxDesignPage() {
  const uiuxProjects = portfolioProjects.filter(p => ['b2b-healthtech-ui-ux-overhaul', 'ai-sales-crm', 'yoga-app'].includes(p.slug)).slice(0, 3);

  const processSteps = [
    { icon: Fingerprint, title: 'User Research & Personas', description: 'Deeply understanding your users to build products they love.' },
    { icon: BoxSelect, title: 'Wireframing & Prototyping', description: 'Structuring and testing user flow before writing a single line of code.' },
    { icon: Wand2, title: 'Intuitive UI Design', description: 'Creating visually stunning and easy-to-navigate interface design systems.' },
    { icon: SearchCheck, title: 'Usability Testing', description: 'Ensuring the final product is flawless and meets conversion metrics.' },
  ];

  const tools = [
    { icon: Figma, name: 'Figma' },
    { icon: Box, name: 'Adobe XD' },
    { icon: Gem, name: 'Sketch' },
    { icon: PenTool, name: 'Prototyping' },
    { icon: Bot, name: 'AI Design Engines' },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="uiux-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#uiux-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>UI/UX &amp; Design Systems</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            Intuitive UI/UX for exceptional user experiences
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            We design user-centric digital interfaces, product wireframes, and scalable enterprise design systems that maximize engagement and conversion.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asChild size="lg" className="h-13 px-8 text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all">
              <Link href="/contact?service=UI%2FUX+Design">Get Design Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Functional Beauty Section */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Functional Beauty, Built for Conversion
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              Our design process balances aesthetics with user research and conversion optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.title} className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <step.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950 mb-2">{step.title}</h3>
                <p className="font-inter text-[10px] text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Our Design Showcase
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              See how we've crafted exceptional user experiences for global clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uiuxProjects.map((project) => (
              <Link key={project.slug} href={`/works#${project.slug}`} className="group block">
                <div className="relative h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:-translate-y-1">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                    <h3 className="font-soehne text-sm sm:text-base font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="border-white/20 bg-white/10 text-white backdrop-blur-md text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950 mb-6">
            Design Tools Stack
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col items-center gap-3">
                  <tool.icon className="h-9 w-9 text-slate-700 group-hover:text-red-600 transition-colors" />
                  <p className="font-soehne text-[10px] font-bold uppercase tracking-wider text-slate-900">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Card */}
      <CtaSection
        badgeText="Let's Collaborate"
        title="Ready to Create an Unforgettable User Experience?"
        description="Partner with our product design team to craft user-centric interfaces and intuitive digital products."
        primaryCtaText="Start Project"
        primaryCtaLink="/contact?service=UI%2FUX+Design"
        secondaryCtaText="Book Discovery Call"
        secondaryCtaLink="https://wa.me/919532758070"
      />

    </div>
  );
}
