import LanguageSelect from './LanguageSelect';

function DarkFooter() {
  return (
    <footer className='dark-footer grid-12'>
      <header>
        Questions? Call <a href='tel:800-040-1843'>800-040-1843</a>
      </header>
      <ul className='dark-footer__links-1'>
        <li>
          <a href='#'>FAQ</a>
        </li>
        <li className='medium-screen-link'>
          <a href='#'>Media Center</a>
        </li>
        <li>
          <a href='#'>Investor Relations</a>
        </li>

        <li>
          <a href='#'>Privacy</a>
        </li>

        <li>
          <a href='#'>Speed Test</a>
        </li>
      </ul>

      <ul className='dark-footer__links-2'>
        <li>
          <a href='#'>Help Center</a>
        </li>
        <li>
          <a href='#'>Jobs</a>
        </li>
        <li className='medium-screen-link'>
          <a href='#'>Terms of Use</a>
        </li>
        <li>
          <a href='#'>Cookie Preferences</a>
        </li>
        <li>
          <a href='#'>Legal Notices</a>
        </li>
      </ul>
      <ul className='dark-footer__links-3'>
        <li>
          <a href='#'>Account</a>
        </li>
        <li>
          <a href='#'>Ways to Watch</a>
        </li>
        <li>
          <a href='#'>Corporate Information</a>
        </li>
        <li className='medium-screen-link'>
          <a href='#'>Contact Us</a>
        </li>
        <li>
          <a href='#'>Netflix Originals</a>
        </li>
      </ul>
      <ul className='dark-footer__links-4'>
        <li>
          <a href='#'>Media Center</a>
        </li>
        <li>
          <a href='#'>Terms of Use</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
      <LanguageSelect />
      <small>Netflix India</small>
    </footer>
  );
}

export default DarkFooter;
