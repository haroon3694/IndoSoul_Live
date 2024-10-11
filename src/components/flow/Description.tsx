import { descriptionData } from '../../data/flowData'
import flowLogoDark from '../../assets/flow/icons/flowLogoBlack.svg'

const Description = () => {

  return (
    <div className='pt-32 pb-14'>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full text-center flex justify-center items-center'>
          <img src={flowLogoDark} className='w-40' alt="" />
        </div>
      </div>
      <div className='w-full px-10 md:px-20 lg:px-48 xl:px-80 mt-8'>
        {
          descriptionData?.map((data) => (
            <h1 key={data?.id} className={`text-center mb-5 ${data?.id === 0 ? 'font-bold text-lg tracking-wide' : 'text-sm'}`}>{data?.desc}</h1>
          ))
        }
      </div>
    </div>
  )
}

export default Description