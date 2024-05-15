import landingPageGradient from '../assets/images/bodyGradientImage.png'
import PrimaryButton from '../components/global/PrimaryButton'
import expHeading from '../assets/icons/experiences.svg'
import { experienceData, ourCareerData } from '../data/landingPageData'
import Footer from '../components/global/Footer'
import Hero from '../components/landingpage/Hero'
import ExperienceCard from '../components/landingpage/ExperienceCard'
import MusiciansCarousal from '../components/landingpage/MusiciansCarousal'
import MembersGallery from '../components/landingpage/MembersGallery'

const LandingPage = () => {
    return (
        <div className='relative'>
            <Hero />
            <div className='w-full bg-black relative' style={{ backgroundImage: `url(${landingPageGradient})` }}>
                <div className='absolute top-0 left-0 w-full h-[8vh] bg-gradient-to-b from-black' />
                <div className='w-full px-5 sm:px-10 md:px-20 xl:px-32 pt-36 xl:pt-56 gap-10 z-10'>
                    <div className='w-full flex justify-center items-center mb-20'>
                        <img src={expHeading} className='w-62 z-10' alt="" />
                    </div>
                    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-10'>
                        {
                            experienceData?.map((data) => (
                                <ExperienceCard {...data} key={data?.id} />
                            ))
                        }
                    </div>
                </div>
                <div className='w-full z-10 relative px-5 sm:px-10 md:px-20 lg:px-32 xl:px-64'>
                    <div className='flex flex-col md:flex-row justify-center md:items-center gap-20 py-40 xl:py-56 font-normal'>
                        {
                            ourCareerData?.experience?.map((data) => (
                                <div key={data?.id} className='text-left md:text-center font-bebasNeue font-extralight'>
                                    <h1 className='text-white text-9xl md:text-[12rem]'>{data?.amount}</h1>
                                    <h1 className='text-white text-xl uppercase ml-5 md:ml-0'>{data?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <MusiciansCarousal />
                    <MembersGallery />
                    <div className='w-full flex justify-center items-center mt- md:mt-24 mb-90'>
                        <PrimaryButton btnText='VIEW MORE' />
                    </div>
                </div>
                <div className='w-full mt-28 md:mt-56 pb-8 bottom-0 left-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LandingPage