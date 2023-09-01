import Image from 'next/image';
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import WatchTwo from '@/Components/assets/images/Photo-3.jpeg'

const cartItemsPage: React.FC = () => {
    const apostropheCode = '&apos;';

  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
        <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
            <Image src={WatchTwo} alt='Watch Photo' />
        </div>
        <div className='w-full flex flex-col' >
            <div className='flex flex-col md:flex-row justify-between'>
                <h1 className='text-black md:text-xl font-semibold text-black/[0.8]'>
                    Branded Watch
                </h1>
                <h2 className='text-sm md:text-md font-medium text-black text-black/[0.8] block md:hidden '>
                    New Watch
                </h2>

                <h2 className='text-sm md:text-md font-medium text-black text-black/[0.8]'>  
                    Just in 120$
                </h2>
            </div>  
            <h2 className='text-md font-medium text-black/[0.5] hidden md:block'> 
                Watches For Man
            </h2>
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-[5px] md:gap-[20px] text-black/[0.5] text-sm md:text-md'>
                        <div className='flex items-center gap-[2px]'>
                            <h3 className='font-sami-bold'> Quantity:</h3>
                            <select>
                                <option value='1'>1 Piece</option>
                                <option value='1'>2 Piece </option>
                                <option value='1'>3 Piece </option>
                                <option value='1'>4 Piece </option>
                            </select>
                        </div>
                        <div className='flex items-center gap-[2px]'>
                            <h3 className='font-sami-bold'>Price</h3>
                            <select>
                                <option value='1'>1 Piece in 120$</option>
                                <option value='1'>2 Piece offer 200</option>
                                <option value='1'>3 Piece in 320$</option>
                                <option value='1'>4 Piece Big Offer 400$</option>
                            </select>

                        </div>
                       
                    <RiDeleteBin6Line className='text-black hover:text-red-900 text-[16px] cursor-pointer md:text-[20px]' />

                    </div>
                </div>
        </div>
    </div>
  )
}

export default cartItemsPage