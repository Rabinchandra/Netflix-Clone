import React from 'react';

function Showcase({ movieInfo }) {
  const getLimitedText = (str) => {
    return str.split('').slice(0, 150).join('') + '.....';
  };

  console.log(movieInfo);

  return (
    <div
      style={{
        background: `
            linear-gradient(to right, rgba(0, 0, 0, .3) 30%, rgba(0, 0, 0, 0)),
            url(https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`,
      }}
      className='homescreen__showcase grid'>
      <section className='details'>
        <h1>{movieInfo.name ? movieInfo.name : movieInfo.original_title}</h1>
        <p>{getLimitedText(movieInfo.overview)}</p>
        <div>
          <button className='btn play-video'>
            <i className='fas fa-play'></i> Play Video
          </button>
          <button className='btn play-list'>
            <i className='fas fa-plus'></i> Play List
          </button>
        </div>
      </section>
    </div>
  );
}

export default Showcase;
