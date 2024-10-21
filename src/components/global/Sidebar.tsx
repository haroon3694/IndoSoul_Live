import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { navigationData } from '../../data/navigationData';

const Sidebar: React.FC = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <div className='fixed top-8 right-8 block lg:hidden z-30' onClick={() => setSidebarOpen(!sidebarOpen)}>
                <div className='flex flex-col gap-1.5'>
                    <div className='w-9 h-[3px] bg-yellow-500 before:-translate-y-5 after:translate-y-5'></div>
                    <div className='w-9 h-[3px] bg-yellow-500 before:-translate-y-5 after:translate-y-5'></div>
                    <div className='w-9 h-[3px] bg-yellow-500 before:-translate-y-5 after:translate-y-5'></div>
                </div>
            </div>
            <div className={`lg:hidden ${sidebarOpen ? '' : 'translate-x-[130%]'} z-20 fixed inset-0 transition-all duration-500 ease-in-out flex justify-end p-5 bg-black bg-opacity-0`}>
                <div className={`w-[80%] glass-morphism-white`}>
                    <div className={`w-full mt-52 rounded-xl flex flex-col overflow-hidden transition-all duration-500 ease-in-out z-20`}>
                        {
                            navigationData?.map((data) => (
                                <div key={data?.id} className='w-full border-b-white p-4 hover:bg-[#1c1c1b] transition-all duration-500 ease-in-out' onClick={() => navigate(data?.route)}>
                                    <h1 className='font-manrope text-lg' onClick={() => setSidebarOpen(false)}>{data?.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar