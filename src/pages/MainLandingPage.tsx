import React from 'react'
import logoIndosoul from '../assets/icons/indosoulLogoMain.svg'
import Hero from '../components/global/Hero'
import bgContainerImage from '../assets/landing/landingBgContainer.png'
import heroImage from '../assets/landing/heroimages/hero.png'
import OurOfferings from '../components/landingpage/OurOfferings'
import Events from '../components/landingpage/Events'
import PreLoader from '../components/global/PreLoader'
import BackgroundImageContainer from '../components/global/BackgroundImageContainer'
import SeasonHeader from '../components/global/SeasonHeader'
import SocialMediaIcons from '../components/global/SocialMediaIcons'
import SoulCircle from '../components/landingpage/SoulCircle'
import ArtistGallery from '../components/global/ArtistGallery'
import { musicianGallery } from '../data/indoSoulLiveData'

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
      <PreLoader logoImage={logoIndosoul} bgColor='bg-black' />
      <Hero heroImages={heroImages} logo={logoIndosoul} />
      <OurOfferings />
      <Events />
      <BackgroundImageContainer backgroundImage={bgContainerImage} bgSize='100%'>
        <div className='py-16'>
        <SeasonHeader text={`experience indosoul`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0FA677] to-[#96D112] tracking-none mb-8' />
        <SocialMediaIcons />
        </div>
      </BackgroundImageContainer>
      <SoulCircle />
      <ArtistGallery imagesLTR={musicianGallery.leftToRight} imagesRTL={musicianGallery.rightToLeft} />
    </div>
  )
}

export default MainLandingPage