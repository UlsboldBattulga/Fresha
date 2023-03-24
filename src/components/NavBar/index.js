import IconArrowRight from "../icons/Arrow"
import { useState, useEffect } from 'react';

export default function NavBar(){

    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   return (
    <div className={`h-[86px] w-full py-[12px] z-40 px-[24px] flex items-center justify-between ${scrollPosition > 50 && 'fixed top-0 bg-white'}`}>
        <div className="text-[27px] font-bold text-black ">
            fresha
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M3 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6Zm0 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 18Z" clipRule="evenodd"></path>
                </svg> */}

        <div className="flex justify-end gap-4">
            <div className=" ">
                <button className=" bg-white rounded-3xl border border-[#bfbfbf] h-[48px] px-5 text-lg font-semibold flex items-center gap-2">
                    For business <IconArrowRight/>
                     
                </button>
            </div>
            <div className=" ">
                <button className=" bg-white rounded-3xl border border-[#bfbfbf] h-[48px] px-5 text-lg font-semibold flex items-center gap-2">
                    Menu <IconArrowRight/>
                     
            </button>
            </div>
        </div>
    </div>
   )
}