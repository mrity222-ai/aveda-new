import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Cloud, Globe, Calendar, User, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function InsightsSection() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1, 3);
  const featuredImage = PlaceHolderImages.find(img => img.id === 'blog-brain-city');
  const formattedDate = new Date(featuredPost.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-28">
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Button asChild variant="outline" className="mb-4 rounded-full border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary h-8 px-4 text-xs">
            <Link href="/insides">Explore Insights</Link>
          </Button>
          <h2 className="text-2xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Knowledge to Power Your Digital Transformation
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Featured Card */}
          <div className="group relative lg:col-span-2 rounded-3xl border bg-card p-1 transition-all duration-300 soft-shadow hover:border-primary hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-left-12 duration-700">
            <div className="relative overflow-hidden rounded-[22px] bg-card">
              {featuredImage && (
                <div className="relative h-56 md:h-80 w-full">
                  <Image
                    src={featuredImage.imageUrl}
                    alt={featuredImage.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={featuredImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                  <Link href={`/insides#${featuredPost.slug}`} className="hover:text-primary transition-colors">{featuredPost.title}</Link>
                </h3>
                <div className="mt-4 flex items-center space-x-4 md:space-x-6 text-[10px] md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{formattedDate}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs md:text-base text-muted-foreground line-clamp-2 leading-relaxed">
                  {featuredPost.content}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Button asChild className="w-full sm:w-auto h-9 text-xs">
                        <Link href={`/insides#${featuredPost.slug}`}>
                            <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                            Download Report
                        </Link>
                    </Button>
                    <Link href={`/insides#${featuredPost.slug}`} className="text-xs md:text-sm font-medium text-primary hover:underline">
                        Read Article <ArrowRight className="inline h-3 w-3 md:h-4 md:w-4" />
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-12 duration-700">
            {otherPosts.map((post, index) => (
              <Link key={post.slug} href={`/insides#${post.slug}`} className="group block">
                <div className="relative rounded-2xl border bg-card p-5 md:p-6 transition-all duration-300 soft-shadow hover:border-primary hover:shadow-xl">
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold transition-colors group-hover:text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {post.title}
                      </h4>
                      <span className="mt-2 inline-block text-xs font-medium text-primary">Read Article →</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {index === 0 ? <Cloud className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground transition-colors group-hover:text-primary" /> : <Globe className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground transition-colors group-hover:text-primary" />}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
             <Button asChild variant="outline" className="w-full text-sm">
                <Link href="/insides">
                    Explore All Insights <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}