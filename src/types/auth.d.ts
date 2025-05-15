export type Role = 'admin' | 'user' | 'guest';

export interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  role: Role | null;
  login: (data: { token: string; role: Role }, cb: () => void) => void;
  logout: (cb: () => void) => void;
}
