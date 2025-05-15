import { lazy } from 'react';

// project imports
import Loadable from '@/components/Loadable';
import MinimalLayout from '@/layout/MinimalLayout';
// page routing
const LoginPage = Loadable(lazy(() => import('@/pages/public/login')));
const NotFoundPage = Loadable(lazy(() => import('@/pages/otherPage/NotFound')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};

export default MainRoutes;
