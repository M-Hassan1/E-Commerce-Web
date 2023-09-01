"use client"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import WatchOne from '@/Components/assets/images/Photo-2.jpg';
import WatchTwo from '@/Components/assets/images/Photo-3.jpeg';
import WatchThree from '@/Components/assets/images/Photo-6.jpeg'
import WatchFour from '@/Components/assets/images/Photo-6.jpeg'
import WatchFive from '@/Components/assets/images/Photo-4.jpeg'


interface ProductCarouselProps {}

const ProductCarousel: React.FC<ProductCarouselProps> = () => {
  const renderThumbs = () => {
    return [
      <div key={1}>
        <Image src={WatchOne} alt="WatchPhoto" width={60} height={60} />
      </div>,
      <div key={2}>
        <Image src={WatchTwo} alt="WatchPhoto" width={60} height={60} />
      </div>,
      <div key={3}>
        <Image src={WatchThree} alt="WatchPhoto" width={60} height={60} />
      </div>,
      <div key={4}>
        <Image src={WatchFour} alt="WatchPhoto" width={60} height={60} />
      </div>,
      <div key={5}>
        <Image src={WatchFive} alt="WatchPhoto" width={60} height={60} />
      </div>,
  
    ];
  };

  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={false}
        infiniteLoop={true}
        showThumbs={true}
        renderThumbs={renderThumbs}
        thumbWidth={60}
        className='ProductCarousel'
      >
        <div>
          <Image src={WatchOne} alt="WatchPhoto" />
        </div>
        <div>
          <Image src={WatchTwo} alt="WatchPhoto" />
        </div>
        <div>
          <Image src={WatchThree} alt="WatchPhoto" />
        </div>
        <div>
          <Image src={WatchFour} alt="WatchPhoto" />
        </div>
        <div>
          <Image src={WatchFive} alt="WatchPhoto" />
        </div>
       
      
      </Carousel>
    </div>
)
}

export default ProductCarousel