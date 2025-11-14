// app/page.tsx
import Link from 'next/link';
import { getAgentFiles } from '@/server/actions/agentFileActions';
import AgentFileList from '@/components/server/AgentFileList';
import PaginationControls from '@/components/client/PaginationControls';
import { calculatePagination } from '@/lib/utils/pagination';
import { APP_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const result = await getAgentFiles();

  if (!result.success) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          Error: {result.error}
        </div>
      </div>
    );
  }

  const currentPage = Number(params.page) || 1;
  const { items, pagination } = calculatePagination(
    result.data,
    currentPage,
    APP_CONFIG.PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Claude Code Agent Files</h1>
            <p className="text-muted-foreground">
              Browse and share agent configuration files for Claude Code
            </p>
          </div>
          <Link href="/post">
            <Button size="lg">Post Agent File</Button>
          </Link>
        </div>

        {/* Agent Files List */}
        <AgentFileList agentFiles={items} />

        {/* Pagination Controls */}
        <PaginationControls
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </div>
    </div>
  );
}
