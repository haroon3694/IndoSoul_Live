
import { useEffect, useState } from 'react';

const PreLoader = ({ logoImage, bgColor }: { logoImage: string, bgColor?: string }) => {

    const [preLoaderActive, setPreLoaderActive] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreLoaderActive(false)
        }, 3000);
    }, []);

    return (
        <div className={`w-full fixed z-40 top-0 flex justify-center items-center ${bgColor ? bgColor : 'bg-[#FCFBF6]'} transition-all duration-700 ease-in-out ${preLoaderActive ? 'min-h-screen' : 'min-h-0'}`}>
            <div className=' animate-pulse'>
                <img src={logoImage} className={`pt-50 transition-all duration-700 ease-in-out ${preLoaderActive ? 'w-52 md:w-60' : 'w-0'}`} alt="" />
            </div>
        </div>
    )
}

export default PreLoader