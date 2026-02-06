import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '@/lib/data';

export default function WhyChooseUs() {
  const testimonialAvatar = PlaceHolderImages.find(
    (img) => img.id === 'testimonial-1'
  );

  return (
    <section className="bg-secondary py-20 md:py-28 text-foreground">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Why Partner With Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are more than just a service provider; we are your technology partner, committed to your success.
            </p>
            <ul className="mt-8 space-y-4">
                {whyChooseUs.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-lg animate-in fade-in slide-in-from-right-8 duration-700">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
            "Aveda Technologies transformed our digital presence. Their expertise and dedication are second to none. We're not just clients; we're partners in innovation."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            {testimonialAvatar && (
              <Image
                src={testimonialAvatar.imageUrl}
                alt="Jane Doe"
                width={48}
                height={48}
                className="rounded-full"
                data-ai-hint={testimonialAvatar.imageHint}
              />
            )}
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-muted-foreground">CTO at Acme Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
