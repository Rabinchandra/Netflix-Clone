import LoginHomeScreen from '../components/LoginHomeScreen';

export default function Home({ user, hasPlan, setUserEmail }) {
  // return hasPlan ? (
  //   <LoginHomeScreen user={user} />
  // ) : (
  //   <div>
  //     <h1>The user has a plan</h1>
  //   </div>
  // );
  return <LoginHomeScreen user={user} setUserEmail={setUserEmail} />;
}
