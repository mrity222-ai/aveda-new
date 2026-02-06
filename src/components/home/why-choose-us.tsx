import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WhyChooseUs() {
  const testimonialAvatar = PlaceHolderImages.find(
    (img) => img.id === 'testimonial-1'
  );

  return (
    <section className="bg-background py-20 md:py-28 text-foreground">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground animate-in fade-in slide-in-from-bottom-8 duration-700">
            "This platform has fundamentally changed how we build software.
            We're shipping features 10x faster and our team is happier."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
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
