import ArtistGallery from "../components/global/ArtistGallery"
import Hero from "../components/global/Hero"
import OurDescription from "../components/soulsabha/OurDescription"
import PreLoader from "../components/global/PreLoader"
import Experience from "../components/soulsabha/Experience"
import NextSeason from "../components/soulsabha/NextSeason"
import { soulSabhaGalleryImages } from "../data/soulSabhaData"
import soulSabhaLogo from '../assets/soulsabha/icons/soulSabhaLogo.png'
import soulSabhaLogoDark from '../assets/soulsabha/icons/logoMainSoulSabha.png'
import soulSabhaHeroImage from '../assets/soulsabha/images/heroImage.jpg'
import soulSabhaBackground from '../assets/soulsabha/images/soulSabhaBackground.png'
import BackgroundImageContainer from "../components/global/BackgroundImageContainer"
import PreviousSeason from "../components/soulsabha/PreviousSeason"

const SoulSabhaLandingPage = () => {

  const { visualArtsImages, listiningSongsImages } = soulSabhaGalleryImages;

  const heroText = (
    <h1 className="text-[1rem] uppercase tracking-widest">Embracing Indian Heritage through Classical music</h1>
  )

  return (
    <div className="font-manrope">
      <PreLoader logoImage={soulSabhaLogoDark} />
      <div className="bg-[#FCFBF6]">
        <Hero singleHeroImage={soulSabhaHeroImage} logo={soulSabhaLogo} heroText={heroText} />
        <OurDescription />
        <div className="mt-10 mb-20 md:my-32">
          <BackgroundImageContainer backgroundImage={soulSabhaBackground}>
            <Experience />
          </BackgroundImageContainer>
        </div>
        <NextSeason />
        <PreviousSeason />
        <ArtistGallery imagesLTR={visualArtsImages} imagesRTL={listiningSongsImages} />
      </div>
    </div>
  )
}

export default SoulSabhaLandingPage