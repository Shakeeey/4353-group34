// pages/history.js
import React from 'react';
import VolunteerHistoryTable from '../components/VolunteerHistoryTable';

const HistoryPage = () => {
  return (
    <div className="container">
      <h1>Volunteer History</h1>
      <VolunteerHistoryTable />
    </div>
  );
};

export default HistoryPage;
