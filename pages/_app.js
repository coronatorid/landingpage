import Header from '../components/Header';
import '../styles/font.css';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
