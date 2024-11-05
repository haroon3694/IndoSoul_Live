import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import ArtistCard from './ArtistCard'
import Slider from 'react-slick'
import { artistData } from '../../data/soulSabhaData'

const PreviousSeason: React.FC = () => {

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: false,
  }

  return (
    <div className='mb-20 md:mb-36 px-5'>
      <SeasonHeader text={`from the last season`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] mb-3 md:mb-8 tracking-tight' />
      <div className='hidden md:flex flex-wrap xl:flex-nowrap justify-center items-center gap-16 md:gap-4'>
        {
          artistData?.map((data) => (
            <ArtistCard key={data?.id} data={data} />
          ))
        }
      </div>
      <div className=' md:hidden '>
        <Slider {...mobileSliderSettings} className=''>
          {
            artistData?.map((data) => (
              <div className='px-2'>
                <ArtistCard key={data?.id} data={data} />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default PreviousSeason