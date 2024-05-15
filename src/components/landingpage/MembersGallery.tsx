import { musicianGallery } from '../../data/landingPageData'

const MembersGallery = () => {
    return (
        <>
            <div className='w-full pt-20 md:pt-32 pb-20 hidden md:grid grid-cols-4 gap-4'>
                {
                    musicianGallery?.map((data, i) => (
                        <div key={data?.id} className={`${i === 1 || i === 3 || i === 5 || i === 7 ? '' : 'md:translate-y-16'} group`}>
                            <img src={data?.image} className='w-full object-cover transition-all duration-500 ease-in-out' alt="" />
                        </div>
                    ))
                }
            </div><div className='w-full pt-20 md:pt-32 pb-20 grid md:hidden grid-cols-2 gap-4'>
                {
                    musicianGallery?.slice(0, 4)?.map?.((data, i) => (
                        <div key={data?.id} className={`${i === 1 || i === 3 || i === 5 || i === 7 ? '' : 'md:translate-y-16'} group`}>
                            <img src={data?.image} className='w-full object-cover transition-all duration-500 ease-in-out' alt="" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MembersGallery