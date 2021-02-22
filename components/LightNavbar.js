import React from 'react';
import Link from 'next/link';
import { auth } from '../firebase/config';
import { useRouter } from 'next/router';

function LightNavbar() {
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
      <a onClick={signOutHandler}>Sign out</a>
    </nav>
  );
}

export default LightNavbar;
