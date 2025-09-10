import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className='footer border border-t-zinc-600 border-l-0 border-r-0 border-b-0 '>
            <div className='container  px-10 flex flex-row justify-center mx-auto items-center gap-15'>
                    <Link href={"/"}>
                        <Image
                            src="/pic/logo.png"
                            width={80}
                            height={25}
                            alt='logo'
                        />
                    </Link>
                <p> All rights reserved.</p>
            </div>
        </footer>
    )
}
