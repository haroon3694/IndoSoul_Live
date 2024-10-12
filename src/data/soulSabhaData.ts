import { DescriptionDataType, SeasonTwoDataType, SocialMediaDataType, SoulSabhaExperienceDataType, SoulSabhaGalleryImagesType, SoulSabhaHeroImagesType } from '../types/soulSabhaTypes'
import heroImg1 from '../assets/soulsabha/images/heroimages/heroImage1.png'
import heroImg2 from '../assets/soulsabha/images/heroimages/heroImage2.jpg'
import heroImg3 from '../assets/soulsabha/images/heroimages/heroImage3.jpg'

import songsImage1 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-01_1000px.jpg'
import songsImage2 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-02_1000px.jpg'
import songsImage3 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-03_1000px.jpg'
import songsImage4 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-04_1000px.jpg'
import songsImage5 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-05_1000px.jpg'
import songsImage6 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-06_1000px.jpg'
import songsImage7 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-07_1000px.jpg'

import visualArtsImage1 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-01_1000px.jpg'
import visualArtsImage2 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-02_1000px.jpg'
import visualArtsImage3 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-03_1000px.jpg'
import visualArtsImage4 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-04_1000px.jpg'
import visualArtsImage5 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-05_1000px.jpg'

import exp_1 from '../assets/soulsabha/images/artists/vertical_images/01.png';
import exp_2 from '../assets/soulsabha/images/artists/vertical_images/02.png';
import exp_3 from '../assets/soulsabha/images/artists/vertical_images/03.png';
import exp_4 from '../assets/soulsabha/images/artists/vertical_images/04.png';

import Abinaya from '../assets/soulsabha/images/artists/table_artists/Abinaya.jpg';
import Haricharan from '../assets/soulsabha/images/artists/table_artists/Haricharan.jpg';
import trichur from '../assets/soulsabha/images/artists/table_artists/Trichur-Brothers.jpg';
import Spoorthi from '../assets/soulsabha/images/artists/table_artists/Spoorthi-Rao.jpg';

import songsImageSingle1 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-01_1000px.jpg'
import songsImageSingle2 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-02_1000px.jpg'
import songsImageSingle3 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-03_1000px.jpg'
import songsImageSingle4 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-04_1000px.jpg'
import songsImageSingle5 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-05_1000px.jpg'
import songsImageSingle6 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-06_1000px.jpg'
import songsImageSingle7 from '../assets/soulsabha/images/artists/02_card/soulsabha-02_card-07_1000px.jpg'

import visualArtsImageSingle1 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-01_1000px.jpg'
import visualArtsImageSingle2 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-02_1000px.jpg'
import visualArtsImageSingle3 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-03_1000px.jpg'
import visualArtsImageSingle4 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-04_1000px.jpg'
import visualArtsImageSingle5 from '../assets/soulsabha/images/artists/03_card/aikiyam-03_card-05_1000px.jpg'

import instagramDark from '../assets/icons/instagram_dark.svg'
import facebookDark from '../assets/icons/facebook_dark.svg'
import spotifyDark from '../assets/icons/spotify_dark.svg'
import youtubeDark from '../assets/icons/youtube_dark.svg'
import appleMusic from '../assets/icons/appleMusic.svg'

export const soulSabhaHeroImages: SoulSabhaHeroImagesType[] = [
  {
      id: 0,
      image: heroImg1,
      title: '',
  },
  {
      id: 1,
      image: heroImg2,
      title: '',
  },
  {
      id: 2,
      image: heroImg3,
      title: '',
  },
];

export const soulSabhaGalleryImages: SoulSabhaGalleryImagesType = {
  listiningSongsImages: [
    songsImage1,
    songsImage5,
    songsImage4,
    songsImage7,
    songsImage2,
    songsImage6,
    songsImage3,
  ],
  visualArtsImages: [
    visualArtsImage1,
    visualArtsImage4,
    visualArtsImage2,
    visualArtsImage5,
    visualArtsImage3,
  ],
};

export const descriptionData: DescriptionDataType[] = [
  {
      id: 0,
      desc: 'Soul Sabha is a special musical video concept by IndoSoul that seeks to take our age old Carnatic music across to a wider audience and younger generations.',
  },
  {
      id: 1,
      desc: 'We aim to create a space where traditional music blends with global influences while preserving its essence and integrity culminating in a unique musical experience. Our vision is to bridge cultural divides and celebrate the rich heritage of Indian music, especially through the lens of South Indian traditions.',
  },
  {
      id: 2,
      desc: `Soul Sabha is all about collaborations with artist and musicians from the traditional space from all over India, SoulSabha isn't just   about music—it's about building a community of artists and music enthusiasts.`,
  },
];

export const soulSabhaExperienceData: SoulSabhaExperienceDataType[] = [
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
      content: [songsImageSingle1, songsImageSingle2, songsImageSingle3, songsImageSingle4, songsImageSingle5, songsImageSingle6, songsImageSingle7],
      links: '',
  },
  {
      id: 2,
      image: exp_3,
      title: 'Live Concerts',
      content: [visualArtsImageSingle1, visualArtsImageSingle2, visualArtsImageSingle3, visualArtsImageSingle4, visualArtsImageSingle5],
      links: '',
  },
  {
      id: 3,
      image: exp_4,
      title: 'Music & Visual Arts',
      content: [''],
      links: '',
  },
];

export const seasonTwoData: SeasonTwoDataType = {
  intro: [
      {
          id: 0,
          text: 'Join us for the upcoming season of Soul Sabha featuring collaborations with talented artists from across India. Stay tuned for our schedule of listening sessions, live concerts by following us on social media platforms and subscribe to our newsletter.',
      },
      {
          id: 2,
          text: 'Become a part of the SS Community and join us as we celebrate the timeless beauty of Indian Classical music in our unique way!',
      },
  ],
  seasonContent: [
      {
          id: 0,
          title: 'Performer',
          link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
      },
      {
          id: 1,
          title: 'Sponsor',
          link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
      },
      {
          id: 2,
          title: 'Listener',
          link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
      },
      {
          id: 3,
          title: 'CREW',
          link: 'https://forms.gle/Jhy7myf7Gadv8KG49',
      },
  ],
};

export const socialMediaData: SocialMediaDataType[] = [
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
];