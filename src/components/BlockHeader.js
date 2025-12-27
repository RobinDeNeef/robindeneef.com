"use client"
import Block from "./Block";
import { motion } from 'motion/react';
import { useState } from "react";

const BlockHeader = ({ className, children, ...rest }) => {
  const [egg, setEgg] = useState(0);

  const eggc = () => {
    setEgg(egg + 1);
    
    if (egg === 20) {
      document.querySelector('.bg-profile-img').classList.replace('bg-profile-img', 'bg-ralph-img');
    }
  }

  return (
    <Block 
      className="p-0 border-none shadow col-span-12 row-span-2 md:col-span-6 bg-gradient-to-r from-emerald-500 to-emerald-400">
      <motion.div 
        initial={{ backgroundSize: '10rem' }}
        whileHover={{ backgroundSize: '11rem' }}
        className="h-full min-h-40 bg-profile-img bg-contain bg-no-repeat bg-right-bottom bg-[position:calc(100%+1rem)_calc(100%)] overflow-hidden flex items-center"
        whileTap={{ backgroundSize: '9rem' }}
        onClick={() => eggc()}
      >
        <motion.h1 
          className="ml-6 text-4xl font-medium leading-thight drop-shadow"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Robin</motion.span> <br/>
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>De Neef</motion.span> <br/>
          <motion.span 
            className="text-zinc-800 text-xl drop-shadow-none"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          > 
            Data/AI Consultant
          </motion.span>
        </motion.h1>
      </motion.div>
    </Block>
  )
}

export default BlockHeader;
