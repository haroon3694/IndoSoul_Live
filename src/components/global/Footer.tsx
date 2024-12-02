import logoIndosoul from '../../assets/indosoul/icons/logo-main.svg'
import logoSoulSabha from '../../assets/soulsabha/icons/logoMainSoulSabha.svg'
import instagramWhite from '../../assets/icons/instagram_white.svg'
import facebookWhite from '../../assets/icons/facebook_white.svg'
import spotifyWhite from '../../assets/icons/spotify_white.svg'
import youtubeWhite from '../../assets/icons/youtube_white.svg'
import instagramDark from '../../assets/icons/instagram_dark.svg'
import facebookDark from '../../assets/icons/facebook_dark.svg'
import spotifyDark from '../../assets/icons/spotify_dark.svg'
import youtubeDark from '../../assets/icons/youtube_dark.svg'
import appleMusic from '../../assets/icons/appleMusic.svg'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'

const Footer = ({ indoSoul, indoSoulStyle, soulSabha, soulSabhaStyle }: { indoSoul?: boolean, indoSoulStyle?: string, soulSabha?: boolean, soulSabhaStyle?: string }) => {

    const socialMedia: {
        indosoul: {
            id: number;
            logo: string;
            link: string;
            title: string;
        }[];
        soulsabha: {
            id: number;
            logo: string;
            link: string;
            title: string;
        }[]
    } = {
        indosoul: [
            {
                id: 0,
                logo: instagramWhite,
                link: 'https://www.instagram.com/indosoullive/?igsh=aGk0Znd6bnVnNWRz&utm_source=qr',
                title: 'Instagram'
            },
            {
                id: 1,
                logo: spotifyWhite,
                link: 'https://open.spotify.com/artist/04czw5AgY218VUkgCtwRv9',
                title: 'Spotify'
            },
            {
                id: 2,
                logo: youtubeWhite,
                link: 'https://www.youtube.com/@IndoSoulLive',
                title: 'Youtube'
            },
            {
                id: 3,
                logo: facebookWhite,
                link: 'https://www.facebook.com/indosoullive?mibextid=hu50Ix',
                title: 'Facebook'
            },
        ],
        soulsabha: [
            {
                id: 0,
                logo: appleMusic,
                link: 'https://music.apple.com/us/album/soul-sabha-season-1/1722636807',
                title: 'Apple Music'
            },
            {
                id: 1,
                logo: instagramDark,
                link: 'https://www.instagram.com/indosoullive/?igsh=aGk0Znd6bnVnNWRz&utm_source=qr',
                title: 'Instagram'
            },
            {
                id: 2,
                logo: spotifyDark,
                link: 'https://open.spotify.com/album/7GMW8oc7PfUdfsQ0TJKshN?si=hoUsHsFbQF2M7o3laMzRyw',
                title: 'Spotify'
            },
            {
                id: 3,
                logo: youtubeDark,
                link: 'https://youtu.be/QehzWUHyQcU?si=Jy058Rf-5PKSvmTJ',
                title: 'Youtube'
            },
            {
                id: 4,
                logo: facebookDark,
                link: 'https://www.facebook.com/indosoullive?mibextid=hu50Ix',
                title: 'Facebook'
            },
        ]
    };

    return (
        <>
            {
                indoSoul ? (
                    <div className={`w-full flex flex-col md:flex-row justify-between relative z-10 px-20 gap-10 md:gap-0 ${indoSoulStyle}`}>
                        <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
                            <img src={logoIndosoul} className='w-32' alt="" />
                        </div>

                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h1 className='text-md text-white'>+91 87544 77925</h1>
                            <PrimaryButton btnText='Talk to us' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
                            <Link className='text-sm text-white uppercase font-clashdisplay tracking-wider' to={`/privacy-policy`}> Privacy Policy</Link>
                            <div className='w-full justify-center md:w-fit flex items-center gap-10 md:gap-5 mt-2'>
                                {
                                    socialMedia?.indosoul?.map((data) => (
                                        <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-6 cursor-pointer' alt="" />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ) : soulSabha ? (
                    <div className={`w-full flex flex-col md:flex-row justify-between relative z-10 px-20 gap-10 md:gap-0 py-10 ${soulSabhaStyle}`}>
                        <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
                            <img src={logoSoulSabha} className='w-32' alt="" />
                        </div>
                        <div className='flex md:hidden flex-col justify-center items-center gap-4 font-semibold text-sm font-clashdisplay'>
                            <h1 className='text-md text-black'>+91 87544 77925</h1>
                            <PrimaryButton btnText='Talk to us' bgColor={`hover:scale-105 bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out`} onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
                        </div>
                        {/* pl-8 in the div below to make it center aligned forcefully */}
                        <div className='flex flex-col justify-end items-center md:pl-8'>
                            <div className='w-fit justify-center flex items-center gap-12 md:gap-20 mt-2'>
                                {
                                    socialMedia?.soulsabha?.map((data) => (
                                        <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-4 md:w-6 cursor-pointer' alt="" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='hidden md:flex flex-col justify-center items-end gap-4 font-semibold text-sm font-clashdisplay'>
                            <h1 className='text-md text-black'>+91 87544 77925</h1>
                            <PrimaryButton btnText='Talk to us' bgColor={`hover:scale-105 bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out`} onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default Footer