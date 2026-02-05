import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, BrainCircuit, UserCheck, Briefcase, MoveRight } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Info.avedatechnoologies@gmail.com',
      href: 'mailto:Info.avedatechnoologies@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9012887697',
      href: 'tel:+919012887697',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        value: 'Mon–Sat | 10:00 AM – 7:00 PM',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Park, Bangalore, India',
    },
  ];

  const whyContactUs = [
      {
          icon: Clock,
          title: 'Fast Response Time',
          description: 'We prioritize your inquiries to provide timely and efficient support.'
      },
      {
          icon: BrainCircuit,
          title: 'AI-First Strategy',
          description: 'Leverage our AI expertise to build intelligent, data-driven solutions.'
      },
      {
          icon: UserCheck,
          title: 'Dedicated Project Manager',
          description: 'A single point of contact to ensure seamless project execution.'
      },
      {
          icon: Briefcase,
          title: 'Political & Business Expertise',
          description: 'Specialized insights for both corporate and political challenges.'
      }
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-primary/20 opacity-30"></div>
            <div className="container relative z-10 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
                    Let’s Build Something Powerful Together
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                    AI-driven digital solutions for brands, businesses, and political campaigns.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                    <Link href="#contact-form">Get Started</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                    <Link href="#">Book Free Consultation</Link>
                    </Button>
                </div>
            </div>
        </section>
      
        {/* Form and Details Section */}
        <section id="contact-form" className="py-20 md:py-28">
            <div className="container">
                <div className="grid gap-16 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                        <h2 className="font-headline text-3xl font-semibold mb-8">Send Us a Message</h2>
                        <ContactForm />
                    </div>
                    <div className="space-y-8 lg:col-span-2">
                        <h2 className="font-headline text-3xl font-semibold">Contact Info</h2>
                        <p className='text-muted-foreground'>Aveda Technologies</p>
                        {contactDetails.map((detail) => (
                        <div key={detail.title} className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                                <detail.icon className="h-6 w-6" />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-lg font-semibold">{detail.title}</h3>
                            {detail.href ? (
                                <a href={detail.href} className="text-muted-foreground hover:text-primary">
                                {detail.value}
                                </a>
                            ) : (
                                <p className="text-muted-foreground">{detail.value}</p>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="bg-secondary py-20 md:py-28">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Contact Us?</h2>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {whyContactUs.map((value) => (
                    <div key={value.title} className="group rounded-lg p-6 transition-all duration-300 hover:bg-muted/50 hover:-translate-y-2">
                        <div className="flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-primary ring-8 ring-muted transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/20">
                            <value.icon className="h-8 w-8" />
                        </div>
                        </div>
                        <h3 className="mt-6 font-headline text-xl font-semibold">{value.title}</h3>
                        <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border bg-card py-20">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                    Your Vision. Our Technology.
                </h2>
                <Button asChild size="lg" className="mt-8">
                    <Link href="#contact-form">
                    Start Your Project <MoveRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

    </div>
  );
}
