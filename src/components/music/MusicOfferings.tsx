import React from 'react'
import BackgroundImageContainer from '../global/BackgroundImageContainer'
import SeasonHeader from '../global/SeasonHeader'
import offeringImage01 from '../../assets/academyofmusic/images/offerings/musicArtist01.png'
import offeringImage02 from '../../assets/academyofmusic/images/offerings/musicArtist02.png'
import offeringImage03 from '../../assets/academyofmusic/images/offerings/musicArtist03.png'
import musicBgImage from '../../assets/academyofmusic/images/musicBgImage.png'
import CardContainerCarousal from '../global/CardContainerCarousal'

const MusicOfferings: React.FC = () => {

  const catalogData = [
    {
      id: 0,
      image: offeringImage01,
      title: 'online classes & focus sessions',
      content: '',
      links: 'https://youtube.com/@indosoul_academy',
    },
    {
      id: 1,
      image: offeringImage02,
      title: 'offline workshops',
      content: '',
      links: 'https://youtube.com/@indosoul_academy',
    },
    {
      id: 2,
      image: offeringImage03,
      title: 'self-paced courses',
      content: '',
      links: 'https://youtube.com/@indosoul_academy',
    },
  ];

  return (
    <div className='mb-20 md:mb-28'>

      <div className=''>
        <BackgroundImageContainer backgroundImage={musicBgImage}>
          <div className='w-full relative py-24'>
            <SeasonHeader text={`academy offering`}  styles='text-white mb-3 md:mb-8' />
            <CardContainerCarousal data={catalogData} />
          </div>
        </BackgroundImageContainer>
      </div>

    </div>
  )
}

export default MusicOfferings