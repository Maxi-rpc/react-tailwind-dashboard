import { useState } from 'react';

interface User {
  username: string;
  password: string;
  roles: string[];
}

const users: User[] = [
  { username: 'admin', password: 'admin123', roles: ['admin'] },
  { username: 'trainer', password: 'trainer123', roles: ['trainer'] },
  { username: 'user', password: 'user123', roles: ['user'] },
];

export const useAuthValidation = () => {
  const [error, setError] = useState<string | null>(null);

  const validateCredentials = (username: string, password: string): string[] | null => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setError(null);
      return user.roles;
    } else {
      setError('Invalid username or password');
      return null;
    }
  };

  return { validateCredentials, error };
};
