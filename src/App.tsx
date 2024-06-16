import LandingPage from './pages/LandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from './components/global/PreLoader';
import Navbar from './components/global/Navbar';

function App() {

  return (
    <>
      <PreLoader />
      <Navbar />
      <LandingPage />
    </>
  )
}

export default App
