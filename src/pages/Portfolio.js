import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import inmg1 from '../img/portfolio/1.png'
import inmg2 from '../img/portfolio/2.png'
import inmg3 from '../img/portfolio/3.png'
import inmg4 from '../img/portfolio/4.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const Portfolio = () => {
  const {mouseEnterHandler,mouseLeaveHandler}= useContext(CursorContext)
  return <motion.section
    initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
   className='section'>
    <div className='lg:w-[1150px] w-full  mx-auto h-full'>
      <div className='lg:pt-48 pt-28  flex flex-col lg:flex-row justify-around items-center gap-x-20'>
      {/* text */}
      <motion.div 
        initial={{opacity:0, y:'-80%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'-80%'}}
    transition={transition1}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
       className='lg:w-[380px] ml-0 lg:ml-16  w-full flex flex-col items-center lg:items-start px-4 lg:px-0 text-center lg:text-start mb-14'>
        <h1 className='h1 mb-4'>portfolio</h1>
        <p className='font-secondary text-[17px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius ea culpa, qui magnam quasi repellat maiores, dicta .</p>
        <p className='font-secondary text-[17px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius ea culpa, qui magnam quasi repellat maiores, di.</p>
        <Link className='btn' to={'/contact'}>Hire me</Link>
      </motion.div>
      <div className='w-full'>
        <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='grid grid-cols-2 lg:gap-2'>
          <div className='overflow-hidden max-w-[250px] h-[187px] lg:max-w-[315px] lg:h-[220px]  '>
            <img className='object-cover h-full lg:h-[220px] lg:hover:scale-110' src={inmg1} alt="" />
          </div>
          <div className='overflow-hidden max-w-[250px] h-[187px] lg:max-w-[320px] lg:h-[220px]  '>
            <img className='lg:hover:scale-110  h-full lg:h-[220px]object-cover' src={inmg2} alt="" />
          </div>
          <div className='overflow-hidden max-w-[250px] h-[187px] lg:max-w-[315px] lg:h-[220px]  '>
            <img className='lg:hover:scale-110 h-full lg:h-[220px] object-cover' src={inmg3} alt="" />
          </div>
          <div className='overflow-hidden max-w-[250px] h-[187px] lg:max-w-[320px] lg:h-[220px]  '>
            <img className='hover:scale-110 h-full lg:h-[220px] object-cover' src={inmg4} alt="" />
          </div>
         
        </div>
      </div>
      </div>
    </div>
  </motion.section>;
};

export default Portfolio;
