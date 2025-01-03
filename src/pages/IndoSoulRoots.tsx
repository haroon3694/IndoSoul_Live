import React from 'react'
import rootsLogo from '../assets/indosoulroots/icons/indoSoulRootsLogo.png'
import PreLoader from '../components/global/PreLoader'
import rootsHeroImage from '../assets/indosoulroots/images/rootsHero.jpg'
import Hero from '../components/global/Hero'
import Description from '../components/roots/Description'
import ArtistGallery from '../components/global/ArtistGallery'
import Albums from '../components/roots/Albums'
import { rootsGalleryImages } from '../data/indoSoulRootsData'

const IndoSoulRoots: React.FC = () => {

  const { visualArtsImages, listiningSongsImages } = rootsGalleryImages;
  const heroText = (
    <h1 className="font-manrope text-[1rem] uppercase tracking-widest">The deeper the roots, the stronger the tree</h1>
  );

  return (
    <div className='font-manrope relative'>
      <PreLoader logoImage={rootsLogo} bgColor='bg-black' />
      <Hero singleHeroImage={rootsHeroImage} logo={rootsLogo} heroText={heroText} />
      <Description />
      <Albums />
      <ArtistGallery imagesLTR={visualArtsImages} imagesRTL={listiningSongsImages} />
    </div>
  )
}

export default IndoSoulRoots