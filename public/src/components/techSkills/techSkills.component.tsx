import { useAppSelector } from '../../store/hook';
import { userSelector } from '../../store/user/userSlice';

export const TectSkills = () => {
  const user = useAppSelector(userSelector);
  const { technicalSkills } = user[0] || {};
  let count = 100;

  return (
    <div className=' mb-10'>
      <div className=' flex flex-col justify-center items-center'>
        <h1 className=' text-2xl md:text-6xl font-bold leading-10 font-IbarraReal text-blackBlue'>
          Technical Skills
        </h1>
        <div className=' mt-6 w-28 h-1 bg-blackBlue'></div>
      </div>
      <div className=' flex flex-wrap mt-10'>
        {technicalSkills?.map((skills) => {
          count += 100;
          return (
            <div
              className=''
              data-aos='fade-up'
              data-aos-delay={count}
              key={skills.id}>
              <img
                className=' w-10 md:w-24 md:h-24 object-contain ml-8 mb-8'
                src={skills.url}
                alt={skills.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
