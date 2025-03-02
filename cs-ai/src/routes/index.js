import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Overview from '../views/overview/Overview';
import Customers from '../views/Customers';
import Agents from '../views/Agents';
import Settings from '../views/Settings';
import Account from '../views/Account';
import Login from '../views/Login';
import Landing from '../views/Landing';
import Contact from '../views/Contact';

const routes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <Overview /> },
      { path: 'customers', element: <Customers /> },
      { path: 'agents', element: <Agents /> },
      { path: 'settings', element: <Settings /> },
      { path: 'settings/account', element: <Account /> }
    ]
  }
];

export default routes; 