import React from 'react'
import NavLink from './NavLink'
import { motion } from "framer-motion"


export default function MenuOverlay({ links }) {
    return (

        <motion.ul
            className='flex flex-col gap-20 items-center justify-center
            fixed right-0 top-0 bottom-0 pt-0 px-13 -z-10
            rounded-l-4xl text-xl
            bg-zinc-700/50 backdrop-blur-lg
            '
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </motion.ul>

    )
}
