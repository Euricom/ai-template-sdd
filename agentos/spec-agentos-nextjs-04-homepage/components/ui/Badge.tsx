/**
 * Badge Component
 *
 * A reusable badge component for displaying tags and labels.
 * Used in AgentCard to display agent tags.
 *
 * Design: Small, rounded pill with subtle background and text.
 * Follows mobile-first responsive design and accessibility standards.
 */

import type { ReactNode } from 'react';

export interface BadgeProps {
  /**
   * The content to display inside the badge (typically tag text)
   */
  children: ReactNode;

  /**
   * Visual variant of the badge
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary';

  /**
   * Additional CSS classes to apply to the badge
   */
  className?: string;
}

/**
 * Badge component for displaying tags and labels
 *
 * @example
 * ```tsx
 * <Badge>code-review</Badge>
 * <Badge variant="primary">typescript</Badge>
 * ```
 */
export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  // Base styles for all badges
  const baseStyles =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200';

  // Variant-specific styles using Tailwind CSS v4 with vibrant colors
  const variantStyles = {
    default: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200',
    primary: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200',
    secondary: 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
