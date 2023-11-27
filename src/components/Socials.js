import React, { useContext } from 'react';
import {  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter} from 'react-icons/io'
  import { CursorContext } from "../context/CursorContext";
  
  
  const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return <div 
  onMouseLeave={mouseLeaveHandler}
  onMouseEnter={mouseEnterHandler}
   className='flex gap-x-4'>
    <a href="https://www.facebook.com/login/" target='_blank'><IoLogoFacebook size={25}/></a>
    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target='_blank'><IoLogoTwitter size={25}/></a>
    <a href="https://www.instagram.com/" target='_blank'><IoLogoInstagram size={25}/></a>
    <a href="https://www.youtube.com/" target='_blank'><IoLogoYoutube size={25}/></a>
    
  </div>;
};

export default Socials;
