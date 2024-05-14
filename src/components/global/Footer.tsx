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
            title: 'Instagram'
        },
        {
            id: 0,
            logo: spotify,
            title: 'Spotify'
        },
        {
            id: 0,
            logo: youtube,
            title: 'Youtube'
        },
        {
            id: 0,
            logo: facebook,
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
            <div className='w-fit flex flex-col gap-2'>
                {
                    footerLinks?.map((data) => (
                        <h1 key={data?.id} className='text-md text-white text-center md:text-left uppercase cursor-pointer'>{data?.title}</h1>
                    ))
                }
            </div>
        </div>

        <div className='w-full justify-center md:w-fit flex items-center gap-10 md:gap-5'>
            {
                footerData?.map((data) => (
                    <img src={data?.logo} key={data?.id} className='w-6 cursor-pointer' alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default Footer