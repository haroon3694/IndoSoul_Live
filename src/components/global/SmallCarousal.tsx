import React, { useState } from 'react'
import { useLocation } from 'react-router';
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

  const [showFullText, setShowFullText] = useState<{ [key: number]: boolean }>({});
  const { pathname } = useLocation();

  const truncateWords = (text: string, maxWords: number) => {
    const words = text?.split(' ') || [];
    if (words.length > maxWords) {
      return {
        isTruncated: true,
        truncatedText: words.slice(0, maxWords).join(' ') + '...',
        fullText: text
      };
    }
    return {
      isTruncated: false,
      truncatedText: text,
      fullText: text
    };
  };

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
              <div key={data?.id} className={`w-full p-5 rounded-xl ${pathname === '/indo-soul-music' ? 'min-h-[40vh]' : ''}  ${i === activeSlide ? 'border-2 border-[#373737]' : 'scale-90 grayscale'}`}>
                <div className={`w-fit mx-auto flex justify-center items-center relative ${i === activeSlide ? 'mb-8' : 'mb-4'}`}>
                  <img src={data?.image} className='w-full max-w-64 rounded-xl z-20 relative' alt="" />
                  {activeSlide === i ? <div className='w-full max-w-64 h-full bg-gray-200 absolute top-4 left-4 rounded-[20px] z-10' /> : null}
                </div>
                {event ? (
                  <div className='w-[70%] mx-auto text-center'>
                    <h1 className='text-xl font-bold'>{data?.event}</h1>
                    <p className='text-sm font-semibold'>{data?.venue}</p>
                    <p className='mb-1 text-xs font-semibold'>{data?.date}</p>
                    <p className='text-xs font-medium'>{data?.desc}</p>
                  </div>
                ) : info ? (
                  <div className='w-[70%] mx-auto text-center'>
                    <h1 className='text-lg leading-none mb-1 font-semibold'>{data?.artistName}</h1>
                    <div>
                      <p className='text-xs font-medium w-fit'>
                        {showFullText[i]
                          ? truncateWords(data?.desc, 40).fullText
                          : truncateWords(data?.desc, 40).truncatedText}
                      </p>
                      {truncateWords(data?.desc, 40).isTruncated && (
                        <button
                          onClick={() => setShowFullText(prev => ({ ...prev, [i]: !prev[i] }))}
                          className='text-xs text-blue-600 hover:text-blue-800 font-medium ml-1'
                        >
                          {showFullText[i] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  </div>
                ) : null}
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
                        <div className={`px-3 text-center mt-3`}>
                          <h1 className='text-xl font-bold mb-3'>{data?.artistName}</h1>
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