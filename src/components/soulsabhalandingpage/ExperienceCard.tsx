import PrimaryButton from '../global/PrimaryButton'
import React, { useEffect, useState } from 'react';
import { useScrollBlock } from '../../hooks/useScrollBlock'
import youtubeIcon from '../../assets/soulsabha/images/youtube.svg';
import spotifyIcon from '../../assets/soulsabha/images/spotify.svg';

interface ExperienceCardProps {
    id: number;
    image: string;
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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, image, content, links }) => {

    const [viewPopUp, setViewPopUp] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        viewPopUp ? blockScroll() : allowScroll()
    }, [viewPopUp])

    return (
        <>
            <div key={id} onClick={() => setViewPopUp(true)} className='relative group overflow-hidden rounded-md'>
                <img src={image} className='w-full group-hover:scale-150 grayscale group-hover:grayscale-0 group-hover:translate-y-14 transition-all duration-500 ease-in-out' alt="" />
                <div className='w-full flex justify-center items-center absolute bottom-10 left-0'>
                    <PrimaryButton btnText='know more' bgColor='hover:bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out' onClick={() => window.open(links, '_blank')} />
                </div>
            </div>
            <div className={`${viewPopUp ? 'flex' : 'hidden'} w-full fixed  justify-center items-center h-screen inset-0 z-20 px-5`} onClick={() => setViewPopUp(false)}>
                <div className='w-full max-w-[1000px] rounded-lg glass-morphism-white relative py-16 md:py-0 overflow-hidden z-50 translate-y-6'>
                    <div className='px-14 pt-14'>
                        {
                            id === 0 && typeof content[0] !== 'string' ? (
                                <div className='w-full'>
                                    <div className='grid grid-cols-[1fr_10%_10%] border-b border-black gap-5 px-10 pb-4'>
                                        <h1 className='w-full font-bebasNeue tracking-wider text-4xl'>NAME OF THE ARTIST</h1>
                                        <h1 className='w-fit font-bebasNeue tracking-wider text-4xl min-w-20 text-center'>WATCH</h1>
                                        <h1 className='w-fit font-bebasNeue tracking-wider text-4xl min-w-20 text-center'>LISTEN</h1>
                                    </div>
                                    <div className='w-full h-[55vh] overflow-y-scroll pt-3'>
                                        {
                                            content?.map((data: any) => (
                                                <div key={data?.id} className='w-full py-5 grid grid-cols-[1fr_10%_10%] gap-5 rounded-md px-10'>
                                                    <div className='flex items-center gap-8'>
                                                        <div>
                                                            <img src={data?.artistImage} className='w-16 h-14 object-cover rounded-full' alt="" />
                                                        </div>
                                                        <div className='w-full flex flex-col'>
                                                            <h1 className='text-xl tracking-wider'>{data?.artistName} #1</h1>
                                                        </div>
                                                    </div>
                                                    <div className='w-fit min-w-20 flex justify-center items-center'>
                                                        <a href={data?.youtubeLink} target='_blank' className='text-sm font-semibold'>
                                                            <img src={youtubeIcon} className='w-10 hover:scale-110 transition-transform duration-500 ease-in-out' alt="" />
                                                        </a>
                                                    </div>
                                                    <div className='w-fit min-w-20 flex justify-center items-center'>
                                                        <a href={data?.spotifyLink} target='_blank' className='text-sm font-semibold'>
                                                            <img src={spotifyIcon} className='w-10 hover:scale-110 transition-transform duration-500 ease-in-out' alt="" />
                                                        </a>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full grid grid-cols-3 gap-2 overflow-y-scroll h-[55vh]'>
                                    {
                                        content?.map((data: string) => (
                                            <img key={data} src={data} className='w-full' />
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className='w-full flex justify-center items-center py-2'>
                        <PrimaryButton btnText='watch more' bgColor='hover:bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out text-black hover:text-white' onClick={() => window.open(links, '_blank')} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default ExperienceCard