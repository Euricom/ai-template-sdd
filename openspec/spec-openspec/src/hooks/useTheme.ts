import { useState } from 'react';
import type { Theme } from '../components/BarChart/types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
