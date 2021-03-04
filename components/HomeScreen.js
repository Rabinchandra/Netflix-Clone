import { useState } from 'react';
import Row from './HomeScreen/Row';
import Showcase from './HomeScreen/Showcase';
import Navbar from './Navbar';

function HomeScreen({ user, movieInfos }) {
  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const [videoRowIndex, setVideoRowIndex] = useState(0);

  const movieCategories = [
    'trending',
    'netflix originals',
    'top rated',
    'action movies',
    'comedy movies',
    'horror movies',
    'romantic movies',
    'documentaries',
  ];

  return (
    <div className='homescreen' style={{ background: 'black' }}>
      <Navbar user={user} />
      <Showcase
        movieInfo={
          movieInfos[0].results[
            getRandomNumber(movieInfos[0].results.length - 1)
          ]
        }
      />

      {movieCategories.map((category, index) => {
        const results = movieInfos[index].results;
        return (
          <Row
            request={category}
            results={results}
            key={`moviecategory-${index}`}
            index={index}
            videoRowIndex={videoRowIndex}
            setVideoRowIndex={setVideoRowIndex}
          />
        );
      })}
    </div>
  );
}

export default HomeScreen;
