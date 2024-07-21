"use client"
import { useState } from "react";
import Link from "next/link";
import config from "@/utils/config";


export default function Header2() {
  return (
    <header className="p-4">
      <div className="inset-x-0 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 rounded-2xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a
                className="flex items-center gap-2 shrink-0 "
                href="/"
                title={`${config.siteName} homepage`}
              >
                <img
                  src="/robin-de-neef.png"
                  alt={`${config.siteName} logo`}
                  className="h-6 hidden md:block"
                  placeholder="blur"
                  // priority={true}
                  height={24}
                />
                <img
                  src="/robin-de-neef-initials.png"
                  alt={`${config.siteName} logo`}
                  className="h-6 md:hidden"
                  placeholder="blur"
                  // priority={true}
                  height={24}
                />
                <span className="sr-only">{config.siteName}</span>
              </a>

            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/">🏠 Home</Link>
              {/* <Link aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/projects">🚀 Projects</Link> */}
              <Link className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/posts">📝 Writings</Link>

            </div>
            <div className="flex items-center justify-end gap-3">
              <a className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="https://robindeneef.substack.com/">Stay Posted</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}