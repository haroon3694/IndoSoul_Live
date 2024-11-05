import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import { ourOfferings } from '../../data/landingPageData'
import CardContainerCarousal from '../global/CardContainerCarousal'

const OurOfferings: React.FC = () => {

  return (
    <div className='mt-28 mb-28 md:mt-10'>
      <SeasonHeader text={`our offerings`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0FA677] to-[#96D112] tracking-none mb-3 md:mb-8' />
      <CardContainerCarousal data={ourOfferings} />
    </div>
  )
}

export default OurOfferings