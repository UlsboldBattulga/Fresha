import IconArrowRight from "../icons/Arrow"
export default function Cover(){
    return (
        <div className="w-full px-[24px] pb-[64px] flex flex-col items-center h-full min-h-[750px] ">
            <p className="text-[80px] pt-[100px] 
            pb-[32px] text-[#0d1619] font-bold w-full max-w-[960px]">Book local beauty and wellness services</p>
            <div className="p-[4px] backdrop-blur-md bg-purple-400 rounded-xl md:rounded-full mb-[16px] w-full max-w-[960px] ">
                <div className="p-[16px] bg-white rounded-xl md:rounded-full grid gap-3">
                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-0">
                        <div className="rounded-xl border md:border-none border-[#bfbfbf] h-[46px] items-center flex md:w-full gap-2"><IconArrowRight/> 
                        <input className="placeholder:text-black w-full h-full" 
                        placeholder="Any treatment or venue"/> </div>
                        <div className="rounded-xl border md:border-none border-[#bfbfbf] h-[46px] items-center flex md:w-full gap-2"><IconArrowRight/> 
                        <input className="placeholder:text-black w-full h-full" 
                        placeholder="Current location"/> </div>
                        <button className="md:w-[187px] rounded-xl h-[46px] bg-black text-white font-bold text-xl md:hidden">Search Fresha </button>
                        <button className="md:w-[187px] rounded-full h-[46px] bg-black text-white font-bold text-xl hidden md:block">Search </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pb-[80px]">
                <p className="font-bold text-lg">10101010</p>
                <p className="text-lg ml-2">appointments booked today</p>
            </div>
            <div className="flex justify-center ">
                <button className=" bg-white rounded-3xl border border-[#bfbfbf] h-[48px] px-5 text-lg font-semibold flex items-center gap-2">
                    Get the app <IconArrowRight/>
                     
                </button>
            </div>
            
        </div>
    )
}

// export default function Cover(){
//     return (
// <<<<<<< HEAD
//         <div className="w-full h-[510px] px-[24px] pb-5 flex flex-col items-center">
// =======
//         <div className="w-full px-[24px] pb-[64px] flex flex-col items-center">
// >>>>>>> 9dc63c63d9bcfcf0a98a3d17b6458e5851524875
//             <p className="text-[40px] pt-[140px] 
//             pb-[32px] text-[#0d1619] font-bold">Book local beauty and wellness services</p>
//             <div className="p-[4px] backdrop-blur-md bg-purple-400 rounded-xl md:rounded-full mb-[16px] w-full max-w-[960px]">
//                 <div className="p-[16px] bg-white rounded-xl md:rounded-full grid gap-3">
//                     <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-0">
//                         <div className="rounded-xl border md:border-none border-[#bfbfbf] h-[46px] items-center flex md:w-full">icon 
//                         <input className="placeholder:text-black w-full h-full" 
//                         placeholder="Any treatment or venue"/> </div>
//                         <div className="rounded-xl border md:border-none border-[#bfbfbf] h-[46px] items-center flex md:w-full">icon 
//                         <input className="placeholder:text-black w-full h-full" 
//                         placeholder="Current location"/> </div>
//                         <button className="md:w-[187px] rounded-xl h-[46px] bg-black text-white font-bold text-xl md:hidden">Search Fresha </button>
//                         <button className="md:w-[187px] rounded-full h-[46px] bg-black text-white font-bold text-xl hidden md:block">Search </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-center pb-[80px]">
//                 <p className="font-bold text-lg">10101010</p>
//                 <p className="text-lg ml-2">appointments booked today</p>
//             </div>
//             <div className="flex justify-center hover:hidden">
//                 <button className=" bg-white rounded-3xl border border-[#b7babe] h-[48px] px-5 ">
//                     <span className="text-lg font-semibold ">Get the app </span>
//                     <span className="">icon</span>
//                     <img className="hidden hover:block" src="https://cdn-static.fresha.com/assets/a9fc9cf5f19d0934f94670b4b4ce199b.png"
//                     />
//                 </button>
//             </div>
            
//         </div>
//     )
// }