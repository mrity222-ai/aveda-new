
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BrainCircuit, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left Visual Section */}
          <div className="relative flex h-96 items-center justify-center animate-in fade-in zoom-in-90 duration-700 md:h-[450px]">
            <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse" />
            <BrainCircuit className="relative h-48 w-48 text-primary opacity-80" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="outline" className="border-accent/50 bg-card/50 text-accent backdrop-blur-sm">
                Trusted By 10+ Clients
              </Badge>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-700">
            <div>
              <p className="mb-2 font-semibold text-primary">About Us</p>
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Engineering Excellence Since 2024
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Aveda Technologies is a team of skilled engineers and digital experts delivering enterprise-grade IT solutions. From startups to large organizations, we build scalable systems across multiple industries, driving innovation through technology and AI-powered solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
               <div className="flex items-center gap-3 rounded-full border bg-card px-4 py-2 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10">
                  <Globe className="h-6 w-6 text-accent" />
                  <span className="font-semibold">1+ Countries Served</span>
               </div>
              <Button asChild className="bg-primary text-white">
                <Link href="/about">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
