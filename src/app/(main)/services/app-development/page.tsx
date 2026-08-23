import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CtaSection from '@/components/home/cta-section';
import HeroBackground from '@/components/common/hero-background';
import ScrollReveal from '@/components/common/scroll-reveal';
import {
  Smartphone,
  Briefcase,
  LayoutGrid,
  GitMerge,
  Zap,
  ShieldCheck,
  Scaling,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Code,
  Rocket,
  Code2,
  Cpu,
  Server,
  Flame,
  Cloud,
  GitBranch,
  Database,
  Phone,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { portfolioProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Aveda Technologies',
  description: 'From idea to launch, we build secure, scalable, and engaging mobile apps for iOS and Android that drive real business growth.',
};

export default function AppDevelopmentPage() {
  const appProjects = portfolioProjects.filter(p => ['yalla-drive', 'rozana', 'yoga-app'].includes(p.slug)).slice(0, 3);

  const whatWeBuild = [
    {
      icon: Smartphone,
      title: 'Android & iOS Apps',
      description: 'Native and cross-platform apps with smooth performance, tailored to your brand.',
    },
    {
      icon: Briefcase,
      title: 'Business Applications',
      description: 'Custom apps designed to streamline your operations, improve efficiency, and scale fast.',
    },
    {
      icon: LayoutGrid,
      title: 'Admin Panels & Dashboards',
      description: 'Powerful control panels with real-time data visualization and insightful analytics.',
    },
    {
      icon: GitMerge,
      title: 'API Integrations',
      description: 'Secure integration with third-party tools, payment gateways, CRMs, and more.',
    },
  ];

  const processSteps = [
    { icon: Lightbulb, title: "Idea & Strategy", description: "We workshop your idea, define scope, and create a roadmap for launch." },
    { icon: PenTool, title: "UI / UX Design", description: "Our designers create intuitive, beautiful interfaces for exceptional UX." },
    { icon: Code, title: "App Development", description: "Clean, scalable code for both iOS and Android platforms." },
    { icon: ShieldCheck, title: "Testing & Security", description: "Rigorous testing to ensure your app is bug-free and secure." },
    { icon: Rocket, title: "Launch & Support", description: "App store submission and continuous ongoing support." },
  ];

  const technologies = [
    { icon: Smartphone, name: 'Flutter' },
    { icon: Code2, name: 'React Native' },
    { icon: Cpu, name: 'Kotlin' },
    { icon: Code, name: 'Swift' },
    { icon: Server, name: 'Node.js' },
    { icon: Flame, name: 'Firebase' },
    { icon: Cloud, name: 'AWS' },
    { icon: GitBranch, name: 'GraphQL'},
    { icon: Database, name: 'PostgreSQL'}
  ];

  const whyChooseUs = [
    'High-performance & secure mobile apps',
    'Scalable architecture engineered for growth',
    'Clean, intuitive UI/UX design systems',
    'Integration of autonomous AI-powered features',
    'Dedicated ongoing support & maintenance',
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="app-dev-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#app-dev-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section - 3D Isometric Dark Pattern */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050505] text-white border-b border-slate-800/80 overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Floating Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-2xs mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span>Mobile App Development</span>
          </div>

          {/* Big Centered Headline */}
          <h1 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6">
            High-performance mobile app development for iOS &amp; Android
          </h1>

          {/* Centered Description */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            From initial prototype to store deployment, we engineer secure, scalable, and intuitive mobile applications that drive engagement and business growth.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asChild size="lg" className="h-13 px-8 text-sm font-bold bg-slate-950 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all">
              <Link href="/contact?service=App+Development">Start Your App Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              What We Build
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              Custom mobile applications engineered for high engagement and enterprise scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeBuild.map((item) => (
              <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950 mb-2">{item.title}</h3>
                <p className="font-inter text-[10px] text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Our App Showcase
            </h2>
            <p className="font-inter text-slate-700 text-xs sm:text-sm mt-2">
              Explore recent mobile products engineered by Aveda Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appProjects.map((project) => (
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

      {/* Technologies Section */}
      <section className="py-8 md:py-11 border-b border-slate-200">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950 mb-6">
            Mobile Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col items-center gap-3">
                  <tech.icon className="h-9 w-9 text-slate-700 group-hover:text-red-600 transition-colors" />
                  <p className="font-soehne text-[10px] font-bold uppercase tracking-wider text-slate-900">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 md:py-11">
        <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-soehne text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-950">
              Why Choose Us for Your App Development
            </h2>
            <p className="font-inter text-xs sm:text-sm text-slate-700 leading-relaxed">
              We combine technical mobile expertise with strategic vision to deliver apps that not only function flawlessly but also achieve long-term commercial objectives.
            </p>

            <ul className="space-y-3 pt-2">
              {whyChooseUs.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-6 text-center border border-slate-200 shadow-xs">
              <Zap className="mx-auto h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-soehne font-bold text-slate-900 text-xs">Ultra Fast Performance</h3>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center border border-slate-200 shadow-xs">
              <ShieldCheck className="mx-auto h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-soehne font-bold text-slate-900 text-xs">Bank-Grade Security</h3>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center border border-slate-200 shadow-xs">
              <Scaling className="mx-auto h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-soehne font-bold text-slate-900 text-xs">Scalable Cloud Backend</h3>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center border border-slate-200 shadow-xs">
              <PenTool className="mx-auto h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-soehne font-bold text-slate-900 text-xs">Award-Winning UX</h3>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer Card */}
      <CtaSection
        badgeText="Let's Collaborate"
        title="Have an app idea? Let's build your next digital product."
        description="Partner with our team of expert iOS, Android, and Flutter engineers to transform your app vision into reality."
        primaryCtaText="Start Project"
        primaryCtaLink="/contact?service=App+Development"
        secondaryCtaText="Book Discovery Call"
        secondaryCtaLink="https://wa.me/919532758070"
      />

    </div>
  );
}
