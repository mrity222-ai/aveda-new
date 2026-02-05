import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-background'
  );

  return (
    <section className="relative h-[600px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Transforming Ideas Into Powerful Digital Experiences
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80">
            At Aveda Technologies, we design and build high-performance digital
            products that help businesses grow, scale, and lead in the digital
            era.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/works">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
