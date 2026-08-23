import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BrainCircuit, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#f3f4f6] py-6 md:py-8 text-slate-950 border-t border-neutral-200/80">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid items-center gap-12 md:gap-16 md:grid-cols-2">
          {/* Left Visual Section */}
          <div className="relative flex h-64 items-center justify-center animate-in fade-in zoom-in-90 duration-700 md:h-[450px]">
            <div className="absolute h-48 w-48 md:h-80 md:w-80 rounded-full border-2 border-dashed border-red-400 animate-pulse-slow" />
            <div className="absolute h-36 w-36 md:h-60 md:w-60 rounded-full border-2 border-dashed border-red-400 animate-pulse-slow-reverse" />
            <BrainCircuit className="relative h-32 w-32 md:h-48 md:w-48 text-red-600 opacity-90" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:bottom-4 md:left-4 md:translate-x-0">
              <Badge variant="outline" className="border-red-200 bg-red-50 text-red-700 whitespace-nowrap text-[10px] md:text-xs shadow-sm">
                Trusted Global Technology Partner
              </Badge>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div>
              <Badge variant="outline" className="mb-3 border-red-200 text-red-700 bg-red-50">
                About Us
              </Badge>
              <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 leading-[1.2]">
                Engineering Excellence & Digital Growth
              </h2>
            </div>
            <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Aveda Technologies is a premier AI Automation and Custom Software Company. Having delivered <strong>5+ completed client projects</strong>, we also power enterprises with <strong>3 proprietary SaaS products</strong> — including our flagship <strong>Marketing Automation Engine</strong>, <strong>HRMS (Human Resource Management System)</strong>, and <strong>AI Sales CRM</strong>. From Lucknow, Delhi-NCR, to global markets, we build scalable software tailored for business growth.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 shadow-sm">
                <Globe className="h-5 w-5 text-red-600" />
                <span className="text-xs md:text-sm font-semibold text-slate-950">Global AI & Software Solutions</span>
              </div>
              <Button asChild className="rounded-full px-8 h-12 text-sm bg-gradient-to-r from-red-600 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium shadow-md">
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