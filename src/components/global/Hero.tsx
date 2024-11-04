import React, { useState } from 'react'
import { useLocation } from 'react-router'
import PrimaryButton from '../global/PrimaryButton';
import Slider from 'react-slick'
import { findPrimaryButton } from '../../utils/helpers';

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

    const primaryButtonProps = findPrimaryButton(pathname);

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
            <div className={`w-2 h-2 rounded-full mt-5 ${currentSlideIndex === i ? 'bg-black' : 'bg-gray-400'}`} />
        )
    };

    return (
        <div className={`w-[99.99%] mx-auto relative overflow-hidden ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
            <div className='mx-auto w-full md:pb-20'>
                {
                    singleHeroImage ? (
                        <div className='w-full h-full relative'>
                            <img src={singleHeroImage} className='w-full h-[90vh] md:h-screen object-cover' alt="" />
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                            {/* <div className='absolute bottom-6 right-6 flex items-center gap-2'>
                                <span>
                                    <svg width="25" height="15" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.477 16.0358C10.2247 14.7805 9.52162 13.0817 9.52162 11.3107C9.52162 9.54012 10.2244 7.8417 11.4761 6.58649C11.7328 6.31819 11.8736 5.96023 11.8685 5.58958C11.8633 5.2183 11.7121 4.8638 11.4471 4.60256L11.5875 4.46015L11.4471 4.60256C11.1822 4.3413 10.8248 4.19426 10.452 4.19331C10.0796 4.19236 9.72187 4.33722 9.45569 4.59652C7.67836 6.38167 6.681 8.79519 6.681 11.3107C6.681 13.8266 7.67874 16.2406 9.45672 18.0258C9.58906 18.1582 9.74638 18.2631 9.91963 18.3345C10.093 18.406 10.2788 18.4426 10.4664 18.4421C10.7459 18.4412 11.0188 18.3581 11.2511 18.2034C11.4833 18.0487 11.6646 17.8291 11.7723 17.5723C11.8801 17.3155 11.9094 17.0327 11.8568 16.7593C11.8043 16.4862 11.6722 16.2346 11.477 16.0358ZM11.477 16.0358C11.4772 16.0359 11.4773 16.0361 11.4775 16.0363L11.6191 15.895L11.4764 16.0352C11.4766 16.0354 11.4768 16.0356 11.477 16.0358ZM20.9264 6.57835L20.9283 6.58021C22.1809 7.83555 22.8842 9.5346 22.8842 11.3058C22.8842 13.0769 22.181 14.7759 20.9285 16.0312C20.664 16.2982 20.5167 16.659 20.5188 17.0341C20.5209 17.4094 20.6724 17.7686 20.9401 18.0326C21.2079 18.2966 21.57 18.4438 21.9468 18.4417C22.3236 18.4396 22.684 18.2883 22.9488 18.0213L22.9491 18.021C24.7271 16.2357 25.7248 13.8218 25.7248 11.3058C25.7248 8.78985 24.7271 6.37589 22.9491 4.59064L22.9491 4.59066L22.9465 4.58796C22.8162 4.45217 22.6601 4.34357 22.4873 4.26851C22.3144 4.19345 22.1283 4.15344 21.9398 4.15083C21.7512 4.14823 21.5641 4.18307 21.3892 4.25332C21.2143 4.32357 21.0552 4.42781 20.9212 4.55995C20.7872 4.69209 20.681 4.84947 20.6086 5.02291C20.5363 5.19636 20.4993 5.38241 20.4997 5.57023C20.5002 5.75805 20.5382 5.94391 20.6114 6.11698C20.6847 6.29006 20.7917 6.4469 20.9264 6.57835ZM6.41552 2.56035L6.41563 2.56023C6.66831 2.28175 6.79964 1.91469 6.78088 1.53979C6.76211 1.16489 6.59479 0.81266 6.31552 0.560627C6.03623 0.308576 5.66787 0.177412 5.29146 0.196148C4.91506 0.214884 4.56166 0.381972 4.30896 0.660468C1.66422 3.57884 0.200047 7.37234 0.200047 11.3058C0.200047 15.2393 1.66422 19.0328 4.30896 21.9512C4.56166 22.2297 4.91506 22.3967 5.29146 22.4155C5.66787 22.4342 6.03623 22.3031 6.31552 22.051C6.59479 21.799 6.76211 21.4467 6.78088 21.0718C6.79964 20.6969 6.66831 20.3299 6.41563 20.0514L6.41552 20.0513C4.24339 17.6537 3.04078 14.5373 3.04078 11.3058C3.04078 8.07434 4.24339 4.95796 6.41552 2.56035ZM26.0911 22.0502L25.9571 22.1987L26.0911 22.0502C26.3703 22.3021 26.7384 22.4333 27.1146 22.4147C27.4909 22.3961 27.8442 22.2293 28.0969 21.9511C30.7416 19.0327 32.2058 15.2392 32.2058 11.3058C32.2058 7.37234 30.7416 3.57884 28.0969 0.660468C27.8441 0.381972 27.4907 0.214884 27.1143 0.196148C26.928 0.186872 26.7416 0.214295 26.5659 0.276843C26.3902 0.33939 26.2286 0.435829 26.0903 0.560627C25.952 0.685424 25.8398 0.836134 25.7599 1.00414C25.6801 1.17213 25.6342 1.35415 25.6249 1.53979C25.6156 1.72543 25.6431 1.91109 25.7058 2.08617C25.7684 2.26125 25.8651 2.42234 25.9902 2.56023L25.9903 2.56035C28.1624 4.95796 29.365 8.07434 29.365 11.3058C29.365 14.5373 28.1624 17.6537 25.9903 20.0513L25.9903 20.0513C25.7379 20.3298 25.6068 20.6968 25.6257 21.0715C25.6446 21.4462 25.8119 21.7983 26.0911 22.0502ZM17.4423 9.45688C17.0755 9.21244 16.6442 9.08195 16.2029 9.08195C15.6112 9.08195 15.0438 9.31638 14.6255 9.73349C14.2073 10.1506 13.9725 10.7162 13.9725 11.3058C13.9725 11.7455 14.1032 12.1754 14.3482 12.5411C14.5932 12.9068 14.9415 13.1919 15.3492 13.3603C15.7568 13.5287 16.2054 13.5728 16.6381 13.4869C17.0709 13.4011 17.4684 13.1892 17.7803 12.8781C18.0922 12.5671 18.3045 12.1709 18.3905 11.7396C18.4765 11.3083 18.4324 10.8612 18.2636 10.455C18.0949 10.0487 17.8091 9.7013 17.4423 9.45688Z" fill="url(#paint0_linear_528_147)" stroke="#343334" stroke-width="0.4" />
                                        <defs>
                                            <linearGradient id="paint0_linear_528_147" x1="32.4058" y1="11.3058" x2="4.57764e-05" y2="11.3058" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#37D1AB" />
                                                <stop offset="1" stop-color="#93D219" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <p className='text-xs font-semibold text-white'>LIVE PERFORMANCES</p>
                            </div> */}
                        </div>
                    ) : (
                        <Slider {...settings} className='w-full'>
                            {
                                heroImages?.map((data) => (
                                    <div key={data?.id} className='w-full h-full relative'>
                                        <img src={data?.image} className='w-full h-[90vh] md:h-screen object-cover' alt="" />
                                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90' />
                                    </div>
                                ))
                            }
                        </Slider>
                    )
                }
            </div>
            <div className={`absolute flex flex-col items-center w-full px-6 z-10 ${pathname === '/' ? 'top-[60%] md:top-[55%] left-1/2 -translate-x-1/2' : 'top-[55%] md:top-[47%] -translate-y-[10%] left-1/2 -translate-x-1/2'}`}>
                {
                    logo ? <img src={logo} className={`w-64 md:w-96`} alt="" /> : logoText ? <div className='text-white font-manrope font-light text-[3rem] md:text-[4rem] tracking-wide text-center mt-40 mb-1'>{logoText}</div> : null
                }
                <div className='text-white flex flex-col items-center xl:text-nowrap text-md md:text-lg xl:text-xl md:gap-2 text-center'>
                    {heroText}
                    {
                        pathname === '/about-us' ? null : (
                            <div className={`w-full flex justify-center items-center pt-6 md:pt-5 ${pathname === '/' ? '' : ''}`}>
                                <PrimaryButton {...primaryButtonProps} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero