'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Target, BrainCircuit, Sprout, Briefcase, TrendingUp, GraduationCap, Quote, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function DeepakYadavPage() {
  
  const deepak = {
    name: 'Deepak Yadav',
    designation: 'Founder | Innovation & Growth Leader',
    imageId: 'leader-deepak',
    bio: "Deepak Yadav is a growth-focused entrepreneur with a strong passion for innovation, business strategy, and scalable digital ecosystems. He plays a key role in shaping the company’s long-term vision, partnerships, and market expansion strategies, ensuring sustainable and impactful growth. With a deep interest in emerging technologies, agritech transformation, and AI-enabled systems, Deepak is committed to building solutions that bridge technology with real-world business and community needs across India.",
    quote: "True innovation is measured by the growth and impact it creates on the ground.",
    focusAreas: [
      { icon: Briefcase, title: 'Business Strategy' },
      { icon: TrendingUp, title: 'Innovation & Growth' },
      { icon: Sprout, title: 'Agritech & Digital Expansion' },
    ],
    education: [
      {
        category: 'Business & Innovation',
        items: ['Entrepreneurial Leadership', 'Startup & Growth Strategy'],
        icon: Briefcase,
      },
      {
        category: 'Technology Exposure',
        items: ['Innovation Ecosystems', 'AI & Digital Transformation'],
        icon: BrainCircuit,
      },
      {
        category: 'Industry Engagement',
        items: ['Startup Events & Workshops', 'Technology & Business Summits'],
        icon: Star,
      },
    ]
  };

  const deepakImage = PlaceHolderImages.find(p => p.id === deepak.imageId);
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const aboutUsImage = PlaceHolderImages.find(p => p.id === 'about-us-image');
  const missionBgImage = PlaceHolderImages.find(p => p.id === 'blog-brain-city');


  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          {heroBgImage && (
            <Image
              src={heroBgImage.imageUrl}
              alt="Background"
              fill
              className="object-cover"
              data-ai-hint={heroBgImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-accent md:text-6xl">
            Meet Our Founder
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            The growth visionary driving innovation at Aveda Technologies.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative bg-background py-20 md:py-28">
         <div className="absolute inset-0 z-0 opacity-5">
          {aboutUsImage && (
            <Image
              src={aboutUsImage.imageUrl}
              alt="Background"
              fill
              className="object-cover"
              data-ai-hint={aboutUsImage.imageHint}
            />
          )}
        </div>
        <div className="container relative z-10">
          
          {/* Deepak Yadav */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-1">
                    {deepakImage && (
                    <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
                        <Image
                        src={deepakImage.imageUrl}
                        alt={deepak.name}
                        fill
                        className="object-cover"
                        data-ai-hint={deepakImage.imageHint}
                        />
                    </div>
                    )}
                </div>
                <div className="md:col-span-2">
                    <h2 className="font-headline text-3xl font-bold text-primary">{deepak.name}</h2>
                    <p className="mt-2 font-semibold text-accent">{deepak.designation}</p>
                    <Separator className="my-6" />
                    <p className="text-lg text-muted-foreground">{deepak.bio}</p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {deepak.focusAreas.map(item => (
                            <div key={item.title} className="flex items-center gap-3 rounded-lg border bg-card p-3 soft-shadow">
                                <item.icon className="h-6 w-6 text-primary" />
                                <span className="text-sm font-semibold text-muted-foreground">{item.title}</span>
                            </div>
                        ))}
                    </div>
                    <Card className="mt-8 bg-secondary border-primary/10">
                        <CardContent className="p-6 flex items-start gap-4">
                            <Quote className="h-8 w-8 text-primary/50 flex-shrink-0 mt-1" />
                            <blockquote className="text-lg italic text-muted-foreground">"{deepak.quote}"</blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Education Section for Deepak */}
            <div className="pt-20">
                <h3 className="text-center font-headline text-2xl font-bold text-accent md:text-3xl mb-16">
                    Education & Credentials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {deepak.education.map((edu, index) => (
                        <Card key={index} className="border bg-card p-6 soft-shadow rounded-3xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <edu.icon className="h-8 w-8" />
                                </div>
                                <h4 className="font-headline text-xl font-bold text-accent">{edu.category}</h4>
                            </div>
                            <ul className="space-y-2">
                                {edu.items.map(item => (
                                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                        <GraduationCap className="h-4 w-4 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            {missionBgImage && (
                <Image
                    src={missionBgImage.imageUrl}
                    alt="Background"
                    fill
                    className="object-cover"
                    data-ai-hint={missionBgImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="container relative z-10 text-center">
            <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl mb-8">Our Mission</h2>
            <Card className="max-w-4xl mx-auto p-8 border-primary/20 bg-card/60 backdrop-blur-sm soft-shadow">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-primary mx-auto mb-6" />
                <p className="text-2xl font-headline text-foreground">
                  To drive India’s growth through Agritech, Robotics, and AI Automation by building intelligent logistics and scalable digital innovation ecosystems.
                </p>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
