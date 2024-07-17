import React from 'react';
import ExperienceCard from './ExperienceCard';
import exp_1 from '../../assets/soulsabha/images/exp_1.png';
import exp_2 from '../../assets/soulsabha/images/exp_2.png';
import exp_3 from '../../assets/soulsabha/images/exp_3.png';
import exp_4 from '../../assets/soulsabha/images/exp_4.png';
import Abinaya from '../../assets/soulsabha/images/Abinaya.jpg';
import Haricharan from '../../assets/soulsabha/images/Haricharan.jpg';
import Spoorthi from '../../assets/soulsabha/images/Spoorthi-Rao.jpg';
import SeasonHeader from './SeasonHeader';
import CollaborateButton from './CollaborateButton';
import instagramDark from '../../assets/icons/instagram_dark.svg'
import facebookDark from '../../assets/icons/facebook_dark.svg'
import spotifyDark from '../../assets/icons/spotify_dark.svg'
import youtubeDark from '../../assets/icons/youtube_dark.svg'
import appleMusic from '../../assets/icons/appleMusic.svg'

const SeasonOne: React.FC = () => {

    const seasonOneRecapData = [
        {
            id: 0,
            image: exp_1,
            title: 'Watch & Listen',
            content: [
                {
                    id: 0,
                    artistImage: Abinaya,
                    artistName: 'Abiyana',
                    youtubeLink: 'https://youtube.com/@abishen',
                },
                {
                    id: 1,
                    artistImage: Haricharan,
                    artistName: 'Haricharan',
                    youtubeLink: 'https://youtube.com/@haricharanmusic',
                },
                {
                    id: 2,
                    artistImage: Spoorthi,
                    artistName: 'Spoorthi',
                    youtubeLink: 'https://youtube.com/@spoorthirao',
                },
                {
                    id: 3,
                    artistImage: '',
                    artistName: 'Trichur Brothers',
                    youtubeLink: 'https://youtu.be/E58qLXBfLrs?si=x_p4HUYK7YwRCrjC',
                },
            ],
            links: '',
        },
        {
            id: 0,
            image: exp_2,
            title: 'Listening Sessions',
            content: [exp_2, exp_2, exp_2, exp_2, exp_2, exp_2],
            links: '',
        },
        {
            id: 0,
            image: exp_3,
            title: 'Live Concerts',
            content: [exp_3, exp_3, exp_3, exp_3, exp_3, exp_3],
            links: '',
        },
        {
            id: 0,
            image: exp_4,
            title: 'Music & Visual Arts',
            content: [exp_4, exp_4, exp_4, exp_4, exp_4, exp_4],
            links: '',
        },
    ];

    const socialMediaData = [
        {
            id: 0,
            logo: appleMusic,
            link: 'https://www.instagram.com/indosoullive/?igsh=aGk0Znd6bnVnNWRz&utm_source=qr',
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
            link: 'https://open.spotify.com/artist/04czw5AgY218VUkgCtwRv9',
            title: 'Spotify'
        },
        {
            id: 3,
            logo: youtubeDark,
            link: 'https://www.youtube.com/@IndoSoulLive',
            title: 'Youtube'
        },
        {
            id: 4,
            logo: facebookDark,
            link: 'https://www.facebook.com/indosoullive?mibextid=hu50Ix',
            title: 'Facebook'
        },
    ]

    return (
        <div className='w-full px-10 md:px-20 lg:px-48 xl:px-72 py-16'>
            <SeasonHeader text={`soul sabha experience`} styles='my-10' />
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-10 mb-24'>
                {
                    seasonOneRecapData?.map((data) => (
                        <ExperienceCard {...data} key={data?.id} />
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mb-16'>
                <CollaborateButton text='collaborate with us' styles='' />
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[300px] justify-between flex items-center mt-2'>
                    {
                        socialMediaData?.map((data) => (
                            <img src={data?.logo} onClick={() => window.open(data.link, '_blank')} key={data?.id} className='w-6 cursor-pointer' alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SeasonOne