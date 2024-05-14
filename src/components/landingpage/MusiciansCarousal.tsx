import musiciansHeading from '../../assets/icons/musicians.svg'
import { ourCareerData } from '../../data/landingPageData'
import PrimaryButton from '../global/PrimaryButton'

const MusiciansCarousal = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center pb-20'>
                <img src={musiciansHeading} className='w-62 z-10' alt="" />
            </div>
            {
                ourCareerData?.musicians?.map((data) => (
                    <div key={data?.id} className='w-[90%] md:w-[70%] text-justify mx-auto flex items-center text-white'>
                        <div className='w-full flex flex-col md:flex-row gap-20 items-center'>
                            <div className='w-fit'>
                                <img src={data?.image} className='w-90' alt="" />
                            </div>
                            <div className='w-fit flex flex-col gap-4'>
                                <h1 className='text-4xl'>{data?.title}</h1>
                                <p>{data?.about}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='w-full flex justify-center items-center pt-14 md:pt-20 pb-20'>
                <PrimaryButton btnText='TALK WITH US' />
            </div>
        </div>
    )
}

export default MusiciansCarousal