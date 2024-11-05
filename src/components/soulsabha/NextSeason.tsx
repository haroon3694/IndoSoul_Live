import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import { seasonTwoData } from '../../data/soulSabhaData';
import descImg from '../../assets/soulsabha/images/descImage.png'
import NavButton from '../global/NavButton';

const NextSeason: React.FC = () => {
    
    return (
        <div className='w-full mb-20 md:mb-36'>
            <SeasonHeader text={`UPCOMING SEASON`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] mb-1 md:mb-5' />
            <div className='w-full px-10 md:px-20 lg:px-48 xl:px-72 mb-10'>
                {
                    seasonTwoData?.intro?.map((data) => (
                        <h1 key={data?.id} className='text-center mb-5 text-xs leading-5 md:text-sm font-medium'>{data?.text}</h1>
                    ))
                }
            </div>
            <div className='w-full grid grid-cols-2 justify-items-center place-items-center md:flex flex-wrap lg:flex-nowrap justify-center items-center gap-12 md:gap-20 px-10 mb-28 md:mb-36'>
                {
                    seasonTwoData?.seasonContent?.map((data) => (
                        <div key={data?.id} className='flex flex-col justify-center items-center text-center rounded-xl px-5 md:px-0 w-fit'>
                            <img src={data?.icon} className='w-10 mb-4' alt="" />
                            <span className='flex flex-col justify-center items-center mb-2'>
                                <p className='text-xs leading-5 md:text-sm font-semibold font-manrope'>Are you a</p>
                                <p className='text-[26px] font-medium font-bebasNeue tracking-wide'>{data?.title}</p>
                            </span>
                            <NavButton btnText='enroll here' styles='bg-[#96d312] text-black scale-110' bgColor='' />
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center px-3 md:px-0 md:mt-40'>
                <img src={descImg} className='w-full ' alt="" />
            </div>
        </div>
    )
}

export default NextSeason