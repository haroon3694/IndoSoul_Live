import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import PrimaryButton from '../global/PrimaryButton'
import bandVideo from '../../assets/indosoul/videos/bandVideo.webm'

const Purpose: React.FC = () => {
  return (
    <div className='my-32 flex flex-col justify-center items-center gap-10'>
      <SeasonHeader text='purpose' styles='bg-clip-text text-transparent bg-gradient-to-r from-[#10688E] to-[#02A4EA]' />
      <div className='flex justify-center items-center relative z-10 max-w-[80vw] max-h-[80vh] mx-auto mb-7 md:mb-16'>
        <video src={bandVideo} muted autoPlay loop={true} className='w-full h-full max-w-[80vw] max-h-[80vh] object-cover rounded-sm' />
        <div className={`absolute w-full h-full opacity-30 rounded-sm top-3 md:top-10 left-3 md:left-10 z-[-1] bg-[#02A4EA]`} />
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-5 text-center px-5'>
        <p className='text-lg leading-none text-black font-manrope'>At IndoSoul Academy, we cultivate the next generation of musicians by providing</p>
        <h1 className='text-4xl md:text-5xl leading-none text-black font-manrope'>high quality, value added music learning.</h1>
        <PrimaryButton btnText='read more' styles='text-white bg-[#02A3E8]' shadow shadowStyles='bg-[#02A3E8]' />
      </div>
    </div>
  )
}

export default Purpose