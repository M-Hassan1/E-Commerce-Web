import Wrapper from '@/Components/views/NavBar/NavBar-For-Pc/wrapper'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[650px] flex items-center'>
        <Wrapper>
            <div className='max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col'>
                <h1 className='font-bold'>Payment Failed</h1>
                <h2 className='text-base mt-5'>
                    Check Your Payment Method And Try Again
                </h2>
                <Link href='/' className='font-bold mt-5 hover:underline' >
                    Continue Shopping
                </Link>

            </div>
        </Wrapper>
    </div>
  )
}

export default page