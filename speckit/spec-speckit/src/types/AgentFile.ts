// src/types/AgentFile.ts
export interface AgentFile {
  id: string;
  name: string;
  description: string;
  content: string;
  datePosted: string; // ISO 8601 format
  author: string;
  tags?: string[]; // Optional for future enhancement
}

export type AgentFileInput = Omit<AgentFile, 'id' | 'datePosted' | 'author'>;

export type AgentFileFormData = {
  name: string;
  description: string;
  content: string;
};
