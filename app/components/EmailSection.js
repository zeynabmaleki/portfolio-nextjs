'use client'
import React, { useState } from "react";
import Link from 'next/link'

export default function EmailSection() {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };


    return (
        <section className='grid md:grid-cols-2 my-12 md:my-25 py-24 gap-4 mx-10  relative'>
            {/* <div className="size-130 rounded-full bg-radial-[at_50%_75%] blur-3xl   from-purple-900 from-40% to-zinc-800 absolute top-1/2 left-50 transform -translate-x-1/2 -translate-1/2"></div> */}
            <div className='z-9 pl-2'>

                <h5 className='font-bold text-2xl text-zinc-50  mb-10'>Let&apos;s connect</h5>
                <p className='text-zinc-400 mb-4 max-w-md text-lg'>
                    I&apos;m always excited to connect with fellow developers,
                    potential collaborators, or anyone interested in my work.
                    Whether you have a project in mind, want to discuss opportunities,
                    or just say hello, feel free to reach out.
                    Let&apos;s build something amazing together!
                </p>


                <div className='socials flex flex-row gap-15 mt-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400'>
                    {/* <FaGithub /> */}
                    <Link href='github.com' className='hover:text-zinc-200 '>Github</Link>
                    <Link href='/' className='hover:text-zinc-200 ' >Jobvision </Link>
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit}
                    className='flex flex-col'>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='text-zinc-200 block text-sm font-medium mb-2'>
                            Your email
                        </label>
                        <input
                            name='email'
                            type="email"
                            id='email'
                            required
                            placeholder='example@gmail.com'
                            className='bg-zinc-700/90 border-zinc-700/60 text-sm rounded-lg block w-full p-2'
                        />
                    </div>

                    <div className='mb-6'>
                        <label
                            htmlFor='subject'
                            className='text-zinc-200 block text-sm font-medium mb-2'>
                            subject
                        </label>
                        <input
                            name='subject'
                            type="text"
                            id='subject'
                            required
                            placeholder='Just saying hi!'
                            className='bg-zinc-700/90 border-zinc-700/60 text-sm rounded-lg block w-full p-2'
                        />
                    </div>

                    <div className='mb-6'>
                        <label
                            htmlFor='message'
                            className='text-zinc-200 block text-sm font-medium mb-2'>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder='Let&apos;s talk about...'
                            className='bg-zinc-700/90 border-zinc-700/60 text-sm rounded-lg block w-full p-2'
                        />
                    </div>

                    <button
                        type='submit'
                        className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-zinc-100 rounded-xl px-6 py-2 mt-5 hover:scale-105 duration-300 w-full'
                    >
                        Send message
                    </button>
                    {emailSubmitted && (
                        <p className="text-green-400 text-sm mt-2">
                            Email sent successfully.
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
