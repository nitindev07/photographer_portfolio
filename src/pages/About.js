import React, { useContext } from 'react';
import girlimg from '../img/about/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const {mouseEnterHandler,mouseLeaveHandler}= useContext(CursorContext)
  return <motion.section
   initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
   className='section '>
    <div className='flex justify-start container py-36 mx-auto '>
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='lg:ml-20 ml-0 flex flex-col-reverse lg:flex-row lg:items-center gap-x-20'>
        <div className='max-h-96 lg:max-h-max overflow-hidden lg:w-[480px] w-full'>
          {/* imge */}
          <img className=' w-full h-[600px] ' src={girlimg} alt="" />
        </div>
        <motion.div
        initial={{opacity:0, y:'-80%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'-80%'}}
    transition={transition1}>
          <div
          
           className='w-full lg:w-[400px] pb-14 flex flex-col items-center lg:items-start text-center lg:text-start px-4 lg:px-0'>
            <h1 className='h1 mb-6'>About Me</h1>
            <p className='font-secondary text-[16px] mb-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eveniet nemo exercitationem debitis  quos, in amet, pariatur ab quae  porro. </p>
            <p className='font-secondary text-[16px] mb-9 '>iatur ab quae nisi porro. Vitae pariatur, reiciendis provident asperiores quisquam ab optio a nihil exercitationem hasku ewtung.</p>
            <Link className='btn' to={'/portfolio'}>View My Work</Link>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
