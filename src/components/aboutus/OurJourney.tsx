import React, { useState } from 'react'
import SeasonHeader from '../global/SeasonHeader'
import Slider from 'react-slick';

const OurJourney: React.FC = () => {

  const [showInfoPopUpId, setShowInfoPopUpId] = useState<number | null>(null);

  const journeyData = [
    {
      id: 1,
      year: '2012',
      description: 'First live band performance',
      tour: 'USA-Canada Tour',
    },
    {
      id: 2,
      year: '2015',
      description: 'First Album Launch - Looking Within to Look Beyond',
      tour: 'USA-Canada Tour',
    },
    {
      id: 3,
      year: '2016-17',
      description: 'USA - Canada Tour',
      tour: 'USA-Canada Tour',
    },
    {
      id: 4,
      year: '2017',
      description: 'Second Album Launch - The Pallavi Shift',
      tour: 'USA-Canada Tour',
    },
    {
      id: 5,
      year: '2017',
      description: `Tomorrow's India Summit, Singapore`,
      tour: 'USA-Canada Tour',
    },
    {
      id: 6,
      year: '2018',
      description: 'Third Album Launch - Two Sides of Karma',
      tour: 'USA-Canada Tour',
    },
    {
      id: 7,
      year: '2020',
      description: 'Launch of Indosoul Academy of Music',
      tour: 'USA-Canada Tour',
    },
    {
      id: 8,
      year: '2022',
      description: `Launch Indosoul's Corporate outfit - Indosoul Ensemble`,
      tour: 'USA-Canada Tour',
    },
    {
      id: 9,
      year: '2023',
      description: `Fourth Album Launch - Equilibrium`,
      tour: 'USA-Canada Tour',
    },
    {
      id: 10,
      year: '2023',
      description: `Hindu Made of Chennai Festival`,
      tour: 'USA-Canada Tour',
    },
    {
      id: 11,
      year: '2024',
      description: `Soul Sabha Season 1`,
      tour: 'USA-Canada Tour',
    },
    {
      id: 12,
      year: '2024',
      description: `Karthick Iyer USA Tour for Violin Intensive`,
      tour: 'USA-Canada Tour',
    },
  ];

  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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

  return (
    <>
      <div className='hidden sm:block'>
        <SeasonHeader text={`our journey`} styles='bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none' />
        <Slider {...desktopSliderSettings} className='w-full min-h-[60vh] flex justify-center items-center -translate-y-24'>
          {
            journeyData?.map((data, i) => {
              if (i === 0) {
                return (
                  <div key={data.id} className={`relative h-[20vh] mt-48 bg-white z-5 min-w-72`} />
                )
              } else {
                return (
                  <div key={data.id} className={`relative h-[60vh] flex flex-col justify-end z-5 min-w-80 pl-10`}>
                    <div className='absolute bottom-40 z-10 w-5 h-5 rounded-full hover:bg-[#ff3f3f67] cursor-pointer flex justify-center items-center' onMouseEnter={() => setShowInfoPopUpId(data?.id)} onMouseLeave={() => setShowInfoPopUpId(null)}>
                      <div className='w-2 h-2 rounded-full bg-aboutUsRed'></div>
                    </div>
                    <div className={`absolute z-10 min-w-80 top-8 left-5 scale-0 transition-all duration-300 border border-aboutUsRed bg-white rounded-xl ${showInfoPopUpId === data?.id ? 'scale-110' : ''}`}>
                      <div key={data?.id} className='relative p-3 pr-7'>
                        <span className={`absolute top-2 right-2 translation-all duration-300 ease-in-out rotate-180`}>
                          <svg width="16" height="16" viewBox="0 0 44 44" className='text-aboutUsRed fill-current' xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6914 15.281C16.9193 15.2245 16.3405 15.8034 16.397 16.5754C16.4534 17.3475 17.1237 18.0177 17.8957 18.0742L23.5076 18.4847L15.7866 26.2057C15.282 26.7104 15.3467 27.5953 15.931 28.1796C16.5153 28.7638 17.4002 28.8286 17.9048 28.324L25.6258 20.6029L26.0364 26.2148C26.0928 26.9869 26.7631 27.6571 27.5351 27.7136C27.9211 27.7418 28.2593 27.6108 28.4922 27.3779C28.7251 27.145 28.8578 26.8052 28.8279 26.4209L28.1706 17.4367C28.1435 17.0653 27.97 16.6994 27.6906 16.42C27.4111 16.1406 27.0433 15.9651 26.6738 15.9399L17.6897 15.2827L17.6914 15.281Z" />
                            <path d="M21.8108 0.695312C9.89795 0.695312 0.206299 10.387 0.206299 22.2998C0.206299 34.2126 9.89795 43.9042 21.8108 43.9042C33.7236 43.9042 43.4152 34.2126 43.4152 22.2998C43.4152 10.387 33.7236 0.695312 21.8108 0.695312ZM21.8108 40.9673C11.5191 40.9673 3.14327 32.5915 3.14327 22.2998C3.14327 12.0081 11.5156 3.63228 21.8108 3.63228C32.106 3.63228 40.4783 12.0081 40.4783 22.2998C40.4783 32.5915 32.1024 40.9673 21.8108 40.9673Z" />
                          </svg>
                        </span>
                        <div className='w-full bg-gray-200 h-40 mb-4 rounded-lg'>

                        </div>
                        <div className='text-aboutUsRed text-3xl font-bebasNeue font-extralight'>
                          {data?.year}
                        </div>
                        <p className='text-md font-manrope font-semibold'>{data?.tour}</p>
                      </div>
                    </div>
                    <div className={`absolute bottom-60 -left-[40%] ${i % 2 !== 0 ? '' : 'hidden'}`}>
                      <h1 className='text-3xl font-bebasNeue font-extralight'>{data?.year}</h1>
                      <h1 className='text-lg tewt-wrap max-w-60'>{data?.description}</h1>
                    </div>
                    <div className={`absolute bottom-[169px] ml-2 w-full h-0.5 bg-black z-[0] ${i === journeyData?.length - 1 ? 'hidden' : ''}`}></div>
                    <div className={`absolute bottom-5 -left-[40%] ${i % 2 === 0 ? '' : 'hidden'}`}>
                      <h1 className='text-3xl font-bebasNeue font-extralight'>{data?.year}</h1>
                      <h1 className='text-lg tewt-wrap max-w-60'>{data?.description}</h1>
                    </div>
                  </div>
                )
              }
            })
          }
        </Slider>
      </div>

      <div className='block sm:hidden mb-24 w-full'>
        <SeasonHeader text={`our journey`} styles='w-full bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-8' />
        <Slider {...mobileSliderSettings} className='w-full flex justify-center gap-4 items-center'>
          {
            journeyData.map((data) => (
              <div className='p-2'>
                <div className={`z-10 transition-all duration-300 border border-aboutUsRed bg-white rounded-xl max-w-[340px]`}>
                  <div key={data?.id} className='relative p-3 pr-7'>
                    <span className={`absolute top-2 right-2 translation-all duration-300 ease-in-out rotate-180`}>
                      <svg width="16" height="16" viewBox="0 0 44 44" className='text-aboutUsRed fill-current' xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6914 15.281C16.9193 15.2245 16.3405 15.8034 16.397 16.5754C16.4534 17.3475 17.1237 18.0177 17.8957 18.0742L23.5076 18.4847L15.7866 26.2057C15.282 26.7104 15.3467 27.5953 15.931 28.1796C16.5153 28.7638 17.4002 28.8286 17.9048 28.324L25.6258 20.6029L26.0364 26.2148C26.0928 26.9869 26.7631 27.6571 27.5351 27.7136C27.9211 27.7418 28.2593 27.6108 28.4922 27.3779C28.7251 27.145 28.8578 26.8052 28.8279 26.4209L28.1706 17.4367C28.1435 17.0653 27.97 16.6994 27.6906 16.42C27.4111 16.1406 27.0433 15.9651 26.6738 15.9399L17.6897 15.2827L17.6914 15.281Z" />
                        <path d="M21.8108 0.695312C9.89795 0.695312 0.206299 10.387 0.206299 22.2998C0.206299 34.2126 9.89795 43.9042 21.8108 43.9042C33.7236 43.9042 43.4152 34.2126 43.4152 22.2998C43.4152 10.387 33.7236 0.695312 21.8108 0.695312ZM21.8108 40.9673C11.5191 40.9673 3.14327 32.5915 3.14327 22.2998C3.14327 12.0081 11.5156 3.63228 21.8108 3.63228C32.106 3.63228 40.4783 12.0081 40.4783 22.2998C40.4783 32.5915 32.1024 40.9673 21.8108 40.9673Z" />
                      </svg>
                    </span>
                    <div className='w-full bg-gray-200 h-40 mb-4 rounded-lg'>

                    </div>
                    <div className='text-aboutUsRed text-3xl font-bebasNeue font-extralight'>
                      {data?.year}
                    </div>
                    <p className='text-md font-manrope font-semibold'>{data?.tour}</p>
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