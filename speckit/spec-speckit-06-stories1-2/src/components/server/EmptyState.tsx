// src/components/server/EmptyState.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="max-w-md">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground mb-6">{description}</p>
        {actionLabel && actionHref && (
          <Link href={actionHref}>
            <Button>{actionLabel}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
