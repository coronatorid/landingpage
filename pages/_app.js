import Header from '../components/Header';
import Footer from '../components/Footer';
import RootContextProvider from '../contexts/RootContextProvider';
import '../styles/font.css';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RootContextProvider>
      <Header />
      <div className="min-h-full pt-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </RootContextProvider>
  )
}

export default MyApp
