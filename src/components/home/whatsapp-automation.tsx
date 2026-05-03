'use client';

import * as React from 'react';
import { 
  MessageSquare, 
  Bot, 
  BarChart3, 
  RefreshCw, 
  Folder, 
  Globe, 
  CheckCheck,
  Send,
  MoreVertical,
  Phone,
  Video,
  User,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  { icon: MessageSquare, title: 'Auto Reply to Customers', description: 'Instant responses to common queries 24/7.' },
  { icon: Bot, title: 'AI Chatbot Integration', description: 'Human-like conversations powered by advanced AI.' },
  { icon: BarChart3, title: 'Broadcast & Bulk Messaging', description: 'Reach thousands of customers with a single click.' },
  { icon: RefreshCw, title: 'Automated Follow-ups', description: 'Never miss a lead with scheduled reminders.' },
  { icon: Folder, title: 'CRM Integration', description: 'Sync chats and lead data directly with your CRM.' },
  { icon: Globe, title: 'Multi-language Support', description: 'Communicate with global audiences effortlessly.' },
];

const stats = [
  { value: '50,000+', label: 'Messages Automated' },
  { value: '3X', label: 'Faster Response Time' },
  { value: '95%', label: 'ग्राहक संतुष्टि' },
];

export default function WhatsAppAutomation() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-white">
      {/* WhatsApp Gradient Background */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] opacity-30" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Smart Messaging Automation
            </div>
            
            <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 leading-tight">
              Automate Your Business <br /> 
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">on WhatsApp 📱</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 max-w-xl">
              Convert leads, reply instantly, and manage customers with powerful WhatsApp automation tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, i) => (
                <div key={feature.title} className="group flex items-start gap-4 p-2 transition-all duration-300 hover:translate-x-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
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
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                <Link href="/contact?service=WhatsApp+Automation">
                  Start WhatsApp Automation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-slate-700 hover:bg-slate-900 text-white px-8">
                <Link href="/contact?service=WhatsApp+Demo">
                  Get Demo
                </Link>
              </Button>
            </div>

            {/* Desktop Stats */}
            <div className="hidden lg:grid grid-cols-3 gap-8 mt-16 border-t border-slate-800/50 pt-8">
              {stats.map(stat => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Section: WhatsApp Mockup */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative mx-auto w-full max-w-[360px] h-[640px] rounded-[3rem] border-[12px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
              {/* Phone Status Bar */}
              <div className="h-8 w-full flex justify-between items-center px-8 pt-4 bg-[#075e54]">
                <span className="text-[10px] font-bold text-white">9:41</span>
                <div className="flex gap-1.5 items-center">
                   <div className="w-3 h-2 bg-white/40 rounded-sm" />
                   <div className="w-4 h-4 rounded-full border-2 border-white/40" />
                </div>
              </div>

              {/* WhatsApp Header */}
              <div className="bg-[#075e54] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <User className="text-slate-500 h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">Aveda AI Bot</h4>
                  <p className="text-[10px] text-emerald-100/70">Online</p>
                </div>
                <div className="flex gap-4 text-white/80">
                  <Video className="h-4 w-4" />
                  <Phone className="h-4 w-4" />
                  <MoreVertical className="h-4 w-4" />
                </div>
              </div>

              {/* Chat Area */}
              <div className="relative flex-1 h-[460px] p-4 space-y-4 overflow-y-auto bg-[#0b141a]">
                {/* Wallpaper Pattern Simulation */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://i.pinimg.com/originals/8c/98/99/8c98994518b575bfd8d9741d9520b727.jpg')] bg-repeat" />

                {/* Incoming Message */}
                <div className="relative z-10 flex justify-start">
                  <div className="max-w-[85%] bg-[#202c33] p-3 rounded-2xl rounded-tl-none shadow-md text-sm text-slate-200">
                    <p>Hello! I'm interested in your services. Can you help?</p>
                    <span className="text-[10px] text-slate-500 mt-1 block text-right">10:02 AM</span>
                  </div>
                </div>

                {/* Automated Response */}
                <div className="relative z-10 flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-500 delay-1000">
                  <div className="max-w-[85%] bg-[#005c4b] p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white">
                    <p>Hi there! 👋 Welcome to Aveda Technologies. I'm our AI assistant. I can help you with Web Dev, AI, and Marketing. What would you like to know about?</p>
                    <div className="flex justify-end items-center gap-1 mt-1">
                       <span className="text-[10px] text-emerald-200/50">10:02 AM</span>
                       <CheckCheck className="h-3 w-3 text-[#53bdeb]" />
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="relative z-10 flex justify-end animate-pulse">
                   <div className="bg-[#005c4b]/50 px-4 py-1.5 rounded-full text-emerald-200 text-[10px] font-medium border border-emerald-500/20">
                     AI is typing...
                   </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-[#202c33] flex items-center gap-2">
                <div className="flex-1 bg-[#2a3942] rounded-full h-10 px-4 flex items-center text-slate-400 text-xs">
                  Type a message
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                  <Send className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Cards */}
            <div className="absolute top-20 -left-12 w-48 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md shadow-2xl animate-float">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Automated Lead</span>
               </div>
               <p className="text-xs font-semibold text-white">New Lead Captured!</p>
               <p className="text-[10px] text-slate-500">Source: WhatsApp Bot</p>
            </div>

            <div className="absolute bottom-32 -right-8 w-44 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
               <div className="flex items-center justify-between mb-2">
                 <span className="text-[10px] font-bold text-slate-400">ROI Analytics</span>
                 <BarChart3 className="h-3 w-3 text-emerald-400" />
               </div>
               <p className="text-2xl font-bold text-emerald-400">+240%</p>
               <p className="text-[10px] text-slate-500">Engagement Boost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
