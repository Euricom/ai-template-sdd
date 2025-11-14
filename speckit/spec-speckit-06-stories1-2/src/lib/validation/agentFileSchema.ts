// src/lib/validation/agentFileSchema.ts
import { z } from 'zod';

export const agentFileSchema = z.object({
  name: z
    .string()
    .min(1, 'File name is required')
    .max(100, 'File name must be 100 characters or less')
    .regex(/\.md$/, 'File name must end with .md'),

  description: z
    .string()
    .max(500, 'Description must be 500 characters or less')
    .optional()
    .default(''),

  content: z
    .string()
    .min(1, 'Content is required')
    .max(50000, 'Content must be 50,000 characters or less'),
});

export type AgentFileFormData = z.infer<typeof agentFileSchema>;
