import { descriptionData } from '../../data/flowData'
import flowLogoGreen from '../../assets/flow/icons/flowLogoGreen.png'

const Description = () => {

  return (
    <div className='pt-20 md:pt-28 pb-5 md:pb-14'>
      <div className='w-full lg:w-[70%] xl:w-[60%] 2xl:w-[45%] mx-auto flex flex-col md:flex-row justify-center items-center px-10 gap-10'>
        <div className='w-fit text-center flex flex-col justify-center items-center'>
          <h1 className='font-bebasNeue text-5xl mb-2'>What is</h1>
          <img src={flowLogoGreen} className='w-52 md:w-72' alt="" />
        </div>
        <div className='w-full'>
          {
            descriptionData?.map((data) => (
              <h1 key={data?.id} className={`text-center md:text-left xl:text-justify ${data?.id === 0 ? 'font-bold text-md md:text-lg md:leading-5 leading-6 tracking-wide mb-5' : 'text-xs md:text-md font-medium leading-5'}`}>{data?.desc}</h1>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Description