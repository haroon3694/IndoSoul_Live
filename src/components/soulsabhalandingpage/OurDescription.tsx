import React from 'react'
import logoMain from '../../assets/soulsabha/icons/logoMainSoulSabha.svg'
import descImg from '../../assets/soulsabha/images/descImage.png'

const OurDescription: React.FC = () => {

    const descData = [
        {
            id: 0,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate officia architecto, in officiis suscipit. Atque velit nihil ipsam minima. Eius labore, reiciendis sint atque culpa vero optio dolor, numquam molestias eos perspiciatis suscipit recusandae, aut nesciunt deleniti. Tempora velit temporibus minima ipsum nesciunt delectus eveniet distinctio repudiandae recusandae possimus.',
        },
        {
            id: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate officia architecto, in officiis suscipit. Atque velit nihil ipsam minima. Eius labore, reiciendis sint atque culpa vero optio dolor, numquam molestias eos perspiciatis suscipit recusandae, aut nesciunt deleniti. Tempora velit temporibus minima ipsum nesciunt delectus eveniet distinctio repudiandae recusandae possimus.',
        },
        {
            id: 2,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cupiditate officia architecto, in officiis suscipit. Atque velit nihil ipsam minima. Eius labore, reiciendis sint atque culpa vero optio dolor, numquam molestias eos perspiciatis suscipit recusandae, aut nesciunt deleniti. Tempora velit temporibus minima ipsum nesciunt delectus eveniet distinctio repudiandae recusandae possimus.',
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
        <div className='w-full px-72 mt-7'>
            {
                descData?.map((data) => (
                    <h1 key={data?.id} className='text-center mb-5'>{data?.desc}</h1>
                ))
            }
        </div>
        <div className='w-full flex justify-center items-center mt-32'>
            <img src={descImg} className='w-fll max-w-[1100px]' alt="" />
        </div>
    </div>
  )
}

export default OurDescription