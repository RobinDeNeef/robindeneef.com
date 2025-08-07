import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';


const CardWithIcon = ({ title, icon, tagLine, callToAction = "Check it out", url="#" }) => {
    return (
        <Link
            href={url}
            className="group relative col-span-12 md:col-span-4 cursor-pointer overflow-hidden bg-zinc-800 px-3 pt-5 pb-4 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg md:px-5 text-white" >
            <span className="absolute top-5 z-0 h-20 w-20 rounded-full bg-emerald-400 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md ">
                <div className="flex">
                    <div className="h-20 w-20">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-400 transition-all duration-300 group-hover:bg-emerald-200">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg> */}
                            <p className="text-5xl">{icon}</p>
                        </span>
                    </div>
                    <div className="pl-4">
                        <h3 className="text-xl font-bold transition-all duration-300 group-hover:text-white">{title}</h3>
                        <div
                            className="text-base leading-4 text-gray-300 transition-all duration-300 group-hover:text-white/90">
                            <p>{tagLine}</p>
                        </div>
                        <div className="pt-2 text-base font-semibold leading-7">
                            <p>
                                <span className="text-emerald-400 transition-all duration-300 group-hover:text-white flex items-center">
                                    {callToAction} <FiArrowRight />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default CardWithIcon;