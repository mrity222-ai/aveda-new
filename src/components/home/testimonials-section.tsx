'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    quote: "Aveda Technologies transformed our online visibility — our SEO rankings soared within 3 months!",
    name: 'Amit Kumar',
    company: 'Founder, Local Business',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Thanks to Aveda’s digital marketing and web design team, our site traffic and leads increased dramatically.",
    name: 'Priya Sharma',
    company: 'Marketing Head, Retail Brand',
    avatarId: 'testimonial-2',
    rating: 5,
  },
  {
    quote: "The SEO strategy by Aveda Technologies helped our Lucknow business rank #1 on Google.",
    name: 'Rajesh Singh',
    company: 'Owner, Lucknow Store',
    avatarId: 'testimonial-3',
    rating: 5,
  },
  {
    quote: "Professional, responsive, and result-driven — Aveda is the best IT partner we’ve worked with.",
    name: 'Sunita Gupta',
    company: 'Director, Manufacturing Co.',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Aveda built a fast, secure website for us that significantly boosted our conversions.",
    name: 'Vikram Patel',
    company: 'E-commerce Manager',
    avatarId: 'testimonial-2',
    rating: 5,
  },
  {
    quote: "Highly recommend Aveda’s SEO services — they are true experts in Google ranking.",
    name: 'Neha Desai',
    company: 'Startup Founder',
    avatarId: 'testimonial-3',
    rating: 5,
  },
  {
    quote: "Their AI-powered digital solutions helped automate our processes and save time.",
    name: 'Anil Verma',
    company: 'Operations Chief',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Aveda’s team delivered exactly what they promised — excellent project management and results.",
    name: 'Kavita Reddy',
    company: 'Project Lead, Tech Firm',
    avatarId: 'testimonial-2',
    rating: 5,
  },
  {
    quote: "We saw measurable growth in organic traffic after Aveda optimized our website.",
    name: 'Sanjay Mishra',
    company: 'Digital Strategist',
    avatarId: 'testimonial-3',
    rating: 5,
  },
  {
    quote: "From web development to digital marketing, Aveda exceeded our expectations.",
    name: 'Meera Iyer',
    company: 'Business Owner',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Thanks to Aveda’s SEO experts, our brand now appears on the first page of Google.",
    name: 'Arun Joshi',
    company: 'Marketing Director',
    avatarId: 'testimonial-2',
    rating: 5,
  },
  {
    quote: "The team at Aveda was professional, attentive, and fully committed to our success.",
    name: 'Geeta Nair',
    company: 'CEO, Service Industry',
    avatarId: 'testimonial-3',
    rating: 5,
  },
  {
    quote: "Our website looks modern, loads fast, and drives more sales thanks to Aveda.",
    name: 'Harish Mehta',
    company: 'Retail Chain Owner',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Aveda’s digital marketing campaigns improved our lead quality significantly.",
    name: 'Deepa Rao',
    company: 'Admissions Head, Institute',
    avatarId: 'testimonial-2',
    rating: 5,
  },
  {
    quote: "Best SEO and web development company we’ve partnered with in India.",
    name: 'Manoj Agarwal',
    company: 'Entrepreneur',
    avatarId: 'testimonial-3',
    rating: 5,
  },
  {
    quote: "Our Google ranking improved faster than we expected — amazing work by Aveda!",
    name: 'Ritu Khanna',
    company: 'Local Clinic Owner',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Aveda helped us implement AI tools that streamlined our business operations.",
    name: 'Prakash Dubey',
    company: 'Factory Manager',
    avatarId: 'testimonial-2',
    rating: 5,
  },
  {
    quote: "Aveda’s customized SEO plan works — we’re now outranking competitors in Lucknow.",
    name: 'Alok Tiwari',
    company: 'Real Estate Agent',
    avatarId: 'testimonial-3',
    rating: 5,
  },
  {
    quote: "Professional service, clear communication, and remarkable results.",
    name: 'Shalini Singh',
    company: 'Boutique Owner',
    avatarId: 'testimonial-1',
    rating: 5,
  },
  {
    quote: "Our online revenue increased within weeks of working with Aveda Technologies.",
    name: 'Vivek Chaudhry',
    company: 'Online Retailer',
    avatarId: 'testimonial-2',
    rating: 5,
  },
];

export default function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
        <section className="bg-background py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-16">
                    <p className="mb-2 font-semibold text-primary">Testimonials</p>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        What Our Clients Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
                        Real feedback from partners we've helped succeed.
                    </p>
                </div>
                <div className="relative px-12">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => {
                                const image = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
                                return (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1 h-full">
                                            <Card className="bg-card border transition-all duration-300 hover:-translate-y-2 hover:border-primary soft-shadow h-full flex flex-col">
                                                <CardContent className="pt-6 flex-grow flex flex-col">
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                                                        ))}
                                                    </div>
                                                    <p className="mt-4 text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                                                    <div className="mt-6 flex items-center gap-4">
                                                        {image && (
                                                            <Image 
                                                                src={image.imageUrl} 
                                                                alt={testimonial.name} 
                                                                width={48} 
                                                                height={48} 
                                                                className="rounded-full" 
                                                                data-ai-hint={image.imageHint}
                                                            />
                                                        )}
                                                        <div>
                                                            <p className="font-semibold">{testimonial.name}</p>
                                                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
