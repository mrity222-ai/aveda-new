
import Link from 'next/link';
import { services, footerLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MoveRight,
  Award,
} from 'lucide-react';
import { Logo } from './logo';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const recognitionBadges = [
    { name: 'MSME Registered' },
    { name: 'Startup India Recognized' },
    { name: 'Digital India Partner' },
  ];

  return (
    <footer className="border-t bg-secondary">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Delivering innovative IT solutions and digital services to drive business growth.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                asChild
              >
                <Link href="#">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                asChild
              >
                <Link href="#">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                asChild
              >
                <Link href="#">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-headline text-lg font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="font-headline text-lg font-semibold">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:info@avedadigital.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>info@avedadigital.com</span>
              </a>
              <a
                href="tel:+919012887697"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9012887697</span>
              </a>
              <Button asChild className="mt-6 w-full bg-primary text-white" size="lg">
                <Link href="/contact">
                  Start Your Project <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="mt-16 text-center">
            <h4 className="mb-6 font-headline text-sm uppercase tracking-widest text-muted-foreground">Officially Recognized</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {recognitionBadges.map(badge => (
                    <div key={badge.name} className="flex items-center gap-2 text-muted-foreground">
                       <Award className="h-5 w-5 text-accent" />
                       <span className='text-sm font-medium'>{badge.name}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
      {/* Bottom Bar */}
      <div className='border-t'>
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row">
            <div className="flex gap-4">
                <Link href="#" className="transition-colors hover:text-foreground">Privacy Policy</Link>
                <Separator orientation='vertical' className='h-5' />
                <Link href="#" className="transition-colors hover:text-foreground">Terms & Conditions</Link>
            </div>
            <p>
                &copy; {new Date().getFullYear()} Aveda Digital. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
