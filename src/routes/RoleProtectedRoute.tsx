import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../auth/AuthContext';

export default function RoleProtectedRoute({ allowed }: { allowed: string[] }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  const hasAccess = user.roles.some((role) => allowed.includes(role));
  return hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
}
