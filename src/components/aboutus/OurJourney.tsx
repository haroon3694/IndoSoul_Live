import React, { useState } from 'react'
import SeasonHeader from '../global/SeasonHeader'
import Slider from 'react-slick';
import { journeyData } from '../../data/aboutUsData';

const OurJourney: React.FC = () => {

  const [showInfoPopUpId, setShowInfoPopUpId] = useState<number | null>(null);

  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
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
    pauseonhover: true,
  };

  const updatedData = ['', ...journeyData]

  return (
    <>
      <div className='hidden sm:block mb-14 relative'>
        <SeasonHeader text={`our journey`} styles='bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none' />
        <Slider {...desktopSliderSettings} className='w-full h-[60vh] flex justify-center items-start -translate-y-40'>
          {
            updatedData?.map((data: any, i: number) => {
              if (i === 0) {
                return (
                  <div key={data.id} className={`relative h-[20vh] flex justify-center items-center mt-64 bg-white z-5 min-w-72`}>
                    {/* <p className='font-bold text-sm text-aboutUsRed absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 animate-bounce'>Drag right to scroll {`>`}</p> */}
                  </div>
                )
              } else {
                return (
                  <div key={data.id} className={`relative h-[70vh] flex flex-col justify-end z-5 min-w-80 pl-10`}>
                    <div className={`absolute bottom-40 z-10 w-5 h-5 rounded-full ${showInfoPopUpId === data?.id ? 'bg-[#ff3f3f67]' : ''}} cursor-pointer flex justify-center items-center`}>
                      <div className='w-2 h-2 rounded-full bg-aboutUsRed'></div>
                    </div>
                    <div className={`absolute z-[12] min-w-96 ${i % 2 !== 0 ? 'top-52 -left-36' : 'top-52 -left-36'} scale-0 transition-all duration-300 border border-aboutUsRed bg-white rounded-xl ${showInfoPopUpId === data?.id ? 'scale-110' : ''}`}>
                      <div key={data?.id} className='relative p-4 pr-7'>
                        <span className={`absolute top-2 right-2 translation-all duration-300 ease-in-out rotate-180 cursor-pointer`} onClick={() => setShowInfoPopUpId(null)}>
                          <svg width="16" height="16" viewBox="0 0 44 44" className='text-aboutUsRed fill-current' xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6914 15.281C16.9193 15.2245 16.3405 15.8034 16.397 16.5754C16.4534 17.3475 17.1237 18.0177 17.8957 18.0742L23.5076 18.4847L15.7866 26.2057C15.282 26.7104 15.3467 27.5953 15.931 28.1796C16.5153 28.7638 17.4002 28.8286 17.9048 28.324L25.6258 20.6029L26.0364 26.2148C26.0928 26.9869 26.7631 27.6571 27.5351 27.7136C27.9211 27.7418 28.2593 27.6108 28.4922 27.3779C28.7251 27.145 28.8578 26.8052 28.8279 26.4209L28.1706 17.4367C28.1435 17.0653 27.97 16.6994 27.6906 16.42C27.4111 16.1406 27.0433 15.9651 26.6738 15.9399L17.6897 15.2827L17.6914 15.281Z" />
                            <path d="M21.8108 0.695312C9.89795 0.695312 0.206299 10.387 0.206299 22.2998C0.206299 34.2126 9.89795 43.9042 21.8108 43.9042C33.7236 43.9042 43.4152 34.2126 43.4152 22.2998C43.4152 10.387 33.7236 0.695312 21.8108 0.695312ZM21.8108 40.9673C11.5191 40.9673 3.14327 32.5915 3.14327 22.2998C3.14327 12.0081 11.5156 3.63228 21.8108 3.63228C32.106 3.63228 40.4783 12.0081 40.4783 22.2998C40.4783 32.5915 32.1024 40.9673 21.8108 40.9673Z" />
                          </svg>
                        </span>
                        <div className='w-full h-40 mb-3 rounded-md'>
                          <img src={data?.image} className='w-full h-full object-cover rounded-md' alt="" />
                        </div>
                        <div className='text-aboutUsRed text-6xl font-bebasNeue font-light'>
                          {data?.year}
                        </div>
                        <p className='text-sm font-manrope font-semibold'>{data?.tour}</p>
                      </div>
                    </div>

                    <div className={`absolute bottom-48 bg-[#F8F1F1] min-w-72 group rounded-xl -left-16 h-36 cursor-pointer ${i % 2 !== 0 ? '' : 'hidden'}`} onClick={() => setShowInfoPopUpId(data?.id)}>
                      <div className='w-full h-full px-5 py-3 flex flex-col justify-end items-start relative'>
                        <span className={`absolute top-3 right-2.5 translation-all duration-300 ease-in-out`}>
                          <svg width="24" height="24" viewBox="0 0 44 44" className='text-black fill-current' xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6914 15.281C16.9193 15.2245 16.3405 15.8034 16.397 16.5754C16.4534 17.3475 17.1237 18.0177 17.8957 18.0742L23.5076 18.4847L15.7866 26.2057C15.282 26.7104 15.3467 27.5953 15.931 28.1796C16.5153 28.7638 17.4002 28.8286 17.9048 28.324L25.6258 20.6029L26.0364 26.2148C26.0928 26.9869 26.7631 27.6571 27.5351 27.7136C27.9211 27.7418 28.2593 27.6108 28.4922 27.3779C28.7251 27.145 28.8578 26.8052 28.8279 26.4209L28.1706 17.4367C28.1435 17.0653 27.97 16.6994 27.6906 16.42C27.4111 16.1406 27.0433 15.9651 26.6738 15.9399L17.6897 15.2827L17.6914 15.281Z" />
                            <path d="M21.8108 0.695312C9.89795 0.695312 0.206299 10.387 0.206299 22.2998C0.206299 34.2126 9.89795 43.9042 21.8108 43.9042C33.7236 43.9042 43.4152 34.2126 43.4152 22.2998C43.4152 10.387 33.7236 0.695312 21.8108 0.695312ZM21.8108 40.9673C11.5191 40.9673 3.14327 32.5915 3.14327 22.2998C3.14327 12.0081 11.5156 3.63228 21.8108 3.63228C32.106 3.63228 40.4783 12.0081 40.4783 22.2998C40.4783 32.5915 32.1024 40.9673 21.8108 40.9673Z" />
                          </svg>
                        </span>
                        <h1 className='text-6xl font-bebasNeue font-light text-red-500 transition-all duration-100 ease-in-out'>{data?.year}</h1>
                        <h1 className='text-md leading-5 font-semibold tewt-wrap max-w-60'>{data?.description}</h1>
                      </div>
                    </div>

                    <div className={`absolute bottom-[169px] ml-2 w-full h-0.5 bg-black z-[0] ${i === updatedData?.length - 1 ? 'hidden' : ''}`}></div>

                    <div className={`absolute bottom-0 bg-[#F8F1F1] min-w-72 group rounded-xl -left-16 h-36 cursor-pointer ${i % 2 === 0 ? '' : 'hidden'}`} onClick={() => setShowInfoPopUpId(data?.id)}>
                      <div className='w-full h-full px-5 py-3 flex flex-col justify-end items-start relative'>
                        <span className={`absolute top-3 right-2.5 translation-all duration-300 ease-in-out`}>
                          <svg width="24" height="24" viewBox="0 0 44 44" className='text-black fill-current' xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6914 15.281C16.9193 15.2245 16.3405 15.8034 16.397 16.5754C16.4534 17.3475 17.1237 18.0177 17.8957 18.0742L23.5076 18.4847L15.7866 26.2057C15.282 26.7104 15.3467 27.5953 15.931 28.1796C16.5153 28.7638 17.4002 28.8286 17.9048 28.324L25.6258 20.6029L26.0364 26.2148C26.0928 26.9869 26.7631 27.6571 27.5351 27.7136C27.9211 27.7418 28.2593 27.6108 28.4922 27.3779C28.7251 27.145 28.8578 26.8052 28.8279 26.4209L28.1706 17.4367C28.1435 17.0653 27.97 16.6994 27.6906 16.42C27.4111 16.1406 27.0433 15.9651 26.6738 15.9399L17.6897 15.2827L17.6914 15.281Z" />
                            <path d="M21.8108 0.695312C9.89795 0.695312 0.206299 10.387 0.206299 22.2998C0.206299 34.2126 9.89795 43.9042 21.8108 43.9042C33.7236 43.9042 43.4152 34.2126 43.4152 22.2998C43.4152 10.387 33.7236 0.695312 21.8108 0.695312ZM21.8108 40.9673C11.5191 40.9673 3.14327 32.5915 3.14327 22.2998C3.14327 12.0081 11.5156 3.63228 21.8108 3.63228C32.106 3.63228 40.4783 12.0081 40.4783 22.2998C40.4783 32.5915 32.1024 40.9673 21.8108 40.9673Z" />
                          </svg>
                        </span>
                        <h1 className='text-6xl font-bebasNeue font-light text-red-500 transition-all duration-100 ease-in-out'>{data?.year}</h1>
                        <h1 className='text-md leading-5 font-semibold tewt-wrap max-w-60'>{data?.description}</h1>
                      </div>
                    </div>

                  </div>
                )
              }
            })
          }
        </Slider>
        <div className={`fixed inset-0 z-10 ${showInfoPopUpId === null ? 'hidden' : ''}`} onClick={() => setShowInfoPopUpId(null)}></div>
        <div className={`z-[-1] absolute top-20 left-20 flex justify-center items-center mt-64 bg-white z-5 min-w-72`}>
          <p className='font-bold text-sm text-aboutUsRed animate-bounce'>Drag right to scroll {`>`}</p>
        </div>
      </div>

      <div className='block sm:hidden mb-28 w-full'>
        <SeasonHeader text={`our journey`} styles='w-full bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-1 md:mb-8' />
        <Slider {...mobileSliderSettings} className='w-full flex justify-center gap-4 items-center'>
          {
            journeyData.map((data) => (
              <div className='px-2 pt-2'>
                <div className={`z-10 transition-all duration-300 border border-aboutUsRed bg-white rounded-xl max-w-[340px] min-h-[330px]`}>
                  <div key={data?.id} className='relative p-3'>
                    <div className='w-full bg-gray-200 h-52 mb-4 rounded-lg'>
                      <img src={data?.image} className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='text-aboutUsRed text-5xl font-bebasNeue font-light'>
                      {data?.year}
                    </div>
                    <p className='text-md leading-4 font-manrope font-semibold'>{data?.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </>
  )
}

export default OurJourney