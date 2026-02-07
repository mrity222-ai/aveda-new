import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  },
  {
      quote: "The website they developed is not only beautiful but also incredibly fast. Our conversion rates have doubled since the launch.",
      name: 'Rohan Mehta',
      company: 'Founder, E-commerce Brand',
      avatarId: 'testimonial-3',
      rating: 5,
  }
];

export default function TestimonialsSection() {
    return (
        <section className="bg-secondary py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-16">
                    <p className="mb-2 font-semibold text-primary">Testimonials</p>
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Real feedback from partners we've helped succeed.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial) => {
                        const image = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
                        return (
                            <Card key={testimonial.name} className="bg-card border-border/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
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
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
