// src/components/server/AgentFileCard.tsx
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AgentFile } from '@/types/AgentFile';

interface AgentFileCardProps {
  agentFile: AgentFile;
}

export default function AgentFileCard({ agentFile }: AgentFileCardProps) {
  return (
    <Link href={`/agents/${agentFile.id}`} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="truncate text-lg">{agentFile.name}</CardTitle>
          <CardDescription className="line-clamp-2 min-h-[2.5rem]">
            {agentFile.description || 'No description provided'}
          </CardDescription>
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-xs text-muted-foreground">
              {agentFile.datePosted}
            </p>
            <Badge variant="secondary" className="text-xs">
              {agentFile.author}
            </Badge>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
