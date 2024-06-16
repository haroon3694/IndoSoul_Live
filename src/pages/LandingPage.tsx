import landingPageGradient from '../assets/images/bodyGradientImage.png'
import expHeading from '../assets/icons/experiences.svg'
import { experienceData, musicianGallery, ourCareerData } from '../data/landingPageData'
import Footer from '../components/global/Footer'
import Hero from '../components/landingpage/Hero'
import ExperienceCard from '../components/landingpage/ExperienceCard'
import MusiciansCarousal from '../components/landingpage/MusiciansCarousal'
import MembersGallery from '../components/landingpage/MembersGallery'
import CountUp from "react-countup";
import { useEffect, useRef, useState } from 'react'
import { ParallaxScroll } from '../components/global/ParallaxGallery'

const LandingPage = () => {

    const experienceRefs = ourCareerData?.experience.map(() => useRef(null));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.5, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally disconnect the observer once the component is in view
                    observer.disconnect();
                }
            });
        }, options);

        experienceRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Disconnect the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, [experienceRefs]);

    return (
        <div className='relative overflow-hidden'>
            <Hero />
            <div className='w-full bg-black relative' style={{ backgroundImage: `url(${landingPageGradient})` }}>
                <div className='absolute top-0 left-0 w-full h-[8vh] bg-gradient-to-b from-black' />
                <div className='w-full px-5 sm:px-10 md:px-20 xl:px-32 pt-36 xl:pt-56 gap-10 z-10'>
                    <div className='w-full flex justify-center items-center mb-10'>
                        <img src={expHeading} className='w-62 z-10' alt="" />
                    </div>
                    <div className='text-white text-justify font-extralight text-[1.2rem] pb-5 mb-5 w-fit'>
                        Elevate your special occasions with the enchanting musical experiences crafted by House of IndoSoul.
                        Our offerings are designed to infuse every moment with a unique blend of tradition and contemporary
                        charm, creating unforgettable memories. Whether it's the sacred Muhurtham, lively pre-wedding festivities,
                        or grand wedding receptions, or corporate functions, IndoSoul’s diverse ensemble provide bespoke musical
                        journeys that resonate with the essence of celebrations with your loved ones.
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
                    <div className='flex flex-col md:flex-row justify-center md:items-center gap-10 md:gap-20 xl:gap-32 py-40 xl:py-56 font-normal'>
                        {
                            ourCareerData?.experience?.map((data, index) => (
                                <div key={data?.id} className='text-left md:text-center font-bebasNeue font-extralight'>

                                    <h1 className='text-white text-9xl lg:text-[8rem]'>
                                        {
                                            isVisible ? (
                                                <>
                                                    <CountUp
                                                        start={0}
                                                        end={data?.amount}
                                                        duration={3}
                                                    /> {`+`}
                                                </>
                                            ) : null
                                        }
                                    </h1>
                                    <h1 ref={experienceRefs[index]} className='text-white text-4xl uppercase ml-5 md:ml-0'>{data?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full flex flex-col gap-20 lg:gap-40 px-10 md:px-0'>
                    <MusiciansCarousal />
                    <div className='w-full px-0 md:px-20 lg:px-32 xl:px-40'>
                        <video src={ourCareerData?.bandVideo} muted autoPlay loop={true} className='rounded-sm w-full object-cover md:object-contain h-[50vh] md:h-auto max-h-screen'></video>
                    </div>
                    <div className='block md:hidden'>
                        <MembersGallery />
                    </div>
                </div>
                <div className='hidden md:block my-40'>
                    <ParallaxScroll images={musicianGallery?.map((data) => data?.image)} />
                </div>
                <div className='w-full mt-28 md:mt-10 pb-8 bottom-0 left-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LandingPage