'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  businessLocation: z.string().min(1, 'Business location is required'),
  website: z.string().optional(),
});

type FormState = {
  success: boolean;
  message: string;
};

export async function handleSeoFormSubmission(
  values: z.infer<typeof formSchema>
): Promise<FormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  // Here you would typically send an email, save to a database, etc.
  console.log('SEO Audit Request submitted successfully:', parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Your audit request has been sent! We will contact you shortly.',
  };
}
