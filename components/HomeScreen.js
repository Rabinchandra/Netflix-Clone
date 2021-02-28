import React from 'react';
import Showcase from './HomeScreen/Showcase';
import Navbar from './Navbar';

function HomeScreen({ user, movieInfos }) {
  const getRandomNumber = (max) => {
    console.log(max);
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div className='homescreen'>
      <Navbar user={user} />
      <Showcase
        movieInfo={
          movieInfos[0].results[
            getRandomNumber(movieInfos[0].results.length - 1)
          ]
        }
      />
    </div>
  );
}

export default HomeScreen;
