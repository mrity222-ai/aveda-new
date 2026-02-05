'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message: string;
};

export async function handleFormSubmission(
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
  // For this example, we'll just simulate a successful submission.
  console.log('Form submitted successfully:', parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can also simulate an error
  // if (parsed.data.name.toLowerCase() === 'error') {
  //   return {
  //     success: false,
  //     message: 'This is a simulated error response.',
  //   };
  // }

  return {
    success: true,
    message: 'Your message has been sent successfully!',
  };
}
