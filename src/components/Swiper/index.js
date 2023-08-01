"use client";
// import Card from "../Card/Card"
import ReviewCard from "../Card/ReviewsCard"
import { useRef, useState } from "react";
import IconArrowRight from "../icons/Arrow";

const data = [
    {
        title: 'Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/dd851e4ecc40b9b59b624cdccc1aedb6.jpg',
        stars: '5.0',
        reviews: 1079,
        address: 'Дархан, Mongolia',
        type: 'Hair salon'
    },
    {
        title: '122Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/00479ded921d23b01f095cd7f8f555de.jpg',
        stars: '3.0',
        reviews: 5555,
        address: 'Эрдэнэт, Mongolia',
        type: 'Massage'
    },
    {
        title: '23Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/39112b76309cec1529846b25390948a2.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Багануур, Mongolia',
        type: 'Nail salon'
    },
    {
        title: '23Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/d9fbad8fc364103f7af06ed9c52d01dc.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows'
    },
    {
        title: '23Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/f6ca24a00c6688414065eac730d1fcbe.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows'
    },
    {
        title: '23Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/b44ff0bbb370252c494f2a6f9ccf4dc9.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows'
    },
    
]

export default function Swiper({title}){
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef();

    const nextItem = () => {
        if (activeIndex < data.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };
    const prevItem = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return(
        
        <div className="mb-16 flex flex-col justify-center max-w-[1440px] w-full relative p-4 ">
            <h2 className="font-semibold text-[28px] mb-4">Reviews</h2>
            <h2 className="font-semibold text-[28px] mb-4 w-full">{title}</h2>
            <div ref={swiperRef} className="flex flex-row items-center gap-x-6 scrollBar overflow-x-auto w-full">
                {data.map((data, index) => {
                    return(
                        <ReviewCard key={index} data={data} />
                    )
                })}
            {activeIndex + 1 < data.length - 1 && (
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
