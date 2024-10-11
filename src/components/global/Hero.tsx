import React, { useState } from 'react'
import { useLocation } from 'react-router'
import PrimaryButton from '../global/PrimaryButton';
import Slider from 'react-slick'

interface HeroImage {
    id: number;
    title: string;
    image: string;
}

interface HeroProps {
    heroImages?: HeroImage[];
    logo?: string;
    singleHeroImage?: string;
    logoText?: string;
    heroText?: JSX.Element;
}

const Hero: React.FC<HeroProps> = ({ heroImages, logo, logoText, singleHeroImage, heroText }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const { pathname } = useLocation();

    const findButton = () => {
        if (pathname === '/indo-soul-live') {
            return <PrimaryButton styles='bg-white text-black text-xl tracking-[1.5px]' shadow shadowStyles='bg-white' btnText='Book Here' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />;
        } else if (pathname === '/soul-sabha') {
            return <PrimaryButton btnText='book here' styles='text-white bg-gradient-to-r from-[#96d312] to-[#e92f2f]' shadow shadowStyles='bg-gradient-to-r from-[#96d312] to-[#e92f2f]' />;
        } else {
            return null
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseonhover: false,
        beforeChange: (_prev: number, next: number) => {
            setCurrentSlideIndex(next);
        },
        customPaging: (i: number) => (
            <div className={`w-3 h-3 rounded-full mt-8 ${currentSlideIndex === i ? 'bg-black' : 'bg-gray-400'}`} />
        )
    };

    return (
        <div className={`w-[99.99%] mx-auto relative overflow-hidden ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
            <div className='mx-auto w-full md:pb-20'>
                {
                    singleHeroImage ? (
                        <div className='w-full h-full relative'>
                            <img src={singleHeroImage} className='w-full h-screen object-cover' alt="" />
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                        </div>
                    ) : (
                        <Slider {...settings} className='w-full'>
                            {
                                heroImages?.map((data) => (
                                    <div key={data?.id} className='w-full h-full relative'>
                                        <img src={data?.image} className='w-full h-screen object-cover' alt="" />
                                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                                    </div>
                                ))
                            }
                        </Slider>
                    )
                }
            </div>
            <div className='absolute top-1/2 -translate-y-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center w-full px-6 z-10'>
                {
                    logo ? <img src={logo} className='w-52 md:w-64 mb-10' alt="" /> : logoText ? <div className='text-white font-manrope font-light text-[4rem] tracking-wide text-center mt-60 mb-5'>{logoText}</div> : null
                }
                <div className='text-white flex flex-col items-center xl:text-nowrap text-md md:text-lg xl:text-xl md:gap-2 text-center'>
                    { heroText }
                    <div className='w-full flex justify-center items-center pt-20 md:pt-5'>
                        { findButton() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero