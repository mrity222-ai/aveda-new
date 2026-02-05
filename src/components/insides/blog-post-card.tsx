'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Loader2, Sparkles, Calendar, User } from 'lucide-react';
import { summarizeBlogPost } from '@/ai/flows/summarize-blog-posts';

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
  content: string;
};

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeBlogPost({ blogPostContent: post.content });
      setSummary(result.summary);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={post.image.imageUrl}
          alt={post.title}
          width={600}
          height={400}
          className="h-56 w-full object-cover"
          data-ai-hint={post.image.imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <p className="text-sm font-medium text-primary">{post.category}</p>
        <CardTitle className="mt-2 font-headline text-xl">{post.title}</CardTitle>
        <div className="mt-3 flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author}</span>
            </div>
        </div>
        <CardDescription className="mt-4 line-clamp-3 text-base">
          {post.content}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger asChild>
              <Button
                variant="outline"
                onClick={() => !summary && !isLoading && handleSummarize()}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    AI Summary
                  </>
                )}
              </Button>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-sm text-muted-foreground">
              {error && <p className="text-destructive">{error}</p>}
              {summary}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
