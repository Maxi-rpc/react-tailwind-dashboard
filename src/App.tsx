import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AuthProvider } from '@/auth/AuthProvider.tsx';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter basename="/">
          <ScrollToTop />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
