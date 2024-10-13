import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import PrimaryButton from '../global/PrimaryButton';
import { seasonTwoData } from '../../data/soulSabhaData';
import descImg from '../../assets/soulsabha/images/descImage.png'

const NextSeason: React.FC = () => {
    
    return (
        <div className='w-full mb-20 md:mb-36'>
            <SeasonHeader text={`UPCOMING SEASON`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] mb-5' />
            <div className='w-full px-10 md:px-20 lg:px-48 xl:px-72 pt-8 mb-14'>
                {
                    seasonTwoData?.intro?.map((data) => (
                        <h1 key={data?.id} className='text-center mb-5 text-sm'>{data?.text}</h1>
                    ))
                }
            </div>
            <div className='w-full grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-10 md:gap-4 px-10 sm:px-10 md:px-20 lg:px-48 xl:px-72 mb-36'>
                {
                    seasonTwoData?.seasonContent?.map((data) => (
                        <div key={data?.id} className='flex flex-col justify-center items-center text-center rounded-xl w-full px-5 md:px-0'>
                            <img src={data?.icon} className='w-10 mb-4' alt="" />
                            <span className='flex flex-col justify-center items-center mb-4'>
                                <p className='text-md leading-none font-manrope'>Are you a</p>
                                <p className='text-3xl font-semibold font-bebasNeue'>{data?.title}</p>
                            </span>
                            <PrimaryButton btnText='enroll here' styles='bg-[#96d312] text-black text-xl' shadow shadowStyles='bg-[#96d312]' />
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mt-40'>
                <img src={descImg} className='w-full ' alt="" />
            </div>
        </div>
    )
}

export default NextSeason