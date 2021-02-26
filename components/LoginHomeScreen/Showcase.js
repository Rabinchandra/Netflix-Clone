import GetStartedInput from './GetStartedInput';

function Showcase({ user, setUserEmail }) {
  return (
    <section className='loginHomeScreen__showcase'>
      <div className='showcase__text'>
        {user ? <h3>Welcome Back!</h3> : ''}
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
      </div>
      <GetStartedInput user={user} setUserEmail={setUserEmail} />
    </section>
  );
}

export default Showcase;
