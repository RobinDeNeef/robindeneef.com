import Link from "next/link";
import {SITENAME} from "@/lib/constants";


import Image from "next/image";

export default function Navigation() {
  return (
    <header className="p-4">
      <div className="inset-x-0 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 rounded-2xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link
                className="flex items-center gap-2 shrink-0 "
                href="/"
                title={`${SITENAME} homepage`}
              >
                <Image
                  src="/assets/robin-de-neef.png"
                  alt={`${SITENAME} logo`}
                  className="h-6 hidden md:block"
                  width={125}
                  height={24}
                  priority
                />
                <Image
                  src="/assets/robin-de-neef-initials.png"
                  alt={`${SITENAME} logo`}
                  className="h-6 md:hidden"
                  width={50}
                  height={24}
                  priority
                />
                <span className="sr-only">{SITENAME}</span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/">🏠 Home</Link>
              {/* <Link aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/projects">🚀 Projects</Link> */}
              <Link className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/blog">📝 Writings</Link>
              <Link className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/blog">🚀 Escape Velocity</Link>
            </div>
            <div className="flex items-center justify-end gap-3">
              <a className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="https://robindeneef.substack.com/" target="_blank" rel="noopener noreferrer">Stay Posted</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}