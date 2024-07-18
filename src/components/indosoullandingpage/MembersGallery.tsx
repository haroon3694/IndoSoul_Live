import { musicianGallery } from '../../data/landingPageDataIndoSoul'

const MembersGallery = () => {
    return (
        <div className='w-full'>
            <div className='w-full pt-20 md:pt-32 pb-20 hidden md:grid grid-cols-4 gap-4 px-0 md:px-20'>
                {
                    musicianGallery?.map((data, i) => (
                        <div key={data?.id} className={`${i % 2 !== 0 ? '' : 'md:translate-y-16'} group`}>
                            <img src={data?.image} className='w-full object-cover transition-all duration-500 ease-in-out rounded-xl' alt="" />
                        </div>
                    ))
                }
            </div>
            {/* <div className='w-full flex justify-center items-center md:mt-24 mb-90'>
                <PrimaryButton btnText='VIEW MORE' />
            </div> */}
        </div>
    )
}

export default MembersGallery