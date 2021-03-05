import Navbar from './Navbar';
import Showcase from './LoginHomeScreen/Showcase';
import StoryCards from './LoginHomeScreen/StoryCards';
import Faq from './LoginHomeScreen/Faq';
import DarkFooter from './DarkFooter';

function LoginHomeScreen({ user, hasPlan, setUserEmail }) {
  return (
    <div className='loginHomeScreen'>
      <Navbar user={user} />
      <Showcase user={user} setUserEmail={setUserEmail} />
      <StoryCards />
      <Faq user={user} setUserEmail={setUserEmail} />
      <DarkFooter />
    </div>
  );
}

export default LoginHomeScreen;
