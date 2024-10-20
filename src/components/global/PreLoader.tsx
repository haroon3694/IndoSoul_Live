
import { useEffect, useState } from 'react';
import { findFillColor } from '../../utils/helpers';
import { useLocation } from 'react-router';

const PreLoader = ({ logoImage, bgColor }: { logoImage: string, bgColor?: string }) => {

    const [preLoaderActive, setPreLoaderActive] = useState(true);

    const { pathname } = useLocation()

    useEffect(() => {
        setTimeout(() => {
            setPreLoaderActive(false)
        }, 3000);
    }, []);

    return (
        <div className={`w-full fixed z-40 top-0 flex justify-center items-center ${bgColor ? bgColor : 'bg-[#FCFBF6]'} transition-all duration-700 ease-in-out ${preLoaderActive ? 'min-h-screen' : 'min-h-0'}`}>
            <div className='relative'>
                <img src={logoImage} className={`pt-50 transition-all duration-700 ease-in-out ${preLoaderActive ? 'w-60 md:w-80' : 'w-0'}`} alt="" />
                <div className={`absolute -bottom-[130%] left-1/2 -translate-x-1/2 ${bgColor ? 'text-white' : 'text-black'} flex justify-center items-center gap-4`}>
                    Loading
                    <div className='min-w-3 min-h-3 rounded-full animate-ping aspect-square z-50' style={{ backgroundColor: findFillColor(pathname) }}></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader