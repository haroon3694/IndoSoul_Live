import React from 'react'

import courseContent01 from '../../assets/academyofmusic/images/teachings/courseContent01.png'
import courseContent02 from '../../assets/academyofmusic/images/teachings/courseContent02.png'
import courseContent03 from '../../assets/academyofmusic/images/teachings/courseContent03.png'
import vector from '../../assets/academyofmusic/icons/musicEducatorVector.svg'
import SeasonHeader from '../global/SeasonHeader'

const CourseContent: React.FC = () => {


  const technicalOfferings = [
    {
      id: 0,
      image: courseContent01,
      title: 'Carnatic Lessons',
      desc: 'Dive into the rich tradition of Carnatic music, mastering foundational ragas, intricate talas, and improvisational techniques.',
    },
    {
      id: 1,
      image: courseContent02,
      title: 'Western Technique',
      desc: 'Explore Western classical music, focusing on scales, arpeggios, and advanced bowing techniques to enhance your versatility.',
    },
    {
      id: 3,
      image: courseContent03,
      title: 'Skills & Techniques',
      desc: 'Gain proficiency in bow hold, playing fast and developing a well-rounded musical skill set. Learn to blend different musical styles.',
    },
  ];

  return (
    <div className='w-full mb-20'>
      <SeasonHeader text='what you will learn' styles='bg-clip-text text-transparent bg-gradient-to-r from-[#10688E] to-[#02A4EA] mb-3 md:mb-8' />
      <div className='flex flex-wrap justify-center items-center gap-10 mb-20'>
        {
          technicalOfferings?.map((data) => (
            <div className='w-fit flex flex-col justify-center items-center gap-2 md:gap-4' key={data?.id}>
              <div key={data?.id} className='w-[70%] md:w-52 aspect-square relative rounded-2xl group overflow-hidden'>
                <img src={data?.image} className='w-full rounded-2xl group-hover:scale-[120%] transition-all duration-300 ease-in-out' alt="" />
              </div>
              <div className='w-64 md:w-56 text-center'>
                <h1 className='text-lg mb-1 font-semibold'>{data?.title}</h1>
                <p className='text-xs leading-5 font-medium w-fit'>{data?.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-full flex justify-center items-center'>
        <img src={vector} className='w-3' alt="" />
      </div>
    </div>
  )
}

export default CourseContent