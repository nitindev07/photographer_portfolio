import React, { useContext } from 'react';
import woman from '../img/home/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const Home = () => {
  const {mouseEnterHandler,mouseLeaveHandler}= useContext(CursorContext)
  return <motion.section
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={transition1}
   className='section '>
    <div className="container mx-auto h-full">
      <div className='flex flex-col pt-16 lg:pt-0 lg:flex-row lg:ml-16 ml-0  items-center'>
      
      <div className='lg:-mr-24 mr-0 lg:w-[650px] w-full z-10'>
        <motion.div  
          initial={{opacity:0, y:'-50%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'-50%'}}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
         className=' mt-20 pb-14 px-4 items-center lg:items-start flex flex-col justify-center lg:justify-start'>
          <h1 className='h1 text-center lg:text-start mb-3 lg:mb-4 '>Photographer <br />& Film Maker</h1>
          <p className='font-primary text-[24px] mb-7 lg:mb-10'>Los Angeles, USA</p>
          <Link className='btn' to={'/contact'}>Hire me</Link>
        </motion.div>
      </div>
      <motion.div
       initial={{scale:0}}
    animate={{scale:1}}
    exit={{scale:0}}
    transition={transition1}
       className='lg:max-h-screen max-h-96 overflow-hidden'><img className='lg:h-[100vh] w-full lg:w-[650px]' src={woman} alt="" /></motion.div>
      </div>
    </div>
  </motion.section>
};

export default Home;
