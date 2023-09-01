"use Client"

import Link from "next/link";
import Image from "next/image";
import Wrapper from "../../NavBar/NavBar-For-Pc/wrapper";
import WatchTwo from '@/Components/assets/images/Photo-3.jpeg'
import WatchThree from '@/Components/assets/images/Photo-6.jpeg'
import WatchFour from '@/Components/assets/images/Photo-6.jpeg'
import WatchFive from '@/Components/assets/images/Photo-4.jpeg'
import WatchSix from '@/Components/assets/images/Photo-3.jpeg'
import WatchSeven from '@/Components/assets/images/Photo-3.jpeg'
import WatchEight from '@/Components/assets/images/Photo-3.jpeg'
import WatchNine from "@/Components/assets/images/Photo-3.jpeg"



// &#x24;
const ProductPage = () => {


    return (
     
      <div className='grid grid-cols-1 md:grid-cols-2 hover:scale-100 lg:grid-cols-3 gap-7 my-14 px-5 md:px-8 '> 
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchTwo} alt="Photo" className="w-full" />
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
        <Image src={WatchThree} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">UpDate Model</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $130
              </p>
              <p className="font-base font-medium line-through">
                $150
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                20% Off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchFour} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Apple Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $110
              </p>
              <p className="font-base font-medium line-through">
                $120
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                10% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchFive} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Apple Update Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $100
              </p>
              <p className="font-base font-medium line-through">
                $120
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                25% Off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchSix} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Rounded Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $95
              </p>
              <p className="font-base font-medium line-through">
                $120 
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                35% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchSeven} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Rounded Smart Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $160
              </p>
              <p className="font-base font-medium line-through">
                $200
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                40% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchEight} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Branded Watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $80
              </p>
              <p className="font-base font-medium line-through">
                $87
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                7% off
              </p>
          </div>
        </div>
        </Link>
        <Link href='Product1' className="transform overflow-hidden cursor-pointer bg-white duration-500 hover:scale-105" >
        <Image src={WatchNine} alt="Photo" className="w-full" />
        <div className="p-4 text-black/[0.9]" >
          <h2 className="text-lg font-medium">Huawei watch</h2>
          <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                $165
              </p>
              <p className="font-base font-medium line-through">
                $170
                </p>
              <p className="ml-auto text-base font-medium text-green-500">
                5% off
              </p>
          </div>
        </div>
        </Link>
  
        </div>
    
    )
  }
  
  export default ProductPage;
  
  
  