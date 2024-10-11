import youtubeIcon from '../../assets/soulsabha/icons/youtube.svg';
import spotifyIcon from '../../assets/soulsabha/icons/spotify.svg';

interface SoulSabhaPopUpData {
  id: number;
  image?: string;
  logo?: string;
  title: string;
  content?: any;
  links?: string;
}

const SoulSabhaPopUp = ({ viewPopUp, setViewPopUp, data }: { viewPopUp: boolean, setViewPopUp: (viewPopUp: boolean) => void, data: SoulSabhaPopUpData }) => {
  return (
    <>
      {/* desktop pop up */}
      <div className={`${viewPopUp ? 'hidden md:flex' : 'hidden'} w-full fixed h-screen inset-0 z-20 px-5`}>
        <div className=' bg-black bg-opacity-60 fixed h-sceen z-50 w-full inset-0' onClick={() => setViewPopUp(false)}></div>
        <div className='w-full max-w-[1000px] rounded-lg glass-morphism-white py-16 md:py-0 overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50'>
          <div className='px-14 py-14'>
            {
              data.id === 0 && typeof data?.content[0] !== 'string' ? (
                <div className='w-full'>
                  <div className='grid grid-cols-[1fr_20%_10%] border-b border-black gap-5 px-10 pb-4'>
                    <h1 className='w-full font-bebasNeue tracking-wider text-4xl'>NAME OF THE ARTIST</h1>
                    <h1 className='w-fit font-bebasNeue tracking-wider text-4xl min-w-20 text-center'>WATCH</h1>
                    <h1 className='w-fit font-bebasNeue tracking-wider text-4xl min-w-20 text-center'>LISTEN</h1>
                  </div>
                  <div className='w-full h-[55vh] overflow-y-scroll pt-3'>
                    {
                      data?.content?.map((sub_data: any, i: number) => (
                        <div key={sub_data?.id} className={`w-full py-5 grid grid-cols-[1fr_20%_10%] gap-5 px-10 ${i === 0 ? '' : 'border-t border-[#808080]'}`}>
                          <div className='flex items-center gap-8'>
                            <div>
                              {
                                sub_data?.artistImage?.length > 2 ? <img src={sub_data?.artistImage} className='w-16 h-14 object-cover rounded-full' alt="" /> : <div className='w-14 h-14 rounded-full bg-gray-300' />
                              }
                            </div>
                            <div className='w-full flex flex-col'>
                              <h1 className='text-xl tracking-wider'>{sub_data?.artistName}</h1>
                            </div>
                          </div>
                          <div className='w-fit min-w-20 flex justify-center items-center'>
                            <a href={sub_data?.youtubeLink?.length > 2 ? sub_data?.youtubeLink : null} target='_blank' className='text-sm font-semibold'>
                              <img src={youtubeIcon} className={`w-10 hover:scale-110 transition-transform duration-500 ease-in-out ${sub_data?.youtubeLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                            </a>
                          </div>
                          <div className='w-fit min-w-20 flex justify-center items-center'>
                            <a href={sub_data?.spotifyLink?.length > 2 ? sub_data?.spotifyLink : null} target='_blank' className='text-sm font-semibold'>
                              <img src={spotifyIcon} className={`w-10 hover:scale-110 transition-transform duration-500 ease-in-out ${sub_data?.spotifyLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                            </a>
                          </div>

                        </div>
                      ))
                    }
                  </div>
                </div>
              ) : (
                <div className=''>
                  {
                    data?.content?.length > 2 ? (
                      <div className='w-full grid grid-cols-3 gap-2 overflow-y-scroll h-[55vh]'>
                        {
                          data?.content?.map((sub_data: string) => (
                            <img key={sub_data} src={sub_data} className='w-full rounded-lg' />
                          ))
                        }
                      </div>
                    ) : (
                      <div className='w-full grid grid-cols-3 gap-2 overflow-y-scroll h-[55vh] rounded-lg'>
                        <div className='w-full aspect-square bg-gray-500' />
                        <div className='w-full aspect-square bg-gray-500' />
                        <div className='w-full aspect-square bg-gray-500' />
                        <div className='w-full aspect-square bg-gray-500' />
                        <div className='w-full aspect-square bg-gray-500' />
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
      </div >

      {/* mobile popup */}
      <div className={`${viewPopUp ? 'flex md:hidden' : 'hidden'} w-full fixed  justify-center items-center h-screen inset-0 z-20 px-5 bg-black bg-opacity-60`} onClick={() => setViewPopUp(false)}>
        <div className='w-full max-w-[1000px] rounded-2xl glass-morphism-white relative overflow-hidden z-50 translate-y-6'>
          <div className=''>
            {
              data?.id === 0 && typeof data?.content[0] !== 'string' ? (
                <div className='w-full pb-5'>
                  <div className='w-full pt-3'>
                    {
                      data?.content?.map((sub_data: any, i: number) => (
                        <div key={sub_data?.id} className={`w-full py-5 px-3 sm:px-1 grid grid-cols-[62%_1fr_1fr] ${i === 0 ? '' : 'border-t border-[#808080]'}`}>
                          <div className='flex items-center gap-3 pl-3'>
                            <div>
                              {
                                sub_data?.artistImage?.length > 2 ? <img src={sub_data?.artistImage} className='w-12 object-contain rounded-full' alt="" /> : <div className='w-12 h-12 rounded-full bg-gray-300' />
                              }
                            </div>
                            <div className='flex flex-col'>
                              <h1 className='text-md tracking-wider'>{sub_data?.artistName}</h1>
                            </div>
                          </div>
                          <div className='w-full flex justify-center items-center'>
                            <a href={sub_data?.youtubeLink?.length > 2 ? sub_data?.youtubeLink : null} target='_blank' className='text-sm font-semibold'>
                              <img src={youtubeIcon} className={`w-8 hover:scale-110 transition-transform duration-500 ease-in-out ${sub_data?.youtubeLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                            </a>
                          </div>
                          <div className='w-full flex justify-center items-center'>
                            <a href={sub_data?.spotifyLink?.length > 2 ? sub_data?.youtubeLink : null} target='_blank' className='text-sm font-semibold'>
                              <img src={spotifyIcon} className={`w-7 hover:scale-110 transition-transform duration-500 ease-in-out ${sub_data?.spotifyLink?.length > 2 ? '' : 'opacity-40'}`} alt="" />
                            </a>
                          </div>

                        </div>
                      ))
                    }
                  </div>
                </div>
              ) : (
                <div className='p-3'>
                  {
                    data?.content?.length > 2 ? (
                      <div className='w-full grid grid-cols-2 gap-2 overflow-y-scroll h-[55vh] rounded-lg'>
                        {
                          data?.content?.map((sub_data: string) => (
                            <img key={sub_data} src={sub_data} className='w-full rounded-lg' />
                          ))
                        }
                      </div>
                    ) : (
                      <div className='w-full grid grid-cols-2 gap-2 overflow-y-scroll h-[55vh] rounded-lg'>
                        <div className='w-full aspect-square bg-stone-400' />
                        <div className='w-full aspect-square bg-stone-400' />
                        <div className='w-full aspect-square bg-stone-400' />
                        <div className='w-full aspect-square bg-stone-400' />
                        <div className='w-full aspect-square bg-stone-400' />
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SoulSabhaPopUp