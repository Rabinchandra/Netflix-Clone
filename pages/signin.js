import Navbar from '../components/Navbar';
import SignInFooter from '../components/SignIn/SignInFooter';
import SignInForm from '../components/SignIn/SignInForm';

function SignIn() {
  return (
    <div className='signin'>
      <Navbar />
      <SignInForm />
      <SignInFooter />
    </div>
  );
}

export default SignIn;
