import rootsLogo from '../../assets/indosoulroots/icons/roots-logo.svg'

const Description = () => {

  const descriptionData = [
    {
      id: 0,
      desc: `Indosoul Roots showcases the band Indosoul's original compositions dating back to their inception in 2012.`,
    },
    {
      id: 1,
      desc: `Drawing from strong Carnatic roots yet influenced by diverse global sounds, Roots represents Indosoul's most cherished genre of music, uniting the band with passion and purpose.`,
    },
    {
      id: 2,
      desc: `The repertoire includes a variety of compositions, spanning from traditional Carnatic Kritis such as Raghuvamsa Sudha and Akhilandeswari, to highly acclaimed originals like Clown's Junket and At The Theatres that have captivated audiences to energetic pieces such as Bienvenido A Mylapore and Timelapse to Infinity that get the audience grooving along with the musicians on stage.`,
    },
    {
      id: 3,
      desc: `As part of Indosoul Roots, the band has released four albums over the years, many of which have amassed millions of views. They have toured globally with these albums, notably undertaking two US tours in 2016 and 2017, performing at events like Tomorrow's India Concert in Singapore, MILFF Festival in Malaysia, and the Harvard Tamil Sangam Concert in Colombo, among others. In India, the band has showcased their independent music extensively, participating in events such as the Hindu Food Festival, the multi-city Park Festival hosted by Park Hotels, IIT Sarang Classical Night, November Fest by Hindu, the Grover Wine Festival in Bangalore, and most recently their At the Theatres multi-city tour in 2024 unanimously enthralling audience & moving them with their music.`,
    },
    {
      id: 4,
      desc: `Indosoul Roots performances hold a special place in music festivals and indie music venues where there is a deep appreciation for creating original, independent music.`,
    },
  ];

  return (
    <div className='pt-16 pb-20'>
      <div className="w-full flex justify-center items-center mb-20 px-10">
        <img src={rootsLogo} className='w-full max-w-[800px]' alt="" />
      </div>
      <div className='w-full px-10 md:px-20 lg:px-48 xl:px-80 mt-5'>
        {
          descriptionData?.map((data) => (
            <h1 key={data?.id} className={`text-center mb-5 ${data?.id === 0 ? 'font-bold text-lg tracking-wide' : 'text-sm'}`}>{data?.desc}</h1>
          ))
        }
      </div>
    </div>
  )
}

export default Description