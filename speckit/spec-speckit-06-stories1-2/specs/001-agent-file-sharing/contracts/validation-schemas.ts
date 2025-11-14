/**
 * Validation Schemas: Claude Code Agent File Sharing Platform
 *
 * Zod schemas for validating user input and form data.
 * These schemas define the contract for data entering the system.
 */

import { z } from 'zod';

// ============================================================================
// Agent File Validation
// ============================================================================

/**
 * Schema for validating agent file form input
 *
 * Rules:
 * - name: Required, 1-100 chars, must end with .md
 * - description: Optional, max 500 chars
 * - content: Required, min 1 char, max 50,000 chars
 */
export const agentFileFormSchema = z.object({
  name: z
    .string()
    .min(1, 'File name is required')
    .max(100, 'File name must be 100 characters or less')
    .regex(/\.md$/, 'File name must end with .md')
    .refine(
      (name) => !name.includes('/') && !name.includes('\\'),
      'File name cannot contain slashes'
    ),

  description: z
    .string()
    .max(500, 'Description must be 500 characters or less')
    .optional()
    .default(''),

  content: z
    .string()
    .min(1, 'Content is required')
    .max(50000, 'Content must be 50,000 characters or less')
    .refine(
      (content) => content.trim().length > 0,
      'Content cannot be only whitespace'
    ),
});

/**
 * Infer TypeScript type from schema
 */
export type AgentFileFormData = z.infer<typeof agentFileFormSchema>;

// ============================================================================
// Pagination Validation
// ============================================================================

/**
 * Schema for validating pagination parameters
 *
 * Rules:
 * - page: Optional, integer >= 1, defaults to 1
 * - pageSize: Optional, integer 10-20, defaults to 12
 */
export const paginationParamsSchema = z.object({
  page: z.coerce
    .number()
    .int()
    .min(1, 'Page must be at least 1')
    .optional()
    .default(1),

  pageSize: z.coerce
    .number()
    .int()
    .min(10, 'Page size must be at least 10')
    .max(20, 'Page size must be at most 20')
    .optional()
    .default(12),
});

/**
 * Infer TypeScript type from schema
 */
export type PaginationParams = z.infer<typeof paginationParamsSchema>;

// ============================================================================
// Search/Filter Validation (Future Enhancement)
// ============================================================================

/**
 * Schema for validating search query
 */
export const searchQuerySchema = z.object({
  q: z.string().max(100, 'Search query must be 100 characters or less').optional(),
  tags: z.array(z.string()).max(10, 'Cannot filter by more than 10 tags').optional(),
  sortOrder: z.enum(['newest', 'oldest', 'name-asc', 'name-desc']).optional(),
});

/**
 * Infer TypeScript type from schema
 */
export type SearchQuery = z.infer<typeof searchQuerySchema>;

// ============================================================================
// Agent File ID Validation
// ============================================================================

/**
 * Schema for validating agent file ID parameter
 */
export const agentFileIdSchema = z.object({
  id: z.string().min(1, 'Agent file ID is required'),
});

/**
 * Infer TypeScript type from schema
 */
export type AgentFileIdParam = z.infer<typeof agentFileIdSchema>;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Safe parse helper that returns typed result or errors
 *
 * @example
 * const result = safeValidate(agentFileFormSchema, formData);
 * if (!result.success) {
 *   console.error(result.errors);
 * } else {
 *   const validData = result.data;
 * }
 */
export function safeValidate<T extends z.ZodType>(
  schema: T,
  data: unknown
): { success: true; data: z.infer<T> } | { success: false; errors: z.ZodError } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  } else {
    return { success: false, errors: result.error };
  }
}

/**
 * Format Zod validation errors into user-friendly messages
 *
 * @example
 * const errors = formatValidationErrors(zodError);
 * // { name: "File name is required", content: "Content is required" }
 */
export function formatValidationErrors(
  error: z.ZodError
): Record<string, string> {
  const formattedErrors: Record<string, string> = {};

  for (const issue of error.issues) {
    const path = issue.path.join('.');
    formattedErrors[path] = issue.message;
  }

  return formattedErrors;
}

// ============================================================================
// Constants
// ============================================================================

/**
 * Validation constants
 */
export const VALIDATION_LIMITS = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 500,
  CONTENT_MIN_LENGTH: 1,
  CONTENT_MAX_LENGTH: 50000,
  PAGE_SIZE_MIN: 10,
  PAGE_SIZE_MAX: 20,
  PAGE_SIZE_DEFAULT: 12,
  SEARCH_QUERY_MAX_LENGTH: 100,
  MAX_TAGS: 10,
} as const;
