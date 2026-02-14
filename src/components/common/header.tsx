'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, services } from '@/lib/data';
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
import { Menu, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from './logo';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMounted]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 animate-in fade-in slide-in-from-top-4',
        'border-b bg-background/80 backdrop-blur-sm'
      )}
      onMouseLeave={() => setServicesMenuOpen(false)}
    >
      <div className="container relative flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) =>
            link.isMegaMenu ? (
              <div key={link.href} onMouseEnter={() => setServicesMenuOpen(true)}>
                <button className="flex items-center gap-1 outline-none">
                  <span
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname.startsWith(link.href) || servicesMenuOpen
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      pathname.startsWith(link.href) || servicesMenuOpen
                        ? 'text-primary'
                        : 'text-muted-foreground',
                      servicesMenuOpen && 'rotate-180'
                    )}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 pt-8">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className={cn(
                      'py-3 text-lg font-medium transition-colors hover:text-primary',
                      pathname === '/' ? 'text-primary' : 'text-foreground/80'
                    )}
                  >
                    Home
                  </Link>
                  {navLinks.map((link) =>
                    link.isMegaMenu ? (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        key={link.label}
                      >
                        <AccordionItem value="services" className="border-b-0">
                          <AccordionTrigger className="py-3 text-lg font-medium transition-colors hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <ul className="space-y-3 border-l pl-6 pt-2">
                              {services.map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    onClick={() => setOpen(false)}
                                    className="text-base text-muted-foreground transition-colors hover:text-primary"
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
                          'py-3 text-lg font-medium transition-colors hover:text-primary',
                          pathname === link.href
                            ? 'text-primary'
                            : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Mega Menu */}
      <div
        onMouseEnter={() => setServicesMenuOpen(true)}
        className={cn(
          'absolute left-0 top-full w-full rounded-b-2xl border-t bg-background/90 shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-4',
          'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-4',
          servicesMenuOpen
            ? 'data-[state=open]'
            : 'data-[state=closed] invisible'
        )}
      >
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="md:col-span-3">
              <h3 className="font-headline text-lg font-semibold tracking-tight text-accent">
                Our Services
              </h3>
              <div className="my-2 w-16 border-b border-primary" />
              <p className="mt-4 text-sm text-muted-foreground">
                Explore our full range of solutions designed for growth and innovation.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-6">
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
                      className="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-secondary"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{service.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-3 hidden md:block border-l pl-8">
               <h4 className="font-semibold text-accent">AI-Driven Innovation</h4>
               <p className="mt-2 text-sm text-muted-foreground">
                 Building scalable digital solutions with AI-driven innovation.
               </p>
               <Button asChild variant="link" className="p-0 h-auto mt-4 text-primary">
                    <Link href="/contact" onClick={() => setServicesMenuOpen(false)}>
                        Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
