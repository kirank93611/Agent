import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="layout-root">
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <Sidebar onClose={() => setOpenNav(false)} open={openNav} />
      <main className="layout-content">
        <div className="layout-container">
          <div className="layout-main">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;