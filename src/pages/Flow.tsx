import React from 'react'
import Hero from '../components/global/Hero'
import flowLogo from '../assets/flow/icons/flowLogo.png'
import PreLoader from '../components/global/PreLoader'
import Description from '../components/flow/Description'
import Catalog from '../components/flow/Catalog'
import bandVideo from '../assets/indosoul/videos/bandVideo.webm'
import Requirement from '../components/flow/Requirement'
import { flowHeroImages } from '../data/flowData'
import VideoCarousal from '../components/global/VideoCarousal'

const Flow: React.FC = () => {

  const videoCarousaData = [
    {
        id: 0,
        title: 'video 1',
        video: bandVideo,
    },
    {
        id: 1,
        title: 'video 2',
        video: bandVideo,
    },
    {
        id: 2,
        title: 'video 3',
        video: bandVideo,
    },
    {
        id: 3,
        title: 'video 4',
        video: bandVideo,
    },
    {
        id: 4,
        title: 'video 5',
        video: bandVideo,
    },
];

  const heroText = (
    <div className='max-w-md text-wrap'>
      <h1 className='text-[1rem] leading-6 tracking-widest'>When creativity meets craftsmanship to give expression to an emotion, music is born</h1>
    </div>
  );

  return (
    <div className='font-manrope'>
      <PreLoader logoImage={flowLogo} bgColor='bg-black' />
      <Hero heroImages={flowHeroImages} logo={flowLogo} heroText={heroText} />
      <Description />
      <Catalog />
      <Requirement />
      <div className='mb-16 md:mb-32'>
        <VideoCarousal data={videoCarousaData} />
      </div>
    </div>
  )
}

export default Flow