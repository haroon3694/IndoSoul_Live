import React from 'react';
import SeasonHeader from '../global/SeasonHeader';
import { soulSabhaExperienceData } from '../../data/soulSabhaData';
import CardContainerCarousal from '../global/CardContainerCarousal';

const Experience: React.FC = () => {

    return (
        <div className='w-full md:px-5 pt-24 pb-24 md:pt-20 md:pb-28 relative'>
            <SeasonHeader text={`soul sabha experience`} styles='text-white mb-4 md:mb-10 z-10 relative text-center' />
            <CardContainerCarousal data={soulSabhaExperienceData} />
        </div>
    )
}

export default Experience