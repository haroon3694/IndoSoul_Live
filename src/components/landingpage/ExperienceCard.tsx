import { useState } from 'react'
import cross from '../../assets/icons/cross.svg'
import PrimaryButton from '../global/PrimaryButton'

const ExperienceCard = ({ id, image, logo, content, heading}: { id: number, image: string, logo: string, content: string[], heading: string}) => {

    const [viewPopUp, setViewPopUp] = useState(false);

    return (
        <>
            <div onClick={() => setViewPopUp(true)} key={id} className='relative group overflow-hidden rounded-md'>
                <img src={image} className='w-full group-hover:scale-150 group-hover:blur-sm transition-all duration-500 ease-in-out' alt="" />
                <div className='px-2'>
                    <img src={logo} className={`w-36 md:w-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} alt="" />
                </div>
                <div className='w-full flex justify-center items-center absolute bottom-10 left-0'>
                    <PrimaryButton btnText='know more'  />
                </div>
            </div>
            <div className={`${viewPopUp ? 'flex' : 'hidden'} w-full fixed bg-black bg-opacity-10 justify-center items-center h-screen inset-0 z-20 px-5`} onClick={() => setViewPopUp(false)}>
                <div className='w-full max-w-[1100px] rounded-lg glass-morphism relative py-16 md:py-10 overflow-hidden z-50'>
                    <div className='h-[70vh] md:h-[60vh] px-10 lg:px-20 overflow-y-scroll'>
                        <div className='w-full flex justify-center items-center '>
                            <img src={logo} className={`w-36 md:w-52`} alt="" />
                        </div>
                        <h1 className='text-[1.6rem] text-[red] font-bold'>{heading}</h1>
                        <div className='w-full py-10 flex flex-col gap-6'>
                            {
                                content?.map((data) => (
                                    <p key={data} className='text-sm text-white'>{data}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-fit absolute top-5 right-7'>
                        <img src={cross} className='w-10' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard