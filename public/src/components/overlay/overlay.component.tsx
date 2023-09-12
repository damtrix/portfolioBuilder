import { useGlobalContext } from '../../service/context/app.context';

export const Overlay = () => {
  const { navOpen } = useGlobalContext();

  return (
    <div
      className={`${
        navOpen
          ? 'block fixed bg-pfBgBlack cursor-pointer opacity-90 transition-all duration-300 z-100 w-full h-full right-0'
          : 'hidden '
      }`}></div>
  );
};
