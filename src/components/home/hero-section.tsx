import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/vio/bg.jpg"
          className="h-full w-full object-cover"
          src="/vio/bg.mp4"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Driving Business Growth with{' '}
            <span className="text-primary">
              Intelligent IT Solutions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Aveda Technologies transforms businesses with intelligent AI solutions, scalable web systems, and smart digital strategies designed for sustainable growth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
