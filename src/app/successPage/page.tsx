import Wrapper from '@/Components/views/NavBar/NavBar-For-Pc/wrapper'
import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className='min-h-[650px] flex items-center'>
        <Wrapper>
            <div className='max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col'>
                <h1 className='text-green-800 font-bold'>Payment Successfull</h1>
                <h2 className='mt-2 font-samibold' >Order Placed Successfull</h2>
                <Link href='/' className='font-bold mt-4 hover:underline' >
                    Continue Shopping
                </Link>
            </div>
        </Wrapper>
    </div>
  )
}

export default SuccessPage