import React from 'react';
import { project, useGlobalContext } from '../../service/context/app.context';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const { projects, dropDownCategories } = useGlobalContext();
  const [categories, setcategories] = React.useState<project[]>(projects);

  // console.log(dropDownCategories);
  // console.log(categories);

  const filterItem = (category: string) => {
    if (category === 'All') {
      setcategories(projects);
      return;
    }

    //if category is not all
    const newItems = projects.filter((item) => item.category === category);
    setcategories(newItems);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    filterItem(event.target.value);
  };

  return (
    <div className=' mt-10 h-auto'>
      <div className=' flex flex-col justify-center items-center'>
        <h1 className=' text-2xl md:text-5xl font-bold leading-10 font-IbarraReal text-blackBlue'>
          All Projects
        </h1>
        <div className=' mt-1 md:mt-6 w-28 h-1 bg-blackBlue'></div>
      </div>

      <form className=' flex flex-col justify-center items-center my-10'>
        <label
          htmlFor='lang'
          className=' font-PublicSans font-medium text-lg opacity-70'>
          Filter By Language
        </label>
        <select
          className=' mt-5 bg-pfLightGrey2 w-40 md:w-48 py-2 text-pfDarkBlue rounded outline-0'
          onChange={onChangeHandler}
          name='langs'
          id='lang'>
          {/* call categories here */}
          {dropDownCategories.map((category, index) => {
            return (
              <option key={index} className='' value={category}>
                {category === 'HTML' ? 'HTML & CSS' : category}
              </option>
            );
          })}
        </select>
      </form>

      <div className=' w-full grid md:grid-cols-3 mb-16 gap-x-12 gap-y-6 overflow-hidden'>
        {categories.map((category, index) => {
          const { title, images, lang, live, url } = category;
          return (
            <div
              data-aos={`${index % 2 === 1 ? 'fade-right' : 'flip-up'}`}
              key={index}
              className=' shadow-1l w-full transition-all duration-500 text-center h-auto'>
              <div className=' w-full h-[300px] hover:transition-all hover:shadow-2l hover:scale-105 hover:grid-cols-1 '>
                <img
                  className=' w-full h-full object-cover'
                  src={images.mobil}
                  alt={title}
                />
              </div>

              <div className=' flex flex-col justify-between mt-4 h-[180px]'>
                <h3 className=' font-light text-lg md:text-3xl text-blackBlue font-PublicSans'>
                  {title}
                </h3>
                <div className=' w-full flex justify-center'>
                  {lang.map((lan, index) => {
                    return (
                      <p
                        className=' bg-[#dae2ec] py-[0.15rem] px-[0.35rem] bottom-1 uppercase text-xs md:text-sm block mt-[0.2rem] mx-[0.2rem] mb-[0px]'
                        key={index}>
                        {lan}
                      </p>
                    );
                  })}
                </div>
                <div className=' bg-[#daedfb] w-full text-[#2680c0] flex justify-between p-3'>
                  <Link to={{ pathname: `${url}` }} target='_blank'>
                    <GitHubIcon className='icon' />
                  </Link>
                  <Link
                    to='/portfolio'
                    className=' uppercase transition-all inline-block py-[0.25rem] px-[0px] '>
                    Details
                  </Link>
                  {live && (
                    <Link to={{ pathname: `${live}` }} target='_blank'>
                      <LanguageIcon className='icon' />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
