"use client";
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/index.js'
import Cover from '@/components/Cover'
import MySwipers from '@/components/MySwipers'
import MobileSection from '@/components/MobileSection'
import Reviews from '@/components/Reviews'
import Business from '@/components/BusinessSection'
import Rating from '@/components/Rating'
import { Tabs, Tab } from '@/components/Tabs'
import TabsSection from '@/components/Tabs/TabSection';
import Footer from '@/components/Footer';
import Swiper from '@/components/Swiper';
import Swipers from '@/components/Swipers';

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    
    <div>
      <div className='bg-gradient-to-r from-indigo-500'>
      <NavBar />
      <Cover />
      </div>
      <div className='flex flex-col items-center w-full mt-12'>
        <MySwipers title={'Recommeneded'} />
        <Swipers title={'New to Fresha'} />
      </div>
      <MobileSection/>
      <div className='flex justify-center'>
        <Swiper/>
      </div>
      <Rating/>
      <div className='flex flex-col items-center mt-[120px]'>
        <Business/>
        <TabsSection/>
      </div>
      <div className='flex justify-center bg-[#f2f2f2]'>
      <Footer/>
      </div>
    </div>
  )
}
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'
// import NavBar from '@/components/NavBar/index.js'
// import Cover from '@/components/Cover'
// import MySwipers from '@/components/MySwipers'
// import MobileSection from '@/components/MobileSection'
// import ReviewCard from '@/components/Card/ReviewsCard'
// import Reviews from '@/components/ReviewSection'
// import Business from '@/components/BusinessSection'
// import Rating from '@/components/Rating'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (

    
    
//     <div>
//       <div className='bg-gradient-to-r from-indigo-500'>
//         <NavBar />
//       </div>
//       <div className='bg-gradient-to-r from-indigo-500'>
//       <Cover />
//       </div>
// <<<<<<< HEAD
//       <div className='bg-[]'>
// =======
//       <div className='flex flex-col items-center w-full'>
// >>>>>>> 9dc63c63d9bcfcf0a98a3d17b6458e5851524875
//         <MySwipers title={'Recommeneded'} />
//         <MySwipers title={'New to Fresha'}/>
//       </div>
//       <MobileSection/>
//       <Reviews/>
//       <Rating/>
//       <Business/>
//     </div>
    
//   )
// }
