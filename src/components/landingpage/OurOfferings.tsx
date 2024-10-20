import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import OfferedExperienceCard from '../global/OfferedExperienceCard'

import live from '../../assets/landing/offerings/live.png'
import soulSabha from '../../assets/landing/offerings/soulSabha.png'
import roots from '../../assets/landing/offerings/roots.png'
import music from '../../assets/landing/offerings/music.png'
import flow from '../../assets/landing/offerings/flow.png'

import liveLogo from '../../assets/indosoul/icons/indosoulLiveLogo.png'
import soulLogo from '../../assets/soulsabha/icons/soulSabhaLogo.png'
import rootsLogo from '../../assets/indosoulroots/icons/indoSoulRootsLogo.png'
import flowLogo from '../../assets/flow/icons/flowLogo.png'
import musicLogo from '../../assets/academyofmusic/icons/academyOfMusicLogo.png'
import { useNavigate } from 'react-router'

interface PopUpData {
  id: number;
  image?: string;
  logo?: string;
  title: string;
  content?: string[] | number[] | any;
  links?: string;
  buttonColor?: string;
}

const OurOfferings: React.FC = () => {

  const navigate = useNavigate();

  const ourOfferings: PopUpData[] = [
    {
      id: 0,
      image: live,
      logo: liveLogo,
      title: 'IndoSoul Live',
      content: [''],
      links: '/indo-soul-live',
      buttonColor: 'liveRed',
    },
    {
      id: 1,
      image: soulSabha,
      logo: soulLogo,
      title: 'Soul Sabha',
      content: [''],
      links: '/soul-sabha',
      buttonColor: 'soulGreen',
    },
    {
      id: 2,
      image: roots,
      logo: rootsLogo,
      title: 'IndoSoul Roots',
      content: [''],
      links: '/indo-soul-roots',
      buttonColor: 'rootsBrown',
    },
    {
      id: 3,
      image: music,
      logo: musicLogo,
      title: 'Academy Of Music',
      content: [''],
      links: '/indo-soul-music',
      buttonColor: 'musicBlue',
    },

    {
      id: 4,
      image: flow,
      logo: flowLogo,
      title: 'Flow',
      content: [''],
      links: '/flow',
      buttonColor: 'flowGreen',
    },
  ];

  return (
    <div className='my-32'>
      <SeasonHeader text={`our offerings`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0FA677] to-[#96D112] tracking-none mb-8' />
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center place-items-center md:flex justify-center items-center gap-10 px-10'>
        {
          ourOfferings?.map((data) => (
            <OfferedExperienceCard data={data} buttonColor={data?.buttonColor} imageLogo onCardClick={() => data.links && navigate(data.links)} />
          ))
        }
      </div>
    </div>
  )
}

export default OurOfferings