import '../styles/globals.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div class='container mx-auto' className='wrapper'>
      <div class='overlay'>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      </div>

      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    </div>
  )
}
