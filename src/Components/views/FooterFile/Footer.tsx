// "use Client"

import React from 'react'
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import Wrapper from '../NavBar/NavBar-For-Pc/wrapper'
import Link from 'next/link'
const Footer  = () => {

  return (
    <div className='bg-[#090303] text-white pt-14 pb-3'>
      <Wrapper className='flex justify-between flex-col md:flex-row gap-12 md:gap-0' >

      {/* Left Side */}
      <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row'>
        {/* Start */}
        <div className='flex flex-col gap-3 shrink-0'>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
            My Store
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
            New Shope
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
            Sign up for mail
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
          Special Discount
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium text-sm cursor-pointer'>
          Feedback
          </Link>

        </div>
      {/* Menu End */}

      {/* Second Menu Start */}
      <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0 ' >
        {/* Second Menu Start */}
        <div className='flex flex-col gap-3' >
          <div className='font-oswald font-medium uppercase text-sm'>
            Get Help
            </div>  
            <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
              Order Information
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
              Delivery
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
              Returns
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
              Payment Method 
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
              Help & Support
              </Link>        
        </div>
        {/* Menu End */}

        {/* Next Menu Start */}
        <div className='flex flex-col gap-3'>
          <Link href='https://www.youtube.com' target='_blank' className='font-oswald font-medium uppercase text-sm'>
            About
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
            News & information
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
          Terms and Policies
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
           Payment Policies
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-sm text-white/[0.5] hover:text-white cursor-pointer'>
          Customer Support
          </Link>
            </div>
            {/* MENU END */}
              </div>
              {/* First MENU ENDDED */}
            </div>
            {/* First LEFT END */}

            {/* RIGHT START */}
            <div className='flex gap-4 justify-center md:justify-start'>
              <Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaGithub />
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaLinkedin />
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaYoutube />
              </Link>
              <Link href='https://www.youtube.com' target='_blank' className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaTwitter />
              </Link>
            </div>
        {/* End */}
      </Wrapper>
      <Wrapper className='flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 ' >
      <div className='text-[15px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left'>
        CopyRight  2023 Muhammad Hassan All Rights Reserved
       </div>
       {/* Left Side Complete End */}


       {/* Other Side */}
       <div className='flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center'>
          <Link href='https://www.youtube.com' target='_blank' className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
        Complete Guidance        
        </Link>
            <Link href='https://www.youtube.com' target='_blank' className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
            Sales        
            </Link>
            <Link href='https://www.youtube.com' target='_blank' className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
              How TO Use      
          </Link>
          <Link href='https://www.youtube.com' target='_blank' className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
              Privacy Policy      
          </Link>
       </div>
      </Wrapper>
    </div>
  )
}

export default Footer;