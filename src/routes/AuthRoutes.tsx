import { RouteObject } from 'react-router';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

export const authRoutes: RouteObject[] = [
  { path: '', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
];
