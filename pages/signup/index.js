import React from 'react';
import LightNavbar from '../../components/LightNavbar';
import Link from 'next/link';
import LightFooter from '../../components/LightFooter';

function SignUp({ user }) {
  return (
    <div className='signup'>
      <LightNavbar user={user} />
      <section className='signup__see-plan-container'>
        <i className='far fa-check-circle'></i>
        <small>
          STEP <strong>1</strong> OF <strong>3</strong>
        </small>
        <header>Choose your plan.</header>
        <ul>
          <li>No commitments, cancel anytime.</li>
          <li>Everything on Netflix for one low price.</li>
          <li>No ads and no extra fees. Ever.</li>
        </ul>
        <Link href='/signup/planform'>
          <a className='btn btn-red see-plan-submit'>See the Plans</a>
        </Link>
      </section>
      <LightFooter />
    </div>
  );
}

export default SignUp;
