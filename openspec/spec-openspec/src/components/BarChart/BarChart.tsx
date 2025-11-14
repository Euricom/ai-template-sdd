import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '../../hooks/useTheme';
import { getThemeColors, adjustColorForTheme } from '../../utils/chartColors';
import type { ChartData } from './types';
import './BarChart.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initialData: ChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
    },
  ],
};

export function BarChart() {
  const { theme, toggleTheme } = useTheme();
  const [showLegend, setShowLegend] = useState<boolean>(true);
  const [chartData, setChartData] = useState<ChartData>(initialData);

  const themeColors = getThemeColors(theme);

  // Adjust colors for current theme
  const themedBackgroundColors = chartData.datasets[0].backgroundColor.map(
    (color) => adjustColorForTheme(color, theme)
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: window.innerWidth >= 1024 ? 2 : 1.5,
    plugins: {
      legend: {
        display: showLegend,
        labels: {
          color: themeColors.text,
        },
      },
      title: {
        display: true,
        text: 'Monthly Sales',
        color: themeColors.text,
      },
    },
    scales: {
      x: {
        grid: {
          color: themeColors.grid,
        },
        ticks: {
          color: themeColors.text,
        },
      },
      y: {
        grid: {
          color: themeColors.grid,
        },
        ticks: {
          color: themeColors.text,
        },
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        ...chartData.datasets[0],
        backgroundColor: themedBackgroundColors,
      },
    ],
  };

  const handleColorChange = (index: number, color: string) => {
    const newBackgroundColors = [...chartData.datasets[0].backgroundColor];
    newBackgroundColors[index] = color;
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          backgroundColor: newBackgroundColors,
        },
      ],
    });
  };

  return (
    <div className={`bar-chart-container ${theme}`}>
      <div className="controls-section">
        <div className="chart-header">
          <button
            onClick={toggleTheme}
            className="control-button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="control-button"
            aria-label={showLegend ? 'Hide legend' : 'Show legend'}
          >
            {showLegend ? 'Hide Legend' : 'Show Legend'}
          </button>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-wrapper">
          <Bar options={options} data={data} />
        </div>
      </div>

      <div className="sidebar-section">
        <div className="color-controls">
          <h3>Customize Bar Colors:</h3>
          <div className="color-pickers">
            {chartData.labels.map((label, index) => (
              <div key={label} className="color-picker-item">
                <label htmlFor={`color-${index}`}>{label}</label>
                <input
                  id={`color-${index}`}
                  type="color"
                  value={chartData.datasets[0].backgroundColor[index].replace(/rgba?\(([\d,\s]+).*\)/, (_, rgb) => {
                    const [r, g, b] = rgb.split(',').map((v: string) => parseInt(v.trim()));
                    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
                  })}
                  onChange={(e) => {
                    const hex = e.target.value;
                    const r = parseInt(hex.slice(1, 3), 16);
                    const g = parseInt(hex.slice(3, 5), 16);
                    const b = parseInt(hex.slice(5, 7), 16);
                    handleColorChange(index, `rgba(${r}, ${g}, ${b}, 0.8)`);
                  }}
                  aria-label={`Color picker for ${label}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
