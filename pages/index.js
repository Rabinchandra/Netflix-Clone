import HomeScreen from "../components/HomeScreen";
import LoginHomeScreen from "../components/LoginHomeScreen";
import requests from "../api/requests";

export default function Home({ user, hasPlan, setUserEmail, movieInfos }) {
  return user && hasPlan ? (
    <HomeScreen user={user} movieInfos={movieInfos} />
  ) : (
    <LoginHomeScreen user={user} setUserEmail={setUserEmail} />
  );
}

export const getStaticProps = async () => {
  const movieInfos = [];

  // Fetch data of each request
  for (let request in requests) {
    const res = await fetch("https://api.themoviedb.org/3" + requests[request]);
    const data = await res.json();

    const results = [];

    data.results.forEach(async (data) => {
      // Get only the required data of each result
      const {
        id,
        backdrop_path,
        title,
        original_title,
        name,
        overview,
        poster_path,
      } = data;

      // basicData is an object with only r equired data
      let basicData = {
        id,
        backdrop_path: backdrop_path || "",
        title: title || "",
        original_title: original_title || "",
        name: name || "",
        overview: overview || "",
        poster_path: poster_path || "",
      };

        results.push(basicData);  

      // // Get the video url if request is not documentaries
      // if (request !== 'documentaries') {
      //   const videoRes = await fetch(
      //     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=5916a00b1cd4054af1fb9182a29c642f&language=en-US`
      //   );

      //   const videoData = await videoRes.json();

      //   results.push({
      //     ...basicData,
      //     video_url: videoData.results[0].key || '',
      //   });
      // } else {
      //   results.push({
      //     ...basicData,
      //     video_url: '',
      //   });
      // }
    });

    movieInfos.push({ request, results });
  }

  return {
    props: { movieInfos },
  };
};
