// app/page.js
import './globals.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';

export default function StatsPage() {
  const [stats, setStats] = useState(null);
  const [lineData, setLineData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dummy-data'); // Ensure this path is correct
        setStats(response.data.stats);
        setLineData(response.data.lineData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CRM Stats</h1>

      {/* Example of rendering a PieChart */}
      {stats && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Pie Chart</h2>
          <PieChart data={stats.pieData} />
        </div>
      )}

      {/* Example of rendering a LineChart */}
      {lineData && (
        <div>
          <h2 className="text-xl font-semibold">Line Chart</h2>
          <LineChart data={lineData} />
        </div>
      )}
    </div>
  );
}
