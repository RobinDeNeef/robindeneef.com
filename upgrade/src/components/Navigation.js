"use client"
import { useState } from "react";

export default function Header2({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="p-4">
      <div className="inset-x-0 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 rounded-2xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page " className="flex items-center" href="/">
                <p className="h-7 w-7 w-auto text-2xl">👨🏻‍💻</p>
                <p className="sr-only">Robin De Neef</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Home</a>
              <a aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Projects</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/posts">📝 Writings</a>

            </div>
            <div className="flex items-center justify-end gap-3">
              <a className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login">Stay Posted</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}