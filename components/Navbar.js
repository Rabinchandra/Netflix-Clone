import React from 'react';
import Link from 'next/link';
import { auth } from '../firebase/config';
import { useRouter } from 'next/router';

function Navbar({ user }) {
  const router = useRouter();

  const signOutHandler = () => {
    auth.signOut();
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link href='/'>
          <img src='icons/netflix.png' alt='cannot load' />
        </Link>
      </div>
      {user ? (
        <a className='btn btn-red' onClick={signOutHandler}>
          Sign out
        </a>
      ) : (
        <Link href='/signin'>
          <a href='#' className='btn btn-red sign-in-btn'>
            Sign in
          </a>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
