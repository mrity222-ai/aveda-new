
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuit, Target, TrendingUp, Users, Twitter, Linkedin, MoveRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Aveda Technologies, an AI-first digital company powering businesses, leaders, and organizations with AI-driven technology, marketing, and political intelligence.',
  openGraph: {
    title: 'About Us',
    description: 'Learn about Aveda Technologies, an AI-first digital company powering businesses, leaders, and organizations with AI-driven technology, marketing, and political intelligence.',
  },
  twitter: {
    title: 'About Us',
    description: 'Learn about Aveda Technologies, an AI-first digital company powering businesses, leaders, and organizations with AI-driven technology, marketing, and political intelligence.',
  }
};

export default function AboutPage() {
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
      name: 'Raj Mani Yadav',
      designation: 'AI & Agritech Innovation Leader',
      imageId: 'leader-raj',
      bioLink: '/founders',
    }
  ];

  const teamMembers = [
    {
      name: 'Priyanshu',
      role: 'Web Developer',
      imageId: 'testimonial-1',
      bgColor: 'bg-primary/10',
    },
    {
      name: 'Ajeet',
      role: 'Web Developer',
      imageId: 'testimonial-2',
      bgColor: 'bg-accent/10',
    },
    {
      name: 'Deepak Yadav',
      role: 'Innovation & Growth Lead',
      imageId: 'leader-deepak',
      bgColor: 'bg-accent/10',
    },
  ];


  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/vio/bg.jpg"
            className="h-full w-full object-cover"
            src="/vio/bg.mp4"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="font-headline text-sm uppercase tracking-widest text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
            About Aveda Technologies
          </p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-white md:text-6xl animate-blur-in">
            Building Intelligent Digital & Political Systems with AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Aveda Technologies helps businesses, leaders, and organizations grow through AI-driven technology, marketing, and political intelligence.
          </p>
        </div>
      </section>

      {/* Our Technology Partners Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container relative z-10 text-center">
          <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary animate-in fade-in">
            Our Technology Partners
          </Badge>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl animate-in fade-in slide-in-from-bottom-4 duration-700 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Innovating with the World’s Best
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700">
            We collaborate with global technology leaders to build secure, scalable, and cutting-edge solutions.
          </p>

          <div className="mt-16 w-full overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="relative h-20 w-48 shrink-0">
                  <Image
                    src={partner.imageUrl}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-4 grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left Visual */}
            <div className="relative flex h-96 items-center justify-center md:h-[450px] animate-in fade-in zoom-in-90 duration-700">
              <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse" />
              <BrainCircuit className="relative h-48 w-48 text-primary" />
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-700">
              <div>
                <p className="mb-2 font-semibold text-primary">Who We Are</p>
                <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Powering Your Vision with AI-First Innovation
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Aveda Technologies is an AI-first digital company delivering advanced web, mobile, marketing, automation, and political campaigning solutions. We combine technology, data, and strategy to create measurable digital impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border bg-card p-6 soft-shadow">
                      <h3 className="font-headline text-3xl font-bold text-primary">100+</h3>
                      <p className="mt-1 text-muted-foreground">Projects Delivered</p>
                  </div>
                  <div className="rounded-xl border bg-card p-6 soft-shadow">
                      <h3 className="font-headline text-3xl font-bold text-primary">AI-Driven</h3>
                      <p className="mt-1 text-muted-foreground">Solutions</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Us Different Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container relative z-10 text-center">
            <p className="font-headline text-sm uppercase tracking-widest text-primary animate-in fade-in">
                What Makes Us Different
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-headline text-3xl font-bold md:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our core principles ensure we deliver unparalleled value and innovation.
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {values.map((value, index) => (
                    <div key={value.title} 
                         className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary soft-shadow animate-in fade-in slide-in-from-bottom-12 duration-700"
                         style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                <value.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Our Team of Innovators
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A global team building future-ready technology solutions.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 max-w-md mx-auto">
            {leadership.map((leader, index) => {
              const image = PlaceHolderImages.find((p) => p.id === leader.imageId);
              return (
                <Card key={leader.name} className="group overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 soft-shadow animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                    <CardContent className="p-6">
                        {image && (
                        <div className="relative mx-auto mb-6 h-40 w-40">
                            <Image
                            src={image.imageUrl}
                            alt={`Portrait of ${leader.name}, ${leader.designation}`}
                            fill
                            className="rounded-full object-cover shadow-lg transition-all duration-300 group-hover:shadow-primary/30 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                            />
                        </div>
                        )}
                        <h3 className="font-headline text-2xl font-bold text-accent">
                            {leader.name}
                        </h3>
                        <p className="mt-1 text-muted-foreground">{leader.designation}</p>
                        <Button asChild variant="link" className="mt-4 text-primary">
                        <Link href={leader.bioLink}>
                            View Bio <MoveRight className="ml-2 h-4 w-4" />
                        </Link>
                        </Button>
                    </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* New Team Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-12 duration-700">
              <p className="text-primary font-semibold mb-2">Meet Our Team:</p>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-accent">Bringing Passion and Expertise Together</h2>
            </div>
            <p className="text-muted-foreground text-lg animate-in fade-in slide-in-from-right-12 duration-700">
              We are a team of passionate innovators, strategists, and creators dedicated to building exceptional digital experiences. Our collective expertise drives our commitment to excellence and client success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {teamMembers.map((member, index) => {
              const image = PlaceHolderImages.find((p) => p.id === member.imageId);
              return (
                <div key={member.name} className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className={`relative w-48 h-56 rounded-t-full overflow-hidden ${member.bgColor}`}>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        className="object-cover object-top"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-accent">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Recognition Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container relative z-10 text-center">
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary animate-in fade-in">
                Our Credentials
            </Badge>
          <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nationally Recognized. Globally Trusted.</h2>
          
          <div className="mt-16">
            <div className="flex w-full snap-x justify-start gap-8 overflow-x-auto pb-4 md:justify-center md:flex-wrap md:overflow-visible md:pb-0">
              {recognitions.map((rec, index) => {
                const image = PlaceHolderImages.find(p => p.id === rec.imageId);
                return (
                  <div key={rec.name} 
                       className="group w-40 flex-shrink-0 snap-center flex flex-col items-center justify-center gap-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-700"
                       style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border bg-card p-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 soft-shadow">
                      {image && (
                         <div className="relative h-12 w-12">
                          <Image 
                            src={image.imageUrl} 
                            alt={`${rec.name} Recognition Logo`} 
                            fill
                            className="object-contain transition-all duration-300"
                            data-ai-hint={image.imageHint}
                            />
                         </div>
                      )}
                    </div>
                    <p className="font-semibold text-sm text-muted-foreground transition-colors group-hover:text-foreground">{rec.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
