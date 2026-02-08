
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    thumbnailId: 'video-thumb-1',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder URL
  },
];

export default function VideoSection() {
  const video = videos[0];
  const thumbnail = PlaceHolderImages.find(
    (img) => img.id === video.thumbnailId
  );

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <p className="mb-2 font-semibold text-primary">Our Vision in Motion</p>
          <h2 className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
            Watch Our Story
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
            See how we are making an impact through technology and innovation.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-2xl border bg-card soft-shadow transition-all duration-300 hover:border-primary hover:-translate-y-2"
          >
            <Link
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {thumbnail && (
                <div className="relative aspect-video">
                  <Image
                    src={thumbnail.imageUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={thumbnail.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />
                </div>
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <PlayCircle className="h-16 w-16 text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                <h3 className="mt-4 font-headline text-xl font-bold drop-shadow-md">
                  {video.title}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
