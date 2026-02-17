
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
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
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          Let’s Build the Future Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Ready to start your next project or need a technology partner? We're
          here to help.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
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
