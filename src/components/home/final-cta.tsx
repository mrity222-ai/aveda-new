import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="bg-secondary">
      <div className="container py-20 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Ready to build something powerful?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Let’s turn your vision into reality.
        </p>
        <Button asChild size="lg" className="mt-8" variant="accent">
          <Link href="/contact">
            Get a Free Quote <MoveRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
