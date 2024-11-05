import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { navigationData } from '../../data/navigationData';
import { findFillColor } from '../../utils/helpers';
import { useScrollBlock } from '../../hooks/useScrollBlock';

const Sidebar: React.FC = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [blockScroll, allowScroll] = useScrollBlock();

    const { pathname } = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        sidebarOpen ? blockScroll() : allowScroll();
    }, [sidebarOpen]);


    return (
        <>
            <div className='fixed top-8 right-8 block lg:hidden z-30' onClick={() => setSidebarOpen(!sidebarOpen)}>
                <svg id="fi_2040514" fill={findFillColor(pathname)} className={`${sidebarOpen ? '' : 'rotate-180'} transition-all duration-300 ease-in-out`} width='40' height='40' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m368.314 269.968c-11.337 11.337-66.535 66.538-78.839 78.842-7.811 7.811-20.476 7.809-28.285 0-7.811-7.811-7.811-20.475 0-28.285l44.526-44.525h-148.383c-11.046 0-20-8.954-20-20s8.954-20 20-20h148.383l-44.525-44.524c-7.811-7.811-7.811-20.475 0-28.285s20.475-7.811 28.285 0c10.873 10.874 68.184 68.186 78.821 78.824 7.64 7.822 7.568 20.222.017 27.953zm143.686-121.596v215.256c0 68.38-46.371 103.106-49.378 107.367-26.44 26.443-61.598 41.005-98.994 41.005h-215.256c-37.396 0-72.554-14.563-98.995-41.006-2.972-4.212-49.377-38.979-49.377-107.366v-215.256c0-68.38 46.371-103.106 49.378-107.367 26.44-26.442 61.598-41.005 98.994-41.005h215.256c37.396 0 72.554 14.563 98.995 41.006 2.972 4.212 49.377 38.979 49.377 107.366zm-40 0c0-50.109-34.621-74.853-37.662-79.082 0-.001 0-.001 0-.001-18.887-18.888-43.999-29.289-70.71-29.289h-215.256c-26.711 0-51.823 10.401-70.71 29.289-3.151 4.382-37.662 28.708-37.662 79.083v215.256c0 50.109 34.621 74.853 37.662 79.082 18.887 18.889 43.999 29.29 70.71 29.29h215.256c26.711 0 51.823-10.401 70.71-29.289 3.151-4.382 37.662-28.708 37.662-79.083z"></path>
                </svg>
            </div>
            <div className={`w-[85%] bg-navBlack rounded-[20px] flex justify-center items-center lg:hidden ${sidebarOpen ? '' : 'translate-x-[130%]'} z-20 fixed bottom-4 top-4 right-4 transition-all duration-500 ease-in-out`}>
                <div className={`w-full h-fit rounded-xl flex flex-col justify-center items-center overflow-hidden transition-all duration-500 ease-in-out z-20`}>
                    {
                        navigationData?.map((data) => (
                            <div key={data?.id} className={`w-full border-b-white py-3 px-6 hover:bg-[#1c1c1b] transition-all duration-500 ease-in-out`} style={{ color: findFillColor(data?.route) }} onClick={() => navigate(data?.route)}>
                                <h1 className={`font-manrope font-medium ${pathname === data?.route ? 'text-3xl' : 'text-md'}`} onClick={() => setSidebarOpen(false)} style={{ color: pathname === data?.route ? findFillColor(pathname) : 'white' }}>{data?.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`fixed inset-0 z-[17] ${sidebarOpen ? '' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    )
}

export default Sidebar