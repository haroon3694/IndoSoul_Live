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
import navnaeeth from '../assets/academyofmusic/images/educators/navneeth.png'

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
    desc: "G. Sreenivaasan has been learning Carnatic Music for the past 15 years and holds degrees in Masters of Music (Carnatic Violin), Bachelor's in Music (Carnatic Vocal), and Bachelor's in Visual Communication."
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
    desc: `Aditya, currently heading the Indosoul Academy of Music has his roots in Carnatic music. "Making classical music fun to learn" is one of the principles he abides by. The co-founding member of Chennai's first electric violin duo band - Resound, Aditya has performed across India.`
  },
  {
    id: 3,
    artistName: "Venkat",
    image: venkat,
    desc: `Karaikal S. Venkatasubramanian is a versatile musician trained by his mother, Smt Hema Sivasubramanian, and violin virtuoso Prof T.N. Krishnan. He has performed worldwide as a soloist, accompanist for Carnatic concerts, fusion shows, and dance performances. Venkatasubramanian also teaches music, conducts seminars, and composes. He has received numerous awards, including the "Vaani Kalaa Nipunaa" from Sri Thyaga Brahma Gaana Sabha, Vani Mahal, and holds master's degrees in music and information technology.`
  },
  {
    id: 4,
    artistName: "Heemanth",
    image: hemanth,
    desc: "Hemanthraj Muliyil grew up in Calicut, Kerala, and graduated from Malabar Christian College in 1974. He became a professional violinist in 1970, accompanying leading playback singers and playing at major concerts. As a member of the Calicut Musical Association, he was trained by conductor and pianist Lancelot Thomas and performed major classical works for violin and piano. In 1982, he moved to Chennai and joined the film industry, playing for maestros like Illayaraja, A.R. Rahman, and other leading music directors in India. He was part of the Madras Philharmonic and Choral Society and the Madras String Quartet, performing across India, Singapore, and the UK, and collaborating on albums with international artists like Gill Apap and John Keishwan."
  },
  {
    id: 5,
    artistName: "Navneeth",
    image: navnaeeth,
    desc: "Navaneeth Swaminathan is a professional violinist with extensive experience teaching Carnatic and Western music to students worldwide. He is a Grade 8 Western Violinist from Trinity College of Music, London, and a seasoned performing and recording artist who has traveled across India for high-profile events, collaborating with top musicians, artists, and bands. Navaneeth is also the co-founder and lead violinist of “Resound The Violin Duo,” Chennai's first electric violin duo, and heads the “NS Collective,” a Carnatic instrumental fusion band based in Chennai."
  }
];