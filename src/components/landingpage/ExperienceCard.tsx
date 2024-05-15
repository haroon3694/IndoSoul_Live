import PrimaryButton from '../global/PrimaryButton'

const ExperienceCard = ({ id, image, logo }: { id: number, image: string, logo: string }) => {
    return (
        <div key={id} className='relative group overflow-hidden rounded-md'>
            <img src={image} className='w-full group-hover:scale-150 group-hover:blur-sm transition-all duration-500 ease-in-out' alt="" />
            <div className='px-2'>
                <img src={logo} className={`w-36 md:w-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} alt="" />
            </div>
            <div className='w-full flex justify-center items-center absolute bottom-10 left-0'>
                <PrimaryButton btnText='know more' />
            </div>
        </div>
    )
}

export default ExperienceCard