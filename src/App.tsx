import IndoSoulLive from './pages/IndoSoulLive'
import SoulSabha from './pages/SoulSabha'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import MainLandingPage from './pages/MainLandingPage';
import Navbar from './components/global/Navbar';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import Footer from './components/global/Footer';
import Sidebar from './components/global/Sidebar';
import Flow from './pages/Flow';
import IndoSoulRoots from './pages/IndoSoulRoots';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './utils/ScrollToTop';
import AcademyOfMusic from './pages/AcademyOfMusic';

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLandingPage />} />
        <Route path='/indo-soul-live' element={<IndoSoulLive />} />
        <Route path='/soul-sabha' element={<SoulSabha />} />
        <Route path='/flow' element={<Flow />} />
        <Route path='/indo-soul-music' element={<AcademyOfMusic />} />
        <Route path='/indo-soul-roots' element={<IndoSoulRoots />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
