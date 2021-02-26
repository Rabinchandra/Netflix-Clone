import { useState } from 'react';
import { auth } from '../../firebase/config';
import { useRouter } from 'next/router';

function SignInForm({ userEmail, setUserEmail }) {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);

  const signUpHandler = () => {
    setIsSigningUp(true);

    auth
      .createUserWithEmailAndPassword(userEmail, password)
      .then(() => {
        setIsSigningUp(false);
        router.push('/');
      })
      .catch((err) => {
        setIsSigningUp(false);
        setError(err.message);
        setTimeout(() => setError(false), 3500);
      });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    auth
      .signInWithEmailAndPassword(userEmail, password)
      .then(() => {
        setIsSigningIn(false);
        router.push('/');
      })
      .catch((err) => {
        setIsSigningIn(false);
        setError(err.message);
        setTimeout(() => setError(false), 3500);
      });
  };

  return (
    <form className='signin-form'>
      <h3>Sign In</h3>
      <input
        type='text'
        placeholder='Email or phone number'
        id='emailOrPhone'
        spellCheck='false'
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
        autoComplete='off'
      />
      <input
        type='password'
        placeholder='Password'
        id='password'
        spellCheck='false'
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='off'
      />
      {error ? <small>{error}</small> : ''}
      <button className='btn btn-red' type='submit' onClick={signInHandler}>
        {isSigningIn ? 'Signing in...' : 'Sign in'}
      </button>
      <div className='flex flex-between'>
        <div>
          <input type='checkbox' id='signin-form__checkbox' />
          <label htmlFor='signin-form__checkbox'>Remember Me</label>
        </div>
        <a href='#'>Need help?</a>
      </div>
      <section>
        New to Netflix?{' '}
        <span className='signup' onClick={signUpHandler}>
          {isSigningUp ? 'Signing up...' : 'Sign up now'}
        </span>
        .
      </section>
    </form>
  );
}

export default SignInForm;
