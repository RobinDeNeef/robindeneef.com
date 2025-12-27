import React from "react";
import Block from "./Block";
import * as motion from "motion/react-client"
import Link from "next/link";
import cn from "classnames";

import { Archivo_Black, Poppins } from 'next/font/google';


interface BlockEscapeVelocityProps {
    title?: string;
    description?: string;
    className?: string;
}


const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const BlockEscapeVelocity: React.FC<BlockEscapeVelocityProps> = ({
    title = "Escape Velocity",
    description = "Break free from the ordinary. Accelerate your ideas beyond the expected.",
    className = "",
}) => {
    return (
        // I would limit the span to 9 in the future, but only if we have a product to showcase.
        <Link href="/escape-velocity" className="col-span-12 md:col-span-12">
        <Block className="relative p-0 border-none shadow bg-gradient-to-r from-indigo-950 to-violet-900 h-60 overflow-hidden">
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute z-0 w-1 h-1 bg-white rounded-full opacity-60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
                {/* Rocket emoji fly-by loop */}
                <motion.span
                    className="absolute text-[96px] z-1 select-none pointer-events-none"
                    style={{ left: 0, bottom: 0 }}
                    animate={{
                        x: ['-5vw', '90vw'],
                        y: ['5vw', '-10vw'],
                        rotate: [0, 20, 0], // Slight angle change each loop
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: 'linear',
                        repeatDelay: 4, // Pause for 4 seconds (between 3-5 as requested)
                    }}
                    aria-label="rocket"
                >
                    🚀
                </motion.span>
            </div>
            <motion.div
                initial={{ backgroundSize: '10rem' }}
                whileHover={{ backgroundSize: '11rem' }}
                className="h-full z-10 min-h-40 bg-space-img bg-contain bg-no-repeat bg-left-bottom bg-[position:left_-20px_bottom_-15px] md:bg-[position:left_1rem_bottom_0] overflow-hidden flex items-center"
                whileTap={{ backgroundSize: '9rem' }}
            >
                <motion.div
                    className="text-3xl md:text-5xl font-bold leading-tight drop-shadow text-center w-full text-shadow-lg"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
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
                    <motion.span className={cn(poppins.className, "text-base -mb-1 inline-block align-bottom")} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Reaching</motion.span> <br />
                    <motion.span className={cn(archivoBlack.className, "text-shadow-lg text-purple-400")} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Escape Velocity</motion.span> <br />
                    <motion.span className={cn(poppins.className, "text-xl margin-top-2 -mt-1 inline-block align-top")} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Journey to €10K</motion.span> <br />
                </motion.div>
            </motion.div>
        </Block>
                </Link>
    );
};

export default BlockEscapeVelocity;