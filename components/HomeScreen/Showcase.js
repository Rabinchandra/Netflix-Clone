import React from 'react';

function Showcase({ movieInfo }) {
  const getLimitedText = (str) => {
    return str?.split('').slice(0, 150).join('') + '.....';
  };

  return (
    <div
      style={{
        background: `
            linear-gradient(to right, rgba(0, 0, 0, .4) 25%, rgba(0, 0, 0, 0)),
            url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`,
      }}
      className='homescreen__showcase grid'>
      <section className='details'>
        <h1>{movieInfo.name ? movieInfo.name : movieInfo.original_title}</h1>
        <p>{getLimitedText(movieInfo.overview)}</p>
        <div>
          <button className='btn play-video'>
            <i className='fas fa-play'></i> Play
          </button>
          <button className='btn play-list'>
            <i className='fas fa-plus'></i> List
          </button>
        </div>
      </section>
      <div className='darkline'></div>
    </div>
  );
}

export default Showcase;
