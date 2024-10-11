import React from 'react'
import rootsLogo from '../assets/indosoulroots/icons/indoSoulRootsLogo.svg'
import PreLoader from '../components/global/PreLoader'
import rootsHeroImage from '../assets/indosoulroots/images/rootsHero.png'
import Hero from '../components/global/Hero'
import Description from '../components/roots/Description'
import Booking from '../components/roots/Booking'
import { soulSabhaGalleryImages } from '../data/soulSabhaData'
import ArtistGallery from '../components/global/ArtistGallery'
import bookingImage1 from '../assets/indosoulroots/images/performancecards/01.png'
import bookingImage2 from '../assets/indosoulroots/images/performancecards/02.png'
import bookingImage3 from '../assets/indosoulroots/images/performancecards/03.png'
import bookingImage4 from '../assets/indosoulroots/images/performancecards/04.png'
import WatchButton from '../components/global/WatchButton'

const IndoSoulRoots: React.FC = () => {

  const { visualArtsImages, listiningSongsImages } = soulSabhaGalleryImages;

  const rootsHeroImages = [
    {
      id: 0,
      title: '',
      image: rootsHeroImage
    },
    {
      id: 1,
      title: '',
      image: rootsHeroImage
    },
  ];

  const heroText = (
    <h1 className="font-bebasNeue text-[1rem] uppercase tracking-widest">The deeper the roots, the stronger the tree</h1>
  );

  const bookingCardsData = [
    {
      id: 0,
      image: bookingImage1,
      link: '',
    },
    {
      id: 0,
      image: bookingImage2,
      link: '',
    },
    {
      id: 0,
      image: bookingImage3,
      link: '',
    },
    {
      id: 0,
      image: bookingImage4,
      link: '',
    },
  ];

  return (
    <div className='font-manrope'>
      <PreLoader logoImage={rootsLogo} bgColor='bg-black' />
      <Hero heroImages={rootsHeroImages} logo={rootsLogo} heroText={heroText} />
      <Description />
      <Booking />
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center md:flex items-center gap-10 justify-center mb-40'>
        {
          bookingCardsData?.map((data) => (
            <div className='w-fit flex flex-col justify-center items-center gap-4'>
              <div key={data?.id} className='w-52 aspect-square relative rounded-2xl group overflow-hidden'>
                <img src={data?.image} className='w-full rounded-2xl group-hover:scale-[200%] group-hover:blur-md transition-all duration-500 ease-in-out' alt="" />
              </div>
              <WatchButton
                btnText='watch'
                bgColor={`rootsBrown`}
                onClick={() => {}}
                styles={`text-black`}
                btnColor={`black`}
              />
            </div>
          ))
        }
      </div>
      <ArtistGallery imagesLTR={visualArtsImages} imagesRTL={listiningSongsImages} />
    </div>
  )
}

export default IndoSoulRoots