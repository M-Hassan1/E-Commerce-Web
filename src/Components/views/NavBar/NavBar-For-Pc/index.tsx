"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import MenuButtons from './MenuButtons';
import MobileSideBar from '../SideBar-For-Mobile/MobileSideBar';

import Wrapper from './wrapper';
import Image from 'next/image';
import { LogoImg } from '@/Components/assets/images';

import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'


const NavBarPage = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setlastScrolly] = useState(0)
  const controlNavBar = () => {
    if (window.scrollY > 200) {
      if(window.scrollY > lastScrolly && !MobileMenu ){
        setShow("-translate-y-[80px]")
      }
      else{
        setShow("shadow-sm")
      }

    }
    else {
      setShow("translate-y-0")
    }
    setlastScrolly(window.scrollY)
  };


  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar)  
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrolly])


  return (
    <div className={`w-full h-[50px] md:h-[80px] flex items-center justify-between backdrop-filter backdrop-blur-xl bg-slate-100/[0.85] z-20 sticky top-0 transition-transform duration-300 ${show} `}>
        <Wrapper className='h-[60px] flex justify-between items-center ' >
          <Link href='ajjahsg' > 
          <Image src={LogoImg} alt='LOGO' className='w-[40px] md:w-[60px]' />
          </Link>
          <MenuButtons showDesktopMenu={showDesktopMenu} 
          setShowDesktopMenu={setShowDesktopMenu} />

          {MobileMenu && (<MobileSideBar showDesktopMenu={showDesktopMenu} 
          setShowDesktopMenu={setShowDesktopMenu} 
          setMobileMenu={setMobileMenu}
         />)}

          <div className='flex items-center gap-2 text-black'>
            {/* Icons */}
            <div className='w-8 md:w-12 h-8 md:h-12 relative rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer'>
              <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
              <div className='absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 flex justify-center items-center px-[2px] md:px-[5px] ' >
                80
              </div>

            </div>
            {/* Icons stop */}
             {/* Icons */}
            <Link href='/ShoppingCart' >
            <div className='w-8 md:w-12 h-8 md:h-12 relative rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer'>
              <BsCart className='text-[15px] md:text-[20px]' />
              <div className='absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 flex justify-center items-center px-[2px] md:px-[5px]' >
                12
              </div>
            </div>
            </Link>
              {/* For Mobile Start Coding Here */}
            <div className='w-8 md:hidden md:w-12 h-8 md:h-12 relative rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer -mr-2 ' >
              { MobileMenu ? (
                <VscChromeClose className='text-[16px]'
                onClick={ () => setMobileMenu(false)} />
              ): (
                <BiMenuAltRight className='text-[20px]'
                onClick={ () => setMobileMenu(true)} />
              )}

              </div> 
          </div>
           
           </Wrapper>
    </div>
  )
}

export default NavBarPage;