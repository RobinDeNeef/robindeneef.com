import Link from "next/link";
import Image from "next/image";
import {SITENAME, SITE_DESCRIPTION} from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-base-200 mx-auto max-w-4xl dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 md:mr-6 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src="/assets/robin-de-neef-initials.png"
                alt={SITENAME}
                // priority={true}
                className="h-6"
                width={42}
                height={24}
              />
              <strong className="font-extrabold tracking-tight md:text-lg">
                {SITENAME}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-slate-800 dark:text-slate-400">
              {SITE_DESCRIPTION}
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-500">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-between -mb-10 md:mt-0 mt-10 text-slate-800 text-center dark:text-slate-400">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-slate-900 tracking-widest text-sm md:text-left mb-3 dark:text-slate-200">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/" target="_blank" className="link link-hover">
                  Home
                </Link>
                <Link href="/blog" className="link link-hover">
                  Articles
                </Link>
                {/* <Link href="/projects" className="link link-hover">
                  Projects
                </Link> */}
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-slate-800">
              <div className="footer-title font-semibold text-slate-900 tracking-widest text-sm md:text-left mb-3 dark:text-slate-200">
                MORE FROM ME
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm dark:text-slate-400">
                <Link href="https://fullstackalmanac.com" className="link link-hover">
                  FullstackAlmanac
                </Link>
                <Link href="https://contraptions.ai" className="link link-hover">
                  Contraptions AI
                </Link>
                <Link href="https://adprophet.xyz" className="link link-hover">
                  AdProphet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;