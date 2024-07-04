import React from 'react'
import SeasonHeader from './SeasonHeader'
import CollaborateButton from './CollaborateButton';

const SeasonTwo: React.FC = () => {

    const seasonTwoData = [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, sequi tenetur fugiat libero adipisci possimus ullam nemo nobis nesciunt. Blanditiis vero, veritatis pariatur similique incidunt eius perspiciatis obcaecati? Laudantium ratione voluptates dolore provident, eaque laboriosam corrupti veniam maxime aperiam deleniti id qui culpa totam! Dolor quis blanditiis inventore soluta recusandae.',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, sequi tenetur fugiat libero adipisci possimus ullam nemo nobis nesciunt. Blanditiis vero, veritatis pariatur similique incidunt eius perspiciatis obcaecati? Laudantium ratione voluptates dolore provident, eaque laboriosam corrupti veniam maxime aperiam deleniti id qui culpa totam! Dolor quis blanditiis inventore soluta recusandae.',
        },
    ];

  return (
    <div className='w-full py-16'>
        <SeasonHeader text={`Season 2`} styles='mt-10' />
        <h1 className='text-5xl font-light tracking-widest font-bebasNeue text-center mb-5'>WHAT TO EXPECT!</h1>
        <div className='w-full px-72 pt-8'>
            {
                seasonTwoData?.map((data) => (
                    <h1 key={data?.id} className='text-center mb-5'>{data?.text}</h1>
                ))
            }
        </div>
        {/* <CollaborateButton text='collaborate with us' /> */}
    </div>
  )
}

export default SeasonTwo