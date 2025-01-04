import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import PrimaryButton from '../global/PrimaryButton';
import { teamData } from '../../data/aboutUsData';

const TheTeam: React.FC = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@indosoul.in';
};

  return (
    <div className=''>
      <SeasonHeader text={`team indosoul`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-3 md:mb-10' />
      <div className='w-full mb-14 md:mb-28'>
        <div className='w-full px-5 lg:w-2/3 mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-20 gap-y-8 sm:gap-y-8'>
          {
            teamData?.map((data) => (
              <div className='w-full flex flex-col group'>
                <div className='w-full aspect-square bg-aboutUsRed rounded-[20px] group-hover:p-0.5 transition-all duration-200 ease-in-out mb-3'>
                  <div className='w-full h-full aspect-square'>
                    <img src={data?.image} className='w-full h-full rounded-[20px]' alt="Musicain" />
                  </div>
                </div>
                <div className='w-full flex flex-col items-center text-center'>
                  <h1 className='text-md font-bold leading-none mb-1'>{data?.name}</h1>
                  <h1 className='text-xs md:text-sm font-medium'>{data?.designation}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='px-4 pb-2 md:pb-0 md:px-5'>
        <div className='w-full mx-auto border-2 border-black rounded-2xl flex justify-center items-center py-8'>
          <div className='flex flex-col md:flex-row justify-center items-center text-center md:text-nowrap gap-3 md:gap-10'>
            <h1 className='text-lg md:text-xl font-medium'>Would you like to join our team?</h1>
            <PrimaryButton onClick={handleEmailClick} btnText='email us' styles='bg-gradient-to-r from-[#F44007] to-[#1E1E1E] text-white text-xl scale-95' shadow shadowStyles='bg-gradient-to-r scale-95 from-[#F44007] to-[#1E1E1E]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheTeam