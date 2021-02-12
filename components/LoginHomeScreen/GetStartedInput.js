import Link from 'next/link';

function GetStartedInput() {
  return (
    <div className='get-started-input'>
      <h5>
        Ready to watch? Enter your email to create or restart your membership.
      </h5>
      <div className='input-container'>
        <input type='text' placeholder='Email address' />
        <Link href='/signup'>
          <a className='btn btn-red'>
            Get Started <i className='fas fa-chevron-right'></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default GetStartedInput;
