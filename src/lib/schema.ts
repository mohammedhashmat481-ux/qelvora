import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please provide your full name (at least 2 characters)." })
    .max(100, { message: "Name is too long." }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number (at least 10 digits)." })
    .max(16, { message: "Phone number is too long." })
    .regex(/^[0-9+\-\s()]+$/, { message: "Please enter a valid phone number." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),
  organisationType: z
    .string()
    .min(1, { message: "Please select your organisation type." }),
  productInterest: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please write at least a short message (10+ characters)." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
  websiteHp: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
