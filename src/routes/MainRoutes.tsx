import { lazy } from 'react';

// project imports
import Loadable from '@/components/Loadable';

// page routing
const HomePage = Loadable(lazy(() => import('@/pages/dashboard/Home')));
const ErrorPage = Loadable(lazy(() => import('@/pages/error/Error')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <HomePage />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ],
};

export default MainRoutes;
