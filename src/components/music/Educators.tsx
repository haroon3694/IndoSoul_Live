import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import SmallCarousal from '../global/SmallCarousal'
import vector from '../../assets/academyofmusic/icons/musicEducatorVector.svg'
import { educators } from '../../data/academyOfMusicData'

const Educators: React.FC = () => {

  return (
    <div className='mb-20 md:mb-32'>
      <SeasonHeader text='our music educators' styles='bg-clip-text text-transparent bg-gradient-to-r from-[#10688E] to-[#02A4EA] mb-2 md:mb-8' />
      <SmallCarousal carousalData={educators} info />
      <div className='w-full flex justify-center items-center'>
        <img src={vector} className='w-3' alt="" />
      </div>
    </div>
  )
}

export default Educators