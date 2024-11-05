import React from 'react'
import soulSabhaLogoDark from '../../assets/soulsabha/icons/logoMainSoulSabha.png'
import { descriptionData } from '../../data/soulSabhaData';

const OurDescription: React.FC = () => {
    return (
        <div className='pt-20'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-0'>
                <div className='w-full md:w-fit flex flex-col justify-center items-center'>
                    <h1 className='uppercase text-[50px] md:text-[65px] font-bebasNeue leading-none -translate-x-2 mb-3'>What is</h1>
                    <img src={soulSabhaLogoDark} className='w-64 md:w-80 -translate-y-7' alt="" />
                </div>
                <div className='w-full md:w-fit md:max-w-[670px] px-10 md:px-0'>
                    {
                        descriptionData?.map((data) => (
                            <h1 key={data?.id} className={`text-center md:text-justify mb-8 ${data?.id === 2 ? 'font-semibold leading-5 textmd md:text-lg tracking-wide' : 'text-xs md:text-sm font-medium leading-5'}`}>{data?.desc}</h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurDescription