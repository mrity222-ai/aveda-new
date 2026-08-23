'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Menu, ChevronDown, ArrowRight, Search, Globe } from 'lucide-react';
import { Logo } from './logo';

const navLinks = [
  { href: '/about', label: 'ABOUT US' },
  { href: '/services', label: 'CAPABILITIES', isMegaMenu: true },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/industries', label: 'INDUSTRIES' },
  { href: '/insides', label: 'INSIGHTS' },
  { href: '/works', label: 'PORTFOLIO' },
  { href: '/contact', label: 'CONTACT US' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300 border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur-md text-slate-950"
      onMouseLeave={() => setServicesMenuOpen(false)}
    >
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Logo />
        </Link>

        {/* Center: Navigation Bar (Tech Mahindra Uppercase & Active Red Underline Style) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return link.isMegaMenu ? (
              <div key={link.href} onMouseEnter={() => setServicesMenuOpen(true)} className="relative">
                <button className="flex items-center gap-1.5 py-5 outline-none group">
                  <span
                    className={cn(
                      'transition-colors duration-200 py-1 border-b-2',
                      isActive || servicesMenuOpen
                        ? 'border-red-600 text-slate-950 font-bold'
                        : 'border-transparent text-slate-950 hover:text-red-600 hover:border-red-600'
                    )}
                  >
                    {link.label}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200 text-slate-950 group-hover:text-red-600',
                      servicesMenuOpen && 'rotate-180 text-red-600'
                    )}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors duration-200 py-1 border-b-2',
                  isActive
                    ? 'border-red-600 text-slate-950 font-bold'
                    : 'border-transparent text-slate-950 hover:text-red-600 hover:border-red-600'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search Icon, Divider & GET STARTED PROJECT CTA Button */}
        <div className="flex items-center justify-end space-x-3 sm:space-x-4">
          
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-slate-950 hover:text-red-600 transition-colors"
            title="Search site"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Divider */}
          <div className="hidden sm:block h-4 w-px bg-neutral-300" />

          {/* GET STARTED PROJECT Button */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-4 h-9 rounded-xl shadow-md transition-all hover:scale-105"
          >
            <Link href="/contact">GET STARTED PROJECT</Link>
          </Button>

          {/* Mobile Sheet Trigger */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-950 hover:bg-neutral-100">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[380px] flex flex-col bg-white">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 pt-6 flex-grow">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className={cn(
                      'py-3 text-base font-bold uppercase tracking-wider transition-colors border-b border-neutral-100',
                      pathname === '/' ? 'text-red-600 font-bold' : 'text-slate-950'
                    )}
                  >
                    HOME
                  </Link>

                  {navLinks.map((link) =>
                    link.isMegaMenu ? (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full border-b border-neutral-100"
                        key={link.label}
                      >
                        <AccordionItem value="services" className="border-b-0">
                          <AccordionTrigger className="py-3 text-base font-bold uppercase tracking-wider text-slate-950 hover:text-red-600 hover:no-underline [&[data-state=open]]:text-red-600">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <ul className="space-y-2.5 border-l-2 border-red-600 pl-4 pt-1">
                              {services.map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    onClick={() => setOpen(false)}
                                    className="text-sm font-medium text-slate-950 hover:text-red-600 transition-colors"
                                  >
                                    {service.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'py-3 text-base font-bold uppercase tracking-wider transition-colors border-b border-neutral-100',
                          pathname === link.href ? 'text-red-600 font-bold' : 'text-slate-950 hover:text-red-600'
                        )}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>

                <div className="mt-auto pt-4">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider">
                    <Link href="/contact" onClick={() => setOpen(false)}>GET STARTED PROJECT</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        onMouseEnter={() => setServicesMenuOpen(true)}
        className={cn(
          'absolute left-0 top-full w-full rounded-b-2xl border-t border-neutral-200/80 bg-white shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out z-50',
          servicesMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'
        )}
      >
        <div className="container mx-auto p-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column */}
            <div className="md:col-span-3">
              <h3 className="font-soehne text-lg font-bold tracking-tight text-slate-950">
                Core Capabilities
              </h3>
              <div className="my-2 w-12 border-b-2 border-red-600" />
              <p className="mt-4 text-xs text-slate-950 leading-relaxed">
                Explore our full suite of enterprise digital transformation solutions, web engineering, and AI automation engines.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-6 border-neutral-300 text-xs font-semibold text-slate-950 hover:bg-neutral-50">
                <Link href="/services" onClick={() => setServicesMenuOpen(false)}>
                  View All Services
                </Link>
              </Button>
            </div>
            
            {/* Center Column */}
            <div className="md:col-span-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() => setServicesMenuOpen(false)}
                      className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-100"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                        <service.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-slate-950 group-hover:text-red-600 transition-colors">{service.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-3 hidden md:block border-l border-neutral-200/80 pl-8">
              <h4 className="font-bold text-sm text-slate-950">AI & SaaS Innovations</h4>
              <p className="mt-2 text-xs text-slate-950 leading-relaxed">
                Discover our proprietary SaaS engines, AI calling agents, and enterprise automation suite.
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-4 text-xs font-bold text-red-600 hover:text-red-700">
                <Link href="/products" onClick={() => setServicesMenuOpen(false)}>
                  Explore Products <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
