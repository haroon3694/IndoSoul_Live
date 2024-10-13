import React from 'react'
import SeasonHeader from '../global/SeasonHeader'
import artist_1 from '../../assets/soulsabha/images/artists/square-images/01.png'
import artist_2 from '../../assets/soulsabha/images/artists/square-images/02.png'
import artist_3 from '../../assets/soulsabha/images/artists/square-images/03.png'
import artist_4 from '../../assets/soulsabha/images/artists/square-images/04.png'
import ArtistCard from './ArtistCard'

const PreviousSeason: React.FC = () => {

  const artistData = [
    {
      id: 0,
      image: artist_1,
      title: 'Abiyana',
      season: 'season 01',
      youtubeLink: 'https://youtube.com/@abishen',
      spotifyLink: 'https://youtube.com/@abishen',
    },
    {
      id: 1,
      image: artist_3,
      title: 'Haricharan',
      season: 'season 01',
      youtubeLink: 'https://youtube.com/@haricharanmusic',
      spotifyLink: 'https://youtube.com/@haricharanmusic',
    },
    {
      id: 2,
      image: artist_4,
      title: 'Spoorthi',
      season: 'season 01',
      youtubeLink: 'https://youtube.com/@spoorthirao',
      spotifyLink: 'https://youtube.com/@spoorthirao',
    },
    {
      id: 3,
      image: artist_2,
      title: 'Trichur Brothers',
      season: 'season 01',
      youtubeLink: '',
      spotifyLink: '',
    },
    {
      id: 4,
      image: null,
      title: 'Rajhesh Vaidhya',
      season: 'season 01',
      youtubeLink: 'https://youtube.com/@rajheshvaidhyaofficial',
      spotifyLink: 'https://youtube.com/@rajheshvaidhyaofficial',
    },
  ];

  return (
    <div className='mb-36 px-5'>
      <SeasonHeader text={`from the last season`} styles='bg-clip-text text-transparent bg-gradient-to-r from-[#96d312] to-[#e92f2f] mb-8 tracking-tight' />
      <div className='flex flex-wrap xl:flex-nowrap justify-center items-center gap-16 md:gap-8'>
        {
          artistData?.map((data) => (
            <ArtistCard key={data?.id} data={data} />
          ))
        }
      </div>
    </div>
  )
}

export default PreviousSeason