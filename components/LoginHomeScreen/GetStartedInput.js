import { LinearScale } from '@material-ui/icons';
import Link from 'next/link';

function GetStartedInput({ user, setUserEmail, userEmail }) {
  return (
    <div className='get-started-input'>
      <div className='input-container'>
        {user ? (
          <Link href='/signup'>
            <a
              className='btn btn-red'
              style={{ transform: 'scale(1.3)', minWidth: '150px' }}>
              Finish Sign Up <i className='fas fa-chevron-right'></i>
            </a>
          </Link>
        ) : (
          <>
            <h5>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <input
              type='text'
              placeholder='Email address'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Link href='/signin'>
              <a className='btn btn-red'>
                Get Started <i className='fas fa-chevron-right'></i>
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default GetStartedInput;
