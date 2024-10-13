import React from 'react'
import soulSabhaLogoDark from '../../assets/soulsabha/icons/logoMainSoulSabha.svg'
import { descriptionData } from '../../data/soulSabhaData';

const OurDescription: React.FC = () => {
    return (
        <div className='pt-20 md:pt-36'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-0 md:gap-10'>
                <div className='w-full md:w-fit flex flex-col justify-center items-center'>
                    <h1 className='uppercase text-[65px] font-bebasNeue leading-none -translate-x-2 mb-0 md:mb-3'>What is</h1>
                    <img src={soulSabhaLogoDark} className='w-48 -translate-y-7' alt="" />
                </div>
                <div className='w-full md:w-fit md:max-w-[670px] px-10 md:px-0'>
                    {
                        descriptionData?.map((data) => (
                            <h1 key={data?.id} className={`text-center md:text-left mb-8 ${data?.id === 2 ? 'font-bold text-lg tracking-wide' : 'text-sm'}`}>{data?.desc}</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurDescription