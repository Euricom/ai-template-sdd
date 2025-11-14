import type { Theme, ThemeColors } from '../components/BarChart/types';

export function getThemeColors(theme: Theme): ThemeColors {
  if (theme === 'light') {
    return {
      background: '#ffffff',
      text: '#333333',
      grid: 'rgba(0, 0, 0, 0.1)',
    };
  } else {
    return {
      background: '#1a1a1a',
      text: '#e0e0e0',
      grid: 'rgba(255, 255, 255, 0.1)',
    };
  }
}

interface HSL {
  h: number;
  s: number;
  l: number;
  a: number;
}

function rgbaToHSL(rgba: string): HSL {
  // Parse rgba string like "rgba(255, 99, 132, 0.8)"
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) {
    // Return default if parsing fails
    return { h: 0, s: 0, l: 50, a: 1 };
  }

  const r = parseInt(match[1]) / 255;
  const g = parseInt(match[2]) / 255;
  const b = parseInt(match[3]) / 255;
  const a = match[4] ? parseFloat(match[4]) : 1;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
    a,
  };
}

function hslToRGBA(hsl: HSL): string {
  const { h, s, l, a } = hsl;
  const sNorm = s / 100;
  const lNorm = l / 100;

  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lNorm - c / 2;

  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }

  const red = Math.round((r + m) * 255);
  const green = Math.round((g + m) * 255);
  const blue = Math.round((b + m) * 255);

  return `rgba(${red}, ${green}, ${blue}, ${a})`;
}

export function adjustColorForTheme(color: string, theme: Theme): string {
  const hsl = rgbaToHSL(color);

  // Adjust lightness based on theme
  if (theme === 'dark') {
    // For dark mode, ensure colors are not too dark (min 40% lightness)
    hsl.l = Math.max(hsl.l, 40);
    // Slightly desaturate for dark mode
    hsl.s = Math.max(hsl.s * 0.9, 50);
  } else {
    // For light mode, ensure colors are not too light (max 70% lightness)
    hsl.l = Math.min(hsl.l, 70);
    // Keep saturation vibrant
    hsl.s = Math.max(hsl.s, 60);
  }

  return hslToRGBA(hsl);
}
