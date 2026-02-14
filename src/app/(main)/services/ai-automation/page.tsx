'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Bot,
  FileText,
  Repeat,
  MoveRight,
  CheckCircle,
  Lightbulb,
  Code,
  Rocket,
  ShieldCheck,
  BrainCircuit,
  Container,
  Cloud,
  Database,
  Layers,
  Sparkles,
  Search,
  Scale,
  Cpu,
  XCircle,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { Switch } from '@/components/ui/switch';


const PythonIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]"><title>Python</title><path fill="currentColor" d="M16.225 10.358c-1.124-1.21-2.932-1.116-4.251.028-.85.737-1.396 1.8-1.485 2.933H12.9c.08-.627.4-1.18.81-1.59.56-.56 1.348-.797 2.144-.585.8.21 1.427.764 1.744 1.51.318.748.214 1.58-.29 2.216-.505.637-1.25.99-2.074 1.02h-1.33v-2.04h-.99v5.1h2.296c1.396 0 2.674-.682 3.42-1.84.747-1.157.747-2.61 0-3.766zm-7.23-2.63c-1.397 0-2.675-.682-3.42-1.841-.748-1.156-.748-2.61 0-3.766C6.322.905 7.6.222 8.997.222c1.124 1.21 2.932 1.116 4.25-.028.851-.737 1.397-1.8 1.486-2.933H12.3c-.08.627-.4 1.18-.81-1.59-.56-.56-1.348-.797-2.144-.585-.8-.21-1.427-.764-1.744-1.51C7.284.974 7.18.143 7.685-.494c.504-.636 1.25-.99 2.074-1.019h1.33v2.04h.99v-5.1H9.782c-1.396 0-2.674.682-3.42 1.84-.747 1.157-.747-2.61 0 3.767z"/></svg>
)

const OpenAIIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]"><title>OpenAI</title><path fill="currentColor" d="M20.219 19.82a8.743 8.743 0 0 1-13.402-4.966c.275-2.623 1.043-4.996 2.19-6.938 1.04-1.76 2.45-3.235 4.103-4.328A8.743 8.743 0 0 1 18.068 8.5a8.742 8.742 0 0 1-2.992 10.912c.55.337 1.08.723 1.586 1.151.08.067.14.15.19.24.16.29.07.66-.23.82-.29.16-.66.07-.82-.23a4.37 4.37 0 0 1-2.02-2.135c-.15-.29-.42-.48-.74-.53a4.37 4.37 0 0 0-4.04 2.807c-.16.3-.07.66.23.81.29.16.66.07.82-.23a2.62 2.62 0 0 1 2.42-1.68c.25 0 .49.09.68.25.3.25.4.65.25.99a2.62 2.62 0 0 1-3.63 1.72c-.3-.16-.66-.07-.82.23-.16.29-.07.66.23.82a4.37 4.37 0 0 0 6.06-2.86c.15-.3.42-.48-.74-.53a4.37 4.37 0 0 1 4.04-2.808c.3-.05.58.11.69.39.16.29.07.66-.23.81-.3-.16-.66-.07.82.23a2.62 2.62 0 0 0 2.43-1.68c.09-.18.09.38.03-.56.2.62.77 1.03 1.41 1.03.2 0 .4-.04.59-.12.3-.16-.66-.07-.82-.23.15.3.06.66-.24.82zM12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM3.78 19.82A8.743 8.743 0 0 1 17.182 4.966c-.275 2.623-1.043 4.996-2.19 6.938-1.04 1.76-2.45 3.235-4.103 4.328a8.743 8.743 0 0 1-5.952 4.912c-.55-.337-1.08-.723-1.586-1.151a.523.523 0 0 1-.19-.24c-.16-.29-.07-.66.23-.82.29-.16.66-.07.82.23a4.37 4.37 0 0 1 2.02 2.135c.15.29.42.48.74.53a4.37 4.37 0 0 0 4.04-2.807c.16-.3.07-.66-.23-.81-.29-.16-.66-.07.82.23a2.62 2.62 o 0 1-2.42 1.68c-.25 0-.49-.09-.68-.25a.874.874 0 0 1-.25-.99 2.62 2.62 0 0 1 3.63-1.72c.3.16.66.07.82-.23.16.29-.07-.66-.23-.82a4.37 4.37 0 0 0-6.06 2.86c-.15.3-.42-.48-.74-.53a4.37 4.37 0 0 1-4.04 2.808c-.3.05-.58.11-.69.39-.16.29-.07-.66.23.81.3-.16-.66-.07.82.23a2.62 2.62 0 0 0 2.43-1.68c.09-.18.09.38.03-.56a1.75 1.75 0 0 0-1.41-1.03c-.2 0-.4.04-.59.12-.3.16-.66-.07-.82-.23-.15-.3-.06.66.24-.82z"/></svg>
)

const TensorFlowIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]"><title>TensorFlow</title><path fill="currentColor" d="M12.012 0L24 6.93v2.311l-4.104 2.37-4.104 2.371v4.622l-3.792 2.19V13.98l-4.104 2.37-4.104 2.37v-4.74l4.104-2.37 4.104-2.371V4.5l-4.104 2.37-4.104 2.37V6.93L12.012 0zM7.908 17.52l4.104 2.37 4.104-2.37v4.74l-4.104 2.37-4.104-2.37v-4.74z"/></svg>
)


export default function AiAutomationPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'service-ai');
    const [isYearly, setIsYearly] = React.useState(false);

    const processSteps = [
        { icon: Search, title: "Strategy &amp; Audit", description: "We analyze your current systems and identify automation opportunities." },
        { icon: BrainCircuit, title: "AI Blueprint Creation", description: "We design a customized AI growth roadmap tailored to your business." },
        { icon: Code, title: "System Development &amp; Integration", description: "We build, integrate, and test your automation workflows." },
        { icon: Rocket, title: "Launch &amp; Optimization", description: "We monitor performance and continuously optimize for maximum ROI." },
    ];
    
    const techStack = [
        { icon: PythonIcon, name: 'Python' },
        { icon: OpenAIIcon, name: 'OpenAI' },
        { icon: Cpu, name: 'Genkit' },
        { icon: Sparkles, name: 'LangChain' },
        { icon: TensorFlowIcon, name: 'TensorFlow' },
        { icon: Cloud, name: 'Google Cloud' },
        { icon: Database, name: 'Firebase' },
        { icon: Zap, name: 'Zapier' },
        { icon: Layers, name: 'Make.com' },
        { icon: Container, name: 'Docker' },
    ];

    const benefits = [
        { icon: Clock, title: 'Save 30–70% Operational Time' },
        { icon: TrendingUp, title: 'Increase Lead Conversion Rates' },
        { icon: ShieldCheck, title: 'Reduce Human Errors' },
        { icon: Zap, title: '24/7 Automated Operations' },
        { icon: BrainCircuit, title: 'Data-Driven Decision Making' },
        { icon: Scale, title: 'Scalable Systems for Growth' },
    ];

    const pricingPlans = [
        {
            name: 'Starter AI Setup',
            icon: Rocket,
            color: 'green',
            description: 'Perfect for small businesses beginning their automation journey.',
            price: { monthly: 'Custom', yearly: '' },
            features: ['Core AI Chatbot', 'Basic CRM Automation', '3 Workflow Setups', 'Monthly Report'],
            cta: 'Contact Sales',
            variant: 'outline',
        },
        {
            name: 'Growth AI System',
            icon: TrendingUp,
            color: 'blue',
            description: 'For scaling businesses ready to streamline marketing and sales.',
            price: { monthly: 'Custom', yearly: '' },
            features: ['Everything in Starter, plus:', 'Advanced CRM Automation', 'AI Content Engine', 'Marketing &amp; Sales Funnels', 'Dedicated Support'],
            cta: 'Contact Sales',
            variant: 'outline',
            popular: true,
        },
        {
            name: 'Enterprise AI Ecosystem',
            icon: BrainCircuit,
            color: 'red',
            description: 'Complete AI transformation for industry leaders.',
            price: { monthly: 'Custom', yearly: '' },
            features: ['Everything in Growth, plus:', 'Full Automation Architecture', 'Custom AI Dashboards', 'Predictive Analytics', 'Enterprise Security'],
            cta: 'Contact Sales',
            variant: 'outline',
        },
    ];
    
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="AI Powered Growth Machine background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary">
                        AI &amp; Automation Services
                    </Badge>
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl text-accent">
                        Turn Your Business Into an AI-Powered Growth Machine
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        At Aveda Technologies, we design intelligent AI automation systems and generative AI solutions that reduce operational costs, eliminate manual work, and accelerate revenue growth.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=AI+Audit">Get Your Free AI Audit</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact?service=AI+Strategy+Call">Book Strategy Call</Link>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                        Trusted by growing startups, SMEs, and forward-thinking enterprises.
                    </p>
                </div>
            </section>

            {/* Is Your Business Stuck Section */}
            <section className="bg-background py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-[url('/nn.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">Is Your Business Stuck in Manual Chaos?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Common symptoms we see every day. Does any of this sound familiar?</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="group rounded-2xl border border-destructive/20 bg-card p-6 shadow-[0_0_15px_hsl(var(--destructive)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.2)] hover:-translate-y-1 hover:animate-shake">
                            <div className="flex items-start gap-4">
                                <XCircle className="h-8 w-8 text-destructive flex-shrink-0 drop-shadow-[0_0_5px_hsl(var(--destructive)/0.8)]" />
                                <div>
                                    <h3 className="font-semibold text-lg text-accent">Inconsistent Follow-ups</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Leads are coming in but your sales team can't keep up, letting potential revenue slip away.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="group rounded-2xl border border-destructive/20 bg-card p-6 shadow-[0_0_15px_hsl(var(--destructive)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.2)] hover:-translate-y-1 hover:animate-shake">
                            <div className="flex items-start gap-4">
                                <XCircle className="h-8 w-8 text-destructive flex-shrink-0 drop-shadow-[0_0_5px_hsl(var(--destructive)/0.8)]" />
                                <div>
                                    <h3 className="font-semibold text-lg text-accent">Overwhelmed Teams</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Your team is bogged down by repetitive, manual tasks, leading to burnout and low morale.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group rounded-2xl border border-destructive/20 bg-card p-6 shadow-[0_0_15px_hsl(var(--destructive)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.2)] hover:-translate-y-1 hover:animate-shake">
                            <div className="flex items-start gap-4">
                                <XCircle className="h-8 w-8 text-destructive flex-shrink-0 drop-shadow-[0_0_5px_hsl(var(--destructive)/0.8)]" />
                                <div>
                                    <h3 className="font-semibold text-lg text-accent">Slow Sales Processes</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Manual processes create bottlenecks in your sales cycle, delaying deals and frustrating customers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group rounded-2xl border border-destructive/20 bg-card p-6 shadow-[0_0_15px_hsl(var(--destructive)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.2)] hover:-translate-y-1 hover:animate-shake lg:col-span-2">
                             <div className="flex items-start gap-4">
                                <XCircle className="h-8 w-8 text-destructive flex-shrink-0 drop-shadow-[0_0_5px_hsl(var(--destructive)/0.8)]" />
                                <div>
                                    <h3 className="font-semibold text-lg text-accent">Inefficient Content Creation</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Content production is a major time sink, preventing you from engaging your audience consistently across platforms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="group rounded-2xl border border-destructive/20 bg-card p-6 shadow-[0_0_15px_hsl(var(--destructive)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.2)] hover:-translate-y-1 hover:animate-shake">
                             <div className="flex items-start gap-4">
                                <XCircle className="h-8 w-8 text-destructive flex-shrink-0 drop-shadow-[0_0_5px_hsl(var(--destructive)/0.8)]" />
                                <div>
                                    <h3 className="font-semibold text-lg text-accent">Lack of Data Insights</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">You're making decisions based on guesswork, not data, and have no clear view of what's working.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 border-t-2 border-dashed border-destructive/20 pt-12 text-center max-w-3xl mx-auto">
                        <p className="text-2xl font-headline font-semibold text-accent">If this sounds familiar, your business doesn’t need more staff.</p>
                        <p className="mt-2 text-3xl font-headline font-bold text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">It needs intelligent automation.</p>
                    </div>
                </div>
            </section>

            {/* We Build AI Systems Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-[url('/nn.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">We Build AI Systems That Work 24/7 So You Don’t Have To</h2>
                        <p className="mt-4 text-lg text-muted-foreground">At Aveda Technologies, we combine AI Automation and Generative AI to create complete growth ecosystems.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* AI Automation Services Card */}
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <Card className="flex flex-col h-full border-2 border-emerald-500 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
                              <CardHeader>
                                  <div className="flex items-center gap-4">
                                      <Zap className="h-8 w-8 text-emerald-500"/>
                                      <CardTitle className="text-emerald-900">AI Automation Services</CardTitle>
                                  </div>
                                  <CardDescription>We streamline your operations using intelligent workflows:</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-3 text-sm text-muted-foreground">
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>CRM Automation</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>WhatsApp &amp; Chatbot Automation</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Email &amp; Lead Nurturing Automation</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Sales Funnel Systems</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Appointment Booking Systems</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Invoice &amp; Payment Automation</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Customer Support AI Bots</span></li>
                                  </ul>
                              </CardContent>
                              <CardFooter className="bg-emerald-500/10 p-4 mt-auto text-sm">
                                  <p><span className="font-bold text-emerald-700">Result:</span> Faster response times, improved conversions, lower operational cost.</p>
                              </CardFooter>
                          </Card>
                        </div>

                        {/* Generative AI Services Card */}
                         <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                          <Card className="flex flex-col h-full border-2 border-blue-500 shadow-2xl shadow-blue-500/20 transform lg:scale-105 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
                              <CardHeader>
                                  <div className="flex items-center gap-4">
                                      <Sparkles className="h-8 w-8 text-blue-500"/>
                                      <CardTitle className="text-blue-900">Generative AI Services</CardTitle>
                                  </div>
                                  <CardDescription>We help you create high-impact content at scale:</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-3 text-sm text-muted-foreground">
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>Website Copy &amp; Landing Pages</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>SEO Blogs</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>High-Converting Ad Copy</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>Social Media Content Systems</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>AI Image &amp; Banner Design</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>Video Scripts &amp; Reels Hooks</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" /><span>Email Marketing Sequences</span></li>
                                  </ul>
                              </CardContent>
                              <CardFooter className="bg-blue-500/10 p-4 mt-auto text-sm">
                                  <p><span className="font-bold text-blue-700">Result:</span> Stronger branding, consistent marketing, higher engagement.</p>
                              </CardFooter>
                          </Card>
                        </div>

                        {/* AI Growth Solutions (Premium) Card */}
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                          <Card className="flex flex-col h-full border-2 border-rose-500 shadow-lg shadow-rose-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/20">
                              <CardHeader>
                                  <div className="flex items-center gap-4">
                                      <Rocket className="h-8 w-8 text-rose-500"/>
                                      <CardTitle className="text-rose-900">AI Growth Solutions (Premium)</CardTitle>
                                  </div>
                                  <CardDescription>For businesses ready to dominate their industry:</CardDescription>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                  <ul className="space-y-3 text-sm text-muted-foreground">
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" /><span>Full Business Automation Ecosystem</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" /><span>AI Analytics Dashboard</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" /><span>AI Marketing Engine</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" /><span>Custom AI Chatbots</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" /><span>Industry-Specific AI Setup</span></li>
                                      <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" /><span>AI Sales Prediction &amp; Lead Scoring</span></li>
                                  </ul>
                              </CardContent>
                              <CardFooter className="bg-rose-500/10 p-4 mt-auto text-sm">
                                  <p><span className="font-bold text-rose-700">Result:</span> Predictable growth powered by real-time data intelligence.</p>
                              </CardFooter>
                          </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Process Section */}
            <section className="bg-background py-20 md:py-28 relative">
                <div className="container relative z-10">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-24 text-accent">Our 4-Step AI Implementation Framework</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn(
                                    "group relative overflow-hidden p-6 rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-lg soft-shadow", 
                                    index % 2 === 0 ? "text-left" : "text-right"
                                )}>
                                    <div className={cn("absolute top-0 font-headline text-8xl font-bold text-primary/10 -translate-y-4 transition-transform duration-300 group-hover:scale-110", index % 2 === 0 ? "right-0 translate-x-4" : "left-0 -translate-x-4")}>
                                        {index + 1}
                                    </div>
                                    <div className="relative">
                                        <h3 className="font-headline text-xl font-semibold text-accent">Step {index + 1} – {step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-lg border-2 border-primary/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Businesses Choose Aveda Technologies Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-[url('/nn.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">Why Businesses Choose Aveda Technologies</h2>
                    </div>
                    <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                        {benefits.map((item, index) => (
                            <div
                                key={item.title}
                                className="group rounded-2xl border bg-card/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)]">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-headline text-lg font-semibold text-accent leading-tight pt-1">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            We don’t just install tools. We build intelligent business infrastructure.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Tech Stack Section */}
            <section className="bg-background py-20 md:py-28 relative">
                <div className="container text-center relative z-10">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-accent">Our Technology Stack</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        {techStack.map((tech) => (
                        <div key={tech.name} className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 soft-shadow">
                            <div className="relative flex flex-col items-center justify-center gap-4">
                                <tech.icon />
                                <p className="font-semibold text-sm text-center uppercase tracking-wider text-foreground">{tech.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">Real Business Impact</h2>
                        <p className="mt-4 text-lg text-muted-foreground">After implementing our AI systems, businesses have achieved:</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="rounded-2xl border bg-card p-6 text-center soft-shadow">
                            <h3 className="font-headline text-5xl font-bold text-primary">2X</h3>
                            <p className="mt-2 text-muted-foreground">Faster Lead Response</p>
                        </div>
                        <div className="rounded-2xl border bg-card p-6 text-center soft-shadow">
                            <h3 className="font-headline text-5xl font-bold text-primary">40%</h3>
                            <p className="mt-2 text-muted-foreground">Increase in Sales Conversion</p>
                        </div>
                        <div className="rounded-2xl border bg-card p-6 text-center soft-shadow">
                            <h3 className="font-headline text-5xl font-bold text-primary">50%</h3>
                            <p className="mt-2 text-muted-foreground">Reduction in Manual Workload</p>
                        </div>
                        <div className="rounded-2xl border bg-card p-6 text-center soft-shadow">
                            <h3 className="font-headline text-5xl font-bold text-primary">100%</h3>
                            <p className="mt-2 text-muted-foreground">Automated Follow-ups</p>
                        </div>
                    </div>
                    <p className="mt-12 text-center text-xl font-semibold text-accent">Your growth should be systematic — not accidental.</p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-background py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-[url('/nn.svg')] bg-center opacity-5 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">Flexible AI Packages for Every Stage of Growth</h2>
                        <p className="mt-4 text-muted-foreground">Choose the perfect plan to automate and scale your business.</p>
                    </div>
                    
                    <div className="flex justify-center items-center gap-4 mb-16">
                        <span className="font-medium">Monthly</span>
                        <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} />
                        <span className="font-medium">
                            Yearly
                            <Badge variant="outline" className="ml-2 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Save 20%</Badge>
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
                        {pricingPlans.map((plan) => (
                            <Card key={plan.name} className={cn(
                                "flex flex-col h-full rounded-2xl border-2 bg-card/50 backdrop-blur-sm transition-all duration-300",
                                plan.popular ? "lg:scale-105" : "lg:scale-95",
                                plan.color === 'green' && "border-emerald-500/30 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20",
                                plan.color === 'blue' && "border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30",
                                plan.color === 'red' && "border-rose-500/30 shadow-lg shadow-rose-500/10 hover:shadow-rose-500/20"
                            )}>
                                {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white border-blue-500">Most Popular</Badge>}
                                <CardHeader className="pt-10">
                                    <div className="flex justify-center mb-4">
                                        <div className={cn("flex h-16 w-16 items-center justify-center rounded-full",
                                            plan.color === 'green' && 'bg-emerald-500/10 text-emerald-500',
                                            plan.color === 'blue' && 'bg-blue-500/10 text-blue-500',
                                            plan.color === 'red' && 'bg-rose-500/10 text-rose-500'
                                        )}>
                                            <plan.icon className="h-8 w-8" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-center font-headline text-2xl">{plan.name}</CardTitle>
                                    <CardDescription className="text-center min-h-[40px]">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="text-center my-4">
                                        {plan.price.monthly === 'Custom' ? (
                                            <span className="text-4xl font-bold">Custom</span>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-bold">₹{isYearly ? new Intl.NumberFormat('en-IN').format(parseInt(plan.price.yearly)) : new Intl.NumberFormat('en-IN').format(parseInt(plan.price.monthly))}</span>
                                                <span className="text-muted-foreground">{isYearly ? '/year' : '/month'}</span>
                                            </>
                                        )}
                                    </div>
                                    <ul className="space-y-3 text-sm">
                                        {plan.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-6">
                                    <Button asChild className={cn("w-full",
                                        plan.color === 'green' && 'border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white',
                                        plan.color === 'blue' && 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30',
                                        plan.color === 'red' && 'bg-rose-600 hover:bg-rose-700'
                                    )} variant={plan.variant}>
                                        <Link href={`/contact?service=${encodeURIComponent(plan.name)}`}>{plan.cta}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="relative overflow-hidden border-t border-border bg-card py-20">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Ready to Transform Your Business with AI? background"
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
                        Ready to Transform Your Business with AI?
                    </h2>
                     <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Stop relying on manual processes. Start building an intelligent, automated growth engine.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                           <Link href="/contact?service=AI+Strategy+Call">
                                Book Your Free AI Strategy Call Today <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
