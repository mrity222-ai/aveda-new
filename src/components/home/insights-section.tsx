
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
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Button asChild variant="outline" className="mb-4 rounded-full border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary">
            <Link href="/insides">Explore Insights</Link>
          </Button>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Knowledge to Power Your Digital Transformation
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Featured Card */}
          <div className="group relative lg:col-span-2 rounded-3xl border bg-card p-1 transition-all duration-300 soft-shadow hover:border-primary animate-in fade-in slide-in-from-left-12 duration-700">
            <div className="relative overflow-hidden rounded-[22px] bg-card">
              {featuredImage && (
                <div className="relative h-80 w-full">
                  <Image
                    src={featuredImage.imageUrl}
                    alt={featuredImage.description}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                    data-ai-hint={featuredImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}
              <div className="p-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Link href={`/insides#${featuredPost.slug}`} className="hover:text-primary transition-colors">{featuredPost.title}</Link>
                </h3>
                <div className="mt-4 flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground line-clamp-2">
                  {featuredPost.content}
                </p>
                <div className="mt-6 flex justify-between items-center">
                    <Button asChild>
                        <Link href={`/insides#${featuredPost.slug}`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                        </Link>
                    </Button>
                    <Link href={`/insides#${featuredPost.slug}`} className="text-sm font-medium text-primary hover:underline">
                        Read Article <ArrowRight className="inline h-4 w-4" />
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-700">
            {otherPosts.map((post, index) => (
              <Link key={post.slug} href={`/insides#${post.slug}`} className="group block">
                <div className="relative rounded-3xl border bg-card p-6 transition-all duration-300 soft-shadow hover:border-primary hover:-translate-y-1">
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold transition-colors group-hover:text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {post.title}
                      </h4>
                      <span className="mt-2 inline-block text-sm font-medium text-primary">Read Article →</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {index === 0 ? <Cloud className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" /> : <Globe className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
             <Button asChild variant="outline" className="w-full">
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
