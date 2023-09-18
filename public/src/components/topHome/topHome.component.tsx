import { Link } from 'react-router-dom';
import downArrow from '../../assets/images/down-arrows.svg';
import topImage from '../../assets/images/image-homepage-hero@2x.jpg';
import { User } from '../../store/user/userSlice';

interface TopHomeProps {
  user: User | undefined;
}

export const TopHome = (props: TopHomeProps) => {
  // const me = useAppSelector(userSelector);
  const { user } = props;

  return (
    <div className=' flex flex-col md:flex-row items-end md:bg-topImage h-[500px] w-full bg-cover bg-no-repeat'>
      <div className=' md:hidden'>
        <img src={topImage} alt='image' />
      </div>
      <div className=' flex w-full md:w-[430px] mt-10 md:mt-0'>
        <div
          data-aos='fade-right'
          className=' flex flex-col justify-between bg-white w-full'>
          <h1
            data-aos='fade-left'
            className=' my-8 text-4xl md:my-14 md:text-5xl leading-14 text-blackBlue font-IbarraReal font-bold capitalize'
            data-aos-delay='100'>
            Hey, I'm {user?.username},
            <br />
            {user?.speciality}
          </h1>
          <button className=' bg-pfDarkBlue w-48 h-12 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-blackBlue'>
            <div className=' h-12 w-1/3 bg-black flex opacity-30 justify-center items-center flex-initial'>
              <img
                data-aos='fade-left'
                data-aos-delay='200'
                className=' object-contain h-auto w-auto'
                src={downArrow}
                alt='Arrow Down'
              />
            </div>
            <Link
              data-aos='fade-left'
              data-aos-delay='400'
              className=' w-2/3 text-pfLightGrey text-xs font-normal leadin-3'
              to='/contact'>
              CONTACT ME
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
