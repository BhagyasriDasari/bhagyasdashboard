import React from 'react';
import LineChartWidget from './LineChartWidget'; // Default import
import BarChartWidget from './BarChartWidget'; // Default import
import PieChartWidget from './PieChartWidget'; // Default import
import RecentActivityFeed from './RecentActivityFeed'; // Default import
import useDataFetch from '../../../hooks/useDataFetch'; // Default import
import './Dashboard.css';

const Dashboard = () => {
  // Fetch data from the API
  const { data = {}, error } = useDataFetch('/api/data'); // Default empty object for data

  if (error) {
    // Show a friendly error message
    return <div className="error-message">Error fetching data: {error.message}</div>;
  }

  // Ensure data is not undefined or null
  const {
    lineChart = [],
    barChart = [],
    pieChart = [],
    recentActivities = []
  } = data;

  return (
    <div className="dashboard">
      <LineChartWidget data={lineChart} />
      <BarChartWidget data={barChart} />
      <PieChartWidget data={pieChart} />
      <RecentActivityFeed activities={recentActivities} />
    </div>
  );
};

export default Dashboard;
