import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/insides/blog-post-card';

export default function InsidesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            INSIDES by Aveda
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Thoughts, trends, and innovations from our team of experts. Explore our latest articles and stay ahead of the curve.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
