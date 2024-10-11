import ArtistGallery from "../components/global/ArtistGallery"
import Hero from "../components/global/Hero"
import OurDescription from "../components/soulsabha/OurDescription"
import PreLoader from "../components/global/PreLoader"
import SeasonOne from "../components/soulsabha/SeasonOne"
import SeasonTwo from "../components/soulsabha/SeasonTwo"
import { soulSabhaGalleryImages, soulSabhaHeroImages } from "../data/soulSabhaData"
import soulSabhaLogo from '../assets/soulsabha/icons/logoMainSoulSabhaWhite.svg'
import soulSabhaLogoDark from '../assets/soulsabha/icons/logoMainSoulSabha.svg'

const SoulSabhaLandingPage = () => {

  const { visualArtsImages, listiningSongsImages } = soulSabhaGalleryImages;

  const heroText = (
    <h1 className="text-[1rem] uppercase tracking-widest">Embracing Indian Heritage through Classical music</h1>
  )

  return (
    <div className="font-manrope">
      <PreLoader logoImage={soulSabhaLogoDark} />
      <div className="bg-[#FCFBF6]">
        <Hero heroImages={soulSabhaHeroImages} logo={soulSabhaLogo} heroText={heroText} />
        <OurDescription />
        <SeasonOne />
        <SeasonTwo />
        <ArtistGallery imagesLTR={visualArtsImages} imagesRTL={listiningSongsImages} />
      </div>
    </div>
  )
}

export default SoulSabhaLandingPage