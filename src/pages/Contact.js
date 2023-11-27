import React, { useContext } from "react";
import img from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section lg:pt-44 pt-36  h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="w-full lg:bg-accent mt-0 lg:mt-24"
      >
        <div className="lg:w-[1150px] w-full mx-auto  h-full">
          <div className="flex flex-col lg:flex-row gap-x-16 ">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lg:w-[550px] w-full px-4 flex flex-col lg:items-start items-center pt-0 lg:pt-12 mb-14 lg:mb-0"
            >
              <h1 className="h1 mb-2">Contact Me</h1>
              <p className="text-[18px] mb-8">
                I Would love to get suggestions from you
              </p>
              <form action="">
                <div className="grid grid-cols-2 gap-4 mb-5 ">
                  <input
                    className="p-2 text-[19px] border-b lg:bg-accent border-black"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="p-2 text-[19px] border-b lg:bg-accent border-black"
                    type="email"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-8">
                  <input
                    className="p-2  lg:bg-accent w-full text-[19px] border-b border-black"
                    type="text"
                    placeholder="Your Message"
                  />
                </div>
              </form>
              <button className="btn">Send it</button>
            </motion.div>
            {/* image */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ transition: transition1, duration: 1.5 }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lg:max-h-screen max-h-96 overflow-hidden mt-0 lg:-mt-40 "
            >
              <img
                className="lg:h-[100vh] w-full lg:w-[550px]"
                src={img}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
