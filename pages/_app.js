import RootContextProvider from '../contexts/RootContextProvider';
import Layout from '../layouts/index';
import App from 'next/app';

import '../styles/font.css';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps, router }) {
  let layoutName = '';

  if(router.pathname.startsWith('/crew/')) {
    layoutName = 'crew';
  };

  if(router.pathname.startsWith('/auth/')) {
    layoutName = 'auth';
  }

  // get layout name from page componenPt if exists
  if(Component.layout) {
    layoutName = Component.layout;
  }

  return (
    <RootContextProvider>
      <Layout name={layoutName}>
        <Component {...pageProps} />
      </Layout>
  </RootContextProvider>
  )
}

export default MyApp;
