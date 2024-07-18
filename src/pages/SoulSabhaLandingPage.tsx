import Footer from "../components/global/Footer"
import Navbar from "../components/global/Navbar"
import Sidebar from "../components/global/Sidebar"
import Hero from "../components/soulsabhalandingpage/Hero"
import OurDescription from "../components/soulsabhalandingpage/OurDescription"
import PreLoader from "../components/soulsabhalandingpage/PreLoader"
import SeasonOne from "../components/soulsabhalandingpage/SeasonOne"
import SeasonTwo from "../components/soulsabhalandingpage/SeasonTwo"
import ScrollingGallery from "../components/global/ScrollingGallery"
import galleryImg1 from '../assets/soulsabha/images/gallery/soul-sabha_gallery-1.jpg'
import galleryImg2 from '../assets/soulsabha/images/gallery/soul-sabha_gallery-2.jpg'
import galleryImg3 from '../assets/soulsabha/images/gallery/soul-sabha_gallery-3.jpg'
import galleryImg4 from '../assets/soulsabha/images/gallery/soul-sabha_gallery-4.jpg'
import galleryImg5 from '../assets/soulsabha/images/gallery/soul-sabha_gallery-5.jpg'
import galleryImg6 from '../assets/soulsabha/images/gallery/soul-sabha_gallery-6.jpg'

const SoulSabhaLandingPage = () => {
  const images: any = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
  ];
  return (
    <div className="font-manrope">
      <PreLoader />
      <Navbar soulSabha={true} />
      {/* <Sidebar/> */}
      <div className="bg-[#FCFBF6]">
        <Hero />
        <OurDescription />
        <SeasonOne />
        <SeasonTwo />
        <ScrollingGallery images={images} scrollRight={true} />
        <ScrollingGallery images={images} scrollRight={false} />
      </div>
      <Footer soulSabha={true} />
    </div>
  )
}

export default SoulSabhaLandingPage