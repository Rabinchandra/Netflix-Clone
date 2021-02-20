import LightFooter from '../../components/LightFooter';
import LightNavbar from '../../components/LightNavbar';
import { useRef } from 'react';

function planform() {
  const planOptionsContainer = useRef(null);

  const clickHandler = (e) => {
    const classes = e.target.classList;
    // Get all the elements with plan-option class
    const planOptionArray = Array.from(
      planOptionsContainer.current.querySelectorAll('.plan-option')
    );

    if (classes.contains('plan-option')) {
      planOptionArray.forEach((option) => option.classList.remove('active'));
      // Get all the elements which will have active class
      const elementsToBeActive = Array.from(
        document.querySelectorAll(`.plan-option.${classes[1]}`)
      );

      elementsToBeActive.forEach((el) => el.classList.add('active'));
    }
  };

  return (
    <>
      <LightNavbar />
      <div className='planform'>
        <header>
          <small>
            STEP <strong>1</strong> OF <strong>3</strong>
          </small>
          <h4>Choose the plan that's right for you</h4>
          <p>Downgrade or upgrade at any time.</p>
        </header>

        <section
          className='plan-options-container'
          onClick={clickHandler}
          ref={planOptionsContainer}>
          <header className='plan-options grid-12'>
            <div></div>
            <div className='plan-option mobile'>Mobile</div>
            <div className='plan-option basic'> Basic</div>
            <div className='plan-option standard'>Standard</div>
            <div className='plan-option premium'>Premium</div>
          </header>

          <section className='plan-options grid-12'>
            <div>Monthly Price</div>
            <div className='plan-option mobile'>₹ 199</div>
            <div className='plan-option basic'>₹ 499</div>
            <div className='plan-option standard'>₹ 649</div>
            <div className='plan-option premium'>₹ 799</div>
          </section>

          <section className='plan-options grid-12'>
            <div>Video Quality</div>
            <div className='plan-option mobile'>Good</div>
            <div className='plan-option basic'>Good</div>
            <div className='plan-option standard'>Better</div>
            <div className='plan-option premium'>Best</div>
          </section>

          <section className='plan-options grid-12'>
            <div>Resolution</div>
            <div className='plan-option mobile'>480p</div>
            <div className='plan-option basic'>480p</div>
            <div className='plan-option standard'>1080p</div>
            <div className='plan-option premium'>4K+HDR</div>
          </section>

          <section className='plan-options grid-12'>
            <div>Watch on your TV and computer</div>
            <div className='plan-option mobile'>
              <i className='fas fa-times'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check'></i>
            </div>
          </section>

          <section className='plan-options grid-12'>
            <div>Watch on your mobile phone and tablet</div>
            <div className='plan-option mobile'>1</div>
            <div className='plan-option standard'>1</div>
            <div className='plan-option basic'>2</div>
            <div className='plan-option premium'>4</div>
          </section>

          <section className='plan-options grid-12'>
            <div>Unlimited movies and TV Shows</div>
            <div className='plan-option mobile'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check'></i>
            </div>
          </section>

          <section className='plan-options grid-12'>
            <div>Cancel</div>
            <div className='plan-option mobile'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check'></i>
            </div>
          </section>
        </section>

        <small>
          Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
          internet service and device capabilities. Not all content available in
          HD, Full HD, Ultra HD or HDR. See{' '}
          <a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a>{' '}
          for more details.
        </small>
        <button className='btn btn-red continue-btn'>Continue</button>
      </div>
      <LightFooter />
    </>
  );
}

export default planform;
