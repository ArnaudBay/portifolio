
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.enum(['general', 'project', 'collaboration', 'other']),
  message: z.string().min(1, 'Message is required'),
});