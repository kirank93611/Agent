import React from 'react';
import './TopNav.css';

const TopNav = ({ onNavOpen }) => {
  return (
    <header className="topnav">
      <div className="topnav-inner container">
        <button className="menu-btn" onClick={onNavOpen} aria-label="Open menu">☰</button>
        <div className="topnav-spacer" />
        <div className="topnav-actions">
          <button className="icon-btn" aria-label="Search">🔍</button>
          <button className="icon-btn" aria-label="Notifications">🔔<span className="badge">4</span></button>
          <div className="avatar">👤</div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;