"use client";
import Card from "../Card/Card"
import { useRef, useState } from "react";
import IconArrowRight from "../icons/Arrow";

const datas = [
    {
        title: 'Decadence Hair & Beauty',
        image: 'https://images.fresha.com/locations/location-profile-images/260905/624147/f51b451f-5aa2-41a5-8c7b-59b4b6131a56.jpg?class=width-small',
        stars: '5.0',
        reviews: 1079,
        address: 'Дархан, Mongolia',
        type: 'Hair salon',
        name: 'Josie'
    },
    {
        title: 'Easy to use & explore',
        image: 'https://images.fresha.com/locations/location-profile-images/19285/254646/97b8b27e-64c6-466b-8107-2b6dfc1bf111.jpg?class=width-small',
        stars: '3.0',
        reviews: 5555,
        address: 'Эрдэнэт, Mongolia',
        type: 'Massage',
        name: 'Kevin'

    },
    {
        title: 'The best booking system',
        image: 'https://images.fresha.com/locations/location-profile-images/128643/874078/2131d661-8b20-4957-b53d-2abb58433b4b.jpg?class=width-small',
        stars: '4.0',
        reviews: 1231,
        address: 'Багануур, Mongolia',
        type: 'Nail salon',
        name: 'Nathaniel'
    },
    {
        title: 'Easy to use & explore',
        image: 'https://images.fresha.com/locations/location-profile-images/32915/236160/62afa2af-ae44-4784-adf5-dc26a059514a-_ELP_Barbershop.png?class=width-small',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows',
        name: 'Sylvester'
    },
    {
        title: 'The best booking system',
        image: 'https://images.fresha.com/locations/location-profile-images/205104/199292/36e66cea-b546-4bf6-87a2-0fc62f12b62d.jpg?class=width-small',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows',
        name: 'Lucy'
    },
    
]

export default function MySwipers({title}){
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef();

    const nextItem = () => {
        if (activeIndex < datas.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };
    const prevItem = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return(
        <div className="mb-16 flex flex-col items-center max-w-[1440px] w-full relative">
            <h2 className="font-semibold text-[28px] mb-4 w-full">{title}</h2>
            <div ref={swiperRef} className="flex flex-row items-center gap-x-6 scrollBar overflow-x-auto w-full">
                {datas.map((data, index) => {
                    return(
                        <Card key={index} data={data} />
                    )
                })}
            {activeIndex + 1 < datas.length - 1 && (
                <div
                    onClick={() => {
                    swiperRef.current.scrollTo({
                        left: (1 + activeIndex) * 300,
                        behavior: 'smooth',
                    });
                    nextItem();
                    }}
                    className="cursor-pointer hidden md:flex w-[46px] h-[46px] items-center justify-center bg-white border-[#D4D8D8] drop-shadow-md rounded-full absolute right-[-23px]"
                >
                    <IconArrowRight />
                </div>
            )}
            {activeIndex > 0 && (
                <div
                    onClick={() => {
                    swiperRef.current.scrollTo({
                        left: (activeIndex - 1) * 300,
                        behavior: 'smooth',
                    });
                    prevItem();
                    }}
                    className="cursor-pointer hidden md:flex w-[46px] h-[46px] items-center justify-center bg-white border-[#D4D8D8] drop-shadow-md rounded-full absolute left-[-23px] rotate-180"
                >
                    <IconArrowRight />
                </div>
            )}
            </div>
        </div>
    )
}


// "use client";
// import Card from "../Card/Card"
// import { useRef, useState } from "react";
// import IconArrowRight from "../icons/Arrow";

// const datas = [
//     {
//         title: 'Decadence Hair & Beauty',
//         image: 'https://images.fresha.com/locations/location-profile-images/260905/624147/f51b451f-5aa2-41a5-8c7b-59b4b6131a56.jpg?class=width-small',
//         stars: '5.0',
//         reviews: 1079,
//         address: 'Дархан, Mongolia',
//         type: 'Hair salon'
//     },
//     {
//         title: '122Decadence Hair & Beauty',
//         image: 'https://images.fresha.com/locations/location-profile-images/19285/254646/97b8b27e-64c6-466b-8107-2b6dfc1bf111.jpg?class=width-small',
//         stars: '3.0',
//         reviews: 5555,
//         address: 'Эрдэнэт, Mongolia',
//         type: 'Massage'
//     },
//     {
//         title: '23Decadence Hair & Beauty',
//         image: 'https://images.fresha.com/locations/location-profile-images/128643/874078/2131d661-8b20-4957-b53d-2abb58433b4b.jpg?class=width-small',
//         stars: '4.0',
//         reviews: 1231,
//         address: 'Багануур, Mongolia',
//         type: 'Nail salon'
//     },
//     {
//         title: '23Decadence Hair & Beauty',
//         image: 'https://images.fresha.com/locations/location-profile-images/32915/236160/62afa2af-ae44-4784-adf5-dc26a059514a-_ELP_Barbershop.png?class=width-small',
//         stars: '4.0',
//         reviews: 1231,
//         address: 'Урьхан, Mongolia',
//         type: 'Eyebrows'
//     },
//     {
//         title: '23Decadence Hair & Beauty',
//         image: 'https://images.fresha.com/locations/location-profile-images/260905/624147/f51b451f-5aa2-41a5-8c7b-59b4b6131a56.jpg?class=width-small',
//         stars: '4.0',
//         reviews: 1231,
//         address: 'Урьхан, Mongolia',
//         type: 'Eyebrows'
//     },
//     {
//         title: '23Decadence Hair & Beauty',
//         image: 'https://images.fresha.com/locations/location-profile-images/260905/624147/f51b451f-5aa2-41a5-8c7b-59b4b6131a56.jpg?class=width-small',
//         stars: '4.0',
//         reviews: 1231,
//         address: 'Урьхан, Mongolia',
//         type: 'Eyebrows'
//     },
    
// ];
// export default function MySwipers({title}){
//     const [activeIndex, setActiveIndex] = useState(0);
//     const swiperRef = useRef();

//     const nextItem = () => {
//         if (activeIndex < datas.length - 1) {
//             setActiveIndex(activeIndex + 1);
//         }
//     };
//     const prevItem = () => {
//         if (activeIndex > 0) {
//             setActiveIndex(activeIndex - 1);
//         }
//     };

//     return(
// <<<<<<< HEAD
//         <div className="px-6 mb-16 mt-5">
//             <h2 className="font-semibold text-[28px] mb-4">{title}</h2>
//             <div className="flex gap-5 overflow-auto">
// =======
//         <div className="mb-16 flex flex-col items-center max-w-[1440px] w-full relative">
//             <h2 className="font-semibold text-[28px] mb-4 w-full">{title}</h2>
//             <div ref={swiperRef} className="flex flex-row items-center gap-x-6 scrollBar overflow-x-auto w-full">
// >>>>>>> 9dc63c63d9bcfcf0a98a3d17b6458e5851524875
//                 {datas.map((data, index) => {
//                     return(
//                         <Card key={index} data={data} />
//                     )
//                 })}
//             {activeIndex + 1 < datas.length - 1 && (
//                 <div
//                     onClick={() => {
//                     swiperRef.current.scrollTo({
//                         left: (1 + activeIndex) * 300,
//                         behavior: 'smooth',
//                     });
//                     nextItem();
//                     }}
//                     className="cursor-pointer hidden md:flex w-[46px] h-[46px] items-center justify-center bg-white border-[#D4D8D8] drop-shadow-md rounded-full absolute right-[-23px]"
//                 >
//                     <IconArrowRight />
//                 </div>
//             )}
//             {activeIndex > 0 && (
//                 <div
//                     onClick={() => {
//                     swiperRef.current.scrollTo({
//                         left: (activeIndex - 1) * 300,
//                         behavior: 'smooth',
//                     });
//                     prevItem();
//                     }}
//                     className="cursor-pointer hidden md:flex w-[46px] h-[46px] items-center justify-center bg-white border-[#D4D8D8] drop-shadow-md rounded-full absolute left-[-23px] rotate-180"
//                 >
//                     <IconArrowRight />
//                 </div>
//             )}
//             </div>
//         </div>
//     )
// }