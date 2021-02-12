import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
      </div>
      <Link href='/signin'>
        <a href='#' className='btn btn-red'>
          Sign in
        </a>
      </Link>
    </nav>
  );
}

export default Navbar;
