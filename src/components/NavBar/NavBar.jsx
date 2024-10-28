import React, { useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineMenu } from 'react-icons/hi'
import {FaMoon} from "react-icons/fa"
import useDarkMode from '../../useDarkMode'
const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-[20px] font-extrabold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill size={"24px"} color="#e9c46a" className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>
        ): (
          <FaMoon size={"24px"} color="#e9c46a" className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>
        )}
        
      </div>
      <ul className="ml-auto font-semibold text-16 md:flex md:gap-10">
        {openMenu && isMobile ? (
          <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu} />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu onClick={handleMenu} size={"24px"} className="cursor-pointer" />
        ) : (
          <>
            <li className='btn-hover'>Features</li>
            <li className='btn-hover'>Menu</li>
            <li className='btn-hover'>Our Story</li>
            <li className='ml-28 btn-hover'>Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute z-10 p-8 text-center text-black bg-white right-8 text-13">
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Our Story</li>
            <li className='cursor-pointer'>Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
