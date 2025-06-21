import { useRoutes } from 'react-router';
// routes
import { authRoutes } from './AuthRoutes';
import { userRoutes } from './UserRoutes';
import NotFound from '../pages/OtherPage/NotFound';

export const AppRoutes = () => {
  const appRoutes = [...authRoutes, ...userRoutes, { path: '*', element: <NotFound /> }];

  return useRoutes(appRoutes);
};
