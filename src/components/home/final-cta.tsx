import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="bg-secondary">
      <div className="container py-20 text-center animate-in fade-in duration-700">
        <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Ready to Elevate Your Business?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Let's discuss how our technology solutions can help you achieve your goals.
        </p>
        <Button asChild size="lg" className="mt-8" variant="default">
          <Link href="/contact?trial=true">
            Get a Free Consultation <MoveRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
