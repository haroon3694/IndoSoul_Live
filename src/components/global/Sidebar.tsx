import React, { useState } from 'react'

const Sidebar: React.FC = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className='fixed top-8 right-8 block md:hidden z-30' onClick={() => setSidebarOpen(!sidebarOpen)}>
                <div className='flex flex-col gap-1.5'>
                    <div className='w-9 h-[3px] bg-yellow-500 before:-translate-y-5 after:translate-y-5'></div>
                    <div className='w-9 h-[3px] bg-yellow-500 before:-translate-y-5 after:translate-y-5'></div>
                    <div className='w-9 h-[3px] bg-yellow-500 before:-translate-y-5 after:translate-y-5'></div>
                </div>
            </div>
            <div className={`md:hidden ${sidebarOpen ? '' : 'translate-x-[130%]'} z-20 fixed inset-0 transition-all duration-500 ease-in-out flex justify-end p-5 bg-black bg-opacity-0`}>
                <div className='bg-yellow-200 w-[80%]'>
a
                </div>
            </div>
        </>
    )
}

export default Sidebar