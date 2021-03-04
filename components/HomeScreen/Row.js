import { useState } from 'react';

function Row({ request, results, index, videoRowIndex, setVideoRowIndex }) {
  const [videoUrl, setVideoUrl] = useState('');

  const playVideo = async (id) => {
    
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5916a00b1cd4054af1fb9182a29c642f&language=en-US`)
      const data = await res.json();
      let url = data?.results[0]?.key || '';
      url === videoUrl? setVideoUrl('') : setVideoUrl(url);
      
      setVideoRowIndex(index);
    } catch(err) {
      console.log(err);
    }
    
  };

  return (
    <div className='row'>
      <header>{request}</header>
      <section className='row__posters'>
        {results.map(
          (result) =>
            result.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                key={result.id}
                onClick={() => playVideo(result.id)}
              />
            )
        )}
      </section>
      {videoUrl && videoRowIndex === index && (
          <iframe src={`https://www.youtube.com/embed/${videoUrl}`} className="video"></iframe>
      )}
    </div>
  );
}

export default Row;
