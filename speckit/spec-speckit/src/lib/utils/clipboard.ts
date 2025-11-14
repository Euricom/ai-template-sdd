// src/lib/utils/clipboard.ts
import { CopyResult } from '@/types/Clipboard';

export async function copyToClipboard(text: string): Promise<CopyResult> {
  if (!navigator.clipboard) {
    return {
      success: false,
      message: 'Clipboard API not supported. Please manually select and copy the text.',
    };
  }

  try {
    await navigator.clipboard.writeText(text);
    return {
      success: true,
      message: 'Copied to clipboard!',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to copy. Please manually select and copy the text.',
    };
  }
}
