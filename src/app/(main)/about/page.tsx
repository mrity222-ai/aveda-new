import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuit, Target, TrendingUp, Users, MoveRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
      bioLink: '/founders',
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
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/vio/bg.jpg"
            className="h-full w-full object-cover opacity-60"
            src="/vio/bg.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
            About Aveda Technologies
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-7xl animate-blur-in leading-[1.1]">
            Building <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent drop-shadow-primary-glow">Intelligent Digital</span> Systems with AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Aveda Technologies is a premier Software Development Company and AI Automation provider helping businesses across India, Canada, and Australia scale through custom CRM ERP solutions and digital transformation.
          </p>
        </div>
      </section>

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

      {/* Team */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
              Meet Our Team of Innovators
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A global team of software engineers and AI specialists building future-ready technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, index) => {
              const image = 'imageUrl' in leader && leader.imageUrl 
                ? { imageUrl: leader.imageUrl, imageHint: 'portrait' }
                : PlaceHolderImages.find((p) => p.id === (leader as any).imageId);
              return (
                <Card key={leader.name} className="group overflow-hidden rounded-3xl border-none bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 soft-shadow">
                    <CardContent className="p-10 text-center">
                        <div className="relative mx-auto mb-8 h-40 w-40">
                            {image ? (
                                <Image
                                src={image.imageUrl}
                                alt={`Portrait of ${leader.name}`}
                                fill
                                className="rounded-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                                />
                            ) : (
                                <div className="h-full w-full rounded-full bg-muted flex items-center justify-center">
                                    <Users className="h-16 w-16 text-muted-foreground" />
                                </div>
                            )}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 group-hover:scale-125 transition-transform duration-700" />
                        </div>
                        <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                            {leader.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-widest">{leader.designation}</p>
                        <Button asChild variant="link" className="mt-6 text-primary h-auto p-0 font-bold hover:no-underline group/btn">
                            <Link href={leader.bioLink}>
                                View Bio <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
              );
            })}
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
