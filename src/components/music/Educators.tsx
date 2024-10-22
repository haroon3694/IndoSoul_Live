import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import SmallCarousal from '../global/SmallCarousal'
import educator01 from '../../assets/academyofmusic/images/educators/aditya.png'
import educator02 from '../../assets/academyofmusic/images/educators/aniruddha.png'
import vector from '../../assets/academyofmusic/icons/musicEducatorVector.svg'

const Educators: React.FC = () => {

  const educators = [
    {
      id: 0,
      artistName: "Sreenivasan Ganesh",
      image: educator01,
      desc: "G. Sreenivaasan has been learning Carnatic Music for the past 15 years and holds degrees in Masters of Music (Carnatic Violin), Bachelor's in Music (Carnatic Vocal), and Bachelor's in Visual Communication."
    },
    {
      id: 1,
      artistName: "Aniruddha",
      image: educator02,
      desc: "H.R. Aniruddha Ram is a disciple of eminent Carnatic violinists Vid. Sri C.N. Chandrashekar and Sri Kumaresh. With 10 years of violin practice, he is working on integrating Carnatic music with genres such as Western, rock, metal, and contemporary world music."
    },
    {
      id: 2,
      artistName: "Aditya",
      image: educator01,
      desc: `Aditya, currently heading the Indosoul Academy of Music has his roots in Carnatic music. "Making classical music fun to learn" is one of the principles he abides by. The co-founding member of Chennai's first electric violin duo band - Resound, Aditya has performed across India.`
    },
    {
      id: 3,
      artistName: "Sreenivasan Ganesh",
      image: educator02,
      desc: "G. Sreenivaasan has been learning Carnatic Music for the past 15 years and holds degrees in Masters of Music (Carnatic Violin), Bachelor's in Music (Carnatic Vocal), and Bachelor's in Visual Communication."
    },
    {
      id: 4,
      artistName: "Aniruddha",
      image: educator01,
      desc: "H.R. Aniruddha Ram is a disciple of eminent Carnatic violinists Vid. Sri C.N. Chandrashekar and Sri Kumaresh. With 10 years of violin practice, he is working on integrating Carnatic music with genres such as Western, rock, metal, and contemporary world music."
    }
  ];

  return (
    <div className='mb-32'>
      <SeasonHeader text='our music educators' styles='bg-clip-text text-transparent bg-gradient-to-r from-[#10688E] to-[#02A4EA] mb-8' />
      <SmallCarousal carousalData={educators} info />
      <div className='w-full flex justify-center items-center'>
        <img src={vector} className='w-3' alt="" />
      </div>
    </div>
  )
}

export default Educators