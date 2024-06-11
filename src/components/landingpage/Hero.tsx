import hero from '../../assets/images/hero_landing.jpg'
import logoMain from '../../assets/icons/logo-main.svg'
import PrimaryButton from '../global/PrimaryButton'

const Hero = () => {
    return (
        <div className='w-full relative'>
            <div className="w-full h-screen relative">
                <img src={hero} className="w-full h-screen object-cover object-bottom" alt="" />
                <div className='absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black' />
            </div>
            <div className='absolute top-1/2 -translate-y-[50%] md:-translate-y-[40%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-10 w-full px-6'>
                <img src={logoMain} className='w-52 md:w-60 pt-50' alt="" />
                <div className='text-white flex flex-col items-center xl:text-nowrap text-md md:text-lg xl:text-xl md:gap-2 text-center'>
                    <div className='text-[1.6rem] font-extralight'>Signature Music Experiences for Every Occasion</div>
                    <div className='w-full flex justify-center items-center pt-20 md:pt-5'>
                        <PrimaryButton btnText='Talk with us' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero