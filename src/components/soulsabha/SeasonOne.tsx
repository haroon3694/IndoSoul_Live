import React from 'react';
import SeasonHeader from '../global/SeasonHeader';
import OfferedExperienceCard from '../global/OfferedExperienceCard';
import { soulSabhaExperienceData } from '../../data/soulSabhaData';

const SeasonOne: React.FC = () => {

    return (
        <div className='w-full px-5 sm:px-10 2xl:px-60 py-24'>
            <SeasonHeader text={`soul sabha experience`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] my-10' />
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:flex justify-center justify-items-center items-center gap-10 xl:gap-10 mb-24'>
                {
                    soulSabhaExperienceData?.map((data) => (
                        <OfferedExperienceCard data={data} textLogo={true} infoPopup={true} buttonColor='soulGreen' />
                    ))
                }
            </div>
        </div>
    )
}

export default SeasonOne