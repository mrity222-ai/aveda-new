'use client';

import { BrainCircuit, Bot, TrendingUp, Calendar, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AiAutomationPreview() {
  const features = [
    {
      icon: BrainCircuit,
      title: 'CRM & Lead Automation',
      description: 'Automatically capture, qualify, and route leads to your sales reps in real time.',
      iconBg: 'bg-red-600/20 text-red-400 border border-red-500/30',
    },
    {
      icon: Bot,
      title: 'WhatsApp & Chatbot Automation',
      description: 'Engage visitors 24/7 with human-like AI bots that convert traffic into clients.',
      iconBg: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30',
    },
    {
      icon: TrendingUp,
      title: 'Sales Funnel Automation',
      description: 'Nurture cold leads automatically through personalized multi-channel workflows.',
      iconBg: 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30',
    },
    {
      icon: Calendar,
      title: 'Appointment & Payment Automation',
      description: 'Allow clients to book calls and make instant payments without manual delay.',
      iconBg: 'bg-amber-500/20 text-amber-300 border border-amber-400/30',
    },
  ];

  const results = [
    '50% Reduction in Manual Work',
    '2X Faster Lead Response Time',
    '30–70% Operational Time Saved',
    'Higher Conversion & Revenue Growth',
  ];

  return (
    <section className="relative bg-[#2d0210] py-6 md:py-10 text-white border-t border-red-950 overflow-hidden">
      
      {/* -------------------- BACKGROUND MATCHING USER SCREENSHOT -------------------- */}
      {/* Left Deep Navy Base + Right Diagonal Angled Crimson Red Split */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Right Crimson Red Angled Polygon Cut */}
        <div className="absolute inset-0 bg-[#6b0526] [clip-path:polygon(100%_0,45%_0,100%_100%)] opacity-95" />
      </div>



      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="border-red-400/50 text-red-400 bg-red-950/60 backdrop-blur-md px-4 py-1 uppercase tracking-wider font-bold">
              Process Automation
            </Badge>

            <h2 className="font-soehne text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
              Smart AI Automation That Works 24/7
            </h2>

            <p className="font-inter text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              We design intelligent automation systems that eliminate manual repetitive tasks, improve operational efficiency, and scale revenue — without bloating your payroll.
            </p>

            <div className="pt-4">
              <h3 className="font-soehne text-sm sm:text-base font-bold tracking-tight text-white mb-6">
                Ready to Put Your Business on Autopilot?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-red-600/20">
                  <Link href="/contact?service=AI+Automation+Audit">
                    Get Free Automation Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md font-bold text-xs uppercase tracking-widest">
                  <Link href="/contact?service=AI+Expert+Talk">
                    <Phone className="mr-2 h-4 w-4 text-red-400" />
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title} 
                  className="group rounded-2xl sm:rounded-3xl border border-white/15 bg-slate-950/70 backdrop-blur-md p-4 sm:p-6 shadow-xl transition-all duration-300 hover:border-red-500/60 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className={`flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-110 mb-3 sm:mb-4 ${feature.iconBg}`}>
                      <feature.icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
                    </div>
                    <h4 className="font-soehne text-xs sm:text-lg font-bold text-white mb-1.5 sm:mb-2 tracking-tight leading-snug">
                      {feature.title}
                    </h4>
                    <p className="font-inter text-[10px] sm:text-xs text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Results Bar */}
            <div className="rounded-3xl border border-white/15 bg-slate-950/70 backdrop-blur-md p-6 shadow-xl">
              <p className="font-soehne text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
                Proven Business Impact
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {results.map((result) => (
                  <li key={result} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-red-500 flex-shrink-0" />
                    <span className="font-inter text-xs font-semibold text-slate-200">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
