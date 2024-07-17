import React from 'react'
import indoSoulLogo from '../assets/indosoul/icons/logo-main.svg';
import soulSabhaLogo from '../assets/soulsabha/icons/logoMainSoulSabhaWhite.svg'
import { useNavigate } from 'react-router-dom';

const MainLandingPage: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex bg-black'>
        <div className='w-full flex justify-center items-center' onClick={() => navigate(`/indo-soul-live`)}>
            <img src={indoSoulLogo} className='w-48 hover:scale-110 transition-all duration-500 ease-in-out' alt="" />
        </div>
        <div className='w-full flex justify-center items-center' onClick={() => navigate(`/soul-sabha`)}>
            <img src={soulSabhaLogo} className='w-60 hover:scale-110 transition-all duration-500 ease-in-out' alt="" />
        </div>
    </div>
  )
}

export default MainLandingPage