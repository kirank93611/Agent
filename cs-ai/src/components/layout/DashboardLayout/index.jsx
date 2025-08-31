import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../dashboard/Sidebar';
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </svg>
);
import './DashboardLayout.css';

const SIDE_NAV_WIDTH = 280;

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const onResize = () => {
      setIsSidebarOpen(window.innerWidth > 1024);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="dl-root">
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className={`dl-main ${isSidebarOpen ? 'with-sidebar' : 'no-sidebar'}`}>
        {/* Mobile menu button */}
        {!isSidebarOpen && (
          <button className="dl-menu-btn" onClick={() => setIsSidebarOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </button>
        )}

        <div className="dl-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 