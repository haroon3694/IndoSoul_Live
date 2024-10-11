import React from 'react'
import karthikIyer from '../../assets/aboutus/images/karthikiyer.png'
import PrimaryButton from '../global/PrimaryButton'

const AboutKarthikIyer: React.FC = () => {
  return (
    <>
    <div className={`w-full h-screen bg-cover bg-center relative mb-32 px-10 hidden md:flex justify-center items-end`} style={{ backgroundImage: `url(${karthikIyer})`}}>
      <div className='md:absolute top-1/2 -translate-y-1/2 left-60 max-w-[600px]'>
        <h1 className='text-5xl font-bebasNeue text-white mb-5'>ABOUT KARTHIK IYER</h1>
        <p className='text-lg text-white mb-7'>With over 25 years of practicing the Acoustic & Electric violin, Karthick Iyer started out as a carnatic violinist. He founded IndoSoul, a Carnatic contemporary band that has gained over 20 million views on social media. IndoSoul has released four albums and toured widely, bringing their unique sound to diverse audiences. Karthick has also worked with top music directors like A.R. Rahman and performed at major events worldwide. He is now getting ready for a tour in the USA and Canada in May-June 2024.</p>
        <PrimaryButton btnText='Read More' styles='bg-aboutUsRed text-white text-xl'  />
      </div>
    </div>

    <div className={`w-full h-[70vh] relative mb-32 flex md:hidden justify-center items-end`}>
      <img src={karthikIyer} className='w-full h-full object-cover object-center' alt="" />
      <div className='absolute top-1/2 -translate-y-1/2  max-w-[600px] p-2'>
        <h1 className='text-5xl font-bebasNeue text-white mb-5'>ABOUT KARTHIK IYER</h1>
        <p className='text-lg text-white mb-7'>With over 25 years of practicing the Acoustic & Electric violin, Karthick Iyer started out as a carnatic violinist. He founded IndoSoul, a Carnatic contemporary band that has gained over 20 million views on social media. IndoSoul has released four albums and toured widely, bringing their unique sound to diverse audiences. Karthick has also worked with top music directors like A.R. Rahman and performed at major events worldwide. He is now getting ready for a tour in the USA and Canada in May-June 2024.</p>
        <PrimaryButton btnText='Read More' styles='bg-aboutUsRed text-white text-xl'  />
      </div>
    </div>
    </>
  )
}

export default AboutKarthikIyer