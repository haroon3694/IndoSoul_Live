import LandingPage from './pages/LandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from './components/global/PreLoader';
import Navbar from './components/global/Navbar';
import { Route, Routes } from 'react-router';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import ScrollToTop from './utils/ScrollToTop.ts'

function App() {

  return (
    <>
      <PreLoader />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
