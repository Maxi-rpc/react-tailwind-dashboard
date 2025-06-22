import { RouteObject } from 'react-router';
import RoleProtectedRoute from './RoleProtectedRoute';
import DashboardLayout from '../layout/AppLayoutCustom';
import Home from '../pages/Dashboard';
import Profile from '../pages/UserProfiles';

export const userRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <RoleProtectedRoute allowed={['admin', 'trainer', 'user']} />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '', element: <Home /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
];
