import '../style/style.css';
import Head from 'next/head';
import { auth } from '../firebase/config';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
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
      </Head>
      <Component {...pageProps} user={user} />
    </>
  );
}

export default MyApp;
