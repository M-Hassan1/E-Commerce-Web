import React from 'react';
import CartItemsPage from '@/Components/views/HeroSection/cartItems/cartItemsPage'; 

import Wrapper from '../../Components/views/NavBar/NavBar-For-Pc/wrapper'
import EmptyCart from "../../Components/assets/images/521-5212497_empty-cart-hd-png-download.png";

import Image from 'next/image';
import Link from 'next/link';

const ShoppingCartPage: React.FC = () => {
  return (
    <div className='w-full md-py-20'>
    <Wrapper>
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-6'>
          <div className='text-[20px] md:text-[34px] mb-5 font-semibold'>
            My Cart
          </div>
        </div>
    <div className='flex flex-col lg:flex-row gap-12 py-10' >

      <div className='flex-[2]'>
        <h1 className='font-bold'>Cart Items</h1>
        <CartItemsPage />
        <CartItemsPage />
        <CartItemsPage />
        <CartItemsPage />
        <CartItemsPage />
        <CartItemsPage />

      </div>
        <div className='flex-[1]'>
        <h1 className='font-bold'>Product Info</h1>

        <div className='p-5 my-5 text-black rounded-xl'>
          <div className='flex justify-between'>
              <h3 className='uppercase text-md md:text-lg font-medium' >Total</h3>
              <h3 className='uppercase text-md md:text-lg font-medium' >200$</h3>

            </div>          
        </div>
        <p className='text-sm bg-gray-200 p-2 rounded-md md:text-md py-5 border-t mt-5  ' >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores alias, culpa eum dignissimos ratione nulla! Suscipit, reiciendis assumenda.
        </p>
        <button className='w-full py-4 justify-center rounded-full bg-gray-800 text-white transition-transform active:scale-75 mt-4 hover:opacity-95 ' >
          CheckOut
        </button>
        </div>
    </div>

      {/* <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
        <Image src={EmptyCart} alt='/' width={300} height={300} className='w-[300px] md:w-[400px] ' />

      </div>
      <span className='text-xl font-bold' >
        Your Cart Is Empty
      </span>
      <p className='text-center mt-4 mb-12'>
          You Have Not Added Anything In Your Cart
      </p>
      <div className='text-center mb-10 justify-center items-center' >
      <Link href="/" className='py-4 px-8 rounded-full text-white bg-black active:opacity-95 transition-transform '>
        Continue Shopping
      </Link></div> */}
    </Wrapper>
</div>
  );
};

export default ShoppingCartPage;

