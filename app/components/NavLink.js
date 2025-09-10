'use client'

import Link from 'next/link'

export default function NavLink({ href, title }) {
    const isAnchor = href.startsWith('#')

    return isAnchor ? (
        <a href={href} className="text-white hover:text-gray-300">
            {title}
        </a>
    ) : (
        <Link href={href} className="text-white hover:text-gray-300">
            {title}
        </Link>
    )
}