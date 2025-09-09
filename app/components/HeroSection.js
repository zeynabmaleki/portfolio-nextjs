"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



export default function HeroSection() {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:ml-23 lg:mb-25 mb-10 max-sm:mt-5 mt-0 lg:mt-15'>

                <div className='cols-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-zinc-50 mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600'>Hello, I`m {""}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Zeynab Maleki rad',
                                2000,
                                'Front end Developer',
                                2000,
                                'UI/UX Designer',
                                2000
                            ]}
                            wrapper="span"
                            speed={15}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-zinc-300 text-base sm:text-lg lg:text-xl mb-6'>
                        I’m a junior Frontend Developer passionate about building beautiful and user-friendly web experiences.
                        With a background in computer engineering and a strong interest in UI/UX design,
                        I bring creativity and technical skills to every project.
                        Let’s create something amazing together!
                    </p>
                    <div>
                        <button className='w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 duration-300 text-zinc-200'>
                            Hire me
                        </button>
                    </div>
                </div>

                <div className='cols-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-zinc-700/20  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative '>
                        <Image
                            src="/pic/avatar.png"
                            width={300}
                            height={300}
                            alt='avatar Pic'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
