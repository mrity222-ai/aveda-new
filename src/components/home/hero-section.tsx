import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
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
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl animate-blur-in">
            Driving Business Growth with{' '}
            <span className="text-primary">
              Intelligent IT Solutions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Aveda Technologies is a leading AI Automation Company and top Software Development Company. We deliver custom SaaS development, CRM ERP solutions, and scalable software engineering services to drive digital transformation globally.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-widest text-white/60 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 md:text-xs">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>AI Powered Software Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>24/7 Technology Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Custom CRM & ERP Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>100% Business Automation Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
