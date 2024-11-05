import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import separator from '../../assets/aboutus/icons/separator.svg'
import SVGPageSeparator from '../global/SVGPageSeparator';
import { musiciansData } from '../../data/aboutUsData';

const Musicians: React.FC = () => {

  return (
    <div>
      <SeasonHeader text={`musicians`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-3 md:mb-8' />
      <div className='w-full'>
        <div className='w-full px-5 lg:px-0 lg:w-1/2 mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-20 gap-y-8 sm:gap-y-8'>
          {
            musiciansData?.map((data) => (
              <div className='w-full flex flex-col group'>
                <div className='w-full aspect-square bg-aboutUsRed rounded-[20px] group-hover:p-0.5 transition-all duration-200 ease-in-out mb-3'>
                  <div className='w-full h-full aspect-square'>
                    <img src={data?.image} className='w-full h-full rounded-[20px]' alt="Musicain" />
                  </div>
                </div>
                <div className='w-full flex flex-col items-center text-center'>
                  <h1 className='text-md font-bold'>{data?.name}</h1>
                  <h1 className='text-xs md:text-sm font-medium'>{data?.designation}</h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <SVGPageSeparator separator={separator} />
    </div>
  )
}

export default Musicians