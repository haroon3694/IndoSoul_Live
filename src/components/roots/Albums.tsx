import React from 'react'
import bookingImage1 from '../../assets/indosoulroots/images/performancecards/01.png'
import bookingImage2 from '../../assets/indosoulroots/images/performancecards/02.png'
import bookingImage3 from '../../assets/indosoulroots/images/performancecards/03.png'
import bookingImage4 from '../../assets/indosoulroots/images/performancecards/04.png'
import reverbEffect from '../../assets/indosoulroots/icons/reverb.svg'
import separator from '../../assets/indosoulroots/icons/separator-roots.svg'
import SocialMediaIconsColor from '../global/SocialMediaIconsColor'

const Albums: React.FC = () => {

  const bookingCardsData = [
    {
      id: 0,
      image: bookingImage1,
      link: '',
    },
    {
      id: 1,
      image: bookingImage3,
      link: '',
    },
    {
      id: 2,
      image: bookingImage4,
      link: '',
    },
    {
      id: 3,
      image: bookingImage2,
      link: '',
    },
  ];

  return (
    <div className='mb-28'>
      <div className='w-full flex justify-center items-center py-6'>
        <img src={separator} className='w-full max-w-[400px]' alt="" />
      </div>
      <div className='relative max-w-screen overflow-hidden flex justify-center items-center py-20 px-20'>
        <div className="flex justify-center items-center gap-1 md:gap-3 h-fit mx-auto relative translate-x-10">
          {/* Left side (stacked smaller images) */}
          <div className="flex flex-col col-span-1 gap-1 md:gap-3">
            {bookingCardsData.slice(0, 3).map((album) => (
              <div key={album.id} className="">
                <img src={album.image} className="rounded-lg w-full max-w-[130px] shadow-lg" />
              </div>
            ))}
          </div>

          {/* Right side (larger main image) */}
          <div className="col-span-2 w-1/3">
            <div className="">
              <img
                src={bookingCardsData[3].image}
                className="rounded-lg shadow-lg w-full max-w-[800px] h-full object-cover"
              />
            </div>
          </div>
          <div className='ml-10'>
            <div className='flex flex-col font-manrope w-full max-w-[300px]'>
              <h1 className='text-3xl tracking-wide font-semibold mb-3'>THE PALLAVI SHIFT</h1>
              <p className='text-md font-semibold leading-5 ml-1 mb-6'>Indosoul by Karthik Iyer <br />ft. Dondieu Divin</p>
              <div className='pl-1'>
                <SocialMediaIconsColor gap='8' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center w-full absolute z-[-1]'>
          <img src={reverbEffect} className='object-cover w-full max-w-[450px] -translate-x-[55%]' alt="" />
          <img src={reverbEffect} className='object-cover w-full max-w-[450px] translate-x-[55%]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Albums