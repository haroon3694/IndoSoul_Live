
import { useEffect, useState } from 'react';
import logoMain from '../../assets/soulsabha/icons/logoMainSoulSabha.svg'

const PreLoader = () => {

    const [preLoaderActive, setPreLoaderActive] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPreLoaderActive(false)
        }, 3000);
    }, []);

    return (
        <div className={`w-full fixed z-40 top-0 flex justify-center items-center bg-[#FCFBF6] transition-all duration-700 ease-in-out ${preLoaderActive ? 'min-h-screen' : 'min-h-0'}`}>
            <div className=' animate-pulse'>
                <img src={logoMain} className={`pt-50 transition-all duration-700 ease-in-out ${preLoaderActive ? 'w-52 md:w-60' : 'w-0'}`} alt="" />
            </div>
        </div>
    )
}

export default PreLoader