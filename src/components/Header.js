import React, { useContext, useState } from 'react';
import logo from '../img/header/logo.svg'
import { Link } from 'react-router-dom';
import Socials from './Socials';
import MobileNav from './MobileNav';
import {CgMenuRight} from 'react-icons/cg'
import { CursorContext } from "../context/CursorContext";



const Header = () => {
  const [active, setActive]=useState(false)
  
const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  
  return (
  <header className='h-[100px] lg:h-[140px] fixed flex items-center  z-30 w-full px-4 md:px-[30px] lg:px-[100px]'>
    <div className='w-full flex justify-between items-center'>
      {/* logo */}
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      </div>
      {/* link */}
      <div className='lg:flex gap-x-24 hidden'>
      <ul className='lg:flex text-[17px] font-semibold font-secondary gap-x-12 hidden'>
        <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><Link className='hover:text-grey/70 text-primary ' to={'/'}>Home</Link></li>
        <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><Link className='hover:text-grey/70 text-primary ' to={'/about'}>About</Link></li>
        <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><Link className='hover:text-grey/70 text-primary ' to={'/portfolio'}>Portfolio</Link></li>
        <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><Link className='hover:text-grey/70 text-primary ' to={'/contact'}>Contact</Link></li>
      </ul>
      <div className='hidden lg:block'><Socials /></div>
      </div>
      <button className='lg:hidden' ><CgMenuRight onClick={()=>setActive(!active)} size={35}/></button>
      
      <MobileNav active={active} setActive={setActive}/>
        
    </div>
  </header>
  )
};

export default Header;
