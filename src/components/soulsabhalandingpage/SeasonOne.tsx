import React from 'react';
import ExperienceCard from './ExperienceCard';
import SeasonHeader from './SeasonHeader';
import CollaborateButton from './CollaborateButton';

import instagramDark from '../../assets/icons/instagram_dark.svg'
import facebookDark from '../../assets/icons/facebook_dark.svg'
import spotifyDark from '../../assets/icons/spotify_dark.svg'
import youtubeDark from '../../assets/icons/youtube_dark.svg'
import appleMusic from '../../assets/icons/appleMusic.svg'

import exp_1 from '../../assets/soulsabha/images/artists/vertical_images/01.png';
import exp_2 from '../../assets/soulsabha/images/artists/vertical_images/02.png';
import exp_3 from '../../assets/soulsabha/images/artists/vertical_images/03.png';
import exp_4 from '../../assets/soulsabha/images/artists/vertical_images/04.png';

import Abinaya from '../../assets/soulsabha/images/artists/table_artists/Abinaya.jpg';
import Haricharan from '../../assets/soulsabha/images/artists/table_artists/Haricharan.jpg';
import trichur from '../../assets/soulsabha/images/artists/table_artists/Trichur-Brothers.jpg';
import Spoorthi from '../../assets/soulsabha/images/artists/table_artists/Spoorthi-Rao.jpg';

import songsImage1 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-01_1000px.jpg'
import songsImage2 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-02_1000px.jpg'
import songsImage3 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-03_1000px.jpg'
import songsImage4 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-04_1000px.jpg'
import songsImage5 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-05_1000px.jpg'
import songsImage6 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-06_1000px.jpg'
import songsImage7 from '../../assets/soulsabha/images/artists/02_card/soulsabha-02_card-07_1000px.jpg'

import liveConcerts1 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-01_1000px.jpg'
import liveConcerts2 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-02_1000px.jpg'
import liveConcerts3 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-03_1000px.jpg'
import liveConcerts4 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-04_1000px.jpg'
import liveConcerts5 from '../../assets/soulsabha/images/artists/03_card/aikiyam-03_card-05_1000px.jpg'

import visualArts1 from '../../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-01_1000px.jpg';
import visualArts2 from '../../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-02_1000px.jpg';
import visualArts3 from '../../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-03_1000px.jpg';
import visualArts4 from '../../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-04_1000px.jpg';
import visualArts5 from '../../assets/soulsabha/images/artists/04_card/music&visualarts-04_card-05_1000px.jpg';

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
                    artistImage: trichur,
                    artistName: 'Trichur Brothers',
                    youtubeLink: '',
                },
                {
                    id: 4,
                    artistImage: '',
                    artistName: 'Rajhesh Vaidhya',
                    youtubeLink: 'https://youtube.com/@rajheshvaidhyaofficial',
                },
            ],
            links: '',
        },
        {
            id: 1,
            image: exp_2,
            title: 'Listening Sessions',
            content: [songsImage1, songsImage2, songsImage3, songsImage4, songsImage5, songsImage6, songsImage7],
            links: '',
        },
        {
            id: 2,
            image: exp_3,
            title: 'Live Concerts',
            content: [liveConcerts1, liveConcerts2, liveConcerts3, liveConcerts4, liveConcerts5],
            links: '',
        },
        {
            id: 3,
            image: exp_4,
            title: 'Music & Visual Arts',
            content: [visualArts1, visualArts2, visualArts3, visualArts4, visualArts5],
            links: '',
        },
    ];

    const socialMediaData = [
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

    return (
        <div className='w-full px-5 sm:px-10  2xl:px-60 py-16'>
            <SeasonHeader text={`soul sabha experience`} styles='my-10' />
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-10 mb-24'>
                {
                    seasonOneRecapData?.map((data) => (
                        <ExperienceCard {...data} key={data?.id} />
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mb-16'>
                <CollaborateButton text='collaborate with us' styles='' onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Oy2TFgjxR4qp0qcY_WHvf_woG_VGqWEdygUfyDpSAEOXfseze-9WW1KUBLE3MS5hbQsJhnCMg", '_blank')} />
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