import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { useLocation } from 'react-router-dom';
import hamburger from '../../assets/images/hamburger.svg';
import closeNav from '../../assets/images/close.svg';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { userSelector } from '../../store/user/userSlice';
import {
  navBarSelector,
  toggleNavbar,
  setNavbarState,
} from '../../store/navBar/navBarSlice';

export const NavBar = () => {
  const location = useLocation();

  const user = useAppSelector(userSelector);
  const { navOpen } = useAppSelector(navBarSelector);
  const dispatch = useAppDispatch();

  return (
    <header>
      <nav className=' w-full flex justify-between items-center relative transition-all duration-500 hover: ease-in-out bg-pfLightGrey'>
        <section className=' flex justify-between items-center w-full'>
          <div>
            <Link className=' w-20 h-8 cursor-pointer' to='/'>
              <img
                src={user[0]?.home[0]?.logo ? user[0]?.home[0]?.logo : logo}
                alt='damtrix'
              />
            </Link>
          </div>
          <div className=' transition-all duration-500 ease-in-out cursor-pointer md:hidden'>
            <button onClick={() => dispatch(toggleNavbar())}>
              <img src={navOpen ? closeNav : hamburger} />
            </button>
          </div>
        </section>
        <section>
          <div
            className={` ${
              navOpen
                ? ' flex flex-col absolute bg-blackBlue h-44 py-10 justify-between items-center text-white transition-all ease-in-out duration-500 right-0 w-full top-10 z-10'
                : 'w-72 hidden md:flex justify-between text-blackBlue'
            }`}>
            <NavLink
              onClick={() => dispatch(setNavbarState(false))}
              className={` font-normal font-PublicSans text-xs leading-4 uppercase transition-all hover: ease-in-out duration-500 hover:translate-y-1 ${
                location.pathname == '/' ? 'active: text-pfGreen' : ''
              }`}
              to='/'>
              Home
            </NavLink>
            <NavLink
              onClick={() => dispatch(setNavbarState(false))}
              className={` font-normal font-PublicSans text-xs leading-4 uppercase transition-all hover:ease-in-out duration-500 hover:translate-y-1 ${
                location.pathname == '/portfolio' ? 'active: text-pfGreen' : ''
              }`}
              to='/portfolio'>
              Portfolio
            </NavLink>
            <NavLink
              onClick={() => dispatch(setNavbarState(false))}
              className={` font-normal font-PublicSans text-xs leading-4 uppercase transition hover:ease-in-out duration-500 hover:translate-y-1 ${
                location.pathname == '/contact' ? 'active: text-pfGreen' : ''
              }`}
              to='/contact'>
              Contact Me
            </NavLink>
          </div>
        </section>
      </nav>
    </header>
  );
};
