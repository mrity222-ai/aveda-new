'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(1),
  service: z.string().min(1),
  message: z.string().min(10),
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

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwh1xTqpS5eFxiT6KAKGg5GwhYTiOzePDnl-wiW3U5K8cobhVy0AR7QnWmn9Dp9m6yY/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        company: parsed.data.company,
        service: parsed.data.service,
        message: parsed.data.message,
      }),
    });

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };

  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
    };
  }
}
