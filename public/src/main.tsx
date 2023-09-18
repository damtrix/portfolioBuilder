import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './service/context/app.context.tsx';
import { Provider } from 'react-redux/es/exports';
import 'aos/dist/aos.css';
import aos from 'aos';
import { store } from './store/store.ts';

aos.init({ duration: 1000 });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </Provider>
);
