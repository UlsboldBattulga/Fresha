"use client";
import Card from "../Card/Card"
import { useRef, useState } from "react";
import IconArrowRight from "../icons/Arrow";

const mydatas = [
    {
        title: 'Machete Barber Shop',
        image: 'https://images.fresha.com/locations/location-profile-images/372774/884421/720de190-0b5d-436f-9a85-ceee9c5bfaff.jpg?class=width-small',
        stars: '5.0',
        reviews: 1079,
        address: 'Дархан, Mongolia',
        type: 'Hair salon',
        name: 'Josie'
    },
    {
        title: '19Thai Massage',
        image: 'https://images.fresha.com/locations/location-profile-images/608500/917327/7eab34b3-1913-4b5f-a9d4-93adbbe63ab3.jpg?class=width-small',
        stars: '3.0',
        reviews: 5555,
        address: 'Эрдэнэт, Mongolia',
        type: 'Massage',
        name: 'Kevin'

    },
    {
        title: 'Medusa 622',
        image: 'https://images.fresha.com/locations/location-profile-images/623941/702358/8dc77efe-f716-4f19-aafd-39cbd5044ad3.jpg?class=width-small',
        stars: '4.0',
        reviews: 1231,
        address: 'Багануур, Mongolia',
        type: 'Nail salon',
        name: 'Nathaniel'
    },
    {
        title: 'FACE MEDICA',
        image: 'https://images.fresha.com/locations/location-profile-images/659695/712743/82118e9d-8fac-4b43-b4f5-64ab8a637aa2.jpg?class=width-small',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows',
        name: 'Sylvester'
    },
    {
        title: 'Revive Massage Studios',
        image: 'https://images.fresha.com/locations/location-profile-images/501720/528840/e1da0dbe-cd71-4984-8189-e30d111a779e.jpg?class=width-small',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows',
        name: 'Lucy'
    },
    
]

export default function Swipers({title}){
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef();

    const nextItem = () => {
        if (activeIndex < mydatas.length - 1) {
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
                {mydatas.map((data, index) => {
                    return(
                        <Card key={index} data={data} />
                    )
                })}
            {activeIndex + 1 < mydatas.length - 1 && (
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
