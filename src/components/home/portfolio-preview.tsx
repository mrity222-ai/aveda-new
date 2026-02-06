import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BrainCircuit, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/50 py-20 md:py-28">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left Visual Section */}
          <div className="relative flex h-96 items-center justify-center animate-in fade-in zoom-in-90 duration-700 md:h-[450px]">
            <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse" />
            <BrainCircuit className="relative h-48 w-48 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="outline" className="border-accent/50 bg-background/50 text-accent backdrop-blur-sm">
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
               <div className="flex items-center gap-3 rounded-full border border-border bg-card/50 px-4 py-2 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20">
                  <Globe className="h-6 w-6 text-accent" />
                  <span className="font-semibold">1+ Countries Served</span>
               </div>
              <Button asChild>
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
