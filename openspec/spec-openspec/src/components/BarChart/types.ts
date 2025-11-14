export type Theme = 'light' | 'dark';

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ThemeColors {
  background: string;
  text: string;
  grid: string;
}
