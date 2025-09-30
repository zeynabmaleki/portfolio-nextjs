'use client'

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


// const TAB_DATA = [
//     {
//         title: "Skills",
//         id: "skills",
//         content: (
//             <ul className='flex lg:flex-row flex-col xl:gap-7 gap-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400  '>
//                 <li className='hover:text-zinc-200 '>HTML</li>
//                 <li className='hover:text-zinc-200 '>CSS</li>
//                 <li className='hover:text-zinc-200 '>Javascript</li>
//                 <li className='hover:text-zinc-200 '>Tailwind css</li>
//                 <li className='hover:text-zinc-200 '>React js</li>
//                 <li className='hover:text-zinc-200'>Next js</li>
//             </ul>
//         )
//     },
//     {
//         title: "Education",
//         id: "education",
//         content: (
//             <ul className=' text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400  '>
//                 <li className='hover:text-zinc-200 '>Bachelor’s degree in Computer Engineering</li>
//             </ul>
//         )
//     }
// ]


export default function AboutSection() {
    // const [tab, setTab] = useState("skills")
    // const [isPending, startTransition] = useTransition()

    // const [showMore, setShowMore] = useState(false)

    // const handleTabChange = (id) => {
    //     startTransition(() => {
    //         setTab(id)
    //     })
    // }

    return (
        <section id='about' className='text-zinc-300 scroll-mt-20 mt-45 mb-25'>
            <div className='flex flex-col justify-center items-center gap-10 mt-4 md:mt-0 text-left'>

                <h2 className='text-5xl font-bold mb-0 text-zinc-100'>
                    About Me
                </h2>

                <Image
                    src="/pic/avatar.png"
                    width={350}
                    height={350}
                    alt="pc pic"
                    className=''
                />

                <p className='text-base lg:text-lg'>
                    I am a Frontend Developer with a Bachelor’s degree in Computer Engineering and a strong passion for creating engaging digital experiences.
                    My skills include HTML, CSS, JavaScript, Git, Tailwind CSS, React.js, and Next.js,
                    which I use to build responsive and visually appealing web applications. <br />
                    I am particularly interested in UI/UX design and always strive to deliver user-friendly interfaces.
                    Eager to learn and grow, I am committed to expanding my knowledge in web development and staying updated with the latest industry trends.
                    I am excited to contribute my enthusiasm and skills to a dynamic team and help create outstanding web solutions.
                </p>

                <div className='flex flex-row justify-center items-center gap-5 pt-15'>
                    <h4>Skills : </h4>
                    <ul className='flex flex-row gap-5 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400'>
                        <li className='hover:text-zinc-200 '>HTML</li>
                        <li className='hover:text-zinc-200 '>CSS</li>
                        <li className='hover:text-zinc-200 '>Javascript</li>
                        <li className='hover:text-zinc-200 '>Tailwind css</li>
                        <li className='hover:text-zinc-200 '>React js</li>
                        <li className='hover:text-zinc-200'>Next js</li>
                    </ul>
                </div>

            </div>


            {/* <div className='grid grid-cols-5 grid-rows-5 gap-4 mt-4 md:mt-0 text-left'>

                <Image
                    src="/pic/avatar.png"
                    width={350}
                    height={350}
                    alt="pc pic"
                    className='col-span-2 row-span-4'
                />

                <div className='col-span-3 row-span-4 col-start-3'>
                    <h2 className='text-4xl font-bold mb-10 text-zinc-100'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg col-span-3 row-span-3 col-start-3 row-start-2'>
                        I am a Frontend Developer with a Bachelor’s degree in Computer Engineering and a strong passion for creating engaging digital experiences.
                        My skills include HTML, CSS, JavaScript, Git, Tailwind CSS, React.js, and Next.js,
                        which I use to build responsive and visually appealing web applications. <br />
                        I am particularly interested in UI/UX design and always strive to deliver user-friendly interfaces.
                        Eager to learn and grow, I am committed to expanding my knowledge in web development and staying updated with the latest industry trends.
                        I am excited to contribute my enthusiasm and skills to a dynamic team and help create outstanding web solutions.
                    </p>
                </div>

                <div className='col-span-5 row-start-5'>
                    <div className='flex flex-row justify-center items-center gap-5 pt-15'>
                        <h4>Skills : </h4>
                        <ul className='flex flex-row gap-5 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400'>
                            <li className='hover:text-zinc-200 '>HTML</li>
                            <li className='hover:text-zinc-200 '>CSS</li>
                            <li className='hover:text-zinc-200 '>Javascript</li>
                            <li className='hover:text-zinc-200 '>Tailwind css</li>
                            <li className='hover:text-zinc-200 '>React js</li>
                            <li className='hover:text-zinc-200'>Next js</li>
                        </ul>
                    </div>
                </div>

            </div> */}
        </section>
    )
}


