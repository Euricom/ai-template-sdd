/**
 * Server Actions Contract: Claude Code Agent File Sharing Platform
 *
 * This file defines the contract (function signatures) for Next.js Server Actions.
 * These are the "backend API" for the frontend-only MVP, operating on mock data.
 *
 * NOTE: This is a contract specification, not implementation.
 * Actual implementation will be in src/server/actions/agentFileActions.ts
 */

import { AgentFile, AgentFileFormData } from './types';

// ============================================================================
// Server Action: Get All Agent Files
// ============================================================================

/**
 * Fetches all agent files from the mock data store
 *
 * @returns Promise resolving to array of agent files or error
 *
 * @example
 * const result = await getAgentFiles();
 * if (result.success) {
 *   console.log(result.data); // AgentFile[]
 * } else {
 *   console.error(result.error);
 * }
 */
export type GetAgentFilesAction = () => Promise<{
  success: boolean;
  data?: AgentFile[];
  error?: string;
}>;

// ============================================================================
// Server Action: Get Single Agent File by ID
// ============================================================================

/**
 * Fetches a single agent file by ID from the mock data store
 *
 * @param id - Agent file ID
 * @returns Promise resolving to agent file or error
 *
 * @example
 * const result = await getAgentFileById("1");
 * if (result.success) {
 *   console.log(result.data); // AgentFile
 * } else {
 *   console.error(result.error); // "Agent file not found"
 * }
 */
export type GetAgentFileByIdAction = (id: string) => Promise<{
  success: boolean;
  data?: AgentFile;
  error?: string;
}>;

// ============================================================================
// Server Action: Post New Agent File
// ============================================================================

/**
 * Creates a new agent file and adds it to the mock data store
 *
 * @param formData - Agent file form data (name, description, content)
 * @returns Promise resolving to created agent file or validation errors
 *
 * @example
 * const result = await postAgentFile({
 *   name: "my-agent.md",
 *   description: "My custom agent",
 *   content: "# My Agent\n\n..."
 * });
 *
 * if (result.success) {
 *   console.log(result.data); // AgentFile with generated id, datePosted, author
 * } else {
 *   console.error(result.error); // Validation error message
 * }
 */
export type PostAgentFileAction = (formData: AgentFileFormData) => Promise<{
  success: boolean;
  data?: AgentFile;
  error?: string;
  validationErrors?: Record<string, string>;
}>;

// ============================================================================
// Implementation Guidelines
// ============================================================================

/**
 * IMPLEMENTATION NOTES for src/server/actions/agentFileActions.ts:
 *
 * 1. All Server Actions must use 'use server' directive at the top of the file
 *
 * 2. getAgentFiles():
 *    - Import getAgentFiles() from src/server/data/mockAgentFiles.ts
 *    - Return all files wrapped in success response
 *    - Handle any errors (should never happen with mock data, but good practice)
 *
 * 3. getAgentFileById(id):
 *    - Validate id parameter with agentFileIdSchema
 *    - Import getAgentFileById(id) from src/server/data/mockAgentFiles.ts
 *    - Return 404 error if file not found
 *    - Return file wrapped in success response if found
 *
 * 4. postAgentFile(formData):
 *    - Validate formData with agentFileFormSchema
 *    - If validation fails, return { success: false, validationErrors }
 *    - Generate new AgentFile:
 *      * id: Use crypto.randomUUID() or Date.now().toString()
 *      * datePosted: new Date().toISOString().split('T')[0] (YYYY-MM-DD)
 *      * author: "Anonymous"
 *    - Import addAgentFile() from src/server/data/mockAgentFiles.ts
 *    - Add file to store
 *    - Return created file wrapped in success response
 *
 * 5. Error Handling:
 *    - Wrap all logic in try-catch
 *    - Return { success: false, error: errorMessage } on failures
 *    - Log errors for debugging (console.error)
 *
 * 6. Type Safety:
 *    - All return types must match the contracts defined above
 *    - Use TypeScript's satisfies operator to ensure compliance:
 *      export const getAgentFiles: GetAgentFilesAction = async () => { ... }
 */

// ============================================================================
// Usage Example in Components
// ============================================================================

/**
 * EXAMPLE: Using Server Actions in Server Components
 *
 * // app/page.tsx (Server Component)
 * import { getAgentFiles } from '@/server/actions/agentFileActions';
 *
 * export default async function HomePage() {
 *   const result = await getAgentFiles();
 *
 *   if (!result.success) {
 *     return <div>Error: {result.error}</div>;
 *   }
 *
 *   return <AgentFileList agentFiles={result.data} />;
 * }
 */

/**
 * EXAMPLE: Using Server Actions in Client Components (Form)
 *
 * // src/components/client/PostAgentFileForm.tsx
 * 'use client';
 *
 * import { postAgentFile } from '@/server/actions/agentFileActions';
 * import { useFormState } from 'react-dom';
 *
 * export function PostAgentFileForm() {
 *   const [state, formAction] = useFormState(postAgentFile, { success: false });
 *
 *   return (
 *     <form action={formAction}>
 *       <input name="name" />
 *       {state.validationErrors?.name && <p>{state.validationErrors.name}</p>}
 *       <button type="submit">Post</button>
 *     </form>
 *   );
 * }
 */

// ============================================================================
// Future Enhancements (Not in MVP)
// ============================================================================

/**
 * Server Action: Update Agent File (Future)
 */
export type UpdateAgentFileAction = (
  id: string,
  updates: Partial<AgentFileFormData>
) => Promise<{
  success: boolean;
  data?: AgentFile;
  error?: string;
}>;

/**
 * Server Action: Delete Agent File (Future)
 */
export type DeleteAgentFileAction = (id: string) => Promise<{
  success: boolean;
  error?: string;
}>;

/**
 * Server Action: Search Agent Files (Future)
 */
export type SearchAgentFilesAction = (query: string) => Promise<{
  success: boolean;
  data?: AgentFile[];
  error?: string;
}>;
