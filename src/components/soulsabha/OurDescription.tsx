import React from 'react'
import descImg from '../../assets/soulsabha/images/descImage.png'
import soulSabhaLogoDark from '../../assets/soulsabha/icons/logoMainSoulSabha.svg'
import { descriptionData } from '../../data/soulSabhaData';

const OurDescription: React.FC = () => {
    return (
        <div className='pt-36'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='uppercase text-[65px] font-bebasNeue leading-none -translate-x-2'>What is</h1>
                <img src={soulSabhaLogoDark} className='w-48 -translate-y-7' alt="" />
            </div>
            <div className='w-full px-10 md:px-20 lg:px-48 xl:px-80'>
                {
                    descriptionData?.map((data) => (
                        <h1 key={data?.id} className={`text-center mb-5 ${data?.id === 2 ? 'font-bold text-lg tracking-wide' : 'text-sm'}`}>{data?.desc}</h1>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mt-48'>
                <img src={descImg} className='w-full ' alt="" />
            </div>
        </div>
    )
}

export default OurDescription