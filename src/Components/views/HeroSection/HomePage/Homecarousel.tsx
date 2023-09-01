"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';

import SlideOne from '@/Components/assets/images/SlidePhotoOne.png'
import SlideTwo from '@/Components/assets/images/SlidePhotoTwo.png'
import SlideThree from '@/Components/assets/images/SlidePhotoThree.png'
import SlideFour from '@/Components/assets/images/SlidePhotoFour.png'
import SlideFive from '@/Components/assets/images/SlidePhotoFive.png'


interface Homecarousel {}

const Homecarousel = () => {
  return (
    <div className=' hero-carousel relative text-gray-200 text-xl w-full max-w-[1360px] mx-auto'>
    <Carousel
      showStatus={false}
      showIndicators={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <div
          onClick={clickHandler}
          className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-50'
        >
          <BiArrowBack className='text-sm md:text-lg' />
        </div>
      )}
      renderArrowNext={(clickHandler, hasPrev) => (
        <div
          onClick={clickHandler}
          className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-50'
        >
          <BiArrowBack className='rotate-180 text-sm md:text-lg' />
        </div>
      )}
    >
        <div >
             <Image src={SlideOne} alt='PHOTO' className=' aspect-[16/10] md:aspect-auto object-cover ' />
             <div className='px-[15px] md:px-10 py-[10px] md:py-5 absolute bottom-6 md:bottom-[75px] left-0 text-black/[0.8] text-base md:text-[15px] font-medium cursor-pointer hover:opacity-90 font-oswald bg-white'>Buy Now</div>
        </div>
        <div>
             <Image src={SlideTwo} alt='PHOTO' className=' aspect-[16/10] md:aspect-auto object-cover ' />
             <div className='px-[15px] md:px-10 py-[10px] md:py-5 absolute bottom-6 md:bottom-[75px] left-0 text-black/[0.8] text-base md:text-[15px] font-medium cursor-pointer hover:opacity-90 font-oswald bg-white'>Buy Now</div>
        </div>
        <div>
             <Image src={SlideThree} alt='PHOTO' className=' aspect-[16/10] md:aspect-auto object-cover ' />
             <div className='px-[15px] md:px-10 py-[10px] md:py-5 absolute bottom-6 md:bottom-[75px] left-0 text-black/[0.8] text-base md:text-[15px] font-medium cursor-pointer hover:opacity-90 font-oswald bg-white'>Buy Now</div>
        </div>
        <div>
             <Image src={SlideFour} alt='PHOTO' className=' aspect-[16/10] md:aspect-auto object-cover ' />
             <div className='px-[15px] md:px-10 py-[10px] md:py-5 absolute bottom-6 md:bottom-[75px] left-0 text-black/[0.8] text-base md:text-[15px] font-medium cursor-pointer hover:opacity-90 font-oswald bg-white'>Buy Now</div>
        </div>
        <div>
             <Image src={SlideFive} alt='PHOTO' className=' aspect-[16/10] md:aspect-auto object-cover ' />
             <div className='px-[15px] md:px-10 py-[10px] md:py-5 absolute bottom-6 md:bottom-[75px] left-0 text-black/[0.8] text-base md:text-[15px] font-medium cursor-pointer hover:opacity-90 font-oswald bg-white'>Buy Now</div>
        </div>

        </Carousel>

    </div>
  )
}

export default Homecarousel;