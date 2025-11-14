import { mockAgents } from '@/lib/mock-data';
import { AgentCard } from '@/components/AgentCard';

/**
 * Homepage Component
 *
 * Displays a gallery of Claude Code agent files in a responsive grid.
 * Uses mock data from /lib/mock-data.ts for Phase 1 MVP.
 *
 * Layout:
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
export default function HomePage() {
  // Handle empty state (though mockAgents should always have data)
  if (mockAgents.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Agent Hub</h1>
          <p className="text-xl text-gray-600">
            No agents available yet. Check back soon!
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Page Header */}
      <header className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-12 sm:px-6 lg:px-8">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" aria-hidden="true"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Agent Hub</h1>
          </div>
          <p className="max-w-2xl text-lg text-blue-50 sm:text-xl">
            Browse and discover powerful Claude Code agents to supercharge your development workflow
          </p>
          <div className="mt-6 flex items-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="font-medium">{mockAgents.length} Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="font-medium">Community Powered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Agent Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Explore Agents</h2>
          <p className="mt-2 text-gray-600">Find the perfect agent for your next project</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </main>
  );
}
