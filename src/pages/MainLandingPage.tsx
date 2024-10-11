import React from 'react'
import logoIndosoul from '../assets/icons/indosoulLogoMain.svg'
import Hero from '../components/global/Hero'
import heroImage from '../assets/landing/hero.png'
import OurOfferings from '../components/landingpage/OurOfferings'
import Events from '../components/landingpage/Events'

const MainLandingPage: React.FC = () => {

  const heroImages = [
    {
      id: 0,
      title: '',
      image: heroImage
    },
    {
      id: 1,
      title: '',
      image: heroImage
    },
  ];

  return (
    <div className=''>
      <Hero heroImages={heroImages} logo={logoIndosoul} />
      <OurOfferings />
      <Events />
    </div>
  )
}

export default MainLandingPage