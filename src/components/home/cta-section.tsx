
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
      <div className="container relative z-10 text-center">
        <h2 className="font-headline text-5xl font-bold tracking-tight md:text-6xl">
          Let’s Build the Future Together
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Ready to start your next project or need a technology partner? We're here to help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
