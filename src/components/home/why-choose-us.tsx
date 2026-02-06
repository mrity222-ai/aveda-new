import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CTO, Acme Inc.',
    quote: "Aveda Technologies transformed our digital presence. Their expertise and dedication are second to none.",
    avatarId: 'testimonial-1',
  },
  {
    name: 'John Smith',
    role: 'CEO, Stellar Solutions',
    quote: "The team's AI-driven approach gave us a competitive edge we didn't think was possible. Highly recommended.",
    avatarId: 'testimonial-2',
  },
  {
    name: 'Priya Singh',
    role: 'Head of Marketing, InnovateX',
    quote: "Working with them was a breeze. They delivered on time and the results exceeded our expectations.",
    avatarId: 'testimonial-3',
  }
];

export default function WhyChooseUs() {
    const testimonialAvatars = {
        'testimonial-1': PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
        'testimonial-2': PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
        'testimonial-3': PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
    };

    return (
        <section className="bg-gradient-to-br from-background to-secondary/50 py-20 md:py-28 text-foreground relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute -top-1/4 -left-1/4 w-96 h-96 lg:w-[48rem] lg:h-[48rem] bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 lg:w-[48rem] lg:h-[48rem] bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }} />
        
            <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Column */}
                <div className="animate-in fade-in slide-in-from-left-8 duration-700 space-y-8">
                    <div>
                        <p className="font-semibold text-primary mb-2">Testimonials</p>
                        <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="bg-card/50 border border-border/50 rounded-lg p-4 flex items-center gap-4 shadow-lg backdrop-blur-sm">
                        <CheckCircle className="h-10 w-10 text-primary flex-shrink-0" />
                        <div>
                            <p className="text-2xl font-bold">98%</p>
                            <p className="text-muted-foreground text-sm">Problem Solved Rate</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" className="w-full sm:w-auto justify-between">
                            All Industries
                            <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                        <Button asChild className="w-full sm:w-auto">
                            <Link href="/contact">Request Demo</Link>
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Join over 250+ satisfied clients.</p>
                </div>
                
                {/* Right Column */}
                <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
                    {/* Testimonial cards */}
                    <div className="space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={testimonial.name}
                                className="bg-card/50 border border-border/50 rounded-lg p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20"
                                style={{ 
                                    transform: `translateX(${index === 1 ? '2rem' : '0'})`,
                                    zIndex: index,
                                }}
                            >
                                <blockquote className="text-base leading-relaxed text-muted-foreground">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="mt-4 flex items-center gap-4">
                                    {testimonialAvatars[testimonial.avatarId as keyof typeof testimonialAvatars] && (
                                    <Image
                                        src={testimonialAvatars[testimonial.avatarId as keyof typeof testimonialAvatars]!.imageUrl}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                        data-ai-hint={testimonialAvatars[testimonial.avatarId as keyof typeof testimonialAvatars]!.imageHint}
                                    />
                                    )}
                                    <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rating Block */}
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-card/50 border border-border/50 rounded-full p-4 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm z-10 transition-transform hover:scale-110">
                        <div className="flex items-center">
                            {[...Array(4)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                            <Star className="h-5 w-5 fill-accent/50 text-accent" />
                        </div>
                        <p className="text-3xl font-bold mt-2">4.8</p>
                        <p className="text-sm text-muted-foreground">from 1.2k ratings</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
