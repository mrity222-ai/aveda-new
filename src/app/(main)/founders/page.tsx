'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Target, Cog, BrainCircuit, Sprout, Quote, GraduationCap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';

const allGalleryItems = [
  {
    id: 'gallery-field-work',
    title: 'Agritech Field Work',
    category: 'Agritech Field Work',
    image: PlaceHolderImages.find(p => p.id === 'p-gramik-connect')!,
    width: 500,
    height: 700
  },
  {
    id: 'gallery-ai-research',
    title: 'AI Research',
    category: 'AI Research',
    image: PlaceHolderImages.find(p => p.id === 'p-ai-sales-crm')!,
    width: 500,
    height: 400
  },
  {
    id: 'gallery-workshop',
    title: 'Events & Workshops',
    category: 'Events & Workshops',
    image: PlaceHolderImages.find(p => p.id === 'p-ed-tech')!,
    width: 500,
    height: 600
  },
  {
    id: 'gallery-team',
    title: 'Team Innovators',
    category: 'Team Innovators',
    image: PlaceHolderImages.find(p => p.id === 'about-us-image')!,
    width: 500,
    height: 500
  },
  {
    id: 'gallery-iit-kanpur',
    title: 'IIT Kanpur Session',
    category: 'Events & Workshops',
    image: PlaceHolderImages.find(p => p.id === 'p-corporate-website')!,
    width: 500,
    height: 400,
  },
  {
      id: 'gallery-robotics',
      title: 'Robotics & Automation',
      category: 'AI Research',
      image: PlaceHolderImages.find(p => p.id === 'p-enterprise-erp')!,
      width: 500,
      height: 650
  }
];

const galleryCategories = ['All', 'Agritech Field Work', 'AI Research', 'Events & Workshops', 'Team Innovators'];


export default function FoundersPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
      if (activeCategory === 'All') return allGalleryItems;
      return allGalleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);
  
  const founders = [
    {
      name: 'Raj Mani Yadav',
      designation: 'Founder & AI Tech Strategist',
      imageId: 'leader-raj',
      newDesignation: 'Founder | AI & Agritech Innovation Leader',
      bio: "Raj Mani Yadav is a technology-driven entrepreneur with a strong focus on artificial intelligence and scalable digital systems. He leads the company’s product vision and technical strategy, ensuring innovative solutions that solve real-world problems. With a passion for emerging technologies, he is dedicated to building future-ready platforms that empower businesses and communities.",
      quote: "Technology is powerful when it reaches the ground level and changes lives.",
      expertise: [
        { icon: Cog, title: 'Mechanical Precision' },
        { icon: BrainCircuit, title: 'AI Innovation' },
        { icon: Sprout, title: 'Agritech Vision' },
      ],
      education: [
        {
          specialization: 'Mechanical',
          degree: 'Diploma in Engineering',
          institution: 'BTEUP',
          icon: Cog,
        },
        {
          specialization: 'Computer Science',
          degree: 'B.Tech (Pursuing 3rd Year)',
          institution: 'AKTU',
          icon: GraduationCap,
        },
        {
          specialization: 'AI Innovation',
          degree: 'E-Summit 2025',
          institution: 'IIT Kanpur',
          icon: BrainCircuit,
        },
      ]
    }
  ];

  const raj = founders[0];
  const rajImage = PlaceHolderImages.find(p => p.id === raj.imageId);
  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-background');

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
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-accent md:text-6xl">
            Meet Our Founder
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            The visionary behind the innovation at Aveda Technologies.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-28">
        <div className="container space-y-24">
          
          {/* Raj Mani Yadav */}
          <div className="group">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-1 flex justify-center">
                    {rajImage && (
                    <div className="relative aspect-square w-64 h-64">
                        <Image
                        src={rajImage.imageUrl}
                        alt={raj.name}
                        fill
                        className="rounded-full object-cover grayscale shadow-lg ring-4 ring-background transition-all duration-500 group-hover:grayscale-0 group-hover:ring-primary"
                        data-ai-hint={rajImage.imageHint}
                        />
                    </div>
                    )}
                </div>
                <div className="md:col-span-2">
                    <h2 className="font-headline text-3xl font-bold text-primary">{raj.name}</h2>
                    <p className="mt-2 font-semibold text-accent">{raj.newDesignation}</p>
                    <Separator className="my-6" />
                    <p className="text-lg text-muted-foreground">{raj.bio}</p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {raj.expertise.map(item => (
                            <div key={item.title} className="flex items-center gap-3 rounded-lg border bg-card p-3 soft-shadow">
                                <item.icon className="h-6 w-6 text-primary" />
                                <span className="text-sm font-semibold text-muted-foreground">{item.title}</span>
                            </div>
                        ))}
                    </div>
                    <Card className="mt-8 bg-secondary border-primary/10">
                        <CardContent className="p-6 flex items-start gap-4">
                            <Quote className="h-8 w-8 text-primary/50 flex-shrink-0 mt-1" />
                            <blockquote className="text-lg italic text-muted-foreground">"{raj.quote}"</blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Education Section for Raj */}
            <div className="pt-20">
                <h3 className="text-center font-headline text-2xl font-bold text-accent md:text-3xl mb-16">
                    Education & Credentials
                </h3>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                    {raj.education.map((edu, index) => (
                        <div key={edu.institution} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                            <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn("relative rounded-lg border bg-card p-6 soft-shadow", index % 2 === 0 ? 'text-left' : 'text-right')}>
                                    <p className="font-semibold text-primary">{edu.specialization}</p>
                                    <h4 className="font-headline text-xl font-bold text-accent">{edu.degree}</h4>
                                    <p className="text-muted-foreground">{edu.institution}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary/50">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <edu.icon className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-background py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl mb-8">Our Mission</h2>
            <Card className="max-w-4xl mx-auto p-8 border-primary/20 bg-card/60 backdrop-blur-sm soft-shadow">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-primary mx-auto mb-6" />
                <p className="text-2xl font-headline text-foreground">
                  To drive India’s growth through Agritech, Robotics, and AI Automation by building intelligent logistics and digital innovation ecosystems.
                </p>
              </CardContent>
            </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-accent py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-accent-foreground md:text-4xl">Our Vision in Action</h2>
            <p className="mt-4 max-w-2xl mx-auto text-accent-foreground/80">
              A gallery of our work, research, and team moments that drive our mission forward.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'secondary'}
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full px-4 py-1 h-auto text-sm"
                >
                    {category}
                </Button>
            ))}
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 break-inside-avoid soft-shadow">
                <Image
                  src={item.image.imageUrl}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={item.image.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300"></div>
                 <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold text-lg drop-shadow-md">{item.title}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
