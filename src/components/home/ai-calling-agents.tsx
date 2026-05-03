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
  Activity,
  User,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

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
  const mascotImg = PlaceHolderImages.find(img => img.id === 'ai-calling-baby');
  const [mounted, setMounted] = React.useState(false);
  const [waveHeights, setWaveHeights] = React.useState<number[]>([]);

  React.useEffect(() => {
    setMounted(true);
    setWaveHeights(Array.from({ length: 12 }, () => Math.random()));
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] opacity-30" />
      
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
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
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
          </div>

          {/* Right Visual Section - Premium Mascot Dashboard */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative mx-auto w-full max-w-[600px] aspect-square flex items-center justify-center">
              
              {/* Background Glow Circle */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-blue-600/10 blur-3xl animate-pulse-slow" />
              
              {/* Center Mascot Image */}
              <div className="relative z-10 w-[60%] aspect-square rounded-full border-8 border-white/5 overflow-hidden shadow-[0_0_80px_rgba(37,99,235,0.2)]">
                {mascotImg && (
                  <Image 
                    src={mascotImg.imageUrl} 
                    alt="AI Calling Agent Mascot" 
                    fill 
                    className="object-cover"
                    data-ai-hint="cute baby wearing headset Pixar style mascot"
                  />
                )}
              </div>

              {/* Floating UI Elements */}
              
              {/* Speech Bubble */}
              <div className="absolute left-[-5%] top-[35%] z-20 w-52 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl rounded-bl-none shadow-2xl animate-float">
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <p className="text-xs font-medium text-slate-100 italic">"Hello! How can I assist you today?"</p>
                </div>
                <div className="mt-3 flex gap-0.5 items-end h-4">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-blue-400/60 rounded-full animate-bounce" 
                      style={{ 
                        height: mounted ? `${20 + (waveHeights[i] || 0.5) * 80}%` : '50%', 
                        animationDelay: `${i * 0.1}s`, 
                        animationDuration: '1s' 
                      }} 
                    />
                  ))}
                </div>
              </div>

              {/* Top Right: Live Call Card */}
              <div className="absolute top-[5%] right-[0%] z-20 w-60 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="h-3 w-3 text-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Call</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center">
                       <Phone className="h-2.5 w-2.5 text-red-500 rotate-[135deg]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-100">James Wilson</p>
                    <p className="text-[9px] text-slate-500">+91 98XXX XXX70</p>
                  </div>
                </div>
                <div className="mt-3 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4 animate-pulse" />
                </div>
              </div>

              {/* Right Middle: Call Analytics */}
              <div className="absolute bottom-[30%] right-[-10%] z-20 w-52 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Call Analytics</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 flex items-center justify-center">
                    <svg className="h-full w-full rotate-[-90deg]">
                      <circle cx="28" cy="28" r="24" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-slate-800" />
                      <circle cx="28" cy="28" r="24" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="150.7" strokeDashoffset="45" className="text-blue-500" />
                    </svg>
                    <span className="absolute text-[10px] font-bold">75%</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-[9px]">
                      <span className="text-slate-500">Handled</span>
                      <span className="text-blue-400 font-bold">12.5k</span>
                    </div>
                    <div className="flex justify-between text-[9px]">
                      <span className="text-slate-500">Missed</span>
                      <span className="text-red-400 font-bold">240</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left: Recent Calls */}
              <div className="absolute bottom-[5%] left-[-5%] z-20 w-64 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Recent Activity</p>
                  <MoreVertical className="h-3 w-3 text-slate-500" />
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Aditya R.', type: 'Answered', time: '2m ago', color: 'text-emerald-400' },
                    { name: 'Vikram S.', type: 'Voicemail', time: '15m ago', color: 'text-blue-400' },
                    { name: 'Rahul K.', type: 'Answered', time: '1h ago', color: 'text-emerald-400' }
                  ].map((call, idx) => (
                    <div key={idx} className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center">
                          <User className="h-3 w-3 text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-200">{call.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className={cn("text-[9px] font-bold", call.color)}>{call.type}</span>
                         <span className="text-[8px] text-slate-500">{call.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Right: AI Agent Status */}
              <div className="absolute bottom-[5%] right-[10%] z-30 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-blue-600/40 animate-pulse-slow">
                <Bot className="h-4 w-4 text-white" />
                <span className="text-[10px] font-black uppercase tracking-tighter text-white">AI Agent Active</span>
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
