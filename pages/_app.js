import '../style/style.css';
import Head from 'next/head';
import { auth, db } from '../firebase/config';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [hasPlan, setHasPlan] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);

      // Check if user has a plan
      if (user) {
        db.collection('plans')
          .get()
          .then((snap) => {
            const found = snap.docs.find((doc) => doc.data().id === user.uid);
            found ? setHasPlan(true) : setHasPlan(false);
          });
      } else {
        setHasPlan(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Netflix</title>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.2/css/all.css'
          integrity='sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu'
          crossOrigin='anonymous'></link>
        <link rel="icon" href="/icons/logo.png" size="16x10"/>
      </Head>
      <Component
        {...pageProps}
        user={user}
        hasPlan={hasPlan}
        setHasPlan={setHasPlan}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />
    </>
  );
}

export default MyApp;
