import './App.css';
import { NavBar } from './components/navBar/navBar.component';
import { Overlay } from './components/overlay/overlay.component';
import { Portfolio } from './pages/Portfolio/portfolio.page';
import { Contact } from './pages/contact/contact.page';
import { Home } from './pages/home/home.page';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer.component';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './store/hook';
import { addUser } from './store/user/userSlice';
import { checkUser } from './lib/auth';

function App() {
  const [render, setRender] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const dat = async () => {
      await checkUser().then((result) => {
        if (result) {
          if (!render) {
            dispatch(addUser(result.data[0]));
            setRender(true);
          }
        }
      });
    };
    dat();
  }, []);

  return (
    <main>
      <div className=' max-w-[80%] mx-auto my-0 mt-12'>
        <Overlay />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
