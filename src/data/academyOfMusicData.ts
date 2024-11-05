import music_1 from '../assets/academyofmusic/images/gallery/01.png'
import music_2 from '../assets/academyofmusic/images/gallery/02.png'
import music_3 from '../assets/academyofmusic/images/gallery/03.png'
import music_4 from '../assets/academyofmusic/images/gallery/04.png'
import music_5 from '../assets/academyofmusic/images/gallery/05.png'
import music_6 from '../assets/academyofmusic/images/gallery/06.png'
import music_7 from '../assets/academyofmusic/images/gallery/07.png'
import music_8 from '../assets/academyofmusic/images/gallery/08.png'
import music_9 from '../assets/academyofmusic/images/gallery/09.png'
import music_10 from '../assets/academyofmusic/images/gallery/10.png'

import aditya from '../assets/academyofmusic/images/educators/aditya.png'
import aniruddha from '../assets/academyofmusic/images/educators/aniruddha.png'
import ganesh from '../assets/academyofmusic/images/educators/ganesh.png'
import venkat from '../assets/academyofmusic/images/educators/venkat.png'
import hemanth from '../assets/academyofmusic/images/educators/hemanth.png'
import navneet from '../assets/academyofmusic/images/educators/navneet.png'
import karthik from '../assets/academyofmusic/images/educators/karthik.png'

import { MusicianGalleryType } from '../types/globalTypes'

export const musicianGallery: MusicianGalleryType = {
  leftToRight: [
    music_1,
    music_2,
    music_3,
    music_4,
    music_5,
    music_6,
    music_7,
    music_8,
    music_9,
    music_10,
  ],
  rightToLeft: [
    music_2,
    music_6,
    music_4,
    music_3,
    music_1,
    music_9,
    music_10,
    music_5,
    music_7,
    music_8,
  ],
};

export const educators = [
  {
    id: 0,
    artistName: "Sreenivasan Ganesh",
    image: ganesh,
    desc: "G. Sreenivaasan has been learning Carnatic Music for the past 15 years and have been featured on TV channels like Podhigai, Sun, and Jaya, as well as on the 'IndianRaga' YouTube channel. Sreenivaasan is a full-time musician, music tutor, performer, recording artist, music programmer, and composer."
  },
  {
    id: 1,
    artistName: "Aniruddha",
    image: aniruddha,
    desc: "H.R. Aniruddha Ram is a disciple of eminent Carnatic violinists Vid. Sri C.N. Chandrashekar and Sri Kumaresh. With 10 years of violin practice, he is working on integrating Carnatic music with genres such as Western, rock, metal, and contemporary world music."
  },
  {
    id: 2,
    artistName: "Aditya",
    image: aditya,
    desc: `Aditya, currently heading the Indosoul Academy of Music has his roots in Carnatic music. "Making classical music fun to learn" is one of the principles he abides by. The co-founding member of Chennai's first electric violin duo band - Resound.
`
  },
  {
    id: 3,
    artistName: "Venkat",
    image: venkat,
    desc: `Karaikal S. Venkatasubramanian is a versatile musician trained by his mother, Smt Hema Sivasubramanian, and violin virtuoso Prof T.N. Krishnan. He has received numerous awards, including the "Vaani Kalaa Nipunaa" from Sri Thyaga Brahma Gaana Sabha, Vani Mahal.`
  },
  {
    id: 4,
    artistName: "Heemanth",
    image: hemanth,
    desc: "Hemanthraj Muliyil grew up in Calicut, Kerala, and as a member of the Calicut Musical Association, he was trained by conductor and pianist Lancelot Thomas. In 1982, he moved to Chennai and joined the film industry, playing for maestros like Illayaraja, A.R. Rahman, and other leading music directors in India"
  },
  {
    id: 5,
    artistName: "Navneeth",
    image: navneet,
    desc: "Navaneeth Swaminathan is a professional violinist with extensive experience teaching Carnatic and Western music to students worldwide. He is a Grade 8 Western Violinist from Trinity College of Music, London, and is also the co-founder and lead violinist of “Resound The Violin Duo”."
  },
  {
    id: 6,
    artistName: "Karthik",
    image: karthik,
    desc: "With over 25 years of practicing the Acoustic & Electric violin, Karthick Iyer started out as a carnatic violinist. He founded IndoSoul, a Carnatic contemporary band releasing four albums in 10 years and has worked with top music directors like A.R. Rahman."
  },
];