import logoMain from '../../assets/icons/logo-main.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import spotify from '../../assets/icons/spotify.svg'
import youtube from '../../assets/icons/youtube.svg'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'

const Footer = ({ indoSoulStyle }: { indoSoulStyle?: string }) => {

    const footerData: {
        id: number;
        logo: string;
        link: string;
        title: string;
    }[] = [
        {
            id: 0,
            logo: instagram,
            link: 'https://www.instagram.com/indosoullive/?igsh=aGk0Znd6bnVnNWRz&utm_source=qr',
            title: 'Instagram'
        },
        {
            id: 0,
            logo: spotify,
            link: 'https://open.spotify.com/artist/04czw5AgY218VUkgCtwRv9',
            title: 'Spotify'
        },
        {
            id: 0,
            logo: youtube,
            link: 'https://www.youtube.com/@IndoSoulLive',
            title: 'Youtube'
        },
        {
            id: 0,
            logo: facebook,
            link: 'https://www.facebook.com/indosoullive?mibextid=hu50Ix',
            title: 'Facebook'
        },
    ];
    
    return (
        <div className={`w-full flex flex-col md:flex-row justify-between relative z-10 px-20 gap-10 md:gap-0 ${indoSoulStyle}`}>
            <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
                <img src={logoMain} className='w-32' alt="" />
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-md text-white'>+91 88258 59601</h1>
                <PrimaryButton btnText='Talk to us' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
                <Link to={`/privacy-policy`} className='text-md font-clashdisplay text-white'>Privacy Policy</Link>
                <div className='w-full justify-center md:w-fit flex items-center gap-10 md:gap-5 mt-2'>
                    {
                        footerData?.map((data) => (
                            <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-6 cursor-pointer' alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer