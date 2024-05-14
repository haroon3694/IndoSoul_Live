import { musicianGallery } from '../../data/landingPageData'

const MembersGallery = () => {
    return (
        <div className='w-full pt-20 md:pt-32 pb-20 grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                musicianGallery?.map((data, i) => (
                    <div key={data?.id} className={`${i === 1 || i === 3 || i === 5 || i === 7 ? '' : 'md:translate-y-16'}`}>
                        <img src={data?.image} className='w-full object-cover' alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default MembersGallery