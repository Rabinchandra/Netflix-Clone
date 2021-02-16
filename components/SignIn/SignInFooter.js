import LanguageSelect from '../LanguageSelect';

function SignInFooter() {
  return (
    <footer className='signin-footer grid-12'>
      <header>
        Questions? Call <a href='tel:000-800-040-1843'>000-800-040-1843</a>
      </header>
      <ul className='signin-footer__links-1'>
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
      <ul className='signin-footer__links-2'>
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
      <ul className='signin-footer__links-3'>
        <li>
          <a href='#'>Terms of Use</a>
        </li>
        <li className='medium-screen-link'>
          <a href='#'>Privacy</a>
        </li>
      </ul>
      <ul className='signin-footer__links-4'>
        <li>
          <a href='#'>Privacy</a>
        </li>
      </ul>
      <LanguageSelect />
    </footer>
  );
}

export default SignInFooter;
