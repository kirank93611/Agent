import React from 'react';
import CardBox from './dashboard-card/CardBox';
import '../../views/views.css';

const Overview = () => {
  return (
    <main className="view-root">
      <div className="container">
        <h1 className="view-title">Dashboard Overview</h1>
        <p className="view-desc" style={{ marginBottom: 16 }}>
          Welcome to your dashboard. Here you can manage your AI agents and monitor their performance.
        </p>
        <CardBox />
      </div>
    </main>
  );
};

export default Overview;
