import { experienceData } from '../../data/indoSoulLiveData'
import OfferedExperienceCard from '../global/OfferedExperienceCard'

const Experiences: React.FC = () => {
  return (
    <div className='w-full px-5 sm:px-10 md:px-20 xl:px-32 md:pt-36 gap-10 z-10'>
      <div className='w-full flex justify-center items-center mb-16'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#8B0000] to-[#CC0000] uppercase text-5xl leading-none font-bebasNeue tracking-widest'>experiences</h1>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-12 md:gap-5 xl:gap-10 px-16'>
        {
          experienceData?.map((data) => (
            <OfferedExperienceCard data={data} buttonColor='liveRed' imageLogo infoPopup />
          ))
        }
      </div>
    </div>
  )
}

export default Experiences