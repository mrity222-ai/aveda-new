import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text text-transparent">
                Build Smarter Software
              </span>
              <br />
              for Modern Teams
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            Our AI-powered platform helps you build, ship, and scale your
            applications faster than ever before.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-400">
            <Button asChild size="lg" variant="gradient">
              <Link href="/contact">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact?demo=true">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
