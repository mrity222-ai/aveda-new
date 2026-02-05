import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-image');

  const values = [
    'Innovation first',
    'Quality without compromise',
    'Client-centric mindset',
    'Transparency & trust',
  ];

  return (
    <div className="bg-background">
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Who We Are
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Aveda Technologies is a full-service IT solutions company delivering innovative digital products and scalable technology solutions for businesses worldwide.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {aboutImage && (
              <div className="relative h-[450px] w-full overflow-hidden rounded-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
            <div className="space-y-6">
              <div>
                <h2 className="font-headline text-3xl font-semibold">Our Mission</h2>
                <p className="mt-2 text-muted-foreground">
                  To empower businesses with cutting-edge digital solutions that drive measurable growth and long-term success.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-semibold">Our Vision</h2>
                <p className="mt-2 text-muted-foreground">
                  To become a globally trusted technology partner known for innovation, quality, and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Values</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The principles that guide our work and our relationships.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="mt-4 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
