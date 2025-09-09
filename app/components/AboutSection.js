'use client'

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='flex lg:flex-row flex-col xl:gap-7 gap-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400  '>
                <li className='hover:text-zinc-200 '>HTML</li>
                <li className='hover:text-zinc-200 '>CSS</li>
                <li className='hover:text-zinc-200 '>Javascript</li>
                <li className='hover:text-zinc-200 '>Tailwind css</li>
                <li className='hover:text-zinc-200 '>React js</li>
                <li className='hover:text-zinc-200'>Next js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className=' text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400  '>
                <li className='hover:text-zinc-200 '>Bachelor’s degree in Computer Engineering</li>
            </ul>
        )
    }
    // },
    // {
    //     title: "Experience",
    //     id: "experience",
    //     content: (
    //         <ul>
    //             <li>Experience</li>
    //         </ul>
    //     )
    // }
]


export default function AboutSection() {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const [showMore, setShowMore] = useState(false)

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-zinc-300'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/pic/pc-pic.png"
                    width={500}
                    height={500}
                    alt="pc pic"
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4 text-zinc-100'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        I am a junior Frontend Developer with a Bachelor’s degree in Computer Engineering and a strong passion for creating engaging digital experiences.
                        My skills include HTML, CSS, JavaScript, Git, Tailwind CSS, React.js, and Next.js,
                        which I use to build responsive and visually appealing web applications.
                    </p>
                    <p className={`text-base lg:text-lg ${showMore ? '' : 'hidden'} lg:block`}>
                        I am particularly interested in UI/UX design and always strive to deliver user-friendly interfaces.
                        Eager to learn and grow, I am committed to expanding my knowledge in web development and staying updated with the latest industry trends.
                        I am excited to contribute my enthusiasm and skills to a dynamic team and help create outstanding web solutions.
                    </p>
                    <button
                        className='lg:hidden text-zinc-500 hover:border-1 cursor-pointer'
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show less" : "Read more"}
                    </button>
                    <div className='flex flex-row mt-8 justify-start'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}>
                            {" "}
                            skills {" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}>
                            {" "}
                            Education{" "}
                        </TabButton>

                        {/* <TabButton
                            selectTab={() => handleTabChange('experience')}
                            active={tab === 'experience'}>
                            {" "}
                            Experience{" "}
                        </TabButton> */}
                    </div>

                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>

                </div>
            </div>
        </section>
    )
}
