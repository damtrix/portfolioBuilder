import { AboutHome } from '../../components/aboutHome/aboutHome.component';
import { ContactHome } from '../../components/contactHome/contactHome.component';
import { TectSkills } from '../../components/techSkills/techSkills.component';
import { TopHome } from '../../components/topHome/topHome.component';

export const Home = () => {
  return (
    <div className=' flex flex-col mt-5'>
      <TopHome />
      <AboutHome />
      <TectSkills />
      <ContactHome />
    </div>
  );
};
