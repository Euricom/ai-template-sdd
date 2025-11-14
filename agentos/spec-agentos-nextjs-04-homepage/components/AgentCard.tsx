/**
 * AgentCard Component
 *
 * Displays a single agent file card with metadata for the homepage gallery.
 * Shows name, description preview, author, tags, and engagement metrics.
 *
 * Design:
 * - Card with border and shadow, hover elevation effect
 * - Clickable area links to agent detail page
 * - Displays first 120 characters of description
 * - Shows 2-4 tags as badges
 * - Includes view count, copy count, and relative creation date
 */

import Link from 'next/link';
import type { Agent } from '@/lib/mock-data';
import { Badge } from '@/components/ui/Badge';

export interface AgentCardProps {
  /**
   * The agent data to display in the card
   */
  agent: Agent;
}

/**
 * Formats a date string to relative time (e.g., "2 months ago")
 */
function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

/**
 * Truncates text to a maximum length and adds ellipsis
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * AgentCard component for displaying agent file preview
 *
 * @example
 * ```tsx
 * <AgentCard agent={mockAgents[0]} />
 * ```
 */
export function AgentCard({ agent }: AgentCardProps) {
  const descriptionPreview = truncateText(agent.description, 120);
  const relativeTime = formatRelativeTime(agent.createdAt);

  return (
    <Link
      href={`/agents/${agent.id}`}
      className="group block h-full"
      aria-label={`View details for ${agent.name}`}
    >
      <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
        {/* Header: Name */}
        <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {agent.name}
        </h2>

        {/* Author */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
            {agent.author.charAt(0).toUpperCase()}
          </div>
          <p className="text-sm font-medium text-gray-600">{agent.author}</p>
        </div>

        {/* Description Preview */}
        <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-600">
          {descriptionPreview}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer: Metadata */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs">
          <div className="flex items-center gap-4">
            {/* View Count */}
            <div className="flex items-center gap-1.5 text-gray-600" title="View count">
              <svg
                className="h-4 w-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="font-semibold">{agent.viewCount.toLocaleString()}</span>
            </div>

            {/* Copy Count */}
            <div className="flex items-center gap-1.5 text-gray-600" title="Copy count">
              <svg
                className="h-4 w-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">{agent.copyCount.toLocaleString()}</span>
            </div>
          </div>

          {/* Creation Date */}
          <time dateTime={agent.createdAt} className="flex items-center gap-1 text-gray-500">
            <svg
              className="h-3.5 w-3.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {relativeTime}
          </time>
        </div>
      </article>
    </Link>
  );
}
