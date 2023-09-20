import { Link } from 'react-router-dom';
import Damtrix from '../../assets/images/damtrix.jpeg';
import { useAppSelector } from '../../store/hook';
import { userSelector } from '../../store/user/userSlice';

export const AboutHome = () => {
  const user = useAppSelector(userSelector);
  const { image, aboutMe } = user[0] || {};

  return (
    <div className=' flex flex-col my-8 md:flex-row md:my-24'>
      <div className=' mb-5 md:mb-0 md:flex-[0.4] md:max-w-[540px] md:h-[500px] md:mr-28'>
        <img
          className=' md:h-full w-full h-72 object-cover'
          data-aos='fade-right'
          src={image}
          alt='Onarinde Oludamola Adewale'
        />
      </div>
      <div className=' flex-[0.6] flex flex-col justify-center text-left'>
        <hr className=' border-[1.5px] md:hidden mb-5'></hr>
        <h2
          className=' font-IbarraReal font-bold text-3xl text-pfDarkBlue'
          data-aos='fade-left'>
          About Me
        </h2>
        <p
          data-aos='fade-left'
          data-aos-delay='400'
          className=' font-PublicSans text-base opacity-80 my-8 leading-7'>
          {aboutMe}
        </p>
        <Link
          data-aos='fade-left'
          data-aos-delay='600'
          to='/portfolio'
          className=' max-w-[250px] mb-9 py-4 px-5 border-2 border-blackBlue uppercase bg-pfBgLightGrey flex justify-center items-center text-xs transition-all duration-700 ease-in-out text-blackBlue hover:bg-blackBlue hover:text-pfBgLightGrey'>
          go to portfolio
        </Link>
      </div>
    </div>
  );
};
