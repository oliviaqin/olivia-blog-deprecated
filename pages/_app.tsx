import type { AppProps } from 'next/app';
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
import "../styles/globals.css";
import "../styles/card.css";
import "../styles/nav.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto wrapper">
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>

      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    </div>
  );
}

