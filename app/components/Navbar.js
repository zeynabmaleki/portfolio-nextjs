'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]


export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState()

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-zinc-800'>
            <div className='flex flex-wrap items-center justify-between mx-auto py-5 px-8 lg:px-25'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden '>
                    {!navbarOpen ? (
                        <button
                            className='flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 hover:text-zinc-100 hover:border-zinc-100'
                            onClick={() => setNavbarOpen(true)}
                        >
                            <Bars3Icon className='w-5 h-5' />
                        </button>
                    ) : (
                        <button
                            className='flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 hover:text-zinc-100 hover:border-zinc-100'
                            onClick={() => setNavbarOpen(false)}
                        >
                            <XMarkIcon className='w-5 h-5' />
                        </button>
                    )}
                </div>
                <div id='navbar' className='menu hidden md:block md:w-auto'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}
