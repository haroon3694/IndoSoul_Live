import React, { useEffect, useState } from 'react'
import WatchButton from './WatchButton'
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { useLocation } from 'react-router';
import IndoSoulPopUp from '../indosoullive/IndoSoulPopUp';
import SoulSabhaPopUp from '../soulsabha/SoulSabhaPopUp';

interface PopUpData {
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
  data: PopUpData;
  textLogo?: boolean;
  imageLogo?: boolean;
  onCardClick?: () => void;
  onButtonClick?: () => void;
  infoPopup?: boolean;
  buttonColor: string | undefined;
}

const OfferedExperienceCard: React.FC<OfferedExperienceCardProps> = ({ data, textLogo, imageLogo, onCardClick, onButtonClick, infoPopup, buttonColor }) => {

  const [viewPopUp, setViewPopUp] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const { pathname } = useLocation();

  const findFillColor = () => {
    if (pathname === '/soul-sabha') {
        return '#96d112'
    } else if (pathname === '/indo-soul-live') {
        return '#a91818'
    } else if (pathname === '/flow') {
        return '#0fa677'
    } else if (pathname === '/indo-soul-roots') {
        return '#c48f41'
    } else if (pathname === '/indo-soul-music') {
        return '#02A4EA'
    } else {
        return '#ffffff'
    }
}

  useEffect(() => {
    viewPopUp ? blockScroll() : allowScroll();
  }, [viewPopUp]);

  return (
    <>
      <div key={data?.id} className='w-fit flex flex-col gap-4 items-center justify-center cursor-pointer'>
        <div className='w-fit h-fit group transition-all duration-200 ease-in-out'>
          <div className={`min-w-64 h-[45vh] md:h-[40vh] xl:h-[50vh] rounded-xl relative overflow-hidden group group-hover:border-[3px] transition-all duration-200 ease-in-out`} style={{ borderColor: findFillColor() }} onClick={infoPopup ? () => setViewPopUp(true) : onCardClick}>
            <img src={data?.image} className='min-w-64 h-[45vh] md:h-[40vh] xl:h-[50vh] rounded-xl object-cover group-hover:scale-150 group-hover:blur-lg transition-all duration-500 ease-in-out' alt="" />
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-100 transition-all duration-500 ease-in-out'></div>
            {
              textLogo ?
                <span className={`absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[15] ${data?.title?.length > 30 ? 'w-[200px]' : ' w-[140px]'} flex flex-col justify-center items-center group-hover:-translate-y-[100%] transition-all duration-300 ease-in-out`}>
                  <h1 className='font-bebasNeue text-[35px] leading-none text-center text-white'>{data?.title}</h1>
                  {pathname !== '/' ? <p className='translate-y-20 sm:translate-y-32 md:translate-y-28 flex font-manrope' style={{ color: findFillColor() }}>Know More <span className='ml-1 mt-[0.5px]'>{`>`}</span> </p> : null}
                </span>
                : imageLogo ?
                  <div className='absolute bottom-5 sm:bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[15] w-40 flex flex-col justify-center items-center group-hover:-translate-y-[100%] transition-all duration-300 ease-in-out'>
                    <img className='w-full' src={data?.logo} alt="" />
                    {pathname === '/' || pathname === '/indo-soul-live' ? <p className='translate-y-20 sm:translate-y-32 md:translate-y-28 text-yellow-600 flex font-manrope' style={{ color: findFillColor() }}>Know More <span className='ml-1 mt-[0.5px]'>{`>`}</span> </p> : null}
                  </div>
                  : null
            }
          </div>
        </div>
        <WatchButton
          btnText='watch'
          bgColor={buttonColor}
          onClick={onButtonClick}
          styles={pathname === '/indo-soul-live' ? 'text-white' : pathname === '/soul-sabha' ? 'text-black' : pathname === '/flow' ? 'text-white' : ''}
          btnColor={pathname === '/indo-soul-live' ? 'white' : pathname === '/soul-sabha' ? 'black' : pathname === '/flow' ? 'white' : null}
        />
      </div>
      {pathname === '/indo-soul-live' ? <IndoSoulPopUp viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} data={data} /> : pathname === '/soul-sabha' ? <SoulSabhaPopUp viewPopUp={viewPopUp} setViewPopUp={setViewPopUp} data={data} /> : null}
    </>
  )
}

export default OfferedExperienceCard