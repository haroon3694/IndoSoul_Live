import React from 'react';
import ExperienceCard from './ExperienceCard';
import exp_1 from '../../assets/soulsabha/images/exp_1.png';
import exp_2 from '../../assets/soulsabha/images/exp_2.png';
import exp_3 from '../../assets/soulsabha/images/exp_3.png';
import exp_4 from '../../assets/soulsabha/images/exp_4.png';
import eminem from '../../assets/soulsabha/images/eminem.jpeg';
import kdot from '../../assets/soulsabha/images/kdot.jpeg';
import ye from '../../assets/soulsabha/images/ye.webp';
import SeasonHeader from './SeasonHeader';

const SeasonOne: React.FC = () => {

    const seasonOneRecapData = [
        {
            id: 0,
            image: exp_1,
            content: [
                {
                    id: 0,
                    artistImage: eminem,
                    artistName: 'Eminem',
                    songName: 'Houdini',
                    youtubeLink: 'https://youtu.be/22tVWwmTie8?si=IH_bluynwxpLLARN',
                    spotifyLink: 'https://music.youtube.com/watch?v=WlkVfVX7VQo&si=3xJ5toaz_IfnZMAd',
                },
                {
                    id: 1,
                    artistImage: kdot,
                    artistName: 'Kendric Lammar',
                    songName: 'Not Like Us',
                    youtubeLink: 'https://youtu.be/T6eK-2OQtew?si=folE7LRK5R9StrdS',
                    spotifyLink: 'https://music.youtube.com/watch?v=phLb_SoPBlA&si=UVN5AqnEiPP2dc5i',
                },
                {
                    id: 2,
                    artistImage: eminem,
                    artistName: 'Eminem',
                    songName: 'Doomsday pt. 2',
                    youtubeLink: 'https://youtu.be/Evut8BfrZ2U?si=rzvGLhYGF_g47lXR',
                    spotifyLink: 'https://music.youtube.com/watch?v=30h0mSBX9JY&si=D-cxf0Ukad300DaF',
                },
                {
                    id: 3,
                    artistImage: ye,
                    artistName: 'Kanye West',
                    songName: `Can't tell me nothing!`,
                    youtubeLink: 'https://youtu.be/E58qLXBfLrs?si=x_p4HUYK7YwRCrjC',
                    spotifyLink: 'https://music.youtube.com/watch?v=Vcljvd4Ef_o&si=LsAH10NE0ZtkBdNw',
                },
                {
                    id: 4,
                    artistImage: kdot,
                    artistName: 'Kendric Lammar',
                    songName: 'Not Like Us',
                    youtubeLink: 'https://youtu.be/T6eK-2OQtew?si=folE7LRK5R9StrdS',
                    spotifyLink: 'https://music.youtube.com/watch?v=phLb_SoPBlA&si=UVN5AqnEiPP2dc5i',
                },
                {
                    id: 5,
                    artistImage: eminem,
                    artistName: 'Eminem',
                    songName: 'Doomsday pt. 2',
                    youtubeLink: 'https://youtu.be/Evut8BfrZ2U?si=rzvGLhYGF_g47lXR',
                    spotifyLink: 'https://music.youtube.com/watch?v=30h0mSBX9JY&si=D-cxf0Ukad300DaF',
                },
                {
                    id: 6,
                    artistImage: ye,
                    artistName: 'Kanye West',
                    songName: `Can't tell me nothing!`,
                    youtubeLink: 'https://youtu.be/E58qLXBfLrs?si=x_p4HUYK7YwRCrjC',
                    spotifyLink: 'https://music.youtube.com/watch?v=Vcljvd4Ef_o&si=LsAH10NE0ZtkBdNw',
                },
            ],
            links: '',
        },
        {
            id: 0,
            image: exp_2,
            content: [exp_2, exp_2, exp_2, exp_2, exp_2, exp_2],
            links: '',
        },
        {
            id: 0,
            image: exp_3,
            content: [exp_3, exp_3, exp_3, exp_3, exp_3, exp_3],
            links: '',
        },
        {
            id: 0,
            image: exp_4,
            content: [exp_4, exp_4, exp_4, exp_4, exp_4, exp_4],
            links: '',
        },
    ];

    return (
        <div className='w-full px-72 py-16'>
            <SeasonHeader text={`soul sabha experience`} styles='my-10' />
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-10'>
                {
                    seasonOneRecapData?.map((data) => (
                        <ExperienceCard {...data} key={data?.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default SeasonOne