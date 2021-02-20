import React from 'react';
import LanguageSelect from './LanguageSelect';

function LightFooter() {
  return (
    <footer className='light-footer grid-12'>
      <header>
        Questions? Call <a href='tel:800-040-1843'>800-040-1843</a>
      </header>
      <ul className='light-footer__links-1'>
        <li>
          <a href='#'>FAQ</a>
        </li>
        <li className='small-screen-link'>
          <a href='#'>Terms of Use</a>
        </li>
        <li>
          <a href='#'>Cookie Preferences</a>
        </li>
      </ul>
      <ul className='light-footer__links-2'>
        <li>
          <a href='#'>Help Center</a>
        </li>
        <li className='small-screen-link'>
          <a href='#'>Privacy</a>
        </li>
        <li>
          <a href='#'>Corporate Infomation</a>
        </li>
      </ul>
      <ul className='light-footer__links-3'>
        <li>
          <a href='#'>Terms of Use</a>
        </li>
        <li className='medium-screen-link'>
          <a href='#'>Privacy</a>
        </li>
      </ul>
      <ul className='light-footer__links-4'>
        <li>
          <a href='#'>Privacy</a>
        </li>
      </ul>
      <LanguageSelect isDark={false} />
    </footer>
  );
}

export default LightFooter;
