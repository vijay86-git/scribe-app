import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email("The email field must be a valid email address.."),
  password: z.string().min(1, "The password field is required.."),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
