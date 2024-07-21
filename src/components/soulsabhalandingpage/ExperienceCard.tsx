import PrimaryButton from '../global/PrimaryButton'
import React, { useEffect, useState } from 'react';
import { useScrollBlock } from '../../hooks/useScrollBlock'
import youtubeIcon from '../../assets/soulsabha/icons/youtube.svg';
import spotifyIcon from '../../assets/soulsabha/icons/spotify.svg';

interface ExperienceCardProps {
    id: number;
    image: string;
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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, image, title, content }) => {

    const [viewPopUp, setViewPopUp] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        viewPopUp ? blockScroll() : allowScroll()
    }, [viewPopUp])

    return (
        <>
            <div key={id} onClick={() => setViewPopUp(true)} className='relative group overflow-hidden rounded-md'>
                <img src={image} className='w-full group-hover:scale-150 group-hover: group-hover:translate-y-14 transition-all duration-500 ease-in-out' alt="" />
                <div className='absolute inset-0 z-10 bg-black opacity-40'></div>
                <h1 className='font-bebasNeue text-[38px] md:text-[40px] leading-none absolute bottom-24 md:bottom-36 text-center text-white left-1/2 -translate-x-1/2 z-[15] w-[160px]'>{title}</h1>
                <div className='w-full flex justify-center items-center absolute bottom-5 md:bottom-10 left-0 right-0 z-[15]'>
                    <PrimaryButton btnText='know more' bgColor='hover:bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out' onClick={() => setViewPopUp(true)} />
                </div>
            </div>
            <div className={`${viewPopUp ? 'hidden md:flex' : 'hidden'} w-full fixed h-screen inset-0 z-20 px-5`}>
                <div className=' bg-black bg-opacity-60 fixed h-sceen z-50 w-full inset-0' onClick={() => setViewPopUp(false)}></div>
                <div className='w-full max-w-[1000px] rounded-lg glass-morphism-white py-16 md:py-0 overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50'>
                    <div className='px-14 py-14'>
                        {
                            id === 0 && typeof content[0] !== 'string' ? (
                                <div className='w-full'>
                                    <div className='grid grid-cols-[1fr_20%_10%] border-b border-black gap-5 px-10 pb-4'>
                                        <h1 className='w-full font-bebasNeue tracking-wider text-4xl'>NAME OF THE ARTIST</h1>
                                        <h1 className='w-fit font-bebasNeue tracking-wider text-4xl min-w-20 text-center'>WATCH</h1>
                                        <h1 className='w-fit font-bebasNeue tracking-wider text-4xl min-w-20 text-center'>LISTEN</h1>
                                    </div>
                                    <div className='w-full h-[55vh] overflow-y-scroll pt-3'>
                                        {
                                            content?.map((data: any, i: number) => (
                                                <div key={data?.id} className={`w-full py-5 grid grid-cols-[1fr_20%_10%] gap-5 px-10 ${i === 0 ? '' : 'border-t border-[#808080]'}`}>
                                                    <div className='flex items-center gap-8'>
                                                        <div>
                                                            {
                                                                data?.artistImage?.length > 2 ? <img src={data?.artistImage} className='w-16 h-14 object-cover rounded-full' alt="" /> : <div className='w-14 h-14 rounded-full bg-gray-300' />
                                                            }
                                                        </div>
                                                        <div className='w-full flex flex-col'>
                                                            <h1 className='text-xl tracking-wider'>{data?.artistName}</h1>
                                                        </div>
                                                    </div>
                                                    <div className='w-fit min-w-20 flex justify-center items-center'>
                                                        <a href={data?.youtubeLink?.length > 2 ? data?.youtubeLink : null} target='_blank' className='text-sm font-semibold'>
                                                            <img src={youtubeIcon} className={`w-10 hover:scale-110 transition-transform duration-500 ease-in-out ${data?.youtubeLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className='w-fit min-w-20 flex justify-center items-center'>
                                                        <a href={data?.spotifyLink?.length > 2 ? data?.spotifyLink : null} target='_blank' className='text-sm font-semibold'>
                                                            <img src={spotifyIcon} className={`w-10 hover:scale-110 transition-transform duration-500 ease-in-out ${data?.spotifyLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                                                        </a>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className=''>
                                    {
                                        content?.length > 2 ? (
                                            <div className='w-full grid grid-cols-3 gap-2 overflow-y-scroll h-[55vh]'>
                                                {
                                                    content?.map((data: string) => (
                                                        <img key={data} src={data} className='w-full rounded-lg' />
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <div className='w-full grid grid-cols-3 gap-2 overflow-y-scroll h-[55vh] rounded-lg'>
                                                <div className='w-full aspect-square bg-gray-500' />
                                                <div className='w-full aspect-square bg-gray-500' />
                                                <div className='w-full aspect-square bg-gray-500' />
                                                <div className='w-full aspect-square bg-gray-500' />
                                                <div className='w-full aspect-square bg-gray-500' />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
            <div className={`${viewPopUp ? 'flex md:hidden' : 'hidden'} w-full fixed  justify-center items-center h-screen inset-0 z-20 px-5 bg-black bg-opacity-60`} onClick={() => setViewPopUp(false)}>
                <div className='w-full max-w-[1000px] rounded-2xl glass-morphism-white relative overflow-hidden z-50 translate-y-6'>
                    <div className=''>
                        {
                            id === 0 && typeof content[0] !== 'string' ? (
                                <div className='w-full pb-5'>
                                    <div className='w-full pt-3'>
                                        {
                                            content?.map((data: any, i: number) => (
                                                <div key={data?.id} className={`w-full py-5 px-3 sm:px-1 grid grid-cols-[62%_1fr_1fr] ${i === 0 ? '' : 'border-t border-[#808080]'}`}>
                                                    <div className='flex items-center gap-3 pl-3'>
                                                        <div>
                                                            {
                                                                data?.artistImage?.length > 2 ? <img src={data?.artistImage} className='w-12 object-contain rounded-full' alt="" /> : <div className='w-12 h-12 rounded-full bg-gray-300' />
                                                            }
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <h1 className='text-md tracking-wider'>{data?.artistName}</h1>
                                                        </div>
                                                    </div>
                                                    <div className='w-full flex justify-center items-center'>
                                                        <a href={data?.youtubeLink?.length > 2 ? data?.youtubeLink : null} target='_blank' className='text-sm font-semibold'>
                                                            <img src={youtubeIcon} className={`w-8 hover:scale-110 transition-transform duration-500 ease-in-out ${data?.youtubeLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                                                        </a>
                                                    </div>
                                                    <div className='w-full flex justify-center items-center'>
                                                        <a href={data?.spotifyLink?.length > 2 ? data?.youtubeLink : null} target='_blank' className='text-sm font-semibold'>
                                                            <img src={spotifyIcon} className={`w-7 hover:scale-110 transition-transform duration-500 ease-in-out ${data?.spotifyLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                                                        </a>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className='p-3'>
                                    {
                                        content?.length > 2 ? (
                                            <div className='w-full grid grid-cols-2 gap-2 overflow-y-scroll h-[55vh] rounded-lg'>
                                                {
                                                    content?.map((data: string) => (
                                                        <img key={data} src={data} className='w-full rounded-lg' />
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <div className='w-full grid grid-cols-2 gap-2 overflow-y-scroll h-[55vh] rounded-lg'>
                                                <div className='w-full aspect-square bg-stone-400' />
                                                <div className='w-full aspect-square bg-stone-400' />
                                                <div className='w-full aspect-square bg-stone-400' />
                                                <div className='w-full aspect-square bg-stone-400' />
                                                <div className='w-full aspect-square bg-stone-400' />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default ExperienceCard