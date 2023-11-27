import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MobileNav = ({active , setActive}) => {
  return <div className={`${active ? 'right-0' : '-right-[100%]'} shadow-xl bg-white  fixed top-0 z-30 h-screen w-[320px] transition-all duration-300 px-4 py-10`}>
    <IoMdClose onClick={()=>{setActive(false)}} size={40}/>
    <div className=' flex h-[85%] items-center justify-center'>
    <ul className='flex flex-col gap-y-6 justify-center items-center text-[29px] font-primary font-bold '>
        <li><Link className='' onClick={()=>setActive(!active)} to={'/'}>Home</Link></li>
        <li><Link className='' onClick={()=>setActive(!active)} to={'/about'}>About</Link></li>
        <li><Link className='' onClick={()=>setActive(!active)} to={'/portfolio'}>Portfolio</Link></li>
        <li><Link className='' onClick={()=>setActive(!active)} to={'/contact'}>Contact</Link></li>
      </ul>
      </div>
  </div>;
};

export default MobileNav;
