import { useAppSelector } from '../../store/hook';
import { navBarSelector } from '../../store/navBar/navBarSlice';

export const Overlay = () => {
  const { navOpen } = useAppSelector(navBarSelector);

  return (
    <div
      className={`${
        navOpen
          ? 'block fixed bg-pfBgBlack cursor-pointer opacity-90 transition-all duration-300 z-500 w-full h-full right-0'
          : 'hidden '
      }`}></div>
  );
};
