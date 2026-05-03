'use client';

import * as React from 'react';
import { 
  Phone, 
  Bot, 
  BarChart3, 
  RefreshCw, 
  Globe, 
  Zap, 
  ArrowRight, 
  PlayCircle, 
  MessageSquare,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  { icon: Phone, title: 'Smart AI Call Handling', description: 'Intelligently routes and manages every inbound and outbound call.' },
  { icon: Bot, title: 'Human-like Voice', description: 'Advanced neural text-to-speech for natural, fluid conversations.' },
  { icon: BarChart3, title: 'Real-time Analytics', description: 'Track sentiment, keywords, and conversion metrics as they happen.' },
  { icon: RefreshCw, title: 'Automated Follow-ups', description: 'Schedule and execute post-call follow-ups without manual intervention.' },
  { icon: Globe, title: 'Multi-language Support', description: 'Speak to your customers in their preferred language natively.' },
  { icon: Zap, title: '24/7 Availability', description: 'Your business never sleeps with agents ready at any hour.' },
];

const stats = [
  { value: '10,000+', label: 'Calls Automated' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '500+', label: 'Business Users' },
];

export default function AiCallingAgents() {
  const [waveValues, setWaveValues] = React.useState<{ height: string; duration: string }[]>([]);

  React.useEffect(() => {
    // Generate random values only on the client to avoid hydration mismatch
    setWaveValues(
      [1, 2, 3, 4, 5].map(() => ({
        height: `${20 + Math.random() * 40}px`,
        duration: `${0.5 + Math.random()}s`,
      }))
    );
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next-Gen Automation
            </div>
            
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 leading-tight">
              AI Calling Agents That Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">24/7 For Your Business</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 max-w-xl">
              Automate customer calls, generate leads, handle support, and boost conversions with human-like AI voice agents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, i) => (
                <div key={feature.title} className="group flex items-start gap-4 p-2 transition-all duration-300 hover:translate-x-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8">
                <Link href="/contact?service=AI+Calling+Agents">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-slate-700 hover:bg-slate-900 text-white px-8">
                <Link href="/contact?service=AI+Demo">
                  Book Demo
                </Link>
              </Button>
            </div>

            {/* Stats Overlay for Mobile */}
            <div className="mt-12 flex flex-wrap gap-8 lg:hidden border-t border-slate-800 pt-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative mx-auto aspect-square max-w-[500px]">
              {/* Central AI Hub Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 animate-spin-slow blur-2xl" />
                <div className="absolute w-48 h-48 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow-reverse" />
                <div className="absolute flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 border border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                  <Bot className="h-16 w-16 text-blue-400" />
                </div>
              </div>

              {/* Floating Dashboard Cards */}
              <div className="absolute top-0 right-0 w-48 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md shadow-2xl animate-in slide-in-from-top-4 duration-1000 delay-500">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Call</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3 animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Sentiment</span>
                    <span className="text-emerald-400">Positive</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 w-56 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md shadow-2xl animate-in slide-in-from-bottom-4 duration-1000 delay-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <PlayCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">Call Transcript</p>
                    <p className="text-[10px] text-slate-400 line-clamp-1">"I'd like to book a demo..."</p>
                  </div>
                </div>
              </div>

              {/* Sound Wave Animation */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1.5 h-12">
                {waveValues.length > 0 && waveValues.map((wave, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-blue-400/60 rounded-full animate-bounce" 
                    style={{ 
                      height: wave.height,
                      animationDuration: wave.duration,
                      animationDelay: `${i * 0.1}s`
                    }} 
                  />
                ))}
              </div>

              {/* Floating Interaction Icons */}
              <div className="absolute top-10 left-10 h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg animate-bounce">
                <MessageSquare className="h-5 w-5 text-purple-400" />
              </div>
            </div>

            {/* Desktop Stats */}
            <div className="hidden lg:grid grid-cols-3 gap-8 mt-16 border-t border-slate-800/50 pt-8 animate-in fade-in duration-1000 delay-1000">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
