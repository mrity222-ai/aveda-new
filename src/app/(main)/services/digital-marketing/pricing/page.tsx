import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, CheckCircle, MoveRight, ShieldCheck, Clock, XCircle, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';


const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

const pricingPlans = [
    {
      name: 'Basic Plan',
      price: '₹2,999',
      period: '/ month',
      features: [
        '3 Social Media Posts / month',
        '2 Ad Campaigns',
        'Brand Awareness Strategy',
        'Basic AI Audience Targeting',
        'Monthly Performance Report',
      ],
      cta: 'Choose Plan',
      variant: 'outline',
      popular: false,
      emoji: '🔴',
    },
    {
      name: 'Growth Plan',
      price: '₹5,999',
      period: '/ month',
      features: [
        '6 Social Media Posts / month',
        '4 Performance Ad Campaigns',
        'Daily Campaign Monitoring',
        'AI-Based Targeting & Optimization',
        'Lead Tracking',
        'Monthly Detailed Report',
      ],
      cta: 'Choose Plan',
      variant: 'default',
      popular: true,
      emoji: '🔥',
    },
    {
      name: 'Premium AI Plan',
      price: '₹9,999',
      period: '/ month',
      features: [
        'Complete Website Development',
        'SEO + GEO Tagging',
        'AI Performance Marketing',
        'Lead Generation Funnels',
        'Social Media + Ads Management',
        'Monthly Growth Report',
      ],
      cta: 'Start Premium',
      variant: 'outline',
      popular: false,
      emoji: '⚫',
    },
  ];

const includedFeatures = [
    {
      icon: Sparkles,
      title: 'AI-Powered Strategy',
      description: 'Custom strategies built on data and AI insights.',
    },
    {
      icon: CheckCircle,
      title: 'Performance Tracking',
      description: 'Real-time dashboards to monitor your campaign success.',
    },
    {
      icon: Clock,
      title: 'Dedicated Support',
      description: 'Expert assistance available when you need it.',
    },
    {
      icon: Check,
      title: 'Transparent Reporting',
      description: 'Clear, concise reports on your marketing performance.',
    },
    {
        icon: CheckCircle,
        title: 'Business & Political Expertise',
        description: 'Specialized knowledge for corporate and political goals.',
    }
  ];

  const whyAveda = [
      { title: 'AI-First Digital Agency'},
      { title: 'Business + Political Marketing Expertise'},
      { title: 'Result-Driven Approach'},
      { title: 'Transparent Pricing'},
  ]

  const testimonials = [
      {
          quote: "Aveda's AI-driven approach completely transformed our lead generation. We saw a 200% increase in qualified leads within the first quarter!",
          name: 'Ankit Sharma',
          company: 'CEO, FinTech Startup',
          avatarId: 'testimonial-1',
          rating: 5,
      },
      {
          quote: "Their understanding of the political landscape is unmatched. The digital campaign they ran was instrumental in our election victory.",
          name: 'Priya Singh',
          company: 'Campaign Manager',
          avatarId: 'testimonial-2',
          rating: 5,
      }
  ]

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/20"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Choose a Digital Marketing Plan – Get Online Today
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            AI-powered marketing plans designed for growth, visibility, and influence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>30-day satisfaction assurance</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  'flex flex-col border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2',
                  plan.popular && 'border-2 border-primary shadow-2xl shadow-primary/10'
                )}
              >
                {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">MOST POPULAR</Badge>
                )}
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">{plan.emoji} {plan.name}</CardTitle>
                    <div className="text-4xl font-bold">
                        {plan.price}
                        <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-4">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <div className="p-6">
                    <Button asChild size="lg" className="w-full" variant={plan.variant as any}>
                        <Link href="/contact">{plan.cta}</Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* Annual Offer Banner */}
        <section className="py-8">
            <div className="container">
                <div className="rounded-lg bg-gradient-to-r from-primary/80 to-primary p-6 text-center text-primary-foreground">
                    <p className="animate-pulse text-xl font-bold">👉 Buy 12 Months & Get 1 Month FREE</p>
                </div>
            </div>
        </section>

      {/* Included with every plan */}
      <section className="py-20 md:py-28">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">What’s Included With Every Plan</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {includedFeatures.map((value) => (
              <div key={value.title} className="group flex flex-col items-center justify-start gap-4 p-4 text-center transition-all duration-300 hover:-translate-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-headline text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aveda + Testimonials Section */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container grid gap-16 lg:grid-cols-2">
            <div>
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Aveda Technologies?</h2>
                 <ul className="mt-8 space-y-4">
                    {whyAveda.map((item) => (
                        <li key={item.title} className="flex items-center gap-3 text-lg">
                            <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-muted-foreground">We're more than a service provider; we're your technology partner committed to delivering results with transparent pricing and an AI-first approach.</p>
            </div>
            <div className="space-y-8">
                 {testimonials.map((testimonial) => {
                     const image = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
                     return (
                        <Card key={testimonial.name} className="bg-card">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
                                <div className="mt-6 flex items-center gap-4">
                                     {image && <Image src={image.imageUrl} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint={image.imageHint} />}
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                     )
                 })}
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Grow With AI Marketing?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/contact">Get Free Strategy Call</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <a href="https://wa.me/919012887697" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        WhatsApp Us
                    </a>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
