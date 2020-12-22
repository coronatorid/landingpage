import Nav from '../components/Nav';
import '../styles/font.css';
import '../styles/tailwind.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
