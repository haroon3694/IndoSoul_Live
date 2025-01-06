import NavButton from './NavButton'
import { useLocation, useNavigate } from 'react-router'
import SocialMediaIcons from './SocialMediaIcons'
import { findLogo, getNavButtonProps } from '../../utils/helpers'

const Footer = () => {

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const navButtonProps = getNavButtonProps(pathname);

    const handleOpenCalender = () => {
        pathname === '/indo-soul-music' ?
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSckGmjJe8HL8x2mC-W8KQKE894rWzRRJ8Jn2vLVnUNcv25qFg/viewform?usp=send_form", '_blank')
        :
        window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')
    }

    return (
        <>
            {/* desktop footer */}
            <div className={`hidden md:block w-full p-5 ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
                <div className='w-full bg-[#282827] flex justify-between items-center p-5 pr-10 pl-5 rounded-2xl'>
                    <div className='flex gap-10 items-center w-fit'>
                        <img src={findLogo(pathname)} className='w-32 md:w-44' alt="" />
                    </div>
                    <div className='w-full flex justify-center items-center gap-10'>
                        <SocialMediaIcons />
                    </div>
                    <div className='w-fit min-w-32 flex flex-col justify-center items-center gap-1.5'>
                        <p className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none tracking-wider' onClick={() => navigate(`privacy-policy`)}>Privacy Policy</p>
                        <a href="tel:8825859601" className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none mb-1'>+91 88258 59601</a>
                        <NavButton {...navButtonProps} onCLick={handleOpenCalender}/>
                    </div>
                </div>
            </div>

            {/* mobile footer */}
            <div className={`block md:hidden w-full pb-3 px-3 pt-1 sm:p-5 ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
                <div className='w-full bg-[#282827] flex flex-col items-center p-5 sm:p-5 px-7 sm:px-10 rounded-2xl'>
                    <div className='w-full flex justify-center items-center gap-10 mb-10'>
                        <SocialMediaIcons />
                    </div>
                    <div className='w-full flex justify-between items-center gap-1.5'>
                        <span>
                            <p className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none tracking-wider' onClick={() => navigate(`privacy-policy`)}>Privacy Policy</p>
                            <a href="tel:8825859601" className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none mb-1'>+91 88258 59601</a>
                        </span>
                        <NavButton {...navButtonProps} onCLick={handleOpenCalender}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer