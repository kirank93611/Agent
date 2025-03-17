import { lazy } from 'react';
import App from './App';
import DashboardLayout from './components/dashboard/DashboardLayout';

const Landing = lazy(() => import('./views/Landing'));
const AiChat = lazy(() => import('./views/AiChat'));
const Overview = lazy(() => import('./views/overview/Overview'));
const Customers = lazy(() => import('./views/Customers'));
const Account = lazy(() => import('./views/Account'));
const Settings = lazy(() => import('./views/Settings'));
const Login = lazy(() => import('./views/Login'));
const Agents=lazy(()=>import('./views/Agents'))

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Overview />
          },
          {
            path: 'customers',
            element: <Customers />
          },
          {
            path: 'account',
            element: <Account />
          },
          {
            path: 'settings',
            element: <Settings />
          },
          {
            path: 'chat',
            element: <AiChat />
          },
          {
            path: 'agents',
            element: <Agents />
          },
        ]
      }
    ]
  }
];

export default routes; 