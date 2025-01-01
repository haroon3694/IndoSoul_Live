import { experienceData } from '../../data/indoSoulLiveData'
import CardContainerCarousal from '../global/CardContainerCarousal'
import SeasonHeader from '../global/SeasonHeader'

const Experiences: React.FC = () => {
  return (
    <div className='w-full md:px-20 xl:px-32 pt-20 md:pt-36 gap-10 z-10'>
      <SeasonHeader text='Indosoul Collective' styles='bg-clip-text text-transparent bg-gradient-to-r from-[#8B0000] to-[#CC0000] uppercase text-5xl leading-none font-bebasNeue mb-8' />
      <CardContainerCarousal data={experienceData} />
    </div>
  )
}

export default Experiences