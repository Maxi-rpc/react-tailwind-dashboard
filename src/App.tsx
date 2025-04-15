import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
