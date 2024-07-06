
"use client"
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <div className="bg-zinc-50">
    <Navigation/>
    
    <main className="">
      <BentoGrid/>
    </main>
    </div>
  );
}

export const BentoGrid = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 lg:max-w-screen-lg">
        <Block className={"col-span-6 row-span-2 bg-emerald-400 border-emerald-300"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Block>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block className={"col-span-12"}/>
      </div>
    </div>
  );
};

export const Block = ({className, children, ...rest}) => {
  return (
    <motion.div 
      className={twMerge("col-span-3 rounded-lg border border-zinc-700 bg-zinc-800 p-6", className)}
      {...rest}  
    >
      {children}
    </motion.div>
  );
}