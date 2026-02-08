
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h1 className="text-5xl font-extrabold tracking-tight text-accent sm:text-6xl md:text-7xl">
              Driving Business Growth with{' '}
              <span className="text-primary">
                Intelligent IT Solutions
              </span>
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            We build, implement, and manage cutting-edge technology solutions that empower your business to innovate and{' '}
            <span className="font-semibold text-primary">succeed</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400">
            <Button asChild size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
