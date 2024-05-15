import PrimaryButton from '../global/PrimaryButton'

const ExperienceCard = ({ id, image, logo }: { id:number, image:string, logo:string }) => {
    return (
        <div key={id} className='relative bg-white'>
            <img src={image} className='w-full grayscale ' alt="" />
            <img src={logo} className='w-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
            <div className='w-full flex justify-center items-center absolute bottom-10 left-0'>
                <PrimaryButton btnText='know more' />
            </div>
        </div>
    )
}

export default ExperienceCard