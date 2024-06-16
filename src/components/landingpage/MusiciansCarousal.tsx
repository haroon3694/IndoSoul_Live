import musiciansHeading from '../../assets/icons/musicians.svg'
import { ourCareerData } from '../../data/landingPageData'
// import PrimaryButton from '../global/PrimaryButton'
import Slider from "react-slick";

const MusiciansCarousal = () => {

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        pauseonhover: false,
        nextArrow: (
            <div>
                <div className="next-slick-arrow text-white">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                    </svg>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow text-white">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                    </svg>

                </div>
            </div>
        ),
    };

    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center pb-10 md:pb-20'>
                <img src={musiciansHeading} className='w-fit z-10' alt="" />
            </div>
            <Slider {...settings} className='md:px-20 w-full lg:w-[70%] mx-auto'>
                {
                    ourCareerData?.musicians?.map((data) => (
                        <div key={data?.id} className='w-full text- flex items-center text-white px-2 lg:px-16'>
                            <div className='w-full flex flex-col md:flex-row gap-10 lg:gap-20 items-center'>
                                <div className='w-fit'>
                                    <img src={data?.image} className='w-[500px]' alt="" />
                                </div>
                                <div className='w-fit flex flex-col gap-4'>
                                    <h1 className='text-4xl font-clashdisplay tracking-wide md:tracking-[0.3em] lg:tracking-widest'>{data?.title}</h1>
                                    <p className='text-justify'>{data?.about}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <div className='w-full flex justify-center items-center pt-14 md:pt-20 pb-20'>
                {/* <PrimaryButton btnText='TALK WITH US' /> */}
            </div>
        </div>
    )
}

export default MusiciansCarousal