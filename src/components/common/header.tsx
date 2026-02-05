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

  const showSolidHeader = !hasMounted
    ? pathname !== '/'
    : pathname !== '/' || isScrolled;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 animate-in fade-in slide-in-from-top-4',
        showSolidHeader
          ? 'border-b bg-background/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
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
                        : 'text-foreground/60'
                    )}
                  >
                    {link.label}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      pathname.startsWith(link.href) || servicesMenuOpen
                        ? 'text-primary'
                        : 'text-foreground/60',
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
                    ? 'text-primary'
                    : 'text-foreground/60'
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
                                    href={`/services#${service.slug}`}
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
      <div
        onMouseEnter={() => setServicesMenuOpen(true)}
        className={cn(
          'absolute left-0 top-full w-full bg-background shadow-lg transition-all duration-300 ease-in-out',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2',
          'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-2',
          servicesMenuOpen
            ? 'data-[state=open]'
            : 'data-[state=closed] invisible'
        )}
      >
        <div className="container p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-semibold tracking-tight">
              Our Services
            </h3>
            <Link
              href="/services"
              onClick={() => setServicesMenuOpen(false)}
              className="text-sm text-primary hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="my-2 border-b" />
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 pt-2 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  onClick={() => setServicesMenuOpen(false)}
                  className="group flex items-center justify-between py-1 text-muted-foreground transition-colors hover:text-primary"
                >
                  <span>{service.title}</span>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
