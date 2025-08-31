import { Link } from 'react-router-dom';
import './SideNavItem.css';

const SideNavItem = ({ active = false, path, title }) => {
  return (
    <li className={`sidenav-item ${active ? 'active' : ''}`}>
      <Link to={path || '#'}>{title}</Link>
    </li>
  );
};

export default SideNavItem;