'use client';

import Link from 'next/link';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MoveRight,
  Award,
  ArrowUp,
  Youtube,
  Twitter,
  Globe,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  Cpu,
} from 'lucide-react';
import { Logo } from './logo';

export default function Footer() {
  const recognitionBadges = [
    { name: 'MSME Registered' },
    { name: 'UDYAM: UDYAM-UP-50-0151143' },
    { name: 'Startup India Recognized' },
    { name: 'Digital India Partner' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Avedatechnologies.in/' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/avedatechnologies/' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Refund & Cancellation', href: '/refund-policy' },
    { name: 'Booking & Service Policy', href: '/booking-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Grievance Redressal', href: '/grievance-policy' },
  ];

  const paymentsLinks = [
    { name: 'Secure Payments', href: '/secure-payments-policy' },
    { name: 'Subscription & AutoPay Terms', href: '/subscription-terms' },
  ];

  const saasLinks = [
    { name: 'SaaS Subscription Agreement', href: '/saas-agreement' },
    { name: 'AI & Automation Disclaimer', href: '/ai-disclaimer' },
    { name: 'Data Processing Agreement (DPA)', href: '/dpa' },
  ];

  return (
    <footer className="relative bg-[#030517] text-white overflow-hidden font-inter border-t border-[#181d3d]">
      
      {/* 3D Wireframe Perspective Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <g stroke="#6b7cba" strokeWidth="0.8" strokeOpacity="0.4" fill="none">
            <line x1="-300" y1="100" x2="1700" y2="450" />
            <line x1="-300" y1="200" x2="1700" y2="550" />
            <line x1="-300" y1="300" x2="1700" y2="650" />
            <line x1="-300" y1="0" x2="1700" y2="350" />
            <line x1="-300" y1="650" x2="1700" y2="100" />
            <line x1="-300" y1="550" x2="1700" y2="0" />
            <line x1="-300" y1="450" x2="1700" y2="-100" />
            <line x1="100" y1="0" x2="100" y2="600" strokeWidth="0.5" />
            <line x1="320" y1="0" x2="320" y2="600" strokeWidth="0.5" />
            <line x1="580" y1="0" x2="580" y2="600" strokeWidth="0.5" />
            <line x1="840" y1="0" x2="840" y2="600" strokeWidth="0.5" />
            <line x1="1100" y1="0" x2="1100" y2="600" strokeWidth="0.5" />
            <line x1="1360" y1="0" x2="1360" y2="600" strokeWidth="0.5" />
          </g>
        </svg>
      </div>

      <div className="container relative z-10 py-12 md:py-16 px-6 max-w-7xl mx-auto space-y-12">
        
        {/* Top Header Row with Logo & Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#181d3d]">
          <div className="flex items-center gap-3">
            <Logo imgClassName="brightness-0 invert" />
          </div>
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors p-1"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Links Grid - 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-xs text-slate-300">
          
          {/* Column 1: Our Brand & Solutions */}
          <div className="space-y-3">
            <p className="font-semibold text-white text-sm mb-3 uppercase tracking-wider">Company</p>
            <p><Link href="/about" className="hover:text-red-500 transition-colors">About Aveda</Link></p>
            <p><Link href="/partners" className="hover:text-red-500 transition-colors font-medium">Technology Partners</Link></p>
            <p><Link href="/works" className="hover:text-red-500 transition-colors">Case Studies</Link></p>
            <p><Link href="/products" className="hover:text-red-500 transition-colors">SaaS Products</Link></p>
            <p><Link href="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></p>
          </div>

          {/* Column 2: Legal Policies */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white text-sm mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              Legal
            </p>
            {legalLinks.map((link) => (
              <p key={link.name}>
                <Link href={link.href} className="hover:text-red-500 transition-colors">
                  {link.name}
                </Link>
              </p>
            ))}
          </div>

          {/* Column 3: Payments */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white text-sm mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-red-500" />
              Payments
            </p>
            {paymentsLinks.map((link) => (
              <p key={link.name}>
                <Link href={link.href} className="hover:text-red-500 transition-colors">
                  {link.name}
                </Link>
              </p>
            ))}
          </div>

          {/* Column 4: SaaS & Technology */}
          <div className="space-y-2.5">
            <p className="font-semibold text-white text-sm mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-red-500" />
              SaaS & Tech
            </p>
            {saasLinks.map((link) => (
              <p key={link.name}>
                <Link href={link.href} className="hover:text-red-500 transition-colors">
                  {link.name}
                </Link>
              </p>
            ))}
          </div>

          {/* Column 5: Certifications & Recognition */}
          <div className="space-y-4">
            <p className="font-semibold text-white text-sm mb-3 uppercase tracking-wider">Certifications</p>
            <div className="space-y-1.5 text-xs text-slate-300">
              {recognitionBadges.map((b) => (
                <p key={b.name} className="text-slate-400">{b.name}</p>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-[#181d3d] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>&copy; {new Date().getFullYear()} Aveda Technologies. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-400 text-[11px]">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy (DPDP Act 2023)</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
            <span>•</span>
            <Link href="/grievance-policy" className="hover:text-white transition-colors">Grievance</Link>
            <span>•</span>
            <Link href="/subscription-terms" className="hover:text-white transition-colors">AutoPay Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}