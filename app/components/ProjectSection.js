'use client'

import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from 'framer-motion'

const projectData = [
    {
        id: 1,
        title: 'Ecommerce',
        description: 'Fast food website',
        image: "/pic/ecommerce-website-2.png",
        gitUrl: "https://github.com/zeynabmaleki/nextjs-app/tree/master"
    },
    {
        id: 2,
        title: 'Authentication',
        description: 'log in and register',
        image: "/pic/login-and-register-1.png",
        gitUrl: "https://github.com/zeynabmaleki/Athentication-app-nextjs"
    },
    {
        id: 3,
        title: 'Notes',
        description: 'Making notes with React js',
        image: "/pic/notes-1.png",
        gitUrl: "https://github.com/zeynabmaleki/notes-with-react"
    },
    {
        id: 4,
        title: 'Todo list',
        description: 'Todo list with React js',
        image: "/pic/todo-list-1.png",
        gitUrl: "https://github.com/zeynabmaleki/reactjs--todo-list"
    },
]

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
}

export default function ProjectSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section
            id='projects'
            className='flex flex-col mt-0 mb-25 pt-0 scroll-mt-25' >
            <h2 className='text-center mb-17 text-3xl font-semibold'>My projects</h2>

            {/* <ul className='grid sm:grid-cols-2 grid-cols-1 gap-10 mx-0'>
                {projectData.map(project =>
                    <ProjectSlide
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.image}
                        gitUrl={project.gitUrl}
                    />
                )}
            </ul> */}

            <ul ref={ref} className='grid sm:grid-cols-2 grid-cols-1 gap-10 mx-5'>
                {projectData.map((project, index) =>
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial='initial'
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.6 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.image}
                            gitUrl={project.gitUrl}
                        />
                    </motion.li>
                )}
            </ul>
        </section>
    )
}
