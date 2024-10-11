import React, { useEffect, useState } from 'react'
import WatchButton from './WatchButton'
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { useLocation } from 'react-router';
import IndoSoulPopUp from '../indosoullive/IndoSoulPopUp';
import SoulSabhaPopUp from '../soulsabha/SoulSabhaPopUp';

interface SoulSabhaPopUpData {
  id: number;
  image?: string;
  logo?: string;
  title: string;
  content?: string[] | ArtistContentProps[] | any;
  links?: string;
}

interface ArtistContentProps {
  id: number;
  artistImage: string;
  artistName: string;
  songName: string;
  youtubeLink: string;
  spotifyLink: string;
}

interface OfferedExperienceCardProps {
  data: SoulSabhaPopUpData;
  textLogo?: boolean;
  imageLogo?: boolean;
  onCardClick?: () => void;
  onButtonClick?: () => void;
  infoPopup?: boolean;
  buttonColor: string;
}

const OfferedExperienceCard: React.FC<OfferedExperienceCardProps> = ({ data, textLogo, imageLogo, onCardClick, onButtonClick, infoPopup, buttonColor }) => {

  const [viewPopUp, setViewPopUp] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const { pathname } = useLocation();

  useEffect(() => {
    viewPopUp ? blockScroll() : allowScroll();
  }, [viewPopUp]);

  return (
    <>
      <div key={data?.id} className='w-fit flex flex-col gap-4 items-center justify-center'>
        <div className='w-64 md:w-56 h-[45vh] md:h-[55vh] rounded-xl relative overflow-hidden group' onClick={infoPopup ? () => setViewPopUp(true) : onCardClick}>
          <img src={data?.image} className='w-64 md:w-56 h-[45vh] md:h-[55vh] rounded-xl object-cover group-hover:scale-150 group-hover:blur-lg transition-all duration-500 ease-in-out' alt="" />
          <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-100 transition-all duration-500 ease-in-out'></div>
          {
            textLogo ?
              <h1 className='font-bebasNeue text-[35px] leading-none absolute bottom-24 md:bottom-10 text-center text-white left-1/2 -translate-x-1/2 z-[15] w-[150px]'>{data?.title}</h1>
              : imageLogo ?
                <div className='absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[15] w-40 flex justify-center items-end'>
                  <img className='w-full' src={data?.logo} alt="" />
                </div>
                : null
          }
        </div>
        <WatchButton
        btnText='watch'
        bgColor={buttonColor}
        onClick={onButtonClick}
        styles={ pathname === '/indo-soul-live' ? 'text-white' : pathname === '/soul-sabha' ? 'text-black' : pathname === '/flow' ? 'text-white' :  '' }
        btnColor={ pathname === '/indo-soul-live' ? 'white' : pathname === '/soul-sabha' ? 'black' : pathname === '/flow' ? 'white': null }
        />
      </div>
      { pathname === '/indo-soul-live' ? <IndoSoulPopUp viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} data={data} /> : pathname === '/soul-sabha' ? <SoulSabhaPopUp viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} data={data} /> : null }
    </>
  )
}

export default OfferedExperienceCard