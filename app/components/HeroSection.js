"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import Link from 'next/link'


export default function HeroSection() {
    return (
        <section>
            <div className='flex flex-col justify-center items-center gap-8 mx-10 lg:mb-55 mb-10 mt-0 xl:mt-5'>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className='cols-span-7 place-self-center text-center sm:text-left '>
                    <h1 className='text-zinc-50 mb-4 text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-md:mb-13'>
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
                    <p className='text-zinc-300 text-lg lg:text-xl mb-6 text-justify max-sm:text-center max-md:mb-10'>
                        I&apos;m a Frontend Developer passionate about building beautiful and user-friendly web experiences.
                        With a background in computer engineering and a strong interest in UI/UX design,
                        I bring creativity and technical skills to every project.
                        Let&apos;s create something amazing together!
                    </p>

                    <div className='flex flex-row-reverse '>
                        <Link
                            href="https://jobvision.ir/cv/89898381-004723"
                            className='w-full sm:w-fit max-sm:mx-5 max-sm:text-lg px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 duration-300 text-zinc-200'>
                            Contact me
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
