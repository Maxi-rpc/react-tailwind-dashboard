import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ScrollToTop } from './components/common/ScrollToTop';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter basename="/">
          <ScrollToTop />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
