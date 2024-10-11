import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import PrimaryButton from '../global/PrimaryButton';

const TheTeam: React.FC = () => {
  
  const teamData = [
    {
      id: 0,
      name: 'Kaushik Ravi',
      designation: 'Head - Brand Operations',
    },
    {
      id: 1,
      name: 'Jayashree Ramamoorthy',
      designation: 'Head - Marketing',
    },
    {
      id: 2,
      name: 'Reshwin Nishith',
      designation: 'Head - Music Production',
    },
    {
      id: 3,
      name: 'Anjana Shivshankari',
      designation: 'Manager - Client Success',
    },
    {
      id: 4,
      name: 'Jacinth Devakiruba',
      designation: 'Manager - Social Media',
    },
    {
      id: 5,
      name: 'Aditya',
      designation: 'Lead - Indosoul Academy',
    },
    {
      id: 6,
      name: 'Sabari',
      designation: 'Sound Engineer',
    },
    {
      id: 7,
      name: 'Avinash Murugadhas',
      designation: 'Video Content Producer',
    },
    {
      id: 8,
      name: 'Keerthi Sindhuri',
      designation: 'Manager - Accounts',
    },
  ];

  return (
    <div className=''>
      <SeasonHeader text={`team indosoul`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-10' />
      <div className='w-full mb-28'>
        <div className='w-full px-5 lg:w-2/3 mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-20 gap-y-4 sm:gap-y-8'>
          {
            teamData?.map((data) => (
              <div className='w-full flex flex-col'>
                <div className='w-full aspect-square bg-red-500 rounded-[12px] hover:p-0.5 transition-all duration-100 ease-in-out mb-3'>
                  <div className='w-full h-full bg-gray-300 rounded-[10px]'>

                  </div>
                </div>
                <div className='w-full flex flex-col items-center text-center'>
                  <h1 className='text-md font-medium leading-none mb-1'>{data?.name}</h1>
                  <h1 className='text-sm font-light'>{data?.designation}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='w-[97.5%] mx-auto border-2 border-black rounded-xl flex justify-center items-center py-10'>
        <div className='flex flex-col md:flex-row justify-center items-center text-center md:text-nowrap gap-10'>
          <h1 className='text-2xl'>Would you like to join our team?</h1>
          <PrimaryButton btnText='email us' styles='bg-gradient-to-r from-[#F44007] to-[#1E1E1E] text-white text-xl' shadow shadowStyles='bg-gradient-to-r from-[#F44007] to-[#1E1E1E]' />
        </div>
      </div>
    </div>
  )
}

export default TheTeam