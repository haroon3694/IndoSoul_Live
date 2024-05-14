import PrimaryButton from '../global/PrimaryButton'

const ExperienceCard = ({ id, image, logo }: { id:number, image:string, logo:string }) => {
    return (
        <div key={id} className='relative'>
            <img src={image} className='w-full' alt="" />
            <img src={logo} className='w-58 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
            <div className='w-full flex justify-center items-center absolute bottom-10 left-0'>
                <PrimaryButton btnText='KNOW MORE' />
            </div>
        </div>
    )
}

export default ExperienceCard