// src/components/client/PaginationControls.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  baseUrl = '/',
}: PaginationControlsProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  // Don't show pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {prevPage ? (
        <Link href={`${baseUrl}?page=${prevPage}`}>
          <Button variant="outline">Previous</Button>
        </Link>
      ) : (
        <Button variant="outline" disabled>
          Previous
        </Button>
      )}

      <span className="flex items-center px-4 text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      {nextPage ? (
        <Link href={`${baseUrl}?page=${nextPage}`}>
          <Button variant="outline">Next</Button>
        </Link>
      ) : (
        <Button variant="outline" disabled>
          Next
        </Button>
      )}
    </div>
  );
}
