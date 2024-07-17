import IndoSoulLiveLandingPage from './pages/IndoSoulLiveLandingPage'
import SoulSabhaLandingPage from './pages/SoulSabhaLandingPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
// import MainLandingPage from './pages/MainLandingPage';

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<MainLandingPage />} /> */}
        <Route path='/' element={<IndoSoulLiveLandingPage />} />
        <Route path='/soul-sabha' element={<SoulSabhaLandingPage />} />
      </Routes>
    </>
  )
}

export default App
