import Navbar from '../components/Navbar';
import SignInFooter from '../components/SignIn/SignInFooter';
import SignInForm from '../components/SignIn/SignInForm';

function SignIn({ userEmail, setUserEmail }) {
  return (
    <div className='signin'>
      <Navbar />
      <SignInForm userEmail={userEmail} setUserEmail={setUserEmail} />
      <SignInFooter />
    </div>
  );
}

export default SignIn;
