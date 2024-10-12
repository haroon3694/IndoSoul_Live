import React from 'react'
import instagramWhite from '../../assets/icons/instagram_white.svg'
import facebookWhite from '../../assets/icons/facebook_white.svg'
import spotifyWhite from '../../assets/icons/spotify_white.svg'
import youtubeWhite from '../../assets/icons/youtube_white.svg'

const SocialMediaIcons: React.FC = () => {

  const socialMedia: {
    id: number;
    logo: string;
    link: string;
    title: string;
  }[] = [
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
    ];

  return (
    <div className='w-fit justify-center md:w-fit flex items-center gap-10 md:gap-20'>
      {
        socialMedia?.map((data) => (
          <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-6 cursor-pointer' alt="" />
        ))
      }
    </div>
  )
}

export default SocialMediaIcons