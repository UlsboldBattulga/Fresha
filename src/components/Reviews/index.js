import ReviewCard from "../Card/ReviewsCard"

const datas = [
    {
        title: 'Decadence Hair & Beauty',
        image: 'https://cdn-static.fresha.com/assets/5b6e755813b2a44e3b8e113f8128d5bb.jpg',
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
        image: 'https://cdn-static.fresha.com/assets/e22597d4e260232922c63f4ec05424c8.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Багануур, Mongolia',
        type: 'Nail salon',
        name: 'Nathaniel'
    },
    {
        title: 'Easy to use & explore',
        image: 'https://cdn-static.fresha.com/assets/71ebe601f6e524a37d9fc96fcb3ecb06.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows',
        name: 'Sylvester'
    },
    {
        title: 'The best booking system',
        image: 'https://cdn-static.fresha.com/assets/dd851e4ecc40b9b59b624cdccc1aedb6.jpg',
        stars: '4.0',
        reviews: 1231,
        address: 'Урьхан, Mongolia',
        type: 'Eyebrows',
        name: 'Lucy'
    },
    
]
export default function Reviews(){
    
    return(
        <div className="px-6 mb-16">
            <h2 className="font-semibold text-[28px] mb-4">Reviews</h2>
            <div className="flex gap-5 overflow-auto">
                {datas.map((data, index) => {
                    return(
                        <ReviewCard key={index} data={data} />
                    )
                })}
            </div>
        </div>
    )
}