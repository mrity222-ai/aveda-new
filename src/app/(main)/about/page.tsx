
import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuit, Target, TrendingUp, Users, Twitter, Linkedin, MoveRight } from 'lucide-react';
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
      designation: 'Founder | AI & Agritech Innovation Leader',
      imageId: 'leader-raj',
      bioLink: '/founders',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Deepak Yadav',
      designation: 'Co-Founder & Innovation & Growth Lead',
      imageId: 'leader-deepak',
      bioLink: '/deepak-yadav',
      socials: { twitter: '#', linkedin: '#' }
    }
  ];

  const Hexagon = ({
    name,
    imageUrl,
    delay,
  }: {
    name: string;
    imageUrl: string;
    delay: string;
  }) => (
    <div
      className="group relative flex h-[115.47px] w-[100px] animate-in items-center justify-center zoom-in-90 fade-in transition-all duration-300 hover:z-10 hover:scale-110 hover:-translate-y-2"
    >
      <div
        className="absolute inset-0 border bg-card/80 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20"
        style={{
          clipPath:
            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      />
      <div className="relative h-8 w-16">
        <Image
          src={imageUrl}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );


  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          {heroBgImage && (
            <Image
              src={heroBgImage.imageUrl}
              alt="Background"
              fill
              className="object-cover"
              data-ai-hint={heroBgImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>
        </div>
        <div className="container relative z-10 text-center">
          <p className="font-headline text-sm uppercase tracking-widest text-primary">
            About Aveda Technologies
          </p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight text-accent md:text-6xl">
            Building Intelligent Digital & Political Systems with AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Aveda Technologies helps businesses, leaders, and organizations grow through AI-driven technology, marketing, and political intelligence.
          </p>
        </div>
      </section>

      {/* Our Technology Partners Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container relative z-10 text-center">
          <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
            Our Technology Partners
          </Badge>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-accent md:text-5xl">
            Innovating with the World’s Best
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We collaborate with global technology leaders to build secure, scalable, and cutting-edge solutions.
          </p>

          <div className="mt-16 flex h-full min-h-[500px] items-center justify-center sm:min-h-[600px]">
  <div
    className="
      flex origin-center flex-col items-center
      gap-y-[calc(-115.47px/4)]
      scale-75
      sm:scale-90
      md:scale-100
      lg:scale-110
      xl:scale-125
    "
  >
              {/* Row 1 */}
              <div className="flex gap-x-1">
                <Hexagon name={partners[0].name} imageUrl={partners[0].imageUrl} delay="300ms" />
                <Hexagon name={partners[1].name} imageUrl={partners[1].imageUrl} delay="400ms" />
              </div>
              {/* Row 2 */}
              <div className="flex gap-x-1">
                <Hexagon name={partners[2].name} imageUrl={partners[2].imageUrl} delay="500ms" />
                <Hexagon name={partners[3].name} imageUrl={partners[3].imageUrl} delay="600ms" />
                <Hexagon name={partners[4].name} imageUrl={partners[4].imageUrl} delay="700ms" />
              </div>
              {/* Row 3 */}
              <div className="flex gap-x-1">
                <Hexagon name={partners[5].name} imageUrl={partners[5].imageUrl} delay="800ms" />
                <Hexagon name={partners[6].name} imageUrl={partners[6].imageUrl} delay="900ms" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left Visual */}
            <div className="relative flex h-96 items-center justify-center md:h-[450px]">
              <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse" />
              <BrainCircuit className="relative h-48 w-48 text-primary" />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-semibold text-primary">Who We Are</p>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
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
            <p className="font-headline text-sm uppercase tracking-widest text-primary">
                What Makes Us Different
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-headline text-3xl font-bold text-accent md:text-4xl">
                Our core principles ensure we deliver unparalleled value and innovation.
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {values.map((value) => (
                    <div key={value.title} className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary soft-shadow">
                        <div className="relative">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                <value.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold text-accent">{value.title}</h3>
                            <p className="mt-2 text-muted-foreground">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-background py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 h-64 w-64 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 bg-gradient-to-tl from-accent/10 via-transparent to-transparent opacity-50 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                <div className="text-left">
                    <h2 className="font-headline text-4xl font-bold uppercase text-foreground md:text-5xl">
                        Meet Our Team of Innovators
                    </h2>
                    <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                        A global team building future-ready technology solutions.
                    </p>
                </div>
                <div className="relative hidden md:flex h-64 items-center justify-center">
                    <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow opacity-50" />
                    <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse opacity-50" />
                    <Users className="relative h-32 w-32 text-accent opacity-30" />
                </div>
            </div>
          
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {leadership.map((leader, index) => {
                const image = PlaceHolderImages.find(p => p.id === leader.imageId);
                return (
                    <div key={leader.name} className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:-translate-y-2">
                    {image && (
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                            src={image.imageUrl}
                            alt={leader.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={image.imageHint}
                        />
                        </div>
                    )}
                    <div className="mt-4 text-center">
                        <h3 className={cn(
                            "font-headline text-2xl font-bold text-foreground transition-colors duration-300",
                            "group-hover:text-primary"
                        )}>
                            {leader.name}
                        </h3>
                        <p className="mt-1 text-muted-foreground">{leader.designation}</p>
                        <Link href={leader.bioLink} className="mt-4 inline-flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            View Bio <MoveRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                    </div>
                )
                })}
            </div>
        </div>
      </section>

      {/* Trust & Recognition Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="container relative z-10 text-center">
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
                Our Credentials
            </Badge>
          <h2 className="mt-4 font-headline text-3xl font-bold text-accent md:text-4xl">Nationally Recognized. Globally Trusted.</h2>
          
          <div className="mt-16">
            <div className="flex w-full snap-x justify-start gap-8 overflow-x-auto pb-4 md:justify-center md:flex-wrap md:overflow-visible md:pb-0">
              {recognitions.map((rec) => {
                const image = PlaceHolderImages.find(p => p.id === rec.imageId);
                return (
                  <div key={rec.name} className="group w-40 flex-shrink-0 snap-center flex flex-col items-center justify-center gap-4 text-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border bg-card p-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 soft-shadow">
                      {image && (
                         <div className="relative h-12 w-12">
                          <Image 
                            src={image.imageUrl} 
                            alt={rec.name} 
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
