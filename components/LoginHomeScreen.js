import Navbar from './Navbar';
import Showcase from './LoginHomeScreen/showcase';
import StoryCards from './LoginHomeScreen/StoryCards';
import Faq from './LoginHomeScreen/Faq';
import DarkFooter from './DarkFooter';

function LoginHomeScreen() {
  return (
    <div className='loginHomeScreen'>
      <Navbar />
      <Showcase />
      <StoryCards />
      <Faq />
      <DarkFooter />
    </div>
  );
}

export default LoginHomeScreen;
