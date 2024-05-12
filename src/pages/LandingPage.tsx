import heroImg from '../assets/images/landingPageHero.webp'
import logoMain from '../assets/icons/logo-main.svg'
import landingPageGradient from '../assets/images/bodyGradientImage.png'
import PrimaryButton from '../components/global/PrimaryButton'
import expHeading from '../assets/icons/experiences.svg'
import musiciansHeading from '../assets/icons/musicians.svg'
import { experienceData, musicianGallery, ourCareerData } from '../data/landingPageData'
import Footer from '../components/global/Footer'

const LandingPage = () => {
    return (
        <div className='relative'>
            <div className='w-full relative'>
                <div className="w-full h-screen relative">
                    <img src={heroImg} className="w-full h-screen object-cover" alt="" />
                    <div className='absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black' />
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-16'>
                    <img src={logoMain} className='w-52' alt="" />
                    <div className='text-white text-center flex flex-col items-center text-nowrap text-sm gap-3'>
                        <p>Namaste! Thank you for your interest in IndoSoul,</p>
                        <p>a 12-year-old music band that brings together elements of different music genres on the bedrock of Indian classical music.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center absolute bottom-24 xl:bottom-32 left-0'>
                    <PrimaryButton btnText='TALK WITH US' />
                </div>
            </div>
            <div className='w-full bg-black relative' style={{ backgroundImage: `url(${landingPageGradient})` }}>
                <div className='absolute top-0 left-0 w-full h-[8vh] bg-gradient-to-b from-black' />
                <div className='w-full px-32 pt-36 xl:pt-56 gap-10 z-10'>
                    <div className='w-full flex justify-center items-center mb-20'>
                        <img src={expHeading} className='w-62 z-10' alt="" />
                    </div>
                    <div className='w-full grid grid-cols-4 gap-5 xl:gap-10'>
                        {
                            experienceData?.map((data) => (
                                <div key={data?.id} className='relative'>
                                    <img src={data?.image} className='w-full' alt="" />
                                    <img src={data?.logo} className='w-58 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                                    <div className='w-full flex justify-center items-center absolute bottom-10 left-0'>
                                        <PrimaryButton btnText='KNOW MORE' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full z-10 relative px-20 lg:px-32 xl:px-64'>
                    <div className='flex justify-center items-center gap-20 py-40 xl:py-56'>
                        {
                            ourCareerData?.experience?.map((data) => (
                                <div key={data?.id} className='text-center'>
                                    <h1 className='text-white text-7xl'>{data?.amount}</h1>
                                    <h1 className='text-white text-md uppercase'>{data?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-center items-center pb-28'>
                            <img src={musiciansHeading} className='w-62 z-10' alt="" />
                        </div>
                        {
                            ourCareerData?.musicians?.map((data) => (
                                <div key={data?.id} className='w-full flex items-center text-white'>
                                    <div className='w-32 text-4xl'>{`<`}</div>
                                    <div className='w-full flex gap-10 items-center px-10 xl:px-20'>
                                        <div className='w-fit'>
                                            <img src={data?.image} className='w-90' alt="" />
                                        </div>
                                        <div className='w-fit flex flex-col gap-4'>
                                            <h1 className='text-4xl'>{data?.title}</h1>
                                            <p>{data?.about}</p>
                                        </div>
                                    </div>
                                    <div className='w-32 text-4xl'>{`>`}</div>
                                </div>
                            ))
                        }
                        <div className='w-full flex justify-center items-center py-40'>
                            <PrimaryButton btnText='TALK WITH US' />
                        </div>
                    </div>
                    <div className='w-full py-32 grid grid-cols-4 gap-4'>
                        {
                            musicianGallery?.map((data, i) => (
                                <div key={data?.id} className={`${i === 1 || i === 3 || i === 5 || i === 7 ? '' : 'translate-y-16'}`}>
                                    <img src={data?.image} className='w-full object-cover' alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex justify-center items-center mt-24 mb-90'>
                        <PrimaryButton btnText='VIEW MORE' />
                    </div>
                </div>
                <div className='w-full mt-56 pb-8 bottom-0 left-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LandingPage