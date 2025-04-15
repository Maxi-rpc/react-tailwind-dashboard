import { lazy } from 'react';

// project imports
import Loadable from '@/components/Loadable';
import AppLayout from '@/layout/AppLayout';
// page routing
const HomePage = Loadable(lazy(() => import('@/pages/Dashboard/Home')));
const NotFoundPage = Loadable(lazy(() => import('@/pages/OtherPage/NotFound')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};

export default MainRoutes;
