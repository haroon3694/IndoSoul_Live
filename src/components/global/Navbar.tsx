
import PrimaryButton from './PrimaryButton'

const Navbar = () => {
    return (
        <div className='w-full py-4 glass-morphism fixed top-0 left-0 z-20 rounded-b-xl'>
            <div className="w-full flex justify-between items-center px-10">
                <div className='relative'>
                    <h1 className='text-lg text-white font-bold tracking-[0.3em]'>LIVE</h1>
                    <span className='absolute -top-0.5 -right-3.5 w-1 h-1 bg-[#D10000] p-[5px] rounded-full'></span>
                </div>
                <div className='flex items-center gap-8'>
                    <h1 className='text-md text-white'>+91 88258 59601</h1>
                    <h1 className='text-md text-white'>contact@indosoul.in</h1>
                    <PrimaryButton btnText='Talk with us' />
                </div>
            </div>
        </div>
    )
}

export default Navbar