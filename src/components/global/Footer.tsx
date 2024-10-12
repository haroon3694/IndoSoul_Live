import logoIndosoul from '../../assets/icons/indosoulLogoMain.svg'
import indoSoulLiveIcon from '../../assets/indosoul/icons/indoSoulLiveFooterLogo.svg'
import logoMainSoulSabhaWhite from '../../assets/soulsabha/icons/logoMainSoulSabhaWhite.svg'
import flowLogo from '../../assets/flow/icons/flowLogo.svg'
import NavButton from './NavButton'
import { useLocation, useNavigate } from 'react-router'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const findLogo = () => {
        if (pathname === '/indo-soul-live') {
            return indoSoulLiveIcon;
        } else if (pathname === '/soul-sabha') {
            return logoMainSoulSabhaWhite;
        } else if (pathname === '/flow') {
            return flowLogo;
        } else {
            return logoIndosoul;
        }
    };

    const findButton = () => {
        if (pathname === '/indo-soul-live') {
            return <NavButton btnText='talk with us' styles='text-white' bgColor='liveRed' />;
        } else if (pathname === '/soul-sabha') {
            return <NavButton btnText='talk with us' styles='text-black' bgColor='soulGreen' />;
        } else if (pathname === '/flow') {
            return <NavButton btnText='talk with us' styles='text-white' bgColor='flowGreen' />;
        } else if (pathname === '/indo-soul-roots') {
            return <NavButton btnText='talk with us' styles='text-black' bgColor='rootsBrown' />;
        } else {
            return <NavButton btnText='talk with us' styles='text-black' bgColor='white' />;
        }
    }

    return (
        <>
            {/* desktop footer */}
            <div className={`hidden md:block w-full p-5 ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
                <div className='w-full bg-[#282827] flex items-center p-5 px-10 rounded-2xl'>
                    <div className='flex gap-10 items-center w-fit'>
                        <img src={findLogo()} className='w-32' alt="" />
                    </div>
                    <div className='w-full flex justify-center items-center gap-10'>
                        <SocialMediaIcons />
                    </div>
                    <div className='w-fit min-w-32 flex flex-col justify-center items-center gap-1.5'>
                        <p className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none tracking-wider' onClick={() => navigate(`privacy-policy`)}>Privacy Policy</p>
                        <a href="tel:8825859601" className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none mb-1'>+91 88258 59601</a>
                        {findButton()}
                    </div>
                </div>
            </div>

            {/* mobile footer */}
            <div className={`block md:hidden w-full p-3 sm:p-5 ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
                <div className='w-full bg-[#282827] flex flex-col items-center gap-10 p-4 sm:p-5 px-7 sm:px-10 rounded-2xl'>
                    <div className='w-full flex gap-10 justify-start items-center mt-5'>
                        <img src={findLogo()} className='w-32' alt="" />
                    </div>
                    <div className='w-full flex justify-start items-center gap-10'>
                        <SocialMediaIcons />
                    </div>
                    <div className='w-full flex justify-between items-center gap-1.5'>
                        <span>
                            <p className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none tracking-wider' onClick={() => navigate(`privacy-policy`)}>Privacy Policy</p>
                            <a href="tel:8825859601" className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none mb-1'>+91 88258 59601</a>
                        </span>
                        {findButton()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer