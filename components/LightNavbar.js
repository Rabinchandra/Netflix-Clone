import React from 'react';
import Link from 'next/link';

function LightNavbar() {
  return (
    <nav className='light-navbar'>
      <Link href='/'>
        <img src='/icons/netflix.png' alt='' />
      </Link>
      <a>Sign out</a>
    </nav>
  );
}

export default LightNavbar;
