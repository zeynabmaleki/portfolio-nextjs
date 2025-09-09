import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from "next/image";


export default function ProjectCard({ imageUrl, title, description, gitUrl }) {
    return (
        // <div className='bg-zinc-700 p-1 rounded-xl mb-15'>
        //     <div
        //         className='h-56 md:h-72 rounded-t-xl relative group'
        //         style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
        //     >
        //         <div className="overlay absolute inset-0 bg-zinc-800/50 hidden group-hover:flex group-hover:bg-zinc-800/50 transition-all duration-500 justify-center items-center">
        //             <Link href={gitUrl} className="h-12 w-12 relative border-2 rounded-full border-zinc-300 hover:border-zinc-100 flex items-center justify-center group/link">
        //                 <CodeBracketIcon className="h-10 w-10 text-zinc-300 m-2 cursor-pointer group-hover/link:text-zinc-100" />
        //             </Link>
        //         </div>
        //     </div>

        //     <div className='text-zinc-300 rounded-b-xl py-6 px-4'>
        //         <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        //         <p className='text-zinc-400'>{description}</p>
        //     </div>
        // </div>


        <div className='flex flex-col h-auto justify-between items-center mx-auto bg-zinc-700/40 rounded-2xl hover:scale-105 duration-500 transform hover:shadow-xl border-double shadow-black text-stone-300 w-full'>
            <div className="relative w-full group ">
                <Image
                    src={imageUrl}
                    width={400}
                    height={250}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                    alt='project-image'
                    className='rounded-2xl rounded-bl-none rounded-br-none pb-3 pt-2 pr-2 pl-2'
                />
                <div className="overlay absolute inset-0 bg-zinc-800/50 hidden group-hover:flex group-hover:bg-zinc-800/50 transition-all duration-500 justify-center items-center ">
                    <Link href={gitUrl} className="h-12 w-12 relative border-2 rounded-full border-zinc-300 hover:border-zinc-100 flex items-center justify-center group/link ">
                        <CodeBracketIcon className="h-10 w-10 text-zinc-300 m-2 cursor-pointer group-hover/link:text-zinc-100"/>
                    </Link>
                </div>
            </div>
            <div className='text-zinc-300 rounded-b-xl py-6 px-4 text-center'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-zinc-400'>{description}</p>
            </div>
        </div>
    )
}





