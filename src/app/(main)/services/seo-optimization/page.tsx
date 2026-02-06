'use client';

import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  MapPin,
  TrendingUp,
  PhoneCall,
  Star,
  CheckCircle,
  MoveRight,
  Building,
  Briefcase,
  HeartPulse,
  Vote,
  Search,
  Image as ImageIcon,
  Bookmark,
  Award,
  ScanSearch,
  Crosshair,
  FileText,
  BarChart,
  Store,
  Wrench,
  Hospital,
  Loader2,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { handleSeoFormSubmission } from './actions';
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

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    phone: z.string().min(10, 'Please enter a valid phone number.'),
    businessLocation: z.string().min(3, 'Please enter your business location.'),
    website: z.string().optional(),
  });

function SeoAuditForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: '',
        phone: '',
        businessLocation: '',
        website: '',
      },
    });
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      const result = await handleSeoFormSubmission(values);
  
      if (result.success) {
        toast({
          title: 'Request Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: result.message || 'There was a problem with your request.',
        });
      }
    };
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                        <Input placeholder="+91 12345 67890" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="businessLocation"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Business / Location</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., 'Cafe in Mumbai' or 'Lawyer in Delhi'" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
          <Button type="submit" disabled={form.formState.isSubmitting} className="w-full" size="lg">
            {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Start Local Ranking
          </Button>
        </form>
      </Form>
    );
  }

export default function SeoOptimizationPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const geoTaggingImage = PlaceHolderImages.find((img) => img.id === 'service-seo-map');
    
    const whyLocalSeo = [
        {
            icon: Search,
            title: 'Appear in “Near Me” Searches',
            description: 'Capture high-intent customers actively looking for your services in their immediate area.',
        },
        {
            icon: MapPin,
            title: 'Rank Higher on Google Maps',
            description: 'Become a top suggestion in the Google Map Pack, driving directions and foot traffic to you.',
        },
        {
            icon: PhoneCall,
            title: 'Get More Local Calls & Visits',
            description: 'Convert local searchers into paying customers with prominent contact info and location.',
        },
        {
            icon: Star,
            title: 'Build Trust in Your Area',
            description: 'Establish your brand as a credible and reliable local authority in your community or constituency.',
        },
    ];

    const services = [
        { icon: Building, title: 'Google Business Profile Optimization' },
        { icon: Search, title: 'Local Keyword Research' },
        { icon: ImageIcon, title: 'GEO Tagged Content & Images' },
        { icon: TrendingUp, title: 'Map Pack Ranking Optimization' },
        { icon: Bookmark, title: 'Local Citations & Listings' },
        { icon: Award, title: 'Review & Reputation Management' },
    ];

    const processSteps = [
        { icon: ScanSearch, title: "Local SEO Audit", description: "We analyze your current standing and identify opportunities."},
        { icon: Crosshair, title: "Keyword + City Targeting", description: "We find the exact terms local customers are using to find you."},
        { icon: MapPin, title: "Google Maps & GEO Optimization", description: "We optimize your profile and content for location-based searches."},
        { icon: FileText, title: "Content & Citation Building", description: "We build your authority with locally relevant content and listings."},
        { icon: BarChart, title: "Ranking Tracking & Reporting", description: "We provide transparent reports on your local search performance."},
    ]

    const whoIsThisFor = [
        { icon: Store, title: 'Local Businesses & Shops' },
        { icon: Wrench, title: 'Service Providers' },
        { icon: Hospital, title: 'Real Estate & Clinics' },
        { icon: Vote, title: 'Political Offices & Constituencies' },
    ];

    const results = [
        { value: '70%', label: 'Increase in local calls'},
        { value: 'Top 3', label: 'Map ranking improvement'},
        { value: '55%', label: 'Website visits from nearby users'},
    ]

    const trustFactors = [
        { text: 'AI-powered SEO workflows'},
        { text: 'White-hat GEO tagging practices'},
        { text: 'Transparent monthly reports'},
        { text: 'Business + political expertise'},
    ]

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                        src={heroImage.imageUrl}
                        alt="SEO Optimization background"
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
                        Get Found First in Your City
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        Rank higher on Google Maps & local search using AI-powered Local SEO and GEO tagging strategies.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="#lead-capture">Get Free Local SEO Audit</Link>
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

            {/* Why Local SEO Matters Section */}
            <section className="py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">Why Local SEO Matters</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whyLocalSeo.map((value) => (
                        <div key={value.title} className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
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

             {/* What is GEO Tagging Section */}
             <section className="py-20 md:py-28 bg-secondary">
              <div className="container items-center gap-16 md:grid md:grid-cols-2">
                  <div className="relative h-96 w-full md:h-[500px]">
                      {geoTaggingImage && (
                          <Image
                          src={geoTaggingImage.imageUrl}
                          alt={geoTaggingImage.description}
                          fill
                          className="rounded-lg object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          data-ai-hint={geoTaggingImage.imageHint}
                          />
                      )}
                  </div>
                  <div className="mt-8 md:mt-0">
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">What is GEO Tagging?</h2>
                      <p className="mt-4 text-lg text-muted-foreground">GEO tagging embeds precise location data into your website's content, images, and posts. This tells search engines exactly where you are and what areas you serve, giving you a powerful advantage in local search results.</p>
                      
                      <ul className="mt-8 space-y-4">
                          <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span>Location tagging for images, pages & posts</span></li>
                          <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span>City-wise keyword targeting</span></li>
                          <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" /><span>Hyper-local visibility boost</span></li>
                      </ul>
                  </div>
              </div>
            </section>

             {/* Our Local SEO Services Section */}
            <section className="py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">Our Local SEO Services</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                        <div key={service.title} className="group rounded-lg border border-border bg-card p-6 text-left transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* How Our Process Works Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-16">How Our Process Works</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn("p-6 rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10", index % 2 === 0 ? "text-left" : "text-right")}>
                                        <Badge variant='outline' className={cn("mb-2", index % 2 !== 0 && 'ml-auto block w-fit' )}>Step {index + 1}</Badge>
                                        <h3 className="font-headline text-xl font-semibold">{step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-border">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Capture Section */}
            <section id="lead-capture" className="py-20 md:py-28">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to Dominate Local Search?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Fill out the form to get a free, no-obligation Local SEO audit. We'll analyze your online presence and show you exactly how we can help you get more local customers.</p>
                        
                        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                            {results.map((stat) => (
                                <div key={stat.label}>
                                <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <ul className="mt-12 space-y-4">
                            {trustFactors.map((factor) => (
                                <li key={factor.text} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                                    <span className="text-muted-foreground">{factor.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
                            <h3 className="font-headline text-2xl font-bold mb-6 text-center">Get Your Free Local SEO Audit</h3>
                            <SeoAuditForm />
                        </div>
                    </div>
                </div>
            </section>


            {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Dominate Local Search in Your Area
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="#lead-capture">
                                Get Free Local SEO Audit <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline">
                            <a href="tel:+919012887697">
                                <PhoneCall />
                                Call Now
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
