import React from 'react';
import Link from 'next/link';
import { auth } from '../firebase/config';
import { useRouter } from 'next/router';

function LightNavbar({ user }) {
  const router = useRouter();
  const signOutHandler = () => {
    auth.signOut();
    router.push('/');
  };

  return (
    <nav className='light-navbar'>
      <Link href='/'>
        <img src='/icons/netflix.png' alt='' />
      </Link>
      {user ? (
        <a onClick={signOutHandler}>Sign out</a>
      ) : (
        <a onClick={() => router.push('/signin')}>Sign in</a>
      )}
    </nav>
  );
}

export default LightNavbar;
