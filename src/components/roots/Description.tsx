import { useState } from 'react';
import rootsLogo from '../../assets/indosoulroots/icons/roots-logo.svg'
import { descriptionData } from '../../data/indoSoulRootsData';

const Description = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='pt-16 mb-10 md:pb-10'>
      <div className="w-full flex justify-center items-center mb-10 md:mb-20 px-10">
        <img src={rootsLogo} className='w-full max-w-[800px]' alt="" />
      </div>
      <div className='w-full px-8 md:px-20 lg:px-48 xl:px-60 mt-5'>
        {
          // Show first 3 items or all items based on showAll state
          descriptionData
            ?.slice(0, showAll ? undefined : 3)
            ?.map((data) => (
              <h1 key={data?.id} className={`text-center mb-5 ${data?.id === 0 ? 'font-bold text-md leading-6 tracking-wide' : 'text-xs md:text-[15px] leading-5 font-medium'}`}>
                {data?.desc}
              </h1>
            ))
        }
        
        {/* Read More button */}
        <button 
          onClick={() => setShowAll(!showAll)}
          className="mx-auto block mt-6 px-6 py-2 text-xs font-semibold text-[#c48f41] underline"
        >
          {showAll ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
}

export default Description