import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SaleHistory = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Sales',
        data: [3.8, 4.8, 6.8, 4.8, 6.8, 8.8, 7.8, 8.8],
        backgroundColor: 'rgba(99, 102, 241, 0.8)', 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Sale History',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-2xl p-4 m-8 bg-white shadow-lg rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SaleHistory;