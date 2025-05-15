import { lazy } from 'react';

// project imports
import ProtectedRoutes from './ProtectedRoute';
import Loadable from '@/components/Loadable';
import AppLayout from '@/layout/AppLayout';
// page routing
const HomePage = Loadable(lazy(() => import('@/pages/dashboard/Home')));
const NotFoundPage = Loadable(lazy(() => import('@/pages/otherPage/NotFound')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/dashboard',
  element: (
    <ProtectedRoutes>
      <AppLayout />
    </ProtectedRoutes>
  ),
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
