import { NavLink } from 'react-router-dom';
import githubblue from '../../assets/images/github-blue.svg';
import linkedblue from '../../assets/images/linked-blue.svg';
import twitterblue from '../../assets/images/twitter-blue.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Contact = () => {
  type FormValues = {
    name: string;
    email: string;
    message: string;
  };

  // const resolver: Resolver<FormValues> = async (values) => {
  //   return {
  //     values: values.name ? values : {},
  //     errors: !values.name
  //       ? {
  //           name: {
  //             type: 'required',
  //             message: 'This field is required.',
  //           },
  //         }
  //       : {},
  //   };
  // };

  //useForm Properties
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    axios.post(baseURL, {
      name: data.name,
      email: data.email,
      message: data.message,
    });

    alert('Thanks for your message, I will respond as soon as possible');
    reset();
  };
  const baseURL = 'https://formspree.io/f/xjvqydbg';
  return (
    <div className=' flex flex-col mt-6 md:mt-12'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-3 md:border-y-2 border-pfLightGrey2 py-4 md:py-12'>
        <h2
          data-aos='fade-right'
          className=' text-2xl md:text-4xl font-bold leading-10 font-IbarraReal text-blackBlue md:w-[550px] md:mr-2'>
          Get in Touch
        </h2>

        <div className=''>
          <p
            className=' text-lg md:text-base leading-10 md:leading-8 tracking-wide my-2 md:my-4'
            data-aos='fade-left'
            data-aos-delay='200'>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in Nigeria. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className=' flex w-1/2 mt-6 md:mt-0 md:w-1/6 justify-between '>
            <NavLink className=' w-12 md:w-0' to='https://github.com/damtrix'>
              <img src={githubblue} alt='damtrix' />
            </NavLink>

            <NavLink
              className=' w-12 md:w-0'
              to='https://twitter.com/damtrix25'>
              <img src={twitterblue} alt='damtrix' />
            </NavLink>

            <NavLink
              className=' w-12 md:w-0'
              to='https://www.linkedin.com/in/damtrix/'>
              <img src={linkedblue} alt='damtrix' />
            </NavLink>
          </div>
        </div>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-3 py-6 md:py-12 mb-16'>
        <h2
          className=' text-2xl md:text-4xl font-bold leading-10 font-IbarraReal text-blackBlue md:w-[550px] mr-2'
          data-aos='fade-down'>
          Contact Me
        </h2>
        <form
          data-aos='fade-right'
          data-aos-delay='200'
          onSubmit={handleSubmit(onSubmit)}>
          <div className=' flex flex-col mb-5'>
            <label className=' mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className={` md:w-full bg-pfLightGrey2 py-2 px-4 font-PublicSans text-sm font-normal leading-8 ${
                errors.name && ' border-2 border-pfRed'
              }`}
              id='name'
              type='text'
              placeholder='Damtrix'
              {...register('name', {
                required: 'This field is required',
              })}
              onKeyUp={() => trigger('name')}
            />
            {errors.name && (
              <span className=' text-xs italic font-bold leading-3 font-IbarraReal text-pfRed mt-1'>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className=' flex flex-col mb-5'>
            <label className=' mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className={` w-full bg-pfLightGrey2 py-2 px-4 font-PublicSans text-sm font-normal leading-8 ${
                errors.name && ' border-2 border-pfRed'
              }`}
              type='email'
              id='email'
              placeholder='oludamola.onarinde@gmail.com'
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'wrong format',
                },
              })}
              onKeyUp={() => trigger('email')}
            />
            {errors.email && (
              <span className=' text-xs italic font-bold leading-3 font-IbarraReal text-pfRed mt-1'>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className=' flex flex-col mb-5'>
            <label className=' mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              className={` w-full bg-pfLightGrey2 py-2 px-4 font-PublicSans text-sm font-normal leading-8 pb-12 ${
                errors.name && ' border-2 border-pfRed'
              }`}
              id='message'
              placeholder='How can I help?'
              {...register('message', {
                required: 'This field is required',
              })}
              onKeyUp={() => trigger('message')}
            />
            {errors.message && (
              <span className=' text-xs italic font-bold leading-3 font-IbarraReal text-pfRed mt-1'>
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type='submit'
            className=' bg-pfDarkBlue py-4 font-PublicSans w-[150px] md:w-[200px] text-xs font-bold leading-3 tracking-wider text-white cursor-pointer text-center uppercase transition-all'>
            send message
          </button>
        </form>
      </div>
    </div>
  );
};
