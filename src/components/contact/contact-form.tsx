'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { handleFormSubmission } from '@/app/(main)/contact/actions';
import { Loader2 } from 'lucide-react';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  company: z.string().min(1, 'Company / Organization is required.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  service: z.string().min(1, 'Please select a service.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const messageParam = searchParams.get('message');

    if (serviceParam) {
      const match = services.find(
        (s) =>
          s.title.toLowerCase().includes(serviceParam.toLowerCase()) ||
          s.slug.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        form.setValue('service', match.title);
      } else {
        form.setValue('service', serviceParam.replace(/-/g, ' '));
      }
    }
    if (messageParam) {
      form.setValue('message', messageParam);
    }
  }, [searchParams, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await handleFormSubmission(values);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "We've received your message and will get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message || 'There was a problem with your request.',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold text-slate-950">Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} className="bg-white/80 border-slate-200 focus:bg-white rounded-xl text-slate-950 placeholder:text-slate-400 text-xs h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold text-slate-950">Company / Organization</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} className="bg-white/80 border-slate-200 focus:bg-white rounded-xl text-slate-950 placeholder:text-slate-400 text-xs h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold text-slate-950">Email address</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} className="bg-white/80 border-slate-200 focus:bg-white rounded-xl text-slate-950 placeholder:text-slate-400 text-xs h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold text-slate-950">Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 95327 58070" {...field} className="bg-white/80 border-slate-200 focus:bg-white rounded-xl text-slate-950 placeholder:text-slate-400 text-xs h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold text-slate-950">Service interested in</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/80 border-slate-200 focus:bg-white rounded-xl text-slate-950 text-xs h-11">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white rounded-xl border-slate-200">
                  {services.map((service) => (
                    <SelectItem key={service.slug} value={service.title} className="text-xs">
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold text-slate-950">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Define your goals or project description..." {...field} rows={4} className="bg-white/80 border-slate-200 focus:bg-white rounded-xl text-slate-950 placeholder:text-slate-400 text-xs resize-none" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-slate-950 hover:bg-slate-800 text-white rounded-full px-8 py-3.5 h-auto text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg"
          >
            {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <span>Send a message</span>
            <span className="text-sm">›</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
