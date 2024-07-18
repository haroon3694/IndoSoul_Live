import React from 'react'
import logoMain from '../../assets/soulsabha/icons/logoMainSoulSabha.svg'
import descImg from '../../assets/soulsabha/images/descImage.png'

const OurDescription: React.FC = () => {

    const descData = [
        {
            id: 0,
            desc: 'Soul Sabha is a special musical video concept by IndoSoul that seeks to take our age old Carnatic music across to a wider audience and younger generations.',
        },
        {
            id: 1,
            desc: 'We aim to create a space where traditional music blends with global influences while preserving its essence and integrity culminating in a unique musical experience. Our vision is to bridge cultural divides and celebrate the rich heritage of Indian music, especially through the lens of South Indian traditions.',
        },
        {
            id: 2,
            desc: `Soul Sabha is all about collaborations with artist and musicians from the traditional space from all over India, SoulSabha isn't just   about music—it's about building a community of artists and music enthusiasts.`,
        },
    ];

  return (
    <div className='py-16'>
        <div className='w-full flex justify-center items-center'>
            <div>
                <h1 className='text-5xl font-light tracking-widest font-bebasNeue text-center'>WHAT IS</h1>
                <img src={logoMain} className='w-44' alt="" />
            </div>
        </div>
        <div className='w-full px-10 md:px-20 lg:px-48 xl:px-96 mt-7'>
            {
                descData?.map((data) => (
                    <h1 key={data?.id} className={`text-center mb-5 ${data?.id === 2 ? 'font-bold' : ''}`}>{data?.desc}</h1>
                ))
            }
        </div>
        <div className='w-full flex justify-center items-center mt-32 px-5 lg:px-32 xl:px-40 2xl:px-72'>
            <img src={descImg} className='w-full ' alt="" />
        </div>
    </div>
  )
}

export default OurDescription