import React, { useState } from 'react'
import Slider from 'react-slick'
import heroImg1 from '../../assets/soulsabha/images/heroimages/heroImage1.jpg'
import heroImg2 from '../../assets/soulsabha/images/heroimages/heroImage2.jpg'
import heroImg3 from '../../assets/soulsabha/images/heroimages/heroImage3.jpg'
import logoMain from '../../assets/soulsabha/icons/logoMainSoulSabhaWhite.svg'
import PrimaryButton from '../global/PrimaryButton';

const Hero: React.FC = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

    const someData = [
        {
            id: 0,
            image: heroImg1,
            title: '',
        },
        {
            id: 1,
            image: heroImg2,
            title: '',
        },
        {
            id: 2,
            image: heroImg3,
            title: '',
        },
    ];

    return (
        <div className='w-[99.99%] mx-auto relative overflow-hidden mt-0 md:mt-12'>
            <div className='mx-auto w-full pb-20'>
                <Slider {...settings} className='w-full'>
                    {
                        someData?.map((data) => (
                            <div key={data?.id} className='w-full h-full relative'>
                                <img src={data?.image} className='w-full h-screen object-cover' alt="" />
                                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className='absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-10 w-full px-6'>
                <img src={logoMain} className='w-52 md:w-64' alt="" />
                <div className='text-white flex flex-col items-center xl:text-nowrap text-md md:text-lg xl:text-xl md:gap-2 text-center'>
                    <div className='text-[1rem] uppercase tracking-widest'>Embracing Indian Heritage through Classical music</div>
                    <div className='w-full flex justify-center items-center pt-20 md:pt-5'>
                        <PrimaryButton bgColor='hover:bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out' btnText='Talk with us' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero