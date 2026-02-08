'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a contact message based on the service the user is interested in.
 *
 * - generateContactMessage - A function that generates a contact message.
 * - GenerateContactMessageInput - The input type for the generateContactMessage function.
 * - GenerateContactMessageOutput - The output type for the generateContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateContactMessageInputSchema = z.object({
  serviceRequired: z
    .string()
    .describe('The service that the user is interested in.'),
  name: z.string().describe('The name of the user.'),
  email: z.string().email().describe('The email of the user.'),
  phone: z.string().describe('The phone number of the user.'),
  message: z.string().describe('The message from the user.'),
});

export type GenerateContactMessageInput = z.infer<
  typeof GenerateContactMessageInputSchema
>;

const GenerateContactMessageOutputSchema = z.object({
  generatedMessage: z
    .string()
    .describe('The AI generated contact message based on the provided service.'),
});

export type GenerateContactMessageOutput = z.infer<
  typeof GenerateContactMessageOutputSchema
>;

export async function generateContactMessage(
  input: GenerateContactMessageInput
): Promise<GenerateContactMessageOutput> {
  return generateContactMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContactMessagePrompt',
  input: {schema: GenerateContactMessageInputSchema},
  output: {schema: GenerateContactMessageOutputSchema},
  prompt: `You are an AI assistant helping users compose a contact message to Aveda Digital.

  The user is interested in the following service: {{{serviceRequired}}}.
  The user's name is: {{{name}}}.
  The user's email is: {{{email}}}.
  The user's phone number is: {{{phone}}}.
  The user's message is: {{{message}}}.

  Generate a concise and professional contact message that clearly communicates the user's interest in the specified service and encourages Aveda Digital to respond.
`,
});

const generateContactMessageFlow = ai.defineFlow(
  {
    name: 'generateContactMessageFlow',
    inputSchema: GenerateContactMessageInputSchema,
    outputSchema: GenerateContactMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
