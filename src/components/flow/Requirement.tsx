import BackgroundImageContainer from '../global/BackgroundImageContainer'
import PrimaryButton from '../global/PrimaryButton'
import bgImage from '../../assets/flow/images/getInTouch.png'

const Requirement = () => {
  return (
    <div className='mb-20 md:mb-36'>
      <BackgroundImageContainer backgroundImage={bgImage}>
        <div className='flex flex-col justify-center items-center min-h-[35vh] gap-6'>
          <h1 className='text-xl leading-7 font-semibold text-center px-2 text-white'>Have a musical requirement? <br /> Get in touch with our <span>team!</span></h1>
          <PrimaryButton btnText='click here' styles='text-2xl tracking-[2px] bg-[#0FA677] text-white' shadow shadowStyles='bg-[#0FA677]' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
        </div>
      </BackgroundImageContainer>
    </div>
  )
}

export default Requirement