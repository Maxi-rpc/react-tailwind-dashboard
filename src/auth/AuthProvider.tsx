import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<'admin' | 'user' | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role') as 'admin' | 'user' | null;

    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (data: { token: string; role: 'admin' | 'user' }, cb: () => void) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    setToken(data.token);
    setRole(data.role);
    setIsAuthenticated(true);
    cb();
  };

  const logout = (cb: () => void) => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    setIsAuthenticated(false);
    cb();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, role, login, logout }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
};
