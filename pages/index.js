import HomeScreen from '../components/HomeScreen';
import LoginHomeScreen from '../components/LoginHomeScreen';
import requests from '../api/requests';

export default function Home({ user, hasPlan, setUserEmail, movieInfos }) {
  return user && hasPlan ? (
    <HomeScreen user={user} movieInfos={movieInfos} />
  ) : (
    <LoginHomeScreen user={user} setUserEmail={setUserEmail} />
  );
}

export const getStaticProps = async () => {
  const movieInfos = [];

  for (let request in requests) {
    const res = await fetch('https://api.themoviedb.org/3' + requests[request]);
    const data = await res.json();
    movieInfos.push({ request, results: data.results });
  }

  return {
    props: { movieInfos },
  };
};
