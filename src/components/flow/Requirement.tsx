import BackgroundImageContainer from '../global/BackgroundImageContainer'
import PrimaryButton from '../global/PrimaryButton'
import bgImage from '../../assets/flow/images/getInTouch.png'

const Requirement = () => {
  return (
    <div className='mb-20 md:mb-36'>
      <BackgroundImageContainer backgroundImage={bgImage}>
        <div className='flex flex-col justify-center items-center min-h-[35vh] gap-8'>
          <h1 className='text-xl font-bold text-center px-2 text-white'>Have a musical requirement? Get in touch with our <span>team!</span></h1>
          <PrimaryButton btnText='click here' styles='text-2xl tracking-[2px] bg-[#0FA677] text-white' shadow shadowStyles='bg-[#0FA677]' />
        </div>
      </BackgroundImageContainer>
    </div>
  )
}

export default Requirement