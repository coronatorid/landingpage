import Header from '../components/Header';
import Footer from '../components/Footer';
import RootContextProvider from '../contexts/RootContextProvider';
import '../styles/font.css';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RootContextProvider>
      <div>
        <Header />
        <div>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </RootContextProvider>
  )
}

export default MyApp
