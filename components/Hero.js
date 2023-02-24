import React, { useState } from 'react'
import Link from 'next/link'
import profile from '../public/profile.png'

import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

const Hero = () => {
  const [invertColor, setInvertColor] = useState(false)

  const invertColorFunction = () => {
    setTimeout(() => setInvertColor(!invertColor), 3500)
  }

  return (
    <div className="container mx-auto px-4 lg:max-w-4xl">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:mt-6 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-8 lg:px-4 ">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Welcome! 👋
          </h1>
          <div className="mx-2 mt-4 text-gray-800 dark:text-white lg:mx-0">
            <RoughNotationGroup show={true}>
              <p className="mb-4 text-xl">
                My name is{' '}
                <RoughNotation type="underline" padding={[-2, 0, 0, 0]} order="1">
                  Robin
                </RoughNotation>
                . By day, I’m a{' '}
                <RoughNotation type="underline" padding={[-2, 0, 0, 0]} order="2" multiline>
                  <RoughNotation type="highlight" color="orange" order="4" multiline>
                    <span className={invertColor ? 'text-black' : undefined}>
                      freelance software developer
                    </span>
                  </RoughNotation>
                </RoughNotation>
                . By night, I like to tinker around with different technologies and build little
                projects of my own at{' '}
                <RoughNotation type="underline" padding={[-2, 0, 0, 0]} order="3" multiline>
                  <RoughNotation
                    type="highlight"
                    color="yellow"
                    order="5"
                    getAnnotationObject={invertColorFunction}
                    multiline
                  >
                    <Link href="https://sobrinostudios.com" passHref={true} component="a">
                      <a className={invertColor ? 'text-black' : undefined}>Sobrino Studios.</a>
                    </Link>
                  </RoughNotation>
                </RoughNotation>
              </p>
            </RoughNotationGroup>
          </div>
        </div>
        <div className="my-10 flex justify-center lg:my-1 lg:mt-5 lg:flex-shrink-0 lg:px-4">
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
  )
}

export default Hero
