import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BrainCircuit, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-28">
      <div className="container relative z-10 px-4">
        <div className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
          {/* Left Visual Section */}
          <div className="relative flex h-64 items-center justify-center animate-in fade-in zoom-in-90 duration-700 md:h-[450px]">
            <div className="absolute h-48 w-48 md:h-80 md:w-80 rounded-full border-2 border-dashed border-primary/30 animate-pulse-slow" />
            <div className="absolute h-36 w-36 md:h-60 md:w-60 rounded-full border-2 border-dashed border-accent/30 animate-pulse-slow-reverse" />
            <BrainCircuit className="relative h-32 w-32 md:h-48 md:w-48 text-primary opacity-80" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:bottom-4 md:left-4 md:translate-x-0">
              <Badge variant="outline" className="border-accent/50 bg-card/50 text-accent backdrop-blur-sm whitespace-nowrap text-[10px] md:text-xs">
                Trusted Global Technology Partner
              </Badge>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left animate-in fade-in slide-in-from-right-12 duration-700">
            <div>
              <p className="mb-2 text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">About Us</p>
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Engineering Excellence
              </h2>
            </div>
            <p className="text-sm md:text-lg text-foreground/80 leading-relaxed">
              Aveda Technologies is a premier AI Automation Company and a top Software Development Company in Lucknow, providing enterprise-grade Custom Software Development, CRM ERP solutions, and Mobile App Development Company services across India and global markets. As a trusted Digital Transformation partner, we serve clients as a top Software Development Company in Noida, Delhi, Gurugram, and Bangalore, helping them scale with AI-driven business process automation.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
               <div className="flex items-center gap-3 rounded-full border bg-card px-4 py-2 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  <span className="text-xs md:text-base font-semibold">Global AI & Software Solutions</span>
               </div>
              <Button asChild className="text-sm">
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