import { BrowserRouter } from 'react-router';
import { AuthProvider } from './auth/AuthContext';
import { AppRoutes } from './routes';
import { ScrollToTop } from './components/common/ScrollToTop';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
