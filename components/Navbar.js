import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link href='/'>
          <img src='icons/netflix.png' alt='cannot load' />
        </Link>
      </div>
      <Link href='/signin'>
        <a href='#' className='btn btn-red sign-in-btn'>
          Sign in
        </a>
      </Link>
    </nav>
  );
}

export default Navbar;
