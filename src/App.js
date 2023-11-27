import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import {motion} from 'framer-motion'
import { CursorContext } from './context/CursorContext';

const App = () => {
  const {cursorVariants, cursorBG}=useContext(CursorContext)
  return (
  <>
  <BrowserRouter>
    <Header/>
    <AnimRoutes/>
  </BrowserRouter>
  <motion.div variants={cursorVariants} animate={cursorBG} className='rounded-full w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50'></motion.div>
  </>
)};

export default App;
