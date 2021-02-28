import LightFooter from '../../components/LightFooter';
import LightNavbar from '../../components/LightNavbar';
import { useRef, useState } from 'react';
import { db } from '../../firebase/config';
import { useRouter } from 'next/router';

function Planform({ user, setHasPlan }) {
  const planOptionsContainer = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const router = useRouter();

  const clickHandler = (e) => {
    const classes = Array.from(e.target.classList);
    // Get all the elements with 'plan-option' class
    const planOptionArray = Array.from(
      planOptionsContainer.current.querySelectorAll('.plan-option')
    );
    const planTypes = ['mobile', 'basic', 'standard', 'premium'];
    // get the classes of the element being clicked and check if it contains
    // of the one plan types as class. if yes, then push it to foundClass
    const foundClass = classes.filter((c) =>
      planTypes.includes(c.toLowerCase()) ? true : false
    )[0];

    if (foundClass) {
      planOptionArray.forEach((option) => option.classList.remove('active'));

      // Get all the elements with class of the value that foundClass holds
      const elementsToBeActive = Array.from(
        document.querySelectorAll(`.plan-option.${foundClass}`)
      );

      elementsToBeActive.forEach((el) => el.classList.add('active'));
      setSelectedPlan(foundClass);
    }
  };

  const addPlanToDb = async () => {
    if (user && selectedPlan) {
      const found = await db
        .collection('plans')
        .where('id', '==', user.uid)
        .get();

      if (found.docs.length == 0) {
        // Add new plan for the current user
        db.collection('plans').add({
          id: user.uid,
          email: user.email,
          plan: selectedPlan,
        });

        console.log('Plan added...');

        setHasPlan(true);

        router.push('/');
      } else {
        // Update current plan
        db.collection('plans')
          .get()
          .then((snap) => {
            const found = snap.docs.find((doc) => doc.data().id == user.uid);

            db.collection('plans').doc(found.id).update({
              plan: selectedPlan,
            });
          });

        console.log('Plan updated...');

        router.push('/');
      }
    } else if (!user) {
      // user is not logged in
      router.push('/signin');
    }
  };

  return (
    <>
      <LightNavbar user={user} />
      <div className='planform'>
        <header>
          <small>
            STEP <strong>2</strong> OF <strong>2</strong>
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

          <section className='small-screen-link'>Monthly Price</section>

          <section className='plan-options grid-12'>
            <div>Monthly Price</div>
            <div className='plan-option mobile'>₹ 199</div>
            <div className='plan-option basic'>₹ 499</div>
            <div className='plan-option standard'>₹ 649</div>
            <div className='plan-option premium'>₹ 799</div>
          </section>

          <section className='small-screen-link'>Video Quality</section>

          <section className='plan-options grid-12'>
            <div>Video Quality</div>
            <div className='plan-option mobile'>Good</div>
            <div className='plan-option basic'>Good</div>
            <div className='plan-option standard'>Better</div>
            <div className='plan-option premium'>Best</div>
          </section>

          <section className='small-screen-link'>Resolution</section>

          <section className='plan-options grid-12'>
            <div>Resolution</div>
            <div className='plan-option mobile'>480p</div>
            <div className='plan-option basic'>480p</div>
            <div className='plan-option standard'>1080p</div>
            <div className='plan-option premium'>4K+HDR</div>
          </section>

          <section className='small-screen-link'>
            Watch on your TV and computer
          </section>

          <section className='plan-options grid-12'>
            <div>Watch on your TV and computer</div>
            <div className='plan-option mobile'>
              <i className='fas fa-times mobile'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check basic'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check standard'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check premium'></i>
            </div>
          </section>

          <section className='small-screen-link'>
            Watch on your mobile phone and tablet
          </section>

          <section className='plan-options grid-12'>
            <div>Watch on your mobile phone and tablet</div>
            <div className='plan-option mobile'>
              <i className='fas fa-times mobile'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check basic'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check standard'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check premium'></i>
            </div>
          </section>

          <section className='small-screen-link'>
            Screens you can watch on at the same time
          </section>

          <section className='plan-options grid-12'>
            <div>Screens you can watch on at the same time</div>
            <div className='plan-option mobile'>1</div>
            <div className='plan-option basic'>1</div>
            <div className='plan-option standard'>2</div>
            <div className='plan-option premium'>4</div>
          </section>

          <section className='small-screen-link'>
            Unlimited movies and TV shows{' '}
          </section>

          <section className='plan-options grid-12'>
            <div>Unlimited movies and TV Shows</div>
            <div className='plan-option mobile'>
              <i className='fas fa-check mobile'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check basic'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check standard'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check premium'></i>
            </div>
          </section>

          <section className='small-screen-link'>Cancel anytime</section>

          <section className='plan-options grid-12'>
            <div>Cancel</div>
            <div className='plan-option mobile'>
              <i className='fas fa-check mobile'></i>
            </div>
            <div className='plan-option basic'>
              <i className='fas fa-check basic'></i>
            </div>
            <div className='plan-option standard'>
              <i className='fas fa-check standard'></i>
            </div>
            <div className='plan-option premium'>
              <i className='fas fa-check premium'></i>
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

        {selectedPlan ? (
          <button className='btn btn-red continue-btn' onClick={addPlanToDb}>
            Continue
          </button>
        ) : (
          ''
        )}
      </div>
      <LightFooter />
    </>
  );
}

export default Planform;
