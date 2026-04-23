
import Link from 'next/link';
import { services, footerLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Instagram,
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
  
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer className="border-t bg-secondary text-foreground">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Delivering innovative IT solutions and digital services to drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                     <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:info@avedatechnologies.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>info@avedatechnologies.com</span>
              </a>
              <a
                href="tel:+919532758070"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+91 9532758070</span>
              </a>
              <Button asChild className="w-full rounded-lg" size="lg">
                <Link href="/contact">
                  Start Your Project <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Recognition
                </h3>
                <ul className="mt-4 space-y-3">
                    {recognitionBadges.map(badge => (
                        <li key={badge.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                           <Award className="h-4 w-4 text-primary" />
                           <span>{badge.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className='border-t'>
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row">
            <p>
                &copy; {new Date().getFullYear()} Aveda Technologies. All Rights Reserved.
            </p>
            <div className="flex gap-4">
                <Link href="/privacy-policy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
                <Separator orientation='vertical' className='h-5' />
                <Link href="/terms-and-conditions" className="transition-colors hover:text-foreground">Terms & Conditions</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
