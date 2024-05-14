import heroImg from '../../assets/images/landingPageHero.webp'
import logoMain from '../../assets/icons/logo-main.svg'
import PrimaryButton from '../global/PrimaryButton'

const Hero = () => {
    return (
        <div className='w-full relative'>
            <div className="w-full h-screen relative">
                <img src={heroImg} className="w-full h-screen object-cover" alt="" />
                <div className='absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black' />
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-16 w-full px-6'>
                <img src={logoMain} className='w-52' alt="" />
                <div className='text-white text-center flex flex-col items-center md:text-nowrap text-sm gap-3'>
                    <p>Namaste! Thank you for your interest in IndoSoul,</p>
                    <p>a 12-year-old music band that brings together elements of different music genres on the bedrock of Indian classical music.</p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center absolute bottom-44 md:bottom-40 xl:bottom-32 left-0'>
                <PrimaryButton btnText='TALK WITH US' />
            </div>
        </div>
    )
}

export default Hero