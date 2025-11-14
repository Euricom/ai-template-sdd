// src/server/actions/agentFileActions.ts
'use server';

import {
  getAgentFiles as getMockFiles,
  getAgentFileById as getMockFileById,
  addAgentFile
} from '@/server/data/mockAgentFiles';
import { agentFileSchema } from '@/lib/validation/agentFileSchema';
import type { AgentFile, AgentFileFormData } from '@/types/AgentFile';

export async function getAgentFiles() {
  try {
    const files = getMockFiles();
    return { success: true as const, data: files };
  } catch (error) {
    console.error('Error fetching agent files:', error);
    return { success: false as const, error: 'Failed to fetch agent files' };
  }
}

export async function getAgentFileById(id: string) {
  try {
    const file = getMockFileById(id);
    if (!file) {
      return { success: false as const, error: 'Agent file not found' };
    }
    return { success: true as const, data: file };
  } catch (error) {
    console.error('Error fetching agent file:', error);
    return { success: false as const, error: 'Failed to fetch agent file' };
  }
}

export async function postAgentFile(formData: AgentFileFormData) {
  try {
    // Validate input
    const validated = agentFileSchema.safeParse(formData);
    if (!validated.success) {
      return {
        success: false as const,
        error: 'Validation failed',
        validationErrors: validated.error.flatten().fieldErrors,
      };
    }

    // Create new agent file
    const newFile: AgentFile = {
      id: crypto.randomUUID(),
      name: validated.data.name,
      description: validated.data.description || '',
      content: validated.data.content,
      datePosted: new Date().toISOString().split('T')[0],
      author: 'Anonymous',
    };

    addAgentFile(newFile);

    return { success: true as const, data: newFile };
  } catch (error) {
    console.error('Error posting agent file:', error);
    return { success: false as const, error: 'Failed to post agent file' };
  }
}
