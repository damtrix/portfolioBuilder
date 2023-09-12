import { Link, NavLink } from 'react-router-dom';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';

export const Footer = () => {
  const getYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <footer className=' bg-blackBlue'>
      <div className=' flex flex-col md:max-w-[80%] w-full mx-auto mt-5'>
        <div className=' flex flex-col md:flex-row justify-between items-center my-9 md:my-0'>
          <div className=' flex flex-col md:flex-row py-7 justify-between items-center w-full md:w-[417px]'>
            <div className=''>
              <Link aria-label='homepage' to='/'>
                <svg xmlns='http://www.w3.org/2000/svg' width='61' height='32'>
                  <path
                    fill='#fff'
                    fillRule='evenodd'
                    d='M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z'
                  />
                </svg>
              </Link>
            </div>
            <div className=' w-[308px] h-24 md:h-0 my-8 md:my-0 flex flex-col md:flex-row justify-between items-center'>
              <NavLink
                className=' text-pfLightGrey ont-normal font-PublicSans md:text-xs text-sm leading-4 uppercase transition-all hover: ease-in-out duration-500 hover:translate-y-1'
                aria-current='page'
                to='/'>
                Home
              </NavLink>
              <NavLink
                aria-current='location'
                className=' text-pfLightGrey ont-normal font-PublicSans md:text-xs text-sm  leading-4 uppercase transition-all hover: ease-in-out duration-500 hover:translate-y-1'
                to='/portfolio'>
                PortFolio
              </NavLink>
              <NavLink
                aria-current='location'
                className=' text-pfLightGrey ont-medium md:text-xs text-sm  leading-4 uppercase transition-all hover: ease-in-out duration-500 hover:translate-y-1'
                to='/contact'>
                Contact Me
              </NavLink>
            </div>
          </div>
          <div className=' flex  justify-around w-32'>
            <NavLink to='https://github.com/damtrix'>
              <img src={github} alt='Github' />
            </NavLink>
            <NavLink to=''>
              <img src={twitter} alt='Github' />
            </NavLink>
            <NavLink to=''>
              <img src={linkedin} alt='linkedin' />
            </NavLink>
          </div>
        </div>
        <p className=' text-base md:text-sm text-pfBgLightGrey text-center mb-5'>
          &copy;
          <span> {getYear()}</span> Damtrix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
