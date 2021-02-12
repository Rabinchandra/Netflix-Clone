import Head from 'next/head';
import LoginHomeScreen from '../components/LoginHomeScreen';

export default function Home() {
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
      <LoginHomeScreen />
    </>
  );
}
