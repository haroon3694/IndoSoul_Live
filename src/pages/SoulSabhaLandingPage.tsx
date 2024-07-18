import Footer from "../components/global/Footer"
import Navbar from "../components/global/Navbar"
import ArtistGallery from "../components/soulsabhalandingpage/ArtistGallery"
// import Sidebar from "../components/global/Sidebar"
import Hero from "../components/soulsabhalandingpage/Hero"
import OurDescription from "../components/soulsabhalandingpage/OurDescription"
import PreLoader from "../components/soulsabhalandingpage/PreLoader"
import SeasonOne from "../components/soulsabhalandingpage/SeasonOne"
import SeasonTwo from "../components/soulsabhalandingpage/SeasonTwo"

const SoulSabhaLandingPage = () => {
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
        <ArtistGallery />
      </div>
      <Footer soulSabha={true} />
    </div>
  )
}

export default SoulSabhaLandingPage