'use server';

import { z } from 'zod';
import { sendInquiryEmail } from '@/lib/smtp-mail';

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

  try {
    await sendInquiryEmail({
      formType: 'Local SEO Audit Inquiry',
      name: parsed.data.name,
      phone: parsed.data.phone,
      businessLocation: parsed.data.businessLocation,
      website: parsed.data.website,
    });

    return {
      success: true,
      message: 'Your audit request has been sent! We will contact you shortly.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit audit request. Please try again.',
    };
  }
}
