export async function fakeLogin(email: string, password: string): Promise<{ token: string; role: 'admin' | 'user' }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin') {
        resolve({ token: 'fake-jwt-admin', role: 'admin' });
      } else if (email === 'user@example.com' && password === 'user') {
        resolve({ token: 'fake-jwt-user', role: 'user' });
      } else {
        reject(new Error('Credenciales incorrectas'));
      }
    }, 1000);
  });
}
