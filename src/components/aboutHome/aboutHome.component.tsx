import { Link } from 'react-router-dom';
import Damtrix from '../../assets/images/damtrix.jpeg';

export const AboutHome = () => {
  return (
    <div className=' flex flex-col my-8 md:flex-row md:my-24'>
      <div className=' mb-5 md:mb-0 md:flex-[0.4] md:max-w-[540px] md:h-[500px] md:mr-28'>
        <img
          className=' md:h-full w-full h-72 object-cover'
          data-aos='fade-right'
          src={Damtrix}
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
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Nigeria, the city of Ibadan, but I’m happy working
          remotely and have experience in remote teams. When I’m not coding,
          you’ll find me outdoors. I love music especially playing piano. I'd
          love you to check my work.
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
