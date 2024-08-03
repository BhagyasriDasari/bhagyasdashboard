// src/components/RecentActivityFeed.js
import React from 'react';
import PropTypes from 'prop-types';
import './RecentActivityFeed.css';

const RecentActivityFeed = ({ activities = [] }) => {
  // Ensure activities is always an array
  if (!Array.isArray(activities)) {
    console.error('Activities prop is not an array');
    return <div>Error loading activities</div>;
  }

  return (
    <div className="recent-activity-feed">
      <h2>Recent Activities</h2>
      {activities.length === 0 ? (
        <p>No recent activities</p>
      ) : (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              {activity.date}: {activity.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Prop types validation
RecentActivityFeed.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default RecentActivityFeed;
