import { Fragment } from 'react';
import '../styles/globals.css';
import NavBar from './navbar';
import Footer from './footer';


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
