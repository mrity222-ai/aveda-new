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

const PinterestIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12.017 0C5.383 0 0 5.383 0 12.017c0 5.078 3.068 9.387 7.37 11.085.107-.4.187-1.016.187-1.016s-.42-.685-.42-1.702c0-1.612.937-2.79 2.071-2.79 1.001 0 1.488.756 1.488 1.671 0 1.025-.653 2.576-1.001 4.001-.29 1.187.576 2.096 1.702 2.096 2.071 0 3.654-2.223 3.654-5.342 0-2.79-1.99-4.796-4.99-4.796-3.29 0-5.242 2.44-5.242 4.796 0 1 .37 2.086.887 2.637a.36.36 0 0 1 .087.356c-.05.176-.176.712-.222.863-.075.25-.337.356-.534.222-1.125-.437-1.875-1.95-1.875-3.193 0-2.585 2.1-4.99 6.02-4.99 3.512 0 6.255 2.5 6.255 5.625 0 3.825-2.25 6.75-5.25 6.75-1.062 0-2.062-.562-2.437-1.218l-.813 3.063c-.25.938-.938 2.25-1.438 3.125C9.938 23.375 10.938 24 12.017 24c6.633 0 12.017-5.383 12.017-12.017S18.65 0 12.017 0z" />
    </svg>
);

export default function Footer() {
  const recognitionBadges = [
    { name: 'MSME Registered' },
    { name: 'UDYAM: UDYAM-UP-50-0151143' },
    { name: 'Startup India Recognized' },
    { name: 'Digital India Partner' },
  ];
  
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/avedatechnologies/' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/Avedatechnologies.in/' },
    { name: 'Pinterest', icon: PinterestIcon, href: 'https://pin.it/1HWPI86h4' },
  ];

  return (
    <footer className="border-t bg-secondary text-foreground">
      <div className="container py-12 md:py-20 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Logo />
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Aveda Technologies is a leading AI Automation and Software Development Company providing Custom Software, CRM ERP Solutions, and Digital Transformation services globally.
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
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground">Our Locations</h3>
            <ul className="mt-4 space-y-2 md:space-y-3">
              <li><Link href="/locations/canada" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Software Development Canada</Link></li>
              <li><Link href="/locations/australia" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">AI Automation Australia</Link></li>
              <li><Link href="/locations/netherlands" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">SaaS Development Netherlands</Link></li>
              <li><Link href="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Software Company Lucknow</Link></li>
              <li><Link href="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Software Company Noida</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground">Core Expertise</h3>
            <ul className="mt-4 space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative text-xs md:text-sm text-muted-foreground transition-colors hover:text-foreground"
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
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:info@avedatechnologies.com"
                className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span>info@avedatechnologies.com</span>
              </a>
              <a
                href="tel:+919532758070"
                className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+91 9532758070</span>
              </a>
              <Button asChild className="w-full rounded-lg text-xs md:text-sm" size="lg">
                <Link href="/contact">
                  Start Your Project <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             <div className="mt-8">
                <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground">
                    Certifications
                </h3>
                <ul className="mt-4 space-y-2 md:space-y-3">
                    {recognitionBadges.map(badge => (
                        <li key={badge.name} className="flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground">
                           <Award className="h-3 w-3 md:h-4 md:w-4 text-primary" />
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
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-[10px] md:text-sm text-muted-foreground md:flex-row px-4 text-center md:text-left">
            <div className="flex flex-col gap-1">
                <p>&copy; {new Date().getFullYear()} Aveda Technologies. Top Software Development Company in India & Global Markets.</p>
                <p className="text-[9px] md:text-[10px] opacity-70">Serving Lucknow, Noida, Delhi, Gurugram, Mumbai, Bangalore, Pune, Ahmedabad, Hyderabad, Chennai, Kolkata, and Jaipur.</p>
            </div>
            <div className="flex gap-4">
                <Link href="/privacy-policy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
                <Separator orientation='vertical' className='h-5 hidden md:block' />
                <Link href="/terms-and-conditions" className="transition-colors hover:text-foreground">Terms & Conditions</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}