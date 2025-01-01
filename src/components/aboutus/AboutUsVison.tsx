import React from 'react'
import visonVector from '../../assets/aboutus/icons/aboutUsVisonVector.svg'
import SeasonHeader from '../../components/global/SeasonHeader'

const AboutUsVison: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-14 px-10 pt-14 md:pt-0'>
        <SeasonHeader text={`VISION`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] mb-2 md:mb-5 tracking-none' />
        <div className='max-w-[900px] text-center mb-12'>
          <p className='font-manrope leading-5 md:leading-6 font-medium text-xs md:text-[15px]'>At IndoSoul, we are redefining the fusion music scene by harmonizing classical music with the soulful tunes of the world. Our mission is to craft a unique global sound that transcends borders and resonates with hearts. We aspire to build an inclusive ecosystem where artists, learners, and enthusiasts come together to share cultures, express creativity, and collaborate through music and education.</p>
        </div>
        <img src={visonVector} className='w-3' alt="" />
      </div>
  )
}

export default AboutUsVison