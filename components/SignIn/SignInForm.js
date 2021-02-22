import { useState } from 'react';
import { auth } from '../../firebase/config';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);

  const signUpHandler = () => {
    setIsSigningUp(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setIsSigningUp(false);
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
      .signInWithEmailAndPassword(email, password)
      .then(() => setIsSigningIn(false))
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
        onChange={(e) => setEmail(e.target.value)}
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
