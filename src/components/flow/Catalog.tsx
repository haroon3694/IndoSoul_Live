import { catalogData } from '../../data/flowData'
import OfferedExperienceCard from '../global/OfferedExperienceCard'
import SeasonHeader from '../global/SeasonHeader'
import separator from '../../assets/flow/icons/separator.svg'
import SVGPageSeparator from '../global/SVGPageSeparator'

const Catalog = () => {

  return (
    <>
      <SVGPageSeparator separator={separator} />
      <div className='w-full px-5 sm:px-10 md:px-20 xl:px-32 gap-10 z-10 mb-24 md:mb-40'>
        <div className='w-full flex justify-center items-center mb-8 md:mb-16'>
          <SeasonHeader text={`catalog`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0A7453] to-[#02BD83] mb-5' />
        </div>
        <div className='w-full flex flex-wrap gap-12 md:gap-5 xl:gap-10 px-16 justify-center items-center'>
          {
            catalogData?.map((data) => (
              <OfferedExperienceCard data={data} buttonColor='flowGreen' imageLogo />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Catalog