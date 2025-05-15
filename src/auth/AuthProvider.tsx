import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  role: string | null;
  login: (data: { token: string; role: string }, cb: () => void) => void;
  logout: (cb: () => void) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');

    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (data: { token: string; role: string }, cb: () => void) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    setToken(data.token);
    setRole(data.role);
    setIsAuthenticated(true);
    cb();
  };

  const logout = (cb: () => void) => {
    localStorage.clear();
    setIsAuthenticated(false);
    setToken(null);
    setRole(null);
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
