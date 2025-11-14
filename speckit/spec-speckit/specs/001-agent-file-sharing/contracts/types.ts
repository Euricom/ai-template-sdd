/**
 * Type Contracts: Claude Code Agent File Sharing Platform
 *
 * This file defines all TypeScript type contracts for the application.
 * These types are the "API" between components, utilities, and data stores.
 */

// ============================================================================
// Core Entity: AgentFile
// ============================================================================

/**
 * Represents a Claude Code agent configuration file (.md file)
 *
 * @example
 * {
 *   id: "1",
 *   name: "code-reviewer.md",
 *   description: "An agent that reviews code for best practices",
 *   content: "# Code Reviewer Agent\n\n...",
 *   datePosted: "2025-11-10",
 *   author: "Anonymous"
 * }
 */
export interface AgentFile {
  /** Unique identifier (UUID or incremental) */
  id: string;

  /** File name, must end with .md (1-100 characters) */
  name: string;

  /** Brief description of what the agent does (0-500 characters, optional) */
  description: string;

  /** Full markdown content of the agent file (1-50,000 characters) */
  content: string;

  /** ISO 8601 date string (YYYY-MM-DD) */
  datePosted: string;

  /** Author name (hardcoded as "Anonymous" for MVP) */
  author: string;

  /** Optional tags for categorization (future enhancement) */
  tags?: string[];
}

/**
 * Input type for creating a new agent file (omits auto-generated fields)
 */
export type AgentFileInput = Omit<AgentFile, 'id' | 'datePosted' | 'author'>;

// ============================================================================
// Pagination
// ============================================================================

/**
 * Represents pagination state for browsing agent files
 */
export interface PaginationState {
  /** Current page number (1-indexed) */
  currentPage: number;

  /** Number of items per page (10-20, default: 12) */
  pageSize: number;

  /** Total number of items across all pages */
  totalItems: number;

  /** Total number of pages (calculated) */
  totalPages: number;
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> {
  /** Items for the current page */
  items: T[];

  /** Pagination metadata */
  pagination: PaginationState;
}

// ============================================================================
// Clipboard Operations
// ============================================================================

/**
 * Result of a clipboard copy operation
 */
export interface CopyResult {
  /** Whether the copy operation succeeded */
  success: boolean;

  /** Optional user-facing message (success or error) */
  message?: string;
}

// ============================================================================
// Form Data
// ============================================================================

/**
 * Form data for posting a new agent file
 * Matches AgentFileInput but kept separate for clarity
 */
export interface AgentFileFormData {
  name: string;
  description: string;
  content: string;
}

/**
 * Form validation errors
 */
export interface FormErrors {
  name?: string;
  description?: string;
  content?: string;
}

/**
 * Form submission result
 */
export interface FormSubmissionResult {
  success: boolean;
  data?: AgentFile;
  errors?: FormErrors;
}

// ============================================================================
// Server Actions (Next.js)
// ============================================================================

/**
 * Server Action return type for posting a new agent file
 */
export interface PostAgentFileResult {
  success: boolean;
  data?: AgentFile;
  error?: string;
}

/**
 * Server Action return type for fetching agent files
 */
export interface GetAgentFilesResult {
  success: boolean;
  data?: AgentFile[];
  error?: string;
}

/**
 * Server Action return type for fetching a single agent file
 */
export interface GetAgentFileResult {
  success: boolean;
  data?: AgentFile;
  error?: string;
}

// ============================================================================
// Component Props (common patterns)
// ============================================================================

/**
 * Props for components that display an agent file
 */
export interface AgentFileDisplayProps {
  agentFile: AgentFile;
}

/**
 * Props for list components
 */
export interface AgentFileListProps {
  agentFiles: AgentFile[];
  currentPage: number;
  totalPages: number;
}

/**
 * Props for pagination controls
 */
export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string; // For generating pagination links (e.g., "/?page=")
}

/**
 * Props for copy button
 */
export interface CopyButtonProps {
  content: string;
  label?: string;
}

/**
 * Props for empty state
 */
export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Standard error response
 */
export interface ErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

/**
 * Loading state for async operations
 */
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

/**
 * Sort order for agent files (future enhancement)
 */
export type SortOrder = 'newest' | 'oldest' | 'name-asc' | 'name-desc';

/**
 * Filter options for agent files (future enhancement)
 */
export interface FilterOptions {
  searchQuery?: string;
  tags?: string[];
  sortOrder?: SortOrder;
}
