import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-background'
  );

  return (
    <section className="relative h-[600px] w-full bg-background">
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <div className="container">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl animate-in fade-in slide-in-from-bottom-10 duration-700">
            Transforming Ideas Into Powerful Digital Experiences
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            At Aveda Technologies, we design and build high-performance digital
            products that help businesses grow, scale, and lead in the digital
            era.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400">
            <Button asChild size="lg" className="animate-pulse-red">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/works">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
