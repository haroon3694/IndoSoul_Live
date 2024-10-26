import { descriptionData } from '../../data/flowData'
import flowLogoGreen from '../../assets/flow/icons/flowLogoGreen.svg'

const Description = () => {

  return (
    <div className='pt-28 pb-14'>
      <div className='w-full lg:w-[70%] xl:w-[60%] 2xl:w-[45%] mx-auto flex flex-col md:flex-row justify-center items-center px-10 gap-10'>
        <div className='w-fit text-center flex flex-col justify-center items-center'>
          <h1 className='font-bebasNeue text-5xl mb-2'>What is</h1>
          <img src={flowLogoGreen} className='w-72' alt="" />
        </div>
        <div className='w-full'>
          {
            descriptionData?.map((data) => (
              <h1 key={data?.id} className={`text-center md:text-left xl:text-justify ${data?.id === 0 ? 'font-bold text-lg tracking-wide leading-6 mb-5' : 'text-sm'}`}>{data?.desc}</h1>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Description