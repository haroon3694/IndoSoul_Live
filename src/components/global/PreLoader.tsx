
import { useEffect, useState } from 'react';

const PreLoader = ({ logoImage, bgColor }: { logoImage: string, bgColor?: string }) => {

    const [preLoaderActive, setPreLoaderActive] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreLoaderActive(false)
        }, 3000);
    }, []);

    return (
        <div className={`w-full hidden fixed z-40 top-0 justify-center items-center ${bgColor ? bgColor : 'bg-[#FCFBF6]'} transition-all duration-700 ease-in-out min-h-screen ${preLoaderActive ? '' : '-translate-y-[110%]'}`}>
            <div className='relative'>
                <img src={logoImage} className={`pt-50 transition-all duration-700 ease-in-out w-48 md:w-80 ${preLoaderActive ? '' : ''}`} alt="" />
                <div className={`absolute -bottom-[250%] md:-bottom-[130%] left-1/2 -translate-x-1/2 ${bgColor ? 'text-white' : 'text-black'} flex justify-center items-center gap-4`}>
                    <div className='  rounded-fullaspect-square z-50 loader'></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader