import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './logo';
import './Sidebar.css';

const items = [
  { text: 'Overview', path: '/dashboard' },
  { text: 'Customers', path: '/dashboard/customers' },
  { text: 'Account', path: '/dashboard/account' },
  { text: 'AI Chat', path: '/dashboard/chat' },
  { text: 'AI Agents', path: '/dashboard/agents' },
];

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-top">
        <div className="logo-wrap"><Logo /></div>
        <div className="org-info">
          <strong>CS-AI</strong>
          <div className="org-sub">Production</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {items.map((it) => (
            <li key={it.text} className={location.pathname === it.path ? 'active' : ''} onClick={() => handleNavigation(it.path)}>
              {it.text}
            </li>
          ))}
          <li className={`settings ${settingsOpen ? 'open' : ''}`} onClick={() => setSettingsOpen(!settingsOpen)}>
            Settings
            {settingsOpen && (
              <ul className="submenu">
                <li onClick={() => handleNavigation('/dashboard/settings')}>General</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;