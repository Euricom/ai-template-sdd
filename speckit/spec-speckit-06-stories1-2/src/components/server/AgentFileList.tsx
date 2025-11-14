// src/components/server/AgentFileList.tsx
import { AgentFile } from '@/types/AgentFile';
import AgentFileCard from './AgentFileCard';
import EmptyState from './EmptyState';

interface AgentFileListProps {
  agentFiles: AgentFile[];
}

export default function AgentFileList({ agentFiles }: AgentFileListProps) {
  if (agentFiles.length === 0) {
    return (
      <EmptyState
        title="No agent files available"
        description="Be the first to post an agent file!"
        actionLabel="Post Agent File"
        actionHref="/post"
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {agentFiles.map((file) => (
        <AgentFileCard key={file.id} agentFile={file} />
      ))}
    </div>
  );
}
