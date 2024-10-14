import React, { useState } from "react"
import Slider from "react-slick";

interface VideoCarousalProps {
  data: data[];
  header?: string;
}

interface data {
  id: number;
  title: string;
  video: string;
}

const VideoComponent: React.FC<VideoCarousalProps> = ({ data, header }) => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseonhover: true,
    beforeChange: (_prev: number, next: number) => {
        setCurrentSlideIndex(next);
    },
    customPaging: (i: number) => (
        <div className={`w-3 h-3 rounded-full mt-8 ${currentSlideIndex === i ? 'bg-gray-600' : 'bg-gray-200'}`} />
    )
  };

  return (
    <div className='w-full'>
      { header ? <h1 className='' style={{ color: `var(--${header})` }}>{header}</h1> : null }
      <Slider {...sliderSettings} className="w-full flex justify-center items-center">
        {
          data?.map((videoObj, i) => (
              <video src={videoObj?.video} muted autoPlay loop={true} className={`rounded-sm w-full h-[80vh] object-cover ${currentSlideIndex === i ? '' : 'scale-95'}`}></video>
          ))
        }
      </Slider>
    </div>
  )
}

export default VideoComponent