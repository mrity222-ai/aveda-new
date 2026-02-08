
import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function FoundersPage() {
  const founders = [
    {
      name: 'Raj Mani Yadav',
      designation: 'Founder & AI Tech Strategist',
      imageId: 'leader-raj',
      bio: "Raj Mani Yadav is a technology-driven entrepreneur with a strong focus on artificial intelligence and scalable digital systems. He leads the company’s product vision and technical strategy, ensuring innovative solutions that solve real-world problems. With a passion for emerging technologies, he is dedicated to building future-ready platforms that empower businesses and communities."
    },
    {
      name: 'Vinod Kumar',
      designation: 'Co-Founder & Technology Consultant',
      imageId: 'leader-vinod',
      bio: "Vinod Kumar brings deep expertise in technology consulting and system architecture. He plays a key role in shaping long-term technology roadmaps and guiding innovation across products. His approach combines strategic thinking with practical execution to deliver sustainable and high-performance digital solutions."
    },
    {
      name: 'Deepak Yadav',
      designation: 'Co-Founder & Innovation & Growth Lead',
      imageId: 'leader-deepak',
      bio: "Deepak Yadav drives business growth and innovation strategies. He focuses on market expansion, partnerships, and scaling operations. With a strong understanding of business dynamics, he ensures that ideas are transformed into impactful and profitable ventures."
    }
  ];

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
        <div className="container">
          <div className="space-y-24">
            {founders.map((founder, index) => {
              const image = PlaceHolderImages.find(p => p.id === founder.imageId);
              const isReversed = index % 2 !== 0;
              return (
                <div key={founder.name} className={`grid grid-cols-1 md:grid-cols-3 gap-12 items-center`}>
                  <div className={`md:col-span-1 ${isReversed ? 'md:order-last' : ''}`}>
                    {image && (
                      <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-lg soft-shadow">
                        <Image
                          src={image.imageUrl}
                          alt={founder.name}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                  </div>
                  <div className={`md:col-span-2 ${isReversed ? 'md:order-first' : ''}`}>
                    <h2 className="font-headline text-3xl font-bold text-accent">{founder.name}</h2>
                    <p className="mt-2 font-semibold text-primary">{founder.designation}</p>
                    <Separator className="my-4" />
                    <p className="text-muted-foreground text-lg">{founder.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder Philosophy Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl mb-8">Our Founder Philosophy</h2>
            <Card className="max-w-3xl mx-auto p-8 border-primary/20 bg-card soft-shadow">
              <CardContent className="p-0">
                <Quote className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                <p className="text-2xl font-headline italic text-foreground">
                  “Innovation is not just about technology — it’s about creating meaningful impact through smart solutions.”
                </p>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
