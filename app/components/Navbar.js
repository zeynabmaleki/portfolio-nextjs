'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

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
        <nav className='fixed top-0 left-0 right-0 z-10 bg-transparent'>
            <div className='flex flex-wrap items-center justify-between py-5 px-16'>
                <Link href={"/"}>
                    <Image 
                    src="/pic/logo.png"
                    width={80}
                    height={50}
                    alt='logo'
                    />
                </Link>
                <div className='block'>
                    {!navbarOpen ? (
                        <button
                            className='flex items-center px-2 py-2 border-2 rounded-full
                            border-violet-500 text-violet-500 '
                            onClick={() => setNavbarOpen(true)}
                        >
                            <Bars3Icon className='w-7 h-7' />
                        </button>
                    ) : (
                        <button
                            className='flex items-center px-2 py-2 border-2 rounded-full
                            border-violet-500 text-zinc-800
                            bg-violet-500'
                            onClick={() => setNavbarOpen(false)}
                        >
                            <XMarkIcon className='w-7 h-7' />
                        </button>
                    )}
                </div>

            </div>

            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}


