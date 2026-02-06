import Image from 'next/image';
import { BrainCircuit, Target, TrendingUp, Users, Shield, Award, Star, Factory, Power } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const values = [
    {
      icon: BrainCircuit,
      title: 'AI-First Approach',
      description: 'We integrate AI into every solution to deliver intelligent, automated, and predictive results.',
    },
    {
      icon: Target,
      title: 'Data-Driven Strategies',
      description: 'Our decisions are backed by data, ensuring precision, impact, and measurable outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Performance & ROI Focused',
      description: 'We are committed to delivering tangible returns and sustainable growth for all our clients.',
    },
    {
      icon: Shield,
      title: 'Political & Business Intelligence',
      description: 'We provide a unique blend of tech expertise and strategic insights for complex challenges.',
    },
  ];

  const partners = [
    { name: 'Google Cloud' },
    { name: 'Microsoft Azure' },
    { name: 'Amazon Web Services' },
    { name: 'Next.js' },
    { name: 'Vercel' },
    { name: 'Figma' },
    { name: 'Genkit' },
  ];

  const recognitions = [
    { name: 'ISO Certified', icon: Shield },
    { name: 'MSME Registered', icon: Award },
    { name: 'Startup India', icon: Star },
    { name: 'Made in India', icon: Factory },
    { name: 'Digital India', icon: Power },
  ];


  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          {heroBgImage && (
            <Image
              src={heroBgImage.imageUrl}
              alt={heroBgImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroBgImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="font-headline text-sm uppercase tracking-widest text-primary">
            About Aveda Technologies
          </p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Building Intelligent Digital & Political Systems with AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Aveda Technologies helps businesses, leaders, and organizations grow through AI-driven technology, marketing, and political intelligence.
          </p>
        </div>
      </section>

      {/* Our Technology Partners Section */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We collaborate with trusted technology leaders to deliver secure and scalable digital solutions.
          </p>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-75">
            {partners.map((partner) => (
               <span key={partner.name} className="text-xl font-semibold text-muted-foreground">{partner.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left Visual */}
            <div className="relative flex h-96 items-center justify-center md:h-[450px]">
              <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse" />
              <BrainCircuit className="relative h-48 w-48 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]" />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Who We Are</p>
                <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                  Powering Your Vision with AI-First Innovation
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Aveda Technologies is an AI-first digital company delivering advanced web, mobile, marketing, automation, and political campaigning solutions. We combine technology, data, and strategy to create measurable digital impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border/20 bg-card/50 p-6 backdrop-blur-md">
                      <h3 className="font-headline text-3xl font-bold text-primary">100+</h3>
                      <p className="mt-1 text-muted-foreground">Projects Delivered</p>
                  </div>
                  <div className="rounded-xl border border-border/20 bg-card/50 p-6 backdrop-blur-md">
                      <h3 className="font-headline text-3xl font-bold text-primary">AI-Driven</h3>
                      <p className="mt-1 text-muted-foreground">Solutions</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Us Different Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}/>
        <div className="container relative z-10 text-center">
            <p className="font-headline text-sm uppercase tracking-widest text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]">
                What Makes Us Different
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-headline text-3xl font-bold md:text-4xl">
                Our core principles ensure we deliver unparalleled value and innovation.
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {values.map((value) => (
                    <div key={value.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary via-transparent to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                                <value.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Trust & Recognition Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container relative z-10 text-center">
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary backdrop-blur-sm shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                Our Credentials
            </Badge>
          <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Nationally Recognized. Globally Trusted.</h2>
          
          <div className="mt-16">
            <div className="flex w-full snap-x justify-start gap-8 overflow-x-auto pb-4 md:justify-center md:flex-wrap md:overflow-visible md:pb-0">
              {recognitions.map((rec) => (
                <div key={rec.name} className="group w-40 flex-shrink-0 snap-center flex flex-col items-center justify-center gap-4 text-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-2xl group-hover:shadow-primary/20">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary via-transparent to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                    <rec.icon className="relative h-12 w-12 text-white transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
                  </div>
                  <p className="font-semibold text-sm text-muted-foreground transition-colors group-hover:text-foreground">{rec.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
