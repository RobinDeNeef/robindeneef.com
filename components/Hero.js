import React, { useState } from "react";
import Link from "next/link";
import profile from "../public/profile.png";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  const [invertColor, setInvertColor] = useState(false);

  const invertColorFunction = () => {
    setTimeout(() => setInvertColor(!invertColor), 3500);
  };

  return (
    <div className="container px-4 mx-auto lg:max-w-4xl">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left lg:mt-6">
        <div className="lg:px-4 lg:mt-8 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Welcome! 👋
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <RoughNotationGroup show={true}>
              <p className="mb-4 text-xl">
                My name is{" "}
                <RoughNotation
                  type="underline"
                  padding={[-2, 0, 0, 0]}
                  order="1"
                >
                  Robin
                </RoughNotation>
                . By day, I’m a{" "}
                <RoughNotation
                  type="underline"
                  padding={[-2, 0, 0, 0]}
                  order="2"
                >
                  <RoughNotation type="highlight" color="orange" order="4">
                    <span className={invertColor ? "text-black" : undefined}>
                      Fullstack Developer at ML6
                    </span>
                  </RoughNotation>
                </RoughNotation>
                . By night, I like to tinker around with different technologies
                and build little projects of my own at{" "}
                <RoughNotation
                  type="underline"
                  padding={[-2, 0, 0, 0]}
                  order="3"
                >
                  <RoughNotation
                    type="highlight"
                    color="yellow"
                    order="5"
                    getAnnotationObject={invertColorFunction}
                  >
                    <Link
                      href="https://sobrinostudios.com"
                      passHref={true}
                      component="a"
                    >
                      <a className={invertColor ? "text-black" : undefined}>
                        Sobrino Studios.
                      </a>
                    </Link>
                  </RoughNotation>
                </RoughNotation>
              </p>
            </RoughNotationGroup>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-5 lg:px-4 mb-10">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
