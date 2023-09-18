import { useEffect, useState } from 'react';
import { AboutHome } from '../../components/aboutHome/aboutHome.component';
import { ContactHome } from '../../components/contactHome/contactHome.component';
import { TectSkills } from '../../components/techSkills/techSkills.component';
import { TopHome } from '../../components/topHome/topHome.component';
import { useAppDispatch } from '../../store/hook';
import { checkUser } from '../../lib/auth';
import { User, addUser } from '../../store/user/userSlice';

export const Home = () => {
  const [user, setUser] = useState<User>();
  const [render, setRender] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dat = async () => {
      await checkUser().then((result) => {
        if (result) {
          setUser(result.data[0]);
          if (!render) {
            dispatch(addUser(result.data[0]));
            setRender(true);
          }
        }
      });
    };
    dat();
  }, []);

  return (
    <div className=' flex flex-col mt-5'>
      <TopHome user={user} />
      <AboutHome />
      <TectSkills />
      <ContactHome />
    </div>
  );
};
