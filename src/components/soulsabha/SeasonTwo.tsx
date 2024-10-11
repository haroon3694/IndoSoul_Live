import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import PrimaryButton from '../global/PrimaryButton';
import { seasonTwoData, socialMediaData } from '../../data/soulSabhaData';

const SeasonTwo: React.FC = () => {
    
    return (
        <div className='w-full mb-24'>
            <SeasonHeader text={`UPCOMING SEASON`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] mb-5' />
            <h1 className='text-lg font-semibold tracking-[4px] font-clashdisplay text-center mb-5'>WHAT TO EXPECT?</h1>
            <div className='w-full px-10 md:px-20 lg:px-48 xl:px-72 pt-8 mb-8'>
                {
                    seasonTwoData?.intro?.map((data) => (
                        <h1 key={data?.id} className='text-center mb-5 text-sm'>{data?.text}</h1>
                    ))
                }
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-4 px-10 md:px-20 lg:px-48 xl:px-72 mb-36'>
                {
                    seasonTwoData?.seasonContent?.map((data) => (
                        <div key={data?.id} className='flex flex-col justify-center items-center text-center bg-[#F1F1F1] rounded-xl w-full h-24 md:h-20 px-5 md:px-0'>
                            <h1 className={`text-sm ${data?.id === 0 ? 'w-full max-w-[550px]' : ''}`}> <span className='uppercase'>{data?.title}</span>: If you are a {data?.id === 0 ? 'vocalist with a strong background in Indian classical music' : data?.id === 1 ? 'sponsor' : data?.id === 2 ? 'listener' : 'crew'}, please fill the form - <a className='text-blue-600 underline' target='_blank' href={data?.link}>{data?.link}</a></h1>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mb-16'>
                <PrimaryButton btnText='collaborate with us' styles='text-2xl tracking-[2px] bg-gradient-to-r from-[#96d312] to-[#e92f2f] text-white' shadowStyles='bg-gradient-to-r from-[#96d312] to-[#e92f2f]' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} shadow />
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[400px] justify-between flex items-center mt-2'>
                    {
                        socialMediaData?.map((data) => (
                            <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-6 cursor-pointer' alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SeasonTwo