import logoMain from '../../assets/icons/logo-main.svg'

import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import spotify from '../../assets/icons/spotify.svg'
import youtube from '../../assets/icons/youtube.svg'

const Footer = () => {

    const footerData = [
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

    const footerLinks = [
        {
            id: 0,
            link: '#',
            title: 'home',
        },
        {
            id: 1,
            link: '#',
            title: 'about',
        },
        {
            id: 2,
            link: '#',
            title: 'bookings',
        },
        {
            id: 3,
            link: '#',
            title: 'contact',
        },
    ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-between relative z-10 px-20 gap-10 md:gap-0">
        <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
            <img src={logoMain} className='w-32' alt="" />
            {/* <div className='w-fit flex flex-col gap-4 md:gap-2 font-clashdisplay tracking-widest'>
                {
                    footerLinks?.map((data) => (
                        <h1 key={data?.id} className='text-sm md:text-md text-white text-center md:text-left uppercase cursor-pointer'>{data?.title}</h1>
                    ))
                }
            </div> */}
        </div>

        <div className='w-full justify-center md:w-fit flex items-center gap-10 md:gap-5'>
            {
                footerData?.map((data) => (
                    <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-6 cursor-pointer' alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default Footer