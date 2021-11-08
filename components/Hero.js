import React from "react"
import Link from "next/link"
import Image from "next/image"
import profile from "../public/profile.png"

const Hero = () => {
    return (
        <div className="container px-4 mx-auto lg:max-w-4xl">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left lg:mt-6">
                <div className="lg:px-4 lg:mt-8 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    Welcome! 👋 
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4 text-xl">
                            My name is Robin. By day, I’m a Fullstack Developer at ML6. By night, I like to tinker around with different technologies and build little projects of my own at <Link href="https://sobrinostudios.com">Sobrino Studios.</Link>
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-5 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
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

export default Hero;