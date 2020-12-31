import Header from '../components/Header';
import '../styles/font.css';
import '../styles/tailwind.scss';
import ContributorsContext from '../contexts/ContributorsContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContributorsContext.Provider>
      <div>
        <Header />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </ContributorsContext.Provider>
  )
}

export default MyApp
