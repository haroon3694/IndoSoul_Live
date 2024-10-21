import React from 'react';
import SeasonHeader from '../global/SeasonHeader';
import OfferedExperienceCard from '../global/OfferedExperienceCard';
import { soulSabhaExperienceData } from '../../data/soulSabhaData';

const Experience: React.FC = () => {

    return (
        <div className='w-full px-5 md:pt-20 relative'>
            <SeasonHeader text={`soul sabha experience`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] md:text-white mb-10 z-10 relative text-center' />
            <div className='w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-5 xl:gap-10 px-16 mb-24 z-10 relative'>
                {
                    soulSabhaExperienceData?.map((data) => (
                        <OfferedExperienceCard key={data?.id} data={data} textLogo={true} infoPopup={true} buttonColor='soulGreen' />
                    ))
                }
            </div>
            <div className='absolute hidden md:block inset-0 z-0 bg-black opacity-20' />
        </div>
    )
}

export default Experience