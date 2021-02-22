import LoginHomeScreen from '../components/LoginHomeScreen';

export default function Home({ user }) {
  console.log(user);
  return <LoginHomeScreen user={user} />;
}
