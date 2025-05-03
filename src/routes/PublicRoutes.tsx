import { lazy } from 'react';

// project imports
import Loadable from '@/components/Loadable';
import AppLayout from '@/layout/AppLayout';
// page routing
const HomePage = Loadable(lazy(() => import('@/pages/public/home')));
const NotFoundPage = Loadable(lazy(() => import('@/pages/otherPage/NotFound')));

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
      path: 'login',
      element: <NotFoundPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};

export default MainRoutes;
