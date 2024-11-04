import React from 'react'
import soulCircleImage from '../../assets/landing/images/soulCircleImage.png'
import PrimaryButton from '../global/PrimaryButton'

const SoulCircle: React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-20 mb-28 md:mt-32md:mb-32'>
      <img src={soulCircleImage} className='w-full max-w-[450px] mb-7 px-5' alt="" />
      <div className='w-fit max-w-[900px] text-center font-manrope mx-auto px-8 sm:px-10 flex flex-col justify-center items-center'>
        <h1 className='text-xl font-semibold mb-2'>Be a part of the soul circle</h1>
        <p className='text-xs leading-5 tracking-wider mb-5 font-medium'>Soul Circle is a rapidly expanding community of listeners, fans, and music enthusiasts who enjoy behind-the-scenes access to music production, exclusive content, special offers on ticket prices, and more.</p>
        <PrimaryButton btnText='BOOK NOw' styles='bg-gradient-to-r from-[#31D0B4] to-[#96D112] text-black text-xl' shadow shadowStyles='bg-gradient-to-r from-[#0FA677] to-[#96D112]' />
      </div>
    </div>
  )
}

export default SoulCircle