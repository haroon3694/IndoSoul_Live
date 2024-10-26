import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import separator from '../../assets/aboutus/icons/separator.svg'
import SVGPageSeparator from '../global/SVGPageSeparator';

const Musicians: React.FC = () => {

  const musiciansData = [
    {
      id: 0,
      name: 'Karthik Iyer',
      designation: 'Frontman & Creative Head',
    },
    {
      id: 1,
      name: 'Reshwin Nishith',
      designation: 'Bass Guitarist, Programmer',
    },
    {
      id: 2,
      name: 'Vikram Vivekanand',
      designation: 'Lead Guitarist',
    },
    {
      id: 3,
      name: 'Ram Kanakaraj',
      designation: 'Drummer',
    },
    {
      id: 4,
      name: 'Akshay Yesodharan',
      designation: 'Acoustic Guitarist',
    },
    {
      id: 5,
      name: 'Venkat Subramanian',
      designation: 'Mridangist, Percussionist',
    },
  ];

  return (
    <div>
      <SeasonHeader text={`musicians`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#F44007] to-[#1E1E1E] tracking-none mb-8' />
      <div className='w-full'>
        <div className='w-full px-5 lg:px-0 lg:w-1/2 mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-20 gap-y-4 sm:gap-y-8'>
          {
            musiciansData?.map((data) => (
              <div className='w-full flex flex-col'>
                <div className='w-full aspect-square bg-red-500 rounded-[12px] hover:p-0.5 transition-all duration-100 ease-in-out mb-3'>
                  <div className='w-full h-full bg-gray-300 rounded-[10px]'>

                  </div>
                </div>
                <div className='w-full flex flex-col items-center text-center'>
                  <h1 className='text-md font-medium'>{data?.name}</h1>
                  <h1 className='text-sm font-light'>{data?.designation}</h1>
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