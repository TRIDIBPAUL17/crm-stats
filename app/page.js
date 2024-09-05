"use client"
// app/page.js

// app/page.js
import './globals.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

export default function StatsPage() {
  const [stats, setStats] = useState(null);
  const [lineData, setLineData] = useState({ labels: [], values: [] });
  const [timeWindow, setTimeWindow] = useState('1d');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/dummy-data?timeWindow=${timeWindow}`);
        setStats(response.data.stats);
        setLineData({
          labels: Array.from({ length: response.data.lineData.length }, (_, i) => `Label ${i + 1}`),
          values: response.data.lineData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [timeWindow]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">CRM Stats Dashboard</h1>

      <div className="mb-6 flex justify-center">
        <select
          value={timeWindow}
          onChange={(e) => setTimeWindow(e.target.value)}
          className="p-2 border border-gray-300 rounded bg-white shadow-md"
        >
          <option value="1d">Last 1 Day</option>
          <option value="1w">Last 1 Week</option>
          <option value="1m">Last 1 Month</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        {/* Pie Chart Card */}
        {stats && stats.sales && (
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border-t-4 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Sales Overview</h2>
            <div className="w-full">
              <PieChart data={{
                labels: ['Sales', 'Leads', 'Customers'],
                values: [stats.sales, stats.leads, stats.customers],
              }} />
            </div>
          </div>
        )}

        {/* Line Chart Card */}
        {lineData.labels.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border-t-4 border-green-500">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Sales Trend</h2>
            <div className="w-full">
              <LineChart data={lineData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}