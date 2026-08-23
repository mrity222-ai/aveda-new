import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Sparkles } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Aveda Technologies to start your project. We offer AI-driven digital solutions for brands, businesses, and political campaigns.',
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with Aveda Technologies to start your project. We offer AI-driven digital solutions for brands, businesses, and political campaigns.',
  },
  twitter: {
    title: 'Contact Us',
    description: 'Get in touch with Aveda Technologies to start your project. We offer AI-driven digital solutions for brands, businesses, and political campaigns.',
  }
};

export default function ContactPage() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Avedatechnologies.in/' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/avedatechnologies/' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* -------------------- HERO BANNER HEADER -------------------- */}
      <div className="pt-24 sm:pt-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="relative h-[220px] sm:h-[280px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-red-500">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            src="/vio/bg.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70" />
          
          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between z-10">
            {/* Top Row Logo Icon */}
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Sparkles className="w-4 h-4 text-red-500" />
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="font-soehne text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Contacts
              </h1>
            </div>
          </div>

          {/* Right Floating Breadcrumb Pill */}
          <div className="absolute right-6 bottom-6 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-xs font-semibold text-slate-800 border border-white/50 shadow-xl z-10">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-white font-bold">Contacts</span>
          </div>
        </div>
      </div>

      {/* -------------------- MAIN CONTACT SECTION -------------------- */}
      <section id="contact-form" className="py-12 md:py-12 bg-white">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-widest block mb-3">
                / get in touch /
              </span>
              
              <h2 className="font-soehne text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-[1.2] mb-6">
                We are always ready to help you and answer your questions
              </h2>

              <p className="font-inter text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg font-normal">
                Reach out to Aveda Technologies for custom AI automation, web & mobile software development, or digital transformation.
              </p>
            </div>

            {/* 2x2 Contact Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
              {/* Call Center */}
              <div>
                <p className="font-soehne text-sm font-bold text-slate-950 mb-2">Call Center</p>
                <div className="space-y-1 text-xs font-inter">
                  <a href="tel:+919532758070" className="block text-slate-600 hover:text-red-600 transition-colors font-medium">
                    +91 9532758070
                  </a>
                  <a href="tel:+915223397515" className="block text-slate-600 hover:text-red-600 transition-colors font-medium">
                    +91 522 3397515
                  </a>
                </div>
              </div>

              {/* Our Location */}
              <div>
                <p className="font-soehne text-sm font-bold text-slate-950 mb-2">Our Location</p>
                <p className="text-xs font-inter text-slate-600 font-medium leading-relaxed">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="font-soehne text-sm font-bold text-slate-950 mb-2">Email</p>
                <a href="mailto:info@avedatechnologies.com" className="text-xs font-inter text-slate-600 hover:text-red-600 transition-colors font-medium block">
                  info@avedatechnologies.com
                </a>
              </div>

              {/* Social network */}
              <div>
                <p className="font-soehne text-sm font-bold text-slate-950 mb-2">Social network</p>
                <div className="flex items-center gap-3.5 pt-1 text-slate-700">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-600 transition-colors p-1"
                      aria-label={s.name}
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Container Card */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] border border-slate-200/80 bg-[#f4f4f6] p-8 sm:p-10 md:p-12 shadow-sm">
              <h2 className="font-soehne text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
                Get in Touch
              </h2>
              <p className="font-inter text-xs text-slate-600 mb-8 leading-relaxed">
                Define your goals and identify areas where AI can add value to your business
              </p>

              <ContactForm />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
