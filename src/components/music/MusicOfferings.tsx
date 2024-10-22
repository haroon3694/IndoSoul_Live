import React from 'react'
import BackgroundImageContainer from '../global/BackgroundImageContainer'
import SeasonHeader from '../global/SeasonHeader'
import OfferedExperienceCard from '../global/OfferedExperienceCard'
import offeringImage01 from '../../assets/academyofmusic/images/offerings/musicArtist01.png'
import offeringImage02 from '../../assets/academyofmusic/images/offerings/musicArtist02.png'
import offeringImage03 from '../../assets/academyofmusic/images/offerings/musicArtist03.png'
import musicBgImage from '../../assets/academyofmusic/images/musicBgImage.png'

const MusicOfferings: React.FC = () => {

  const catalogData = [
    {
      id: 0,
      image: offeringImage01,
      title: 'online classes & focus sessions',
      content: '',
      links: '',
    },
    {
      id: 1,
      image: offeringImage02,
      title: 'offline workshops',
      content: '',
      links: '',
    },
    {
      id: 2,
      image: offeringImage03,
      title: 'self-paced courses',
      content: '',
      links: '',
    },
  ];

  return (
    <div className='mb-32'>

      {/* desktop view */}
      <div className='hidden md:block'>
        <BackgroundImageContainer backgroundImage={musicBgImage}>
          <div className='w-full px-5 md:pt-20 relative'>
            <SeasonHeader text={`academy offering`}  styles='text-white mb-8' />
            <div className='w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-5 xl:gap-10 px-16 mb-24 z-10 relative'>
              {
                catalogData?.map((data) => (
                  <OfferedExperienceCard key={data?.id} data={data} textLogo={true} infoPopup={false} buttonColor='musicBlue' />
                ))
              }
            </div>
            <div className='absolute hidden md:block inset-0 z-0 bg-black opacity-20' />
          </div>
        </BackgroundImageContainer>
      </div>

      {/* mobile view */}
      <div className='md:hidden'>
        <div className='w-full px-5 md:pt-20 relative'>
          <SeasonHeader text={`academy offering`}  styles='text-white mb-8' />
          <div className='w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-5 xl:gap-10 px-16 mb-24 z-10 relative'>
            {
              catalogData?.map((data) => (
                <OfferedExperienceCard key={data?.id} data={data} textLogo={true} infoPopup={false} buttonColor='musicBlue' />
              ))
            }
          </div>
          <div className='absolute hidden md:block inset-0 z-0 bg-black opacity-20' />
        </div>
      </div>

    </div>
  )
}

export default MusicOfferings