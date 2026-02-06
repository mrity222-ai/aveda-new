import Image from 'next/image';
import { BrainCircuit, Target, TrendingUp, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

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
      icon: Users,
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

  const certifications = [
    { name: 'ISO 27001 Certified', imageId: 'cert-iso' },
    { name: 'SOC 2 Compliant', imageId: 'cert-soc2' },
    { name: 'Google Cloud Partner', imageId: 'cert-gcp' },
    { name: 'AWS Certified', imageId: 'cert-aws' },
    { name: 'Microsoft Partner', imageId: 'cert-msft' },
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
      <section className="bg-secondary py-20 md:py-28">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">What Makes Us Different</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our core principles ensure we deliver unparalleled value and innovation.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="group rounded-lg p-6 transition-all duration-300 hover:bg-muted/50">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance Section */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Certifications & Compliance</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Officially recognized. Fully compliant. Enterprise ready.
          </p>
          <div className="mt-16 grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
            {certifications.map((cert) => {
              const image = PlaceHolderImages.find((img) => img.id === cert.imageId);
              return (
                <div key={cert.name} className="group flex flex-col items-center justify-center gap-4 text-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full bg-muted transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={cert.name}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <p className="font-semibold">{cert.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
