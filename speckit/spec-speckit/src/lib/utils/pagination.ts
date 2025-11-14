// src/lib/utils/pagination.ts
import { PaginatedResponse } from '@/types/Pagination';

export function calculatePagination<T>(
  items: T[],
  currentPage: number,
  pageSize: number = 12
): PaginatedResponse<T> {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Clamp currentPage to valid range
  const validPage = Math.max(1, Math.min(currentPage, totalPages || 1));

  const startIndex = (validPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    items: paginatedItems,
    pagination: {
      currentPage: validPage,
      pageSize,
      totalItems,
      totalPages,
    },
  };
}
