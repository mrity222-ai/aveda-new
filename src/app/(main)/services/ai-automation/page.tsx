
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
  Wind,
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

const PythonIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]"><title>Python</title><path fill="currentColor" d="M16.225 10.358c-1.124-1.21-2.932-1.116-4.251.028-.85.737-1.396 1.8-1.485 2.933H12.9c.08-.627.4-1.18.81-1.59.56-.56 1.348-.797 2.144-.585.8.21 1.427.764 1.744 1.51.318.748.214 1.58-.29 2.216-.505.637-1.25.99-2.074 1.02h-1.33v-2.04h-.99v5.1h2.296c1.396 0 2.674-.682 3.42-1.84.747-1.157.747-2.61 0-3.766zm-7.23-2.63c-1.397 0-2.675-.682-3.42-1.841-.748-1.156-.748-2.61 0-3.766C6.322.905 7.6.222 8.997.222c1.124 1.21 2.932 1.116 4.25-.028.851-.737 1.397-1.8 1.486-2.933H12.3c-.08.627-.4 1.18-.81 1.59-.56.56-1.348.797-2.144-.585-.8-.21-1.427-.764-1.744-1.51C7.284.974 7.18.143 7.685-.494c.504-.636 1.25-.99 2.074-1.019h1.33v2.04h.99v-5.1H9.782c-1.396 0-2.674.682-3.42 1.84-.747 1.157-.747 2.61 0 3.767z"/></svg>
)

const OpenAIIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]"><title>OpenAI</title><path fill="currentColor" d="M20.219 19.82a8.743 8.743 0 0 1-13.402-4.966c.275-2.623 1.043-4.996 2.19-6.938 1.04-1.76 2.45-3.235 4.103-4.328A8.743 8.743 0 0 1 18.068 8.5a8.742 8.742 0 0 1-2.992 10.912c.55.337 1.08.723 1.586 1.151.08.067.14.15.19.24.16.29.07.66-.23.82-.29.16-.66.07-.82-.23a4.37 4.37 0 0 1-2.02-2.135c-.15-.29-.42-.48-.74-.53a4.37 4.37 0 0 0-4.04 2.807c-.16.3-.07.66.23.81.29.16.66.07.82-.23a2.62 2.62 0 0 1 2.42-1.68c.25 0 .49.09.68.25.3.25.4.65.25.99a2.62 2.62 0 0 1-3.63 1.72c-.3-.16-.66-.07-.82.23-.16.29-.07.66.23.82a4.37 4.37 0 0 0 6.06-2.86c.15-.3.42-.48.74-.53a4.37 4.37 0 0 1 4.04-2.808c.3-.05.58.11.69.39.16.29.07.66-.23.81-.3.16-.66.07.82-.23a2.62 2.62 0 0 0-2.43 1.68c.09-.18.09.38-.03-.56.2.62.77 1.03 1.41 1.03.2 0 .4-.04.59-.12.3-.16.66-.07-.82.23.15.3.06.66-.24.82zM12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM3.78 19.82A8.743 8.743 0 0 1 17.182 4.966c-.275 2.623-1.043 4.996-2.19 6.938-1.04 1.76-2.45 3.235-4.103 4.328a8.743 8.743 0 0 1-5.952 4.912c-.55-.337-1.08-.723-1.586-1.151a.523.523 0 0 1-.19-.24c-.16-.29-.07-.66.23-.82.29-.16.66-.07.82.23a4.37 4.37 0 0 1 2.02 2.135c.15.29.42.48.74.53a4.37 4.37 0 0 0 4.04-2.807c.16-.3.07-.66-.23-.81-.29-.16-.66-.07-.82.23a2.62 2.62 0 0 1-2.42 1.68c-.25 0-.49-.09-.68-.25a.874.874 0 0 1-.25-.99 2.62 2.62 0 0 1 3.63-1.72c.3.16.66.07.82-.23.16-.29.07-.66-.23-.82a4.37 4.37 0 0 0-6.06 2.86c-.15.3-.42.48-.74-.53a4.37 4.37 0 0 1-4.04 2.808c-.3.05-.58-.11-.69-.39-.16-.29-.07-.66.23-.81.3-.16.66-.07.82.23a2.62 2.62 0 0 0 2.43-1.68c.09-.18.09.38.03-.56a1.75 1.75 0 0 0-1.41-1.03c-.2 0-.4.04-.59.12-.3.16-.66-.07-.82-.23-.15-.3-.06.66.24-.82z"/></svg>
)

const TensorFlowIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]"><title>TensorFlow</title><path fill="currentColor" d="M12.012 0L24 6.93v2.311l-4.104 2.37-4.104 2.371v4.622l-3.792 2.19V13.98l-4.104 2.37-4.104 2.37v-4.74l4.104-2.37 4.104-2.371V4.5l-4.104 2.37-4.104 2.37V6.93L12.012 0zM7.908 17.52l4.104 2.37 4.104-2.37v4.74l-4.104 2.37-4.104-2.37v-4.74z"/></svg>
)

export default function AiAutomationPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'service-ai');

    const coreServices = [
        {
            icon: Zap,
            title: 'Workflow Automation',
            description: 'Automate repetitive tasks and connect your apps using tools like Zapier and Make.',
        },
        {
            icon: Bot,
            title: 'AI Chatbots',
            description: 'Deploy intelligent, 24/7 customer support chatbots that resolve queries instantly.',
        },
        {
            icon: FileText,
            title: 'Data Extraction',
            description: 'Automatically process documents, extract key information, and eliminate manual data entry.',
        },
        {
            icon: Repeat,
            title: 'AI Content Pipelines',
            description: 'Build scalable marketing automation systems for content generation and distribution.',
        },
    ];

    const techStack = [
        { icon: PythonIcon, name: 'Python' },
        { icon: OpenAIIcon, name: 'OpenAI' },
        { icon: TensorFlowIcon, name: 'TensorFlow' },
        { icon: Cloud, name: 'Google Cloud' },
        { icon: Cloud, name: 'AWS' },
    ];
    
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                 <div className="absolute inset-0 z-0 opacity-20">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="AI Automation background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl text-foreground">
                        Automate the Mundane. Focus on the Extraordinary.
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        Smart AI solutions that scale your business operations, reduce costs, and eliminate human error.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=AI+Automation">Book a Demo</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact?service=AI+Audit">Get a Free AI Audit</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Core Services Bento Grid */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12 text-foreground">Core Automation Services</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {coreServices.map((item) => (
                        <div key={item.title} className="group rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
                                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                                    <item.icon className="relative h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Before vs After Section */}
            <section className="bg-background py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">The AI Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="rounded-2xl border bg-card p-8">
                            <h3 className="font-headline text-2xl font-bold text-destructive mb-4">Before: Manual Process</h3>
                            <ul className="text-left space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2"><span className="text-destructive mt-1">&times;</span> Slow & Time-Consuming</li>
                                <li className="flex items-start gap-2"><span className="text-destructive mt-1">&times;</span> Prone to Human Error</li>
                                <li className="flex items-start gap-2"><span className="text-destructive mt-1">&times;</span> High Operational Costs</li>
                                <li className="flex items-start gap-2"><span className="text-destructive mt-1">&times;</span> Limited to Business Hours</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border-2 border-primary/50 bg-card p-8">
                            <h3 className="font-headline text-2xl font-bold text-primary mb-4">After: AI Automation</h3>
                            <ul className="text-left space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> 10x Faster Execution</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> 99% Accuracy</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> 24/7 Uninterrupted Operation</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Significant Cost Reduction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Tech Stack Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container text-center relative z-10">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-foreground">Our Technology Stack</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {techStack.map((tech) => (
                        <div key={tech.name} className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                            <div className="relative flex flex-col items-center justify-center gap-4">
                                <tech.icon />
                                <p className="font-semibold text-sm text-center uppercase tracking-wider text-foreground">{tech.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to Revolutionize Your Operations?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=AI+Automation">
                            Start Automating <MoveRight className="ml-2 h-5 w-5" />
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
