import React from 'react'

export default function TabButton({ active, selectTab, children }) {
    const buttonClasses = active ? 'text-zinc-50 border-b border-violet-600 ' : 'text-zinc-50'

    return (
        <button onClick={selectTab}>
            <p className={`mr-10 font-semibold hover:text-zinc-50 text-zinc-200 ${buttonClasses}`}>
                {children}
            </p>
        </button>

    )
}
