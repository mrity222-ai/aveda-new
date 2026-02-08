
import Image from 'next/image';
import Link from 'next/link';
import { Target, Cog, BrainCircuit, Sprout, Quote, GraduationCap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function FoundersPage() {
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
          degree: 'B.Tech Graduate',
          institution: 'AKTU',
          icon: GraduationCap,
        },
        {
          specialization: 'AI Innovation',
          degree: 'Advanced Exposure',
          institution: 'IIT Kanpur',
          icon: BrainCircuit,
        },
      ]
    },
    {
      name: 'Vinod Kumar',
      designation: 'Co-Founder & Technology Consultant',
      imageId: 'leader-vinod',
      bio: "Vinod Kumar brings deep expertise in technology consulting and system architecture. He plays a key role in shaping long-term technology roadmaps and guiding innovation across products. His approach combines strategic thinking with practical execution to deliver sustainable and high-performance digital solutions."
    }
  ];

  const raj = founders[0];
  const vinod = founders[1];
  const rajImage = PlaceHolderImages.find(p => p.id === raj.imageId);
  const vinodImage = PlaceHolderImages.find(p => p.id === vinod.imageId);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-accent md:text-6xl">
            Meet Our Founders
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            The visionaries behind the innovation at Aveda Digital.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-28">
        <div className="container space-y-24">
          
          {/* Raj Mani Yadav */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-1">
                    {rajImage && (
                    <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg soft-shadow">
                        <Image
                        src={rajImage.imageUrl}
                        alt={raj.name}
                        fill
                        className="object-cover"
                        data-ai-hint={rajImage.imageHint}
                        />
                    </div>
                    )}
                </div>
                <div className="md:col-span-2">
                    <h2 className="font-headline text-3xl font-bold text-primary">{raj.name}</h2>
                    <p className="mt-2 font-semibold text-accent">{raj.newDesignation}</p>
                    <Separator className="my-6" />
                    <p className="text-muted-foreground text-lg">{raj.bio}</p>
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

          {/* Vinod Kumar */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 md:order-last">
                    {vinodImage && (
                      <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-lg soft-shadow">
                        <Image
                          src={vinodImage.imageUrl}
                          alt={vinod.name}
                          fill
                          className="object-cover"
                          data-ai-hint={vinodImage.imageHint}
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 md:order-first">
                    <h2 className="font-headline text-3xl font-bold text-accent">{vinod.name}</h2>
                    <p className="mt-2 font-semibold text-primary">{vinod.designation}</p>
                    <Separator className="my-4" />
                    <p className="text-muted-foreground text-lg">{vinod.bio}</p>
                  </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl mb-8">Our Mission</h2>
            <Card className="max-w-4xl mx-auto p-8 border-primary/20 bg-card soft-shadow">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                <p className="text-2xl font-headline text-foreground">
                  To drive India’s growth through Agritech, Robotics, and AI Automation by building intelligent logistics and digital innovation ecosystems.
                </p>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
