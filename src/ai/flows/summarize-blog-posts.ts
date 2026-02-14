'use server';
/**
 * @fileOverview Blog post summarization AI agent.
 *
 * - summarizeBlogPost - A function that handles the blog post summarization process.
 * - SummarizeBlogPostInput - The input type for the summarizeBlogPost function.
 * - SummarizeBlogPostOutput - The return type for the summarizeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPostInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to be summarized.'),
});
export type SummarizeBlogPostInput = z.infer<typeof SummarizeBlogPostInputSchema>;

const SummarizeBlogPostOutputSchema = z.object({
  summary: z.string().describe('A short summary of the blog post.'),
});
export type SummarizeBlogPostOutput = z.infer<typeof SummarizeBlogPostOutputSchema>;

export async function summarizeBlogPost(input: SummarizeBlogPostInput): Promise<SummarizeBlogPostOutput> {
  return summarizeBlogPostFlow(input);
}

const crucialFactTool = ai.defineTool({
  name: 'isCrucialFact',
  description: 'Determines whether a given fact is crucial for a summary.',
  inputSchema: z.object({
    fact: z.string().describe('A fact from the blog post.'),
  }),
  outputSchema: z.boolean().describe('True if the fact is crucial, false otherwise.'),
}, async (input) => {
  // Dummy implementation for now, always returns true
  return true;
});

const summarizeBlogPostPrompt = ai.definePrompt({
  name: 'summarizeBlogPostPrompt',
  input: {schema: SummarizeBlogPostInputSchema},
  output: {schema: SummarizeBlogPostOutputSchema},
  tools: [crucialFactTool],
  prompt: `Summarize the following blog post. Only include information that is deemed crucial by the isCrucialFact tool.\n\nBlog Post:\n{{{blogPostContent}}}`,
});

const summarizeBlogPostFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostFlow',
    inputSchema: SummarizeBlogPostInputSchema,
    outputSchema: SummarizeBlogPostOutputSchema,
  },
  async input => {
    const {output} = await summarizeBlogPostPrompt(input);
    return output!;
  }
);
