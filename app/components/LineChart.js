import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Sales Over Time',
        data: data.values,
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
