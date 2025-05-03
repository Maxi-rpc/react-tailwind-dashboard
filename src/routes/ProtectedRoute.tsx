import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //const isLoggedIn = localStorage.getItem('token'); // Verifica si hay un token en el localStorage
  //const isAuthenticated = isLoggedIn !== null; // Cambia a true si hay un token
  const isAuthenticated = true; // Cambia esto a true si el usuario está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
