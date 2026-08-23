'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MessageSquare,
  Bot,
  Megaphone,
  Clock,
  Database,
  Globe,
  ArrowRight,
  TrendingUp,
  Phone,
  Video,
  MoreVertical,
  Send,
  CheckCheck,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: MessageSquare,
    title: 'Instant Auto Replies',
    desc: 'Respond instantly using AI.',
  },
  {
    icon: Bot,
    title: 'AI Chatbot',
    desc: 'Human-like conversations.',
  },
  {
    icon: Megaphone,
    title: 'Bulk Broadcast',
    desc: 'Reach customers in seconds.',
  },
  {
    icon: Clock,
    title: 'Auto Follow-ups',
    desc: 'Schedule follow-ups automatically.',
  },
  {
    icon: Database,
    title: 'CRM Sync',
    desc: 'Sync leads with CRM.',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    desc: 'Support multiple languages.',
  },
];

export default function WhatsAppAutomation() {
  const [showTyping, setShowTyping] = useState(true);
  const [messagesCount, setMessagesCount] = useState(0);

  useEffect(() => {
    // Typing sequence animation
    const timer = setTimeout(() => {
      setShowTyping(false);
    }, 2500);

    // Counter animation
    let start = 0;
    const end = 50000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setMessagesCount(end);
        clearInterval(counterInterval);
      } else {
        setMessagesCount(Math.floor(start));
      }
    }, 16);

    return () => {
      clearTimeout(timer);
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 lg:py-12 text-slate-950 border-t border-slate-200">
      
      {/* -------------------- VERTICAL PINSTRIPES BACKGROUND -------------------- */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="whatsapp-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whatsapp-pinstripes)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Top Header with Controls matching screenshot layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Badge variant="outline" className="border-red-300 text-red-700 bg-red-50/80 mb-3 font-semibold uppercase tracking-wider text-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse mr-2" />
              Smart Messaging Automation
            </Badge>

            <h2 className="font-soehne text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              Automate Your Business on WhatsApp
            </h2>
            <p className="font-inter text-base sm:text-lg text-slate-950 font-normal leading-relaxed mt-2">
              Automate customer conversations with AI-powered WhatsApp workflows. Convert leads, reply instantly, and scale operations 24/7.
            </p>
          </div>

          {/* Navigation Control Pills matching reference image */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              className="w-11 h-11 rounded-full bg-[#222222] text-white hover:bg-red-600 flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              className="w-11 h-11 rounded-full bg-[#222222] text-white hover:bg-red-600 flex items-center justify-center transition-colors shadow-md"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Features */}
          <div className="flex flex-col space-y-8 max-w-2xl">

            {/* Features Cards Matching Reference Card Style */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-between hover:border-red-500/50 hover:shadow-xl transition-all duration-300 shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-slate-950 font-bold text-sm sm:text-base leading-tight tracking-tight group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-950 leading-tight mt-1 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>

                  {/* Red Circle Action Arrow Icon Badge at bottom right matching reference image */}
                  <div className="flex justify-end pt-3">
                    <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Angled Red Line Pattern Accent at bottom matching reference image */}
                  <div className="absolute inset-x-0 bottom-0 h-6 pointer-events-none opacity-90 group-hover:opacity-40 transition-opacity">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`card-lines-${item.title}`} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="10" stroke="#dc2626" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#card-lines-${item.title})`} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-none shadow-lg shadow-red-600/20 transition-all"
              >
                <Link href="/contact?service=WhatsApp+Automation">
                  Start WhatsApp Automation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-none border-slate-300 bg-white text-slate-950 hover:bg-slate-50 font-bold text-xs uppercase tracking-widest shadow-xs"
              >
                <Link href="/contact?service=WhatsApp+Demo">Get Demo</Link>
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <p className="font-soehne text-3xl font-bold text-slate-950 mb-1 tracking-tight">
                  {messagesCount.toLocaleString()}+
                </p>
                <p className="font-inter text-xs text-slate-950 uppercase tracking-wider font-semibold">
                  Messages Automated
                </p>
              </div>
              <div>
                <p className="font-soehne text-3xl font-bold text-red-600 mb-1 tracking-tight">
                  3X
                </p>
                <p className="font-inter text-xs text-slate-950 uppercase tracking-wider font-semibold">
                  Faster Response
                </p>
              </div>
              <div>
                <p className="font-soehne text-3xl font-bold text-slate-950 mb-1 tracking-tight">
                  95%
                </p>
                <p className="font-inter text-xs text-slate-950 uppercase tracking-wider font-semibold">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup UI */}
          <div className="relative flex justify-center items-center">
            {/* Phone Container */}
            <div className="relative w-[310px] h-[610px] rounded-[42px] border-[8px] border-slate-900 bg-[#0e0e0f] shadow-2xl overflow-hidden z-10">
              
              {/* Screen Content */}
              <div className="absolute inset-0 bg-[#0A1118] flex flex-col">
                {/* App Header */}
                <div className="bg-[#111B21] p-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 text-xs font-bold relative">
                      AI
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-[#111B21] rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold leading-tight">Aveda AI Bot</h4>
                      <p className="text-[10px] text-red-400 font-medium">Online</p>
                    </div>
                  </div>
                  <div className="flex space-x-3 text-neutral-400">
                    <Video className="w-4 h-4" />
                    <Phone className="w-4 h-4" />
                    <MoreVertical className="w-4 h-4" />
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 space-y-4 overflow-hidden relative bg-[#0B141A]">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#880b33] text-white text-xs p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-md">
                      Hello! I'm interested in your services. Can you help?
                      <div className="text-[9px] text-red-200/70 text-right mt-1">10:02 AM</div>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex justify-start">
                    <div className="bg-[#202C33] text-white text-xs p-3 rounded-2xl rounded-tl-xs max-w-[85%] shadow-md">
                      Hi there! 👋 Welcome to Aveda Technologies. I'm our AI assistant. I can help you with Web Dev, AI, and Marketing. What would you like to know about?
                      <div className="flex justify-end items-center gap-1 mt-1">
                        <span className="text-[9px] text-neutral-400">10:02 AM</span>
                        <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Response Bubble */}
                  {showTyping ? (
                    <div className="flex justify-start">
                      <div className="bg-[#202C33] px-4 py-2.5 rounded-2xl rounded-tl-xs shadow-md flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start animate-in fade-in zoom-in-95 duration-300">
                      <div className="bg-[#202C33] text-white text-xs p-3 rounded-2xl rounded-tl-xs max-w-[85%] shadow-md border border-red-500/30">
                        <div className="flex items-center gap-1 text-red-400 font-semibold mb-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Generated Answer</span>
                        </div>
                        I can definitely help with that! We offer custom SaaS platforms, AI automation bots, and full-stack software engineering tailored for scale.
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="bg-[#202C33] p-3 flex items-center space-x-2">
                  <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-xs text-neutral-400">
                    Type a message
                  </div>
                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md">
                    <Send className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Light Glassmorphism Cards */}
            <div className="absolute -left-8 top-28 rounded-2xl border border-[#e2dcd0] bg-white/95 p-3.5 backdrop-blur-xl shadow-xl flex items-center space-x-3 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
              <div>
                <p className="text-[10px] text-slate-950 font-semibold uppercase tracking-wider">Automated Lead</p>
                <p className="text-xs font-bold text-slate-950">New Lead Captured!</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-24 rounded-2xl border border-red-200 bg-red-50/90 p-4 backdrop-blur-xl shadow-xl z-20">
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-[10px] font-bold text-slate-950 uppercase tracking-wider">ROI Analytics</span>
                <TrendingUp className="w-4 h-4 text-red-600" />
              </div>
              <p className="font-soehne text-2xl font-bold text-red-600">+240%</p>
              <p className="text-[10px] text-slate-950 font-medium">Engagement Boost</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
