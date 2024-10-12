import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import Slider from 'react-slick';
import event_1 from '../../assets/landing/events/event_1.png'
import event_2 from '../../assets/landing/events/event_2.png'
import PrimaryButton from '../global/PrimaryButton';

const Events: React.FC = () => {

  const events = [
    {
      id: 0,
      event: "Indosoul event 08",
      venue: "Indosoul venue #8",
      image: event_1,
      date: "21st Nov'24",
      desc: "Dive into the rich tradition of Carnatic music, mastering foundational ragas, intricate talas, and improvisational techniques."
    },
    {
      id: 1,
      event: "Indosoul event 09",
      venue: "Indosoul venue #9",
      image: event_2,
      date: "15th Dec'24",
      desc: "Explore the fusion of Hindustani and Western classical music in this unique collaborative performance and workshop."
    },
    {
      id: 2,
      event: "Indosoul event 10",
      venue: "Indosoul venue #10",
      image: event_1,
      date: "5th Jan'25",
      desc: "Join us for an immersive experience in Bharatanatyam, learning intricate mudras, expressions, and choreography."
    },
    {
      id: 3,
      event: "Indosoul event 11",
      venue: "Indosoul venue #11",
      image: event_2,
      date: "18th Feb'25",
      desc: "Discover the rhythmic complexities of Tabla in this intensive workshop led by renowned percussionists."
    },
    {
      id: 4,
      event: "Indosoul event 12",
      venue: "Indosoul venue #12",
      image: event_1,
      date: "10th Mar'25",
      desc: "Experience the spiritual journey of Dhrupad, exploring its ancient techniques and meditative aspects."
    }
  ];

  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: false,
  };

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: false,
  }

  return (
    <div className='mb-32'>
      <SeasonHeader text={`upcoming events`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#0FA677] to-[#96D112] tracking-none mb-8' />
      <div className='hidden md:block mb-12'>
        <Slider {...desktopSliderSettings} className=''>
          {
            events?.map((data) => (
              <div key={data?.id} className='max-w-[450px] p-3 bg-white border border-black rounded-[20px] relative'>
                <div className='flex items-center'>
                  <img src={data?.image} className='w-36 rounded-[18px]' alt="" />
                  <div className='px-3'>
                    <h1 className='text-xl font-bold'>{data?.event}</h1>
                    <p className='text-sm font-semibold'>{data?.venue}</p>
                    <p className='mb-4 text-xs font-semibold'>{data?.date}</p>
                    <p className='text-sm'>{data?.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      <div className='md:hidden mb-12'>
        <Slider {...mobileSliderSettings} className=''>
          {
            events?.map((data) => (
              <div className='px-2'>
                <div key={data?.id} className='p-3 bg-white border border-black rounded-[20px] relative'>
                  <div className='flex flex-col justify-center items-center'>
                    <img src={data?.image} className='w-36 rounded-[18px] mb-3' alt="" />
                    <div className='px-3 text-center'>
                      <h1 className='text-xl font-bold'>{data?.event}</h1>
                      <p className='text-sm font-semibold'>{data?.venue}</p>
                      <p className='mb-4 text-xs font-semibold'>{data?.date}</p>
                      <p className='text-sm'>{data?.desc}</p>
                    </div>
                  </div>
                  {/* <div className={`absolute w-full h-full opacity-30 rounded-full bottom-0 left-3 z-10 bg-black`} /> */}
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      <div className='w-full flex justify-center items-center'>
        <PrimaryButton btnText='BOOK NOw' styles='bg-gradient-to-r from-[#31D0B4] to-[#96D112] text-black text-xl' shadow shadowStyles='bg-gradient-to-r from-[#0FA677] to-[#96D112]' />
      </div>
    </div>
  )
}

export default Events