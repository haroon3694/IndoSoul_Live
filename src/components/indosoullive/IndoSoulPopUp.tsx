import PrimaryButton from '../../components/global/PrimaryButton';
import cross from '../../assets/icons/cross.svg'

const IndoSoulPopUp = ({ viewPopUp, setViewPopUp, data }: { viewPopUp: boolean, setViewPopUp: (viewPopUp: boolean) => void, data: any }) => {
  return (
    <div className={`${viewPopUp ? 'flex' : 'hidden'} w-full fixed bg-black bg-opacity-10 justify-center items-center h-screen inset-0 z-20 px-5`} onClick={() => setViewPopUp(false)}>
      <div className='w-full max-w-[1100px] rounded-lg glass-morphism relative py-16 md:py-10 overflow-hidden z-50 mt-10'>
        <div className='h-[70vh] md:h-[60vh] px-10 lg:px-20 overflow-y-scroll'>
          <div className='w-full flex justify-center items-center '>
            <img src={data?.logo} className={`w-36 md:w-52`} alt="" />
          </div>
          <div className='w-full py-10 flex flex-col gap-6'>
            {
              data?.content?.map((sub_data: any) => (
                <p key={sub_data} className='text-sm text-white'>{sub_data}</p>
              ))
            }
          </div>
          <div className='w-full h-0.5 bg-white' />
        </div>
        <div className='w-full flex justify-center items-center pt-6'>
          <PrimaryButton btnText='watch more' onClick={() => window.open(data?.links, '_blank')} />
        </div>
        <div className='w-fit absolute top-5 right-7'>
          <img src={cross} className='w-10' alt="" />
        </div>
      </div>
    </div>
  )
}

export default IndoSoulPopUp