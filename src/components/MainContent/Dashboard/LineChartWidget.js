import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register components
Chart.register(...registerables);

const LineChartWidget = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'My Dataset',
          data: data.values,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy(); // Clean up chart instance on unmount
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChartWidget;
