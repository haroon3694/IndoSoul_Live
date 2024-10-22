import React from 'react'
import Slider from 'react-slick'

interface SmallCarousalProps {
  carousalData: any;
  event?: boolean;
  info?: boolean;
}

const SmallCarousal: React.FC<SmallCarousalProps> = ({ carousalData, event, info }) => {

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
  }

  return (
    <div className='w-full'>
      <div className='hidden md:block mb-12'>
        <Slider {...desktopSliderSettings} className=''>
          {
            carousalData?.map((data: any) => (
              <div className='px-2'>
                <div key={data?.id} className='max-w-[450px] p-3 bg-white border border-black rounded-[20px] relative'>
                  <div className='flex items-center'>
                    <img src={data?.image} className='w-36 rounded-[18px]' alt="" />
                    {
                      event ? (
                        <div className='px-3'>
                          <h1 className='text-xl font-bold'>{data?.event}</h1>
                          <p className='text-sm font-semibold'>{data?.venue}</p>
                          <p className='mb-4 text-xs font-semibold'>{data?.date}</p>
                          <p className='text-sm'>{data?.desc}</p>
                        </div>
                      ) : info ? (
                        <div className='px-3'>
                          <h1 className='text-xl font-bold mb-2'>{data?.artistName}</h1>
                          <p className='text-sm'>{data?.desc}</p>
                        </div>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      <div className='md:hidden mb-12'>
        <Slider {...mobileSliderSettings} className=''>
          {
            carousalData?.map((data: any) => (
              <div className='px-2'>
                <div key={data?.id} className='p-3 bg-white border border-black rounded-[20px] relative'>
                  <div className='flex flex-col justify-center items-center'>
                    <img src={data?.image} className='w-36 rounded-[18px] mb-3' alt="" />
                    {
                      event ? (
                        <div className='px-3 text-center'>
                          <h1 className='text-xl font-bold'>{data?.event}</h1>
                          <p className='text-sm font-semibold'>{data?.venue}</p>
                          <p className='mb-4 text-xs font-semibold'>{data?.date}</p>
                          <p className='text-sm'>{data?.desc}</p>
                        </div>
                      ) : info ? (
                        <div className='px-3 text-center'>
                          <h1 className='text-xl font-bold mb-3'>{data?.event}</h1>
                          <p className='text-sm'>{data?.desc}</p>
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