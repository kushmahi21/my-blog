import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <>
  <div className="mx-[10%] font-sans">
    <NavBar />
    <main>
    <Component {...pageProps} />
    </main>
    <Footer />
  </div>
  </>
  );
}

export default MyApp
