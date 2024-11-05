import React, { useState } from 'react'
import Slider from 'react-slick'

interface SmallCarousalProps {
  carousalData: any;
  event?: boolean;
  info?: boolean;
}

const SmallCarousal: React.FC<SmallCarousalProps> = ({ carousalData, event, info }) => {

  const [activeSlide, setActiveSlide] = useState(0);

  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: false,
    afterChange: (activeSlide: number) => {
      setActiveSlide(activeSlide);
    },
  };

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: false,
    beforeChange: (activeSlide: number) => {
      setActiveSlide(activeSlide);
    },
  }

  return (
    <div className='w-full'>
      <div className='hidden md:block mb-14'>
        <Slider {...desktopSliderSettings} className=''>
          {
            carousalData?.map((data: any, i: number) => (
              // <div key={data?.id} className={`w-fit p-3 ${activeSlide === i ? 'scale-110 px-5' : 'scale-90 opacity-65 grayscale'}`}>
              //   <div className={`w-fit text-center p-3 bg-white rounded-[26px] gap-5 relative flex flex-col jx items-center ${activeSlide === i ? '' : ''}`}>
              //     <div className={`w-fit relative ${activeSlide === i ? 'mb-2' : ''}`}>
              //       <img src={data?.image} className='w-40 rounded-[18px] z-20 relative' alt="" />
              //       {activeSlide === i ? <div className='w-full h-full bg-gray-200 absolute top-4 left-4 rounded-[20px] z-10' /> : null}
              //     </div>
              //     {event ? (
              //       <div className=''>
              //         <h1 className='text-xl font-bold'>{data?.event}</h1>
              //         <p className='text-sm font-semibold'>{data?.venue}</p>
              //         <p className='mb-1 text-xs font-semibold'>{data?.date}</p>
              //         <p className='text-xs font-medium'>{data?.desc}</p>
              //       </div>
              //     ) : info ? (
              //       <div className=''>
              //         <h1 className='text-lg leading-none mb-1 font-semibold'>{data?.artistName}</h1>
              //         <p className='text-xs font-medium w-fit'>{data?.desc}</p>
              //       </div>
              //     ) : null}
              //   </div>
              // </div>
              <div key={data?.id} className={`w-full p-5 rounded-2xl ${i === activeSlide ? 'border-2 border-[#373737]' : 'scale-[80%] grayscale'}`}>
                <div className={`w-full h-full flex flex-col xl:flex-row justify-start items-center ${i === activeSlide ? 'gap-5' : 'gap-5'}`}>
                  <div className={`w-full max-w-32 xl:max-w-40 relative ${i === activeSlide ? '' : ''}`}>
                    <img src={data?.image} className='w-full max-w-32 xl:max-w-40 rounded-xl z-20 relative' alt="" />
                    {/* {activeSlide === i ? <div className='w-full max-w-32 xl:max-w-40 h-full bg-gray-200 absolute top-4 left-4 rounded-[20px] z-10' /> : null} */}
                  </div>
                  {event ? (
                    <div className='w-full'>
                      <h1 className='text-xl font-bold'>{data?.event}</h1>
                      <p className='text-sm font-semibold'>{data?.venue}</p>
                      <p className='mb-1 text-xs font-semibold'>{data?.date}</p>
                      <p className='text-xs font-medium'>{data?.desc}</p>
                    </div>
                  ) : info ? (
                    <div className='w-full text-center xl:text-left'>
                      <h1 className='text-lg leading-none mb-1 font-semibold'>{data?.artistName}</h1>
                      <div className='2xl:pr-4'>
                        <p className='text-xs font-medium w-fit'>{data?.desc}</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      <div className='md:hidden mb-2'>
        <Slider {...mobileSliderSettings} className=''>
          {
            carousalData?.map((data: any, i: number) => (
              <div key={data?.id} className={`p-2  ${activeSlide === i ? '' : ''}`}>
                <div key={data?.id} className='p-3 bg-white rounded-[20px] relative'>
                  <div className='flex flex-col justify-center items-center'>
                    <div className={`w-fit relative ${activeSlide === i ? '' : ''}`}>
                      <img src={data?.image} className='w-full rounded-[18px] z-20 relative' alt="" />
                      {/* {activeSlide === i && <div className='w-full h-full bg-gray-200 absolute top-4 left-4 rounded-[20px] z-10' />} */}
                    </div>
                    {
                      event ? (
                        <div className={`px-3 text-center mt-3`}>
                          <h1 className='text-xl font-bold'>{data?.event}</h1>
                          <p className='text-sm font-semibold'>{data?.venue}</p>
                          <p className='mb-4 text-xs font-semibold'>{data?.date}</p>
                          <p className='text-xs font-medium leading-5'>{data?.desc}</p>
                        </div>
                      ) : info ? (
                        <div className={`text-center mt-3`}>
                          <h1 className='text-xl font-bold mb-1'>{data?.artistName}</h1>
                          <p className='text-xs font-medium leading-5'>{data?.desc}</p>
                        </div>
                      ) : null
                    }
                  </div>
                  {/* <div className={`absolute w-full h-full opacity-30 rounded-full bottom-0 left-3 z-10 bg-black`} /> */}
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default SmallCarousal