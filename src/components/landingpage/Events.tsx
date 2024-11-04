import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import PrimaryButton from '../global/PrimaryButton';
import SmallCarousal from '../global/SmallCarousal';
import { events } from '../../data/landingPageData';

const Events: React.FC = () => {

  return (
    <div className='mb-24 md:mb-32'>
      <SeasonHeader text={`upcoming events`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0FA677] to-[#96D112] tracking-none mb-1 md:mb-8' />
      <SmallCarousal carousalData={events} event />
      <div className='w-full flex justify-center items-center'>
        <PrimaryButton btnText='BOOK NOw' styles='bg-gradient-to-r from-[#31D0B4] to-[#96D112] text-black text-xl' shadow shadowStyles='bg-gradient-to-r from-[#0FA677] to-[#96D112]' />
      </div>
    </div>
  )
}

export default Events