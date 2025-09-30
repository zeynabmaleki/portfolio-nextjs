import React from 'react'
import NavLink from './NavLink'

export default function MenuOverlay({ links }) {
    return (
        // <div className='relative'>
        <ul className='flex flex-col gap-20 items-center justify-center
        fixed right-0 top-0 bottom-0 pt-0 px-13 -z-10
        rounded-l-4xl text-xl
        bg-zinc-700/50 
        '>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
        // </div>
    )
}
