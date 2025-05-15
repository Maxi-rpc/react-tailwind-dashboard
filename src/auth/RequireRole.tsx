import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export default function RequireRole({ roles, children }: { roles: string[]; children: ReactNode }) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!roles.includes(role ?? '')) return <Navigate to="/unauthorized" replace />;

  return children;
}
