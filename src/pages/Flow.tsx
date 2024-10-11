import React from 'react'
import Hero from '../components/global/Hero'
import flowLogo from '../assets/flow/icons/flowLogo.svg'
import PreLoader from '../components/global/PreLoader'
import Description from '../components/flow/Description'
import Catalog from '../components/flow/Catalog'
import { soulSabhaGalleryImages } from '../data/soulSabhaData'
import ArtistGallery from '../components/global/ArtistGallery'
import Requirement from '../components/flow/Requirement'
import { flowHeroImages } from '../data/flowData'

const Flow: React.FC = () => {

  const { visualArtsImages, listiningSongsImages } = soulSabhaGalleryImages;

  const heroText = (
    <div className='max-w-md text-wrap'>
      <h1 className='text-[1rem] leading-10 tracking-widest'>When creativity meets craftsmanship to give expression to an emotion, music is born</h1>
    </div>
  );

  return (
    <div className='font-manrope'>
      <PreLoader logoImage={flowLogo} bgColor='bg-black' />
      <Hero heroImages={flowHeroImages} logo={flowLogo} heroText={heroText} />
      <Description />
      <Catalog />
      <Requirement />
      <ArtistGallery imagesLTR={visualArtsImages} imagesRTL={listiningSongsImages} />
    </div>
  )
}

export default Flow