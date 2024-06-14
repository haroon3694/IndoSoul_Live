import LandingPage from './pages/LandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from './components/global/PreLoader';

function App() {

  return (
    <>
      <PreLoader />
      <LandingPage />
    </>
  )
}

export default App
