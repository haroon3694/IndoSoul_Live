import React from 'react'
import rootsLogo from '../assets/indosoulroots/icons/indoSoulRootsLogo.png'
import PreLoader from '../components/global/PreLoader'
import rootsHeroImage from '../assets/indosoulroots/images/rootsHero.png'
import Hero from '../components/global/Hero'
import Description from '../components/roots/Description'
import Booking from '../components/roots/Booking'
import { soulSabhaGalleryImages } from '../data/soulSabhaData'
import ArtistGallery from '../components/global/ArtistGallery'
import Albums from '../components/roots/Albums'

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

  return (
    <div className='font-manrope relative'>
      <PreLoader logoImage={rootsLogo} bgColor='bg-black' />
      <Hero heroImages={rootsHeroImages} logo={rootsLogo} heroText={heroText} />
      <Description />
      <Booking />
      <Albums />
      <ArtistGallery imagesLTR={visualArtsImages} imagesRTL={listiningSongsImages} />
    </div>
  )
}

export default IndoSoulRoots