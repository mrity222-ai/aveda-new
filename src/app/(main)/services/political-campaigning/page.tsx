
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Target,
  Users,
  Bot,
  BarChartHorizontal,
  PieChart,
  Lightbulb,
  FileText,
  CheckSquare,
  Rocket,
  CheckCircle,
  MoveRight,
  Info,
  Megaphone,
  MapPin,
  BrainCircuit,
  Cpu,
  Signal,
  Award,
  ShieldCheck,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
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


export default function PoliticalCampaigningPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const dashboardImage = PlaceHolderImages.find((img) => img.id === 'service-political-dashboard');

    const howAiWins = [
        {
            icon: Target,
            title: 'AI Voter Targeting',
            description: 'Identify and reach key voter segments with unparalleled precision using predictive analytics.',
        },
        {
            icon: PieChart,
            title: 'Constituency Analysis',
            description: 'Gain deep insights into demographics, past results, and local issues to tailor your strategy.',
        },
        {
            icon: Bot,
            title: 'Narrative & Sentiment Analysis',
            description: 'Track public opinion and media narratives in real-time to control the conversation.',
        },
        {
            icon: Users,
            title: 'Booth-Level Digital Strategy',
            description: 'Deploy hyper-local digital campaigns that influence voters at the most granular level.',
        },
    ];

    const processSteps = [
        { icon: Lightbulb, title: "Discovery & Strategy", description: "We analyze your constituency, goals, and political landscape to build a data-driven campaign blueprint."},
        { icon: PieChart, title: "Data & Audience Modeling", description: "Our AI models segment voters and identify key influence groups for hyper-targeted messaging."},
        { icon: BarChartHorizontal, title: "Campaign Execution", description: "We launch multi-channel digital campaigns, including social media ads, content, and outreach."},
        { icon: CheckSquare, title: "Real-Time Optimization", description: "We continuously monitor sentiment and performance, adjusting tactics for maximum impact."},
        { icon: Rocket, title: "Reporting & Insights", description: "You get transparent reports on reach, engagement, and sentiment, providing clear strategic intelligence."},
    ];

    const ourServicesWithIcons = [
        { icon: Target, title: 'AI Voter Targeting & Segmentation' },
        { icon: PieChart, title: 'Constituency & Demographic Analysis' },
        { icon: Megaphone, title: 'Social Media Political Ad Campaigns' },
        { icon: Bot, title: 'Narrative & Online Sentiment Analysis' },
        { icon: Shield, title: 'Digital War Room & Response Team' },
        { icon: MapPin, title: 'Booth-Level Digital Strategy' },
        { icon: Users, title: 'Influencer & Community Outreach' },
        { icon: WhatsAppIcon, title: 'Whatsapp & IVR Campaigns' }
    ];

    const whyChooseUs = [
      {
        icon: BrainCircuit,
        title: 'Political Acumen + AI Tech',
        description: 'We merge deep political expertise with cutting-edge AI for a decisive electoral advantage.'
      },
      {
        icon: Cpu,
        title: 'Data-Driven, AI-First Approach',
        description: 'Advanced analytics and AI models drive every decision, from voter targeting to sentiment analysis.'
      },
      {
        icon: ShieldCheck,
        title: 'Ethical & Compliant Methodologies',
        description: 'Our strategies strictly adhere to platform policies and electoral regulations, ensuring data privacy.'
      },
      {
        icon: Signal,
        title: 'Real-time Actionable Intelligence',
        description: 'Our digital war room provides live insights to adapt and respond to the campaign landscape instantly.'
      },
      {
        icon: Award,
        title: 'Proven Track Record of Success',
        description: 'We have a history of delivering measurable results in high-stakes political campaigns.'
      }
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                 <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Political Campaigning background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-accent md:text-6xl">
                        Political Campaigning with AI
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                       Influence & voter targeting. Winning elections in the digital age requires data-driven precision.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=Political+Campaigning">Launch Campaign</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact?service=Political+Campaigning+Strategy+Brief">Request Strategy Brief</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* How AI Wins Elections Section */}
            <section className="py-20 md:py-28 bg-secondary">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl mb-12">How AI Wins Elections</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {howAiWins.map((item) => (
                        <div key={item.title} className="group rounded-lg border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <item.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold text-accent">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Our AI-Powered Political Services Section */}
            <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl">
                            Political Command Center
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                            A complete suite of AI-powered services for modern political campaigning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Cards */}
                        <div className="md:col-span-3 space-y-8">
                            {ourServicesWithIcons.slice(0, 4).map((service) => (
                                <div key={service.title} className="group relative rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1">
                                    <div className="relative flex items-center gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <service.icon className="h-5 w-5" />
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground">{service.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Center Image */}
                        <div className="md:col-span-6 relative h-[300px] w-full md:h-[400px]">
                            {dashboardImage && (
                                <Image
                                    src={dashboardImage.imageUrl}
                                    alt={dashboardImage.description}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    data-ai-hint={dashboardImage.imageHint}
                                />
                            )}
                             <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                        </div>

                        {/* Right Cards */}
                        <div className="md:col-span-3 space-y-8">
                            {ourServicesWithIcons.slice(4, 8).map((service) => (
                                <div key={service.title} className="group relative rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1">
                                    <div className="relative flex items-center gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <service.icon className="h-5 w-5" />
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground">{service.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Badge variant="outline" className="border-accent/50 bg-accent/10 text-accent">
                            <Shield className="mr-2 h-4 w-4" /> Secure & Confidential Data Handling - Powered by AI.
                        </Badge>
                    </div>
                </div>
            </section>
            
             {/* Process Section */}
             <section id="process" className="bg-background py-20 md:py-28 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl">Our Campaign Process</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A clear, data-driven path to electoral success, from initial strategy to final victory.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 animate-neon-pulse-line"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-16 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-12" : "pl-12")}>
                                    <div className={cn(
                                        "group relative overflow-hidden p-6 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg", 
                                        "transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:scale-105"
                                    )}>
                                        <div className={cn(
                                            "absolute top-0 font-headline text-8xl font-bold text-primary opacity-10 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] -translate-y-4 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20", 
                                            index % 2 === 0 ? "right-0 translate-x-4" : "left-0 -translate-x-4"
                                        )}>
                                            0{index + 1}
                                        </div>
                                        <div className="relative">
                                            <h3 className="font-headline text-xl font-semibold text-accent">{step.title}</h3>
                                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow-lg shadow-primary/30">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Why Choose Us Section */}
            <section className="bg-secondary py-20 md:py-28 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl">Why Aveda For Your Campaign?</h2>
                        <div className="mt-4 w-24 h-1 bg-primary mx-auto" />
                        <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
                            We're more than a service provider; we're your technology partner committed to delivering a decisive electoral advantage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {whyChooseUs.map((feature) => (
                            <div key={feature.title} className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-2">
                                <div className="relative flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-4 ring-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-lg font-semibold text-accent">{feature.title}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className='mt-24'>
                        <div className="max-w-2xl mx-auto rounded-lg border bg-card p-6 flex items-start gap-4">
                          <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-accent">Compliance First</h3>
                            <p className="text-sm text-muted-foreground">All our methodologies are compliant with platform policies (Google/Meta) and Election Commission guidelines. Data privacy is our priority.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="relative overflow-hidden border-t bg-card py-20">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Ready to Launch a Winning Campaign background"
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        Ready to Launch a Winning Campaign?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=Political+Campaigning">
                            Start Your Campaign <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
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

    