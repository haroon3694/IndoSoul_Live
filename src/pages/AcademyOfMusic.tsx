import React from 'react'
import Hero from '../components/global/Hero'
import heroImageAcademyOfMusic from '../assets/academyofmusic/images/musicHero.jpg'
import logo from '../assets/academyofmusic/icons/academyOfMusicLogo.png'
import PreLoader from '../components/global/PreLoader'
import Purpose from '../components/music/Purpose'
import MusicOfferings from '../components/music/MusicOfferings'
import Educators from '../components/music/Educators'
import VideoCarousal from '../components/global/VideoCarousal'
import bandVideo from '../assets/indosoul/videos/bandVideo.webm'
import ArtistGallery from '../components/global/ArtistGallery'
import { musicianGallery } from '../data/academyOfMusicData'
import CourseContent from '../components/music/CourseContent'

const AcademyOfMusic: React.FC = () => {

  const heroText = (
    <h1 className="text-[1rem] uppercase tracking-widest">UNLOCK YOUR MUSICAL POTENTIAL WITH INDOSOUL ACADEMY</h1>
  )

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

  return (
    <div>
      <Hero singleHeroImage={heroImageAcademyOfMusic} heroText={heroText} logo={logo} />
      <PreLoader logoImage={logo} bgColor='bg-black' />
      <Purpose />
      <MusicOfferings />
      <CourseContent />
      <Educators />
      <div className='mb-28 md:mb-40'>
        <VideoCarousal data={videoCarousaData} />
      </div>
      <ArtistGallery imagesLTR={musicianGallery.leftToRight} imagesRTL={musicianGallery.rightToLeft} />
    </div>
  )
}

export default AcademyOfMusic