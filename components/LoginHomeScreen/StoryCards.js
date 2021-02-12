function StoryCards() {
  return (
    <>
      <section className='story-card grid'>
        <section className='story-card__text'>
          <h2>Enjoy on your TV</h2>
          <h4>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h4>
        </section>
        <section className='story-card__img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
            alt=''
          />
          <video
            autoPlay
            muted
            loop
            __idm_id__='693544961'
            className='story-card__video-1'>
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'
              type='video/mp4'></source>
          </video>
        </section>
      </section>
      {/* Story Card 2 */}
      <section className='story-card grid story-card-reverse'>
        <div className='story-card__text'>
          <h2>Download your shows to watch offline.</h2>
          <h4>
            Save your favourites easily and always have something to watch.
          </h4>
        </div>
        <div className='story-card__img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            alt=''
          />
        </div>
      </section>
      {/* Story Card 3 */}
      <section className='story-card grid'>
        <div className='story-card__text'>
          <h2>Watch everywhere.</h2>
          <h4>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
        </div>
        <div className='story-card__img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'
            alt=''
          />
          <video
            autoPlay
            muted
            loop
            __idm_id__='693544961'
            className='story-card__video-2'>
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
              type='video/mp4'></source>
          </video>
        </div>
      </section>
    </>
  );
}

export default StoryCards;
