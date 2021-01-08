import RootContextProvider from '../contexts/RootContextProvider';
import CrewLayout from '../layouts/CrewLayout';
import Layout from '../layouts/index';

import '../styles/font.css';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps, router }) {
  const routerPathName = router.pathname;

  let layoutName = '';

  // get layout name from url prefix
  if(routerPathName.startsWith('/crew/')) {
    layoutName = 'crew';
  };

  // get layout name from page component
  layoutName = Component.layout || '';

  return (
    <RootContextProvider>
      <Layout name={layoutName}>
        <Component {...pageProps} />
      </Layout>
    </RootContextProvider>
  )
}

export default MyApp;
