import { Link } from 'react-router-dom';

export const ContactHome = () => {
  return (
    <div className=' mb-16 md:mb-32 md:mt-10 flex flex-col md:flex-row justify-between md:justify-center items-center h-36 md:h-0'>
      <h2 className=' text-3xl leading-7 md:text-4xl font-bold md:leading-10 font-IbarraReal text-blackBlue md:w-[550px] md:mr-2'>
        Interested in doing a project together?
      </h2>
      <div
        className=' hidden md:flex bg-blackBlue h-[1px] mr-3 w-full opacity-10'
        data-aos='fade-down'
        data-aos-delay='200'></div>
      <Link
        data-aos='fade-left'
        data-aos-delay='400'
        className=' w-[300px] py-4 px-5 border-[1px] border-blackBlue uppercase bg-pfBgLightGrey flex justify-center items-center text-xs transition-all duration-700 ease-in-out text-blackBlue hover:bg-blackBlue hover:text-pfBgLightGrey'
        to='/contact'>
        Contact Me
      </Link>
    </div>
  );
};
