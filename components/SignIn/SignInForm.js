function SignInForm() {
  return (
    <form className='signin-form'>
      <h3>Sign In</h3>
      <input
        type='text'
        placeholder='Email or phone number'
        id='emailOrPhone'
        spellCheck='false'
      />
      <input
        type='password'
        placeholder='Password'
        id='password'
        spellCheck='false'
      />
      <button className='btn btn-red' type='submit'>
        Sign In
      </button>
      <div className='flex flex-between'>
        <div>
          <input type='checkbox' id='signin-form__checkbox' />
          <label htmlFor='signin-form__checkbox'>Remember Me</label>
        </div>
        <a href='#'>Need help?</a>
      </div>
      <section>
        New to Netflix? <span className='signup'>Sign up now</span>.
      </section>
    </form>
  );
}

export default SignInForm;
