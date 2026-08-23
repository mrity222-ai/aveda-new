'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Sparkles, 
  Send, 
  X, 
  ArrowUpRight,
  RefreshCw,
  FileText,
  CheckCircle2,
  PhoneCall,
  ChevronRight,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquareText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { handleFormSubmission } from '@/app/(main)/contact/actions';

const RobotAnimation = ({ className = "w-8 h-8" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let anim: any = null;

    const initAnimation = () => {
      if ((window as any).lottie && containerRef.current) {
        if (anim) {
          try { anim.destroy(); } catch {}
        }
        containerRef.current.innerHTML = '';
        try {
          anim = (window as any).lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/robot.json',
          });
          anim.addEventListener('DOMLoaded', () => {
            const svgElements = containerRef.current?.querySelectorAll('svg');
            if (svgElements && svgElements.length > 1) {
              for (let i = 1; i < svgElements.length; i++) {
                svgElements[i].remove();
              }
            }
            const svg = containerRef.current?.querySelector('svg');
            if (svg) {
              svg.setAttribute('viewBox', '160 120 220 220');
            }
          });
          setIsLoaded(true);
        } catch {
          setIsLoaded(false);
        }
      }
    };

    if ((window as any).lottie) {
      initAnimation();
    } else {
      const existingScript = document.getElementById('lottie-cdn-script') as HTMLScriptElement | null;
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'lottie-cdn-script';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';
        script.async = true;
        script.onload = () => {
          initAnimation();
        };
        document.body.appendChild(script);
      } else {
        if ((window as any).lottie) {
          initAnimation();
        } else {
          existingScript.addEventListener('load', initAnimation);
        }
      }
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", className)}>
      <div ref={containerRef} className="w-full h-full flex items-center justify-center pointer-events-none" />
      {!isLoaded && <Bot className="w-full h-full text-red-500 animate-pulse absolute inset-0 p-1" />}
    </div>
  );
};

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  serviceKey?: string;
  links?: { label: string; href: string }[];
  timestamp: string;
}

const SERVICES_LIST = [
  { slug: 'web-development', name: 'Web Development & WaaS' },
  { slug: 'app-development', name: 'Mobile App Development (iOS/Android)' },
  { slug: 'ai-automation', name: 'AI & Automation (Voice AI & WhatsApp)' },
  { slug: 'digital-marketing', name: 'Digital Marketing & Growth' },
  { slug: 'seo-optimization', name: 'Local SEO & Google Maps Domination' },
  { slug: 'ui-ux-design', name: 'UI/UX Design & Design Systems' },
  { slug: 'political-campaigning', name: 'Political Campaign AI & Media' },
  { slug: 'saas-products', name: 'Proprietary SaaS Suites' },
];

const QUICK_PROMPTS = [
  { label: '🚀 All Services', key: 'all' },
  { label: '💻 Web Dev & WaaS', key: 'web' },
  { label: '📱 Mobile App Dev', key: 'app' },
  { label: '🤖 AI & Voice Calling', key: 'ai' },
  { label: '📈 Marketing & Local SEO', key: 'seo' },
  { label: '🎨 UI/UX Design', key: 'design' },
  { label: '🏛️ Political Campaign AI', key: 'political' },
  { label: '📋 Fill Inquiry Form', key: 'form' },
];

export function ServicesChatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'form'>('chat');
  const [input, setInput] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Quick Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web Development & WaaS',
    message: '',
  });
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [formSubmittedSuccess, setFormSubmittedSuccess] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 Hi! Welcome to **Aveda Technologies**.\n\nI am your AI Assistant. I can explain all our services, products, and auto-fill your project inquiry form for instant submission!\n\nWhat would you like to explore today?",
      timestamp: 'Just now',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping, activeTab]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text) return;

    if (text.includes('Fill Inquiry Form') || text === 'form') {
      setActiveTab('form');
      return;
    }

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(text);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 500);
  };

  const openFormWithService = (serviceName: string, prefillMessage: string = '') => {
    setFormData((prev) => ({
      ...prev,
      service: serviceName,
      message: prefillMessage || prev.message || `I am interested in ${serviceName}. Please provide project scope, timeline, and pricing details.`,
    }));
    setActiveTab('form');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmittingForm(true);
    const res = await handleFormSubmission(formData);
    setIsSubmittingForm(false);

    if (res.success) {
      setFormSubmittedSuccess(true);
      // Append confirmation message to chat transcript
      const confirmMsg: Message = {
        id: `bot-confirm-${Date.now()}`,
        sender: 'bot',
        text: `✅ **Inquiry Submitted Successfully!**\n\nThank you, **${formData.name}**! Your project inquiry for **${formData.service}** has been received.\n\nOur engineering team will get in touch with you shortly.`,
        links: [
          { label: 'Chat on WhatsApp', href: 'https://wa.me/919532758070' },
          { label: 'Explore Products', href: '/products' },
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, confirmMsg]);
    } else {
      alert(res.message || 'Failed to submit form. Please try again.');
    }
  };

  const generateBotResponse = (query: string): Message => {
    const q = query.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. All Services
    if (q.includes('all') || q.includes('service') || q.includes('kya karte') || q.includes('overview') || q.includes('help')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "⚡ **Aveda Technologies Complete Services Portfolio**\n\n1. 💻 **Web Development & WaaS**: Next.js sites managed as a subscription product.\n2. 📱 **Mobile App Development**: Native iOS & Android apps (React Native/Flutter).\n3. 🤖 **AI & Automation**: Autonomous Voice AI calling agents & smart WhatsApp bots.\n4. 📈 **Digital Marketing & SEO**: Local Google Maps domination & 5-month search roadmaps.\n5. 🎨 **UI/UX & Design Systems**: User-centric interfaces & CRO wireframing.\n6. 🏛️ **Political Campaign AI**: Spatial voter analytics & digital narrative PR.\n7. 📦 **Enterprise SaaS Suites**: Turnkey HRMS, Sales CRM, Marketing & Voice AI.",
        serviceKey: 'Web Development & WaaS',
        links: [
          { label: 'View All Services Page', href: '/services' },
          { label: 'Explore SaaS Products', href: '/products' },
        ],
        timestamp: time,
      };
    }

    // 2. Web Dev & WaaS
    if (q.includes('web') || q.includes('waas') || q.includes('website') || q.includes('next')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "💻 **Website as a Service (WaaS) & Web Development**\n\nUltra-fast Next.js architecture managed as a continuous product.\n\n✨ **Highlights:**\n• Edge deployment with zero hosting hassle.\n• Continuous updates, maintenance, and security.\n• Affordable monthly/yearly plans (2 months FREE on annual billing!).",
        serviceKey: 'Web Development & WaaS',
        links: [
          { label: 'View WaaS Pricing & Features', href: '/services/web-development' },
        ],
        timestamp: time,
      };
    }

    // 3. Mobile App Dev
    if (q.includes('app') || q.includes('mobile') || q.includes('ios') || q.includes('android') || q.includes('flutter')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "📱 **Mobile App Development (iOS & Android)**\n\nHigh-performance mobile applications built for commercial scale.\n\n✨ **Capabilities:**\n• Cross-platform iOS & Android (React Native / Flutter)\n• Native Swift & Kotlin applications\n• Encrypted cloud backends & API integrations\n• Play Store & App Store publishing",
        serviceKey: 'Mobile App Development (iOS/Android)',
        links: [
          { label: 'Explore App Development', href: '/services/app-development' },
        ],
        timestamp: time,
      };
    }

    // 4. AI & Automation
    if (q.includes('ai') || q.includes('automation') || q.includes('whatsapp') || q.includes('voice') || q.includes('calling') || q.includes('bot')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "🤖 **Autonomous AI Agents & Workflows**\n\nAutomate 80%+ of customer communications with intelligent AI agents.\n\n✨ **Engines:**\n• **Voice AI Calling Platform**: 24/7 phone agents for lead qualification & call routing.\n• **WhatsApp Messaging Automation**: Drip campaigns, instant broadcasts & CRM sync.\n• **Agentic Workflows**: Custom enterprise process automation.",
        serviceKey: 'AI & Automation (Voice AI & WhatsApp)',
        links: [
          { label: 'Explore AI & Automation', href: '/services/ai-automation' },
        ],
        timestamp: time,
      };
    }

    // 5. Marketing & Local SEO
    if (q.includes('seo') || q.includes('marketing') || q.includes('growth') || q.includes('maps') || q.includes('local')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "📈 **Digital Marketing & Local SEO Domination**\n\nDominate local organic search and scale customer acquisition with high-ROI campaigns.\n\n✨ **What We Deliver:**\n• **Local SEO Domination**: Top rank on Google Maps & local organic search.\n• **5-Month Structured Roadmap**: Milestone-driven organic growth.\n• **Performance Marketing**: Targeted lead-gen campaigns.",
        serviceKey: 'Local SEO & Google Maps Domination',
        links: [
          { label: 'Explore Local SEO & Marketing', href: '/services/seo-optimization' },
        ],
        timestamp: time,
      };
    }

    // 6. UI/UX Design
    if (q.includes('design') || q.includes('ui') || q.includes('ux') || q.includes('figma')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "🎨 **UI/UX Design & Enterprise Design Systems**\n\nUser-centric interface design systems optimized for conversion.\n\n✨ **Deliverables:**\n• Interactive Figma Prototypes\n• Mobile & Desktop UX Wireframes\n• CRO & Conversion Rate Optimization",
        serviceKey: 'UI/UX Design & Design Systems',
        links: [
          { label: 'Explore UI/UX Design Services', href: '/services/ui-ux-design' },
        ],
        timestamp: time,
      };
    }

    // 7. Political Campaign AI
    if (q.includes('political') || q.includes('voter') || q.includes('election') || q.includes('campaign')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "🏛️ **Political Campaign AI Intelligence & Media**\n\nSpatial voter analytics, voter sentiment mapping, and automated campaign PR for electoral dominance.\n\n✨ **Modules:**\n• Spatial Voter Micro-Targeting\n• Political PR & Executive Reputation\n• **Media Making & Branding Political** (⚡ Upcoming)",
        serviceKey: 'Political Campaign AI & Media',
        links: [
          { label: 'Explore Political Campaigning', href: '/services/political-campaigning' },
        ],
        timestamp: time,
      };
    }

    // Default Fallback
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: `Thanks for reaching out! **Aveda Technologies** builds custom software, AI agents, web/mobile applications, and SaaS suites.\n\nWould you like to auto-fill a quick project inquiry form?`,
      serviceKey: 'Web Development & WaaS',
      links: [
        { label: 'Explore All Services', href: '/services' },
        { label: 'Browse Products', href: '/products' },
      ],
      timestamp: time,
    };
  };

  if (!mounted) return null;

  return (
    <>
      {/* -------------------- CIRCULAR STACKED TRIGGER BUTTON (TOP OF WHATSAPP) -------------------- */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-5 z-50 flex h-12 w-12 items-center justify-center bg-transparent transition-all duration-300 hover:scale-110 overflow-visible drop-shadow-xl cursor-pointer"
          aria-label="Open AI Services Chatbot"
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <RobotAnimation className="w-12 h-12" />
            <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </div>
        </button>
      )}

      {/* -------------------- CHAT WINDOW & AUTO-FILL FORM MODAL -------------------- */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[85vh] rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header with Mode Toggle Tabs */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-red-600/90 text-white shadow-sm overflow-hidden p-0">
                <RobotAnimation className="w-9 h-9 scale-125" />
              </div>
              <div>
                <h3 className="font-soehne text-xs font-bold text-white leading-none">Aveda AI Assistant</h3>
                <p className="font-inter text-[9px] text-slate-400 mt-0.5">Explore &amp; Auto-fill Services</p>
              </div>
            </div>

            {/* Mode Selector Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('chat')}
                className={cn(
                  'px-3 py-1 text-[10px] font-bold rounded-lg transition-colors',
                  activeTab === 'chat' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                )}
              >
                💬 Chat
              </button>
              <button
                onClick={() => {
                  setActiveTab('form');
                  setFormSubmittedSuccess(false);
                }}
                className={cn(
                  'px-3 py-1 text-[10px] font-bold rounded-lg transition-colors flex items-center gap-1',
                  activeTab === 'form' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                )}
              >
                <FileText className="w-3 h-3" />
                <span>Form</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors ml-1"
              aria-label="Close Chat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* -------------------- MODE A: CHAT VIEW -------------------- */}
          {activeTab === 'chat' && (
            <>
              {/* Messages Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 font-inter text-xs leading-relaxed bg-[#07090e]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      'flex flex-col max-w-[88%]',
                      msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                    )}
                  >
                    <div
                      className={cn(
                        'p-3.5 rounded-2xl shadow-sm whitespace-pre-line',
                        msg.sender === 'user'
                          ? 'bg-red-600 text-white rounded-br-none font-medium'
                          : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                      )}
                    >
                      {msg.text}

                      {/* Auto-fill Form Action Button inside bot response */}
                      {msg.sender === 'bot' && msg.serviceKey && (
                        <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                          <button
                            onClick={() => openFormWithService(msg.serviceKey!)}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold shadow-md transition-all"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>📋 Auto-Fill Form For This Service</span>
                          </button>
                        </div>
                      )}

                      {/* Render Links if present */}
                      {msg.links && msg.links.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex flex-col gap-1.5">
                          {msg.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => {
                                if (link.href.startsWith('http')) {
                                  window.open(link.href, '_blank');
                                }
                              }}
                              className="inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-red-600/20 text-red-400 hover:text-white border border-slate-700/60 transition-colors text-[11px] font-semibold"
                            >
                              <span>{link.label}</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-900 text-slate-400 border border-slate-800 w-fit">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-red-500" />
                    <span className="text-[11px]">Analyzing service details...</span>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompt Chips Bar */}
              <div className="px-3 py-2 bg-slate-900/90 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-1.5">
                {QUICK_PROMPTS.map((chip) => (
                  <button
                    key={chip.key}
                    onClick={() => handleSend(chip.label)}
                    className={cn(
                      'shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium border transition-all',
                      chip.key === 'form'
                        ? 'bg-red-600/20 text-red-400 border-red-500/40 hover:bg-red-600 hover:text-white'
                        : 'bg-slate-800 text-slate-300 border-slate-700/60 hover:bg-red-600 hover:text-white'
                    )}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Input Footer */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about web dev, app, AI calling, SEO..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white flex items-center justify-center transition-colors shadow-md shrink-0"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* -------------------- MODE B: INLINE AUTO-FILL FORM VIEW -------------------- */}
          {activeTab === 'form' && (
            <div className="flex-1 overflow-y-auto p-5 bg-[#07090e] font-inter text-xs">
              {formSubmittedSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-soehne text-lg font-bold text-white">Inquiry Submitted!</h4>
                  <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
                    Thank you! Our technical sales engineering team will review your requirements for <strong className="text-white">{formData.service}</strong> and contact you within 24 hours.
                  </p>
                  <div className="pt-2 flex flex-col gap-2 w-full max-w-xs">
                    <button
                      onClick={() => {
                        setFormSubmittedSuccess(false);
                        setActiveTab('chat');
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                    >
                      Return to Chat
                    </button>
                    <Link
                      href="https://wa.me/919532758070"
                      target="_blank"
                      className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Chat Directly on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-2.5 text-slate-300">
                    <Sparkles className="w-5 h-5 text-red-500 shrink-0" />
                    <div>
                      <p className="font-bold text-white text-xs">Auto-Fill Service Query Form</p>
                      <p className="text-[10px] text-slate-400">Fill your contact details to get an instant proposal.</p>
                    </div>
                  </div>

                  {/* Select Service Dropdown */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Target Service / Solution *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-red-500 focus:outline-none"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.slug} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Company / Organization *</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Phone *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Project Scope / Requirements *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your project scope, features required, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-red-500 focus:outline-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="submit"
                      disabled={isSubmittingForm}
                      className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold text-xs shadow-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmittingForm ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <Link
                      href={`/contact?service=${encodeURIComponent(formData.service)}&message=${encodeURIComponent(formData.message)}`}
                      className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1"
                      title="Open Full Contact Page"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      )}
    </>
  );
}
