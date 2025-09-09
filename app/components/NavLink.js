import React from 'react'
import Link from 'next/link'


export default function NavLink({ href, title }) {
    return (

        <Link
            href={href}
            className='block py-2 pl-3 text-zinc-100 sm:text-xl rounded md:p-0  hover:text-zinc-50'>
            {title}
        </Link>

    )
}
