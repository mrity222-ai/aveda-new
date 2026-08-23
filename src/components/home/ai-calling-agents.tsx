'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  PhoneCall,
  Mic,
  BarChart2,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  TrendingUp,
  Activity,
  Bot,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: PhoneCall,
    title: 'Smart AI Calling',
    desc: 'Intelligently routes and manages calls.',
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    icon: Mic,
    title: 'Human Voice',
    desc: 'Natural, fluid conversations.',
    iconBg: 'bg-rose-100 text-rose-600',
  },
  {
    icon: BarChart2,
    title: 'Real-time Analytics',
    desc: 'Track sentiment and conversions.',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Clock,
    title: 'Auto Follow-ups',
    desc: 'Schedule without manual intervention.',
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    desc: 'Speak natively to customers.',
    iconBg: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Zap,
    title: '24/7 Availability',
    desc: 'Agents ready at any hour.',
    iconBg: 'bg-red-100 text-red-600',
  },
];

export default function AiCallingAgents() {
  const [callsCount, setCallsCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCallsCount(end);
        clearInterval(timer);
      } else {
        setCallsCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-7 lg:py-10 text-slate-950 border-t border-slate-200 selection:bg-red-500 selection:text-white">
      {/* Background Atmosphere Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-400/10 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-amber-400/10 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Features */}
          <div className="flex flex-col space-y-10 max-w-2xl">
            {/* Header Badge */}
            <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50/80 w-fit">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse mr-2" />
              Next-Gen Automation
            </Badge>

            <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-light tracking-[-0.04em] text-[#dc2626] leading-[1.08]">
              AI Calling Agents That Work <br />
              <span className="text-[#dc2626] font-light">
                24/7 For Your Business
              </span>
            </h2>

            <p className="font-inter text-xs sm:text-sm text-slate-950 font-normal leading-relaxed max-w-lg">
              Automate calls, generate leads, and boost conversions with human-like AI voice agents engineered for enterprise workflows.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center space-y-1.5 sm:space-y-0 sm:space-x-3.5 group hover:border-red-500/40 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className={cn('w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300', item.iconBg)}>
                    <item.icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-slate-950 font-semibold text-xs sm:text-sm mb-0.5 leading-snug">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-slate-950 leading-tight line-clamp-2 sm:line-clamp-none">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-full shadow-lg shadow-red-600/20 transition-all font-medium"
              >
                <Link href="/contact?service=AI+Calling+Agents">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-full border-slate-300 bg-white text-slate-950 hover:bg-slate-50 shadow-sm font-medium"
              >
                <Link href="/contact?service=AI+Demo">Book Demo</Link>
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <p className="font-soehne text-3xl font-light text-slate-950 mb-1 tracking-tight">
                  5+
                </p>
                <p className="font-inter text-xs text-slate-950 uppercase tracking-wider font-semibold">
                  Projects Done
                </p>
              </div>
              <div>
                <p className="font-soehne text-3xl font-light text-red-600 mb-1 tracking-tight">
                  3
                </p>
                <p className="font-inter text-xs text-slate-950 uppercase tracking-wider font-semibold">
                  SaaS Products
                </p>
              </div>
              <div>
                <p className="font-soehne text-3xl font-light text-slate-950 mb-1 tracking-tight">
                  98%
                </p>
                <p className="font-inter text-xs text-slate-950 uppercase tracking-wider font-semibold">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Voice Core Visual */}
          <div className="relative h-[550px] flex justify-center items-center">
            
            {/* Pulsating Glowing Core Center */}
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">
              
              {/* Outer Pulse Rings */}
              <div className="absolute inset-0 rounded-full border border-red-400/30 animate-ping [animation-duration:4s]" />
              <div className="absolute inset-[-20px] rounded-full border border-amber-400/30 animate-pulse [animation-duration:3s]" />
              <div className="absolute inset-[-40px] rounded-full border border-slate-200" />

              {/* Main Sphere Container */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-slate-100 via-slate-50 to-white border border-red-200 shadow-xl flex flex-col items-center justify-center p-6">
                
                {/* Center Pulsating Voice Waves */}
                <div className="flex items-center gap-1.5 h-16 mb-2">
                  {[40, 75, 100, 60, 90, 50, 85, 45, 95, 65].map((height, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 bg-[#dc2626] rounded-full animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${idx * 0.15}s`,
                        animationDuration: '1.2s',
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-red-700 text-xs font-semibold uppercase tracking-wider bg-white border border-red-200 px-3.5 py-1 rounded-full shadow-sm">
                  <Activity className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                  <span>Voice AI Active</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Panels */}
            {/* Top Left */}
            <div className="absolute top-12 left-4 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl shadow-xl flex items-center space-x-3 z-20 animate-bounce [animation-duration:5s]">
              <div className="p-2 rounded-xl bg-red-100 text-red-600">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-950">Voice Assistant</p>
                <p className="text-[10px] text-slate-950">Natural Neural Voice</p>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-12 right-4 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl shadow-xl flex items-center space-x-3 z-20 animate-bounce [animation-duration:6s] [animation-delay:1s]">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-950">Live Call Routing</p>
                <p className="text-[10px] text-slate-950">Zero Latency</p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-12 left-4 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl shadow-xl flex items-center space-x-3 z-20 animate-bounce [animation-duration:5.5s] [animation-delay:0.5s]">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-950">Autonomous Agent</p>
                <p className="text-[10px] text-slate-950">Multi-turn Dialog</p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-12 right-4 rounded-2xl border border-red-200 bg-red-50/90 px-4 py-3 backdrop-blur-xl shadow-xl flex items-center space-x-3 z-20 animate-bounce [animation-duration:6.5s] [animation-delay:1.5s]">
              <div className="p-2 rounded-xl bg-red-200 text-red-700">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-950">Call Analytics</p>
                <p className="text-[10px] text-red-700 font-semibold">+98% Accuracy</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
