import React, { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../global/PrimaryButton'
import youtubeIcon from '../../assets/soulsabha/icons/youtube.svg';
import spotifyIcon from '../../assets/soulsabha/icons/spotify.svg';

interface data {
  id: number;
  image: string | null;
  title: string;
  season: string;
  youtubeLink: string;
  spotifyLink: string;
}

interface ArtistCardProps {
  data: data;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ data }) => {

  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);

  const openPopUp = (id: number): void => {
    if (selectedArtistId === id) {
      setSelectedArtistId(null);
    } else {
      setSelectedArtistId(id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setSelectedArtistId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-fit relative pb-16 md:pb-0' key={data?.id}>
      <div className='relative mb-5 overflow-hidden rounded-xl group'>
        <span className='absolute min-w-40 z-10 top-[80%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-md text-white flex flex-col justify-center items-center gap-0.5 font-manrope opacit transition-all duration-200 ease-in-out'>
          <h1 className='font-semibold text-lg group-hover:text-xl transition-all duration-200 ease-in-out text-center leading-4 '>{data?.title}</h1>
          {/* <h1 className='font-semibold uppercase'>{data?.season}</h1> */}
        </span>
        { data?.image ? <img src={data?.image} className='w-full max-w-60 aspect-square group-hover:blur-xl transition-all duration-200 ease-in-out' alt="" /> : <div className='w-60 aspect-square bg-gray-300'></div> }
        <div className='absolute z-0 inset-0 bg-black opacity-10 group-hover:opacity-40 transition-all duration-200 ease-in-out' />
      </div>
      <div className='flex justify-center items-center relative'>
        <PrimaryButton btnText='listen' styles='bg-[#96d312] text-black text-xl' shadow shadowStyles='bg-[#96d312]' onClick={() => openPopUp(data?.id)} />
        <div ref={popupRef} className={`absolute top-[130%] w-[80%] md:w-[69%] px-2 left-1/2 -translate-x-[45%] scale-0 ${selectedArtistId === data?.id ? 'scale-100' : ''} transition-all duration-200 ease-in-out`}>
          <div className='w-full relative flex justify-center items-center gap-14 bg-white p-2 rounded-lg'>
            <img src={spotifyIcon} className='w-6' alt="" onClick={() => window.open(data.spotifyLink, '_blank')} />
            <img src={youtubeIcon} className='w-6' alt="" onClick={() => window.open(data.youtubeLink, '_blank')} />
            <div className='absolute bg-gray-200 w-full h-full rounded-lg z-[-1] -bottom-2.5 -right-2.5'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistCard