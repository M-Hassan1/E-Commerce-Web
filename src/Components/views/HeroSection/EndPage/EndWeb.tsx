"use client"

import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';
import WatchPhotoOne from '@/Components/assets/images/Photo-3.jpeg'
import WatchPhotoTwo from '@/Components/assets/images/Photo-6.jpeg'
import WatchPhotoThree from '@/Components/assets/images/Photo-6.jpeg'
import WatchPhotoFour from '@/Components/assets/images/Photo-4.jpeg'
import WatchPhotoFive from '@/Components/assets/images/Photo-3.jpeg'


const EndWeb = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };
  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
      <div className='text-2xl ml-2 font-bold mb-5'>SPECIAL OFFER</div>
      <Carousel
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            containerClass='-mx-[10px]'
            itemClass='px-[10px]'
        >
        
      <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchPhotoOne} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Samsung Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $150
              </p>
              <p className="font-base font-medium line-through">
                $180
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchPhotoTwo} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Samsung Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $150
              </p>
              <p className="font-base font-medium line-through">
                $180
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchPhotoThree} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Samsung Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $150
              </p>
              <p className="font-base font-medium line-through">
                $180
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchPhotoFour} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Samsung Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $150
              </p>
              <p className="font-base font-medium line-through">
                $180
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
              </p>
          </div>
        </div>
        </Link><Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchPhotoFive} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Samsung Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $150
              </p>
              <p className="font-base font-medium line-through">
                $180
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
              </p>
          </div>
        </div>
        </Link>
          
            {/* <Image src={WatchFive} alt="Photo" />
          
          
            <Image src={WatchTwo} alt="Photo" />
          
            <Image src={WatchTwo} alt="Photo" /> */}
      </Carousel>;
    </div>
  )
}

export default EndWeb