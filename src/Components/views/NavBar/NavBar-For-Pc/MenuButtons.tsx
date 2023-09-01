"use client"
import React from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs"


const data = [
  {id: 1, name: "Home", url: "/contact"},
  {id: 2, name: "About", url: "/contact"},
  {id: 3, name: "Categories", subMenu: true},
  {id: 4, name: "Contact", url: "/contact"},
]
const SubMenuData = [
  {id: 1, name: "Smart Watch", url: "/contact"},
  {id: 2, name: "Sports Watch"},
  {id: 3, name: "Branded Touch Watch "},
  {id: 4, name: "Simple Watch" },
]

type MenuButtonsProps = {
  showDesktopMenu: boolean;
  setShowDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
};


const MenuButtons: React.FC<MenuButtonsProps> = ({ showDesktopMenu, setShowDesktopMenu }) => {
  
  
  
  return (
    <ul className='hidden md:flex items-center gap-8 text-black ' >
    {data.map((item) =>{
      return (
        <React.Fragment key={item.id} >
          {!!item?.subMenu ? (
            <li className='cursor-pointer flex items-center gap-2 relative ' onMouseEnter={() => setShowDesktopMenu(true)}
            onMouseLeave={() => setShowDesktopMenu(false)} >
              {item.name}
              <BsChevronDown size={14} />
              {showDesktopMenu && (
                <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg py-1 ' >
                  {SubMenuData.map((subMenu)=>{
                  return(
                    <Link key={subMenu.id} href='/contact' onClick={() => setShowDesktopMenu(false)} >

                      <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                        {subMenu.name}
                        <span className='opacity-50 text-sm '>78</span>
                        </li>
                    </Link>
                  )
                })}
                </ul>
              )}
            </li>
          ) : (
            <li className='cursor-pointer'>
              <Link href='/contact'>
              {item.name}
              </Link>
              </li>
          ) }
        </React.Fragment>
      )
    } 
    
    )}

    </ul>
  )
}

export default MenuButtons;



