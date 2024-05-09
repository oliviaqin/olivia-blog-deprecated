import "../styles/globals.css";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
import "../styles/card.css";
import "../styles/nav.css";

export default function App({ Component, pageProps }) {
  return (
    <div class="container mx-auto" className="wrapper">
      <div>
        <Nav />
          <Component {...pageProps} />
        <Footer />
      </div>

      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    </div>
  );
}
