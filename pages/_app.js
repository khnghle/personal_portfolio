import { Fragment } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import SideBar from './sideBar';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Coding WizKid</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="profile.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        />
      </Head>

      <div className="wrapper">
        <SideBar/>
        <Component {...pageProps} />

      </div>
    </Fragment>
  );
}

export default MyApp;
