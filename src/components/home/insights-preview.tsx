import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { Cloud, Globe, MoveRight, Download, Calendar, User } from 'lucide-react';

export default function InsightsPreview() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1, 3);
  const featuredImage = featuredPost.image;

  return (
    <section className="bg-black py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <Button asChild variant="outline" className="mb-4 rounded-full border-primary/50 bg-primary/10 text-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)] hover:bg-primary/20">
            <Link href="/insides">Explore Insights</Link>
          </Button>
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl">
            Knowledge to Power Your Digital Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Featured Post */}
          <div className="group relative col-span-1 flex flex-col lg:col-span-3 overflow-hidden rounded-2xl border border-primary/30 bg-card/50 transition-all duration-300">
             <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary via-transparent to-primary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
            <div className="relative flex h-full flex-col">
              {featuredImage && (
                <div className="relative h-64 w-full">
                  <Image
                    src={featuredImage.imageUrl}
                    alt={featuredImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={featuredImage.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              )}
              <div className="relative flex flex-grow flex-col p-8">
                <h3 className="font-headline text-2xl font-bold">{featuredPost.title}</h3>
                <div className="mt-2 flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="mt-6 flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{featuredPost.content}</p>
                </div>
                <div className="mt-6">
                    <Button asChild variant="destructive">
                        <Link href={`/insides`}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                        </Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Posts */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-8">
            {otherPosts.map((post, index) => (
              <Link href={`/insides`} key={post.slug} className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <h4 className="font-headline text-lg font-bold transition-colors group-hover:text-primary">{post.title}</h4>
                    <p className="text-xs text-primary">Read Article &rarr;</p>
                  </div>
                  <div className="ml-4">
                    {index === 0 ? <Cloud className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" /> : <Globe className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />}
                  </div>
                </div>
              </Link>
            ))}
             <Link href="/insides" className="group block relative flex-grow flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/20 bg-transparent p-6 text-center transition-all duration-300 hover:border-primary hover:bg-primary/10">
                 <div>
                    <h4 className="font-headline text-xl font-bold text-muted-foreground transition-colors group-hover:text-primary">Explore All Insights</h4>
                    <MoveRight className="mx-auto mt-2 h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                 </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
