import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id:1,
        title:'Ecommerce',
        description:'Fast food website',
        image:"/pic/ecommerce-website-2.png",
        gitUrl:"/"
    },
    {
        id:2,
        title:'Authentication',
        description:'log in and register',
        image:"/pic/login-and-register-1.png",
        gitUrl:"/"
    },
    {
        id:3,
        title:'Notes',
        description:'Making notes with React js',
        image:"/pic/notes-1.png",
        gitUrl:"/"
    },
    {
        id:4,
        title:'Todo list',
        description:'Todo list with React js',
        image:"/pic/todo-list-1.png",
        gitUrl:"/"
    },
]

export default function ProjectSection() {
    return (
        <div className='flex flex-col mt-30'>
        <h2 className='text-center mb-17 text-3xl font-semibold'>My projects</h2>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 mx-5'>
            {projectData.map(project => 
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                gitUrl={project.gitUrl}
                />
            )}
        </div>
        </div>
    )
}
