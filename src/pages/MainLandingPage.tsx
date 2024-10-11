import React from 'react'
import logoIndosoul from '../assets/icons/indosoulLogoMainBlack.svg'

const MainLandingPage: React.FC = () => {

  return (
    <div className='w-[80%] mx-auto h-[80vh] flex justify-center items-center border-b border-black'>
        <div className='flex flex-col justify-center items-center gap-28 mt-32'>
          <img src={logoIndosoul} className='w-96' alt="" />
          <div className='flex flex-col w-full items-center font-manrope'>
            <h1 className='text-sm font-light tracking-widest'>Bringing Indian Music to the world & the World to Indian Music</h1>
            <h1 className='text-sm font-semibold tracking-widest'>Live Performances | Indie Shows | Violin Education Platform | Music Production</h1>
          </div>
        </div>
    </div>
  )
}

export default MainLandingPage