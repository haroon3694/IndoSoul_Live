import React from 'react';
import SeasonHeader from '../global/SeasonHeader';
import OfferedExperienceCard from '../global/OfferedExperienceCard';
import { soulSabhaExperienceData } from '../../data/soulSabhaData';

const Experience: React.FC = () => {

    return (
        <div className='w-full px-5 sm:px-10 2xl:px-60 md:pt-20 relative'>
            <SeasonHeader text={`soul sabha experience`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] md:text-white mb-10 z-10 relative' />
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:flex justify-center justify-items-center items-center gap-10 xl:gap-10 mb-24 z-10 relative'>
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