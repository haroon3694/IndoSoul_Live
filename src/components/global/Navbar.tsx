
import PrimaryButton from './PrimaryButton'

const Navbar = () => {

    const handleButtonClick = () => {
        window.location.href = 'mailto:contact@indosoul.in';
    };

    return (
        <div className='hidden md:block w-full py-4 glass-morphism fixed top-0 left-0 z-20 rounded-b-xl'>
            <div className="w-full flex justify-between items-center px-10">
                <div className='relative'>
                    <h1 className='text-lg text-white font-bold tracking-[0.3em]'>LIVE</h1>
                    <span className='absolute -top-0.5 -right-3.5 w-1 h-1 bg-[#D10000] p-[5px] rounded-full'></span>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-3'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                        </svg>
                        <a href="tel:8825859601" className='text-sm text-white hover:text-[#D10000] cursor-pointer transition-all duration-500 ease-in-out'>+91 88258 59601</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                        <h1 className='text-sm text-white hover:text-[#D10000] cursor-pointer transition-all duration-500 ease-in-out' onClick={handleButtonClick}>contact@indosoul.in</h1>
                    </div>
                    <PrimaryButton btnText='Talk with us' />
                </div>
            </div>
        </div>
    )
}

export default Navbar