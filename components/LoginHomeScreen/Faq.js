import { useRef } from 'react';
import GetStartedInput from './GetStartedInput';

function Faq() {
  const collapseWrapper = useRef(null);

  const collapseHandler = (n) => {
    // Get all the divs with faq-collapse class
    const collapseEls = Array.from(
      collapseWrapper.current.querySelectorAll('.faq-collapse')
    );
    // Get the faq-collapse div at position 'n'
    const current = collapseEls[n];

    if (current.classList.contains('open')) {
      // Remove all the open class
      removeOpenClass(collapseEls);
    } else {
      // Remove all the open class
      removeOpenClass(collapseEls);
      // Add open class to the current div
      current.classList.add('open');
      current.querySelector('.sign').innerHTML = '&times';
    }
  };

  const removeOpenClass = (elements) => {
    elements.forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.sign').innerText = '+';
    });
  };

  return (
    <div className='faq'>
      <h2>Frequently Asked Questions</h2>

      <section className='faq-collapse-wrapper' ref={collapseWrapper}>
        {/* Faq Collapse 1 */}
        <div className='faq-collapse' onClick={() => collapseHandler(0)}>
          <h3 className='faq-collapse__question'>
            <div>What is Netflix?</div>
            <div className='sign'>+</div>
          </h3>
          <section className='faq-collapse__ans'>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </section>
        </div>

        {/* Faq Collapse 2 */}
        <div className='faq-collapse' onClick={() => collapseHandler(1)}>
          <h3 className='faq-collapse__question'>
            <div>How much does Netflix cost?</div>
            <div className='sign'>+</div>
          </h3>
          <section className='faq-collapse__ans'>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            199 to ₹ 799 a month. No extra costs, no contracts.
          </section>
        </div>

        {/* Faq Collapse 3 */}
        <div className='faq-collapse' onClick={() => collapseHandler(2)}>
          <h3 className='faq-collapse__question'>
            <div>Where can I watch?</div>
            <div className='sign'>+</div>
          </h3>
          <section className='faq-collapse__ans'>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </section>
        </div>

        {/* Faq Collapse 4 */}
        <div className='faq-collapse' onClick={() => collapseHandler(3)}>
          <h3 className='faq-collapse__question'>
            <div>How do I cancel?</div>
            <div className='sign'>+</div>
          </h3>
          <section className='faq-collapse__ans'>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </section>
        </div>

        {/* Faq Collapse 5 */}
        <div className='faq-collapse' onClick={() => collapseHandler(4)}>
          <h3 className='faq-collapse__question'>
            <div>What can I watch on Netflix?</div>
            <div className='sign'>+</div>
          </h3>
          <section className='faq-collapse__ans'>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </section>
        </div>
      </section>
      <GetStartedInput />
    </div>
  );
}

export default Faq;
