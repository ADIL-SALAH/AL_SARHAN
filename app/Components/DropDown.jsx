'use client'


import React, { useState } from 'react'

function DropDown(props) {
    const { name, values, onclick } = props
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    return (
        <div className="relative inline-block">
            <button className="relative z-10 block p-2 text-[#121212] min-w-[100px] bg-white border border-transparent rounded-full dark:text-slate-200 dark:bg-gray-700 focus:outline-none lg:hover:bg-gray-200 " onClick={() => setIsOpen(!isOpen)}>
                {selected ? selected : name.length > 8 ? name.slice(0, 12) + '...' : name}
            </button>
            {isOpen ?
                <div className="absolute right-0 z-20 w-full min-w-fit py-2 mt-2 origin-top-right text-xs bg-black rounded-md shadow-xl dark:bg-gray-800 bg-opacity-90">
                    {values.map((item, index) => (
                        <span key={index} onClick={item.onclick ? item.onclick : () => { setSelected(item), setIsOpen(!isOpen), onclick ? onclick(item) : null }} className="block hover:cursor-pointer px-4 py-3  hover:text-gray-500 text-gray-300 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> {item.name ? item.name : item} </span>
                    ))}
                </div >
                : null}
        </div >
    )
}

export default DropDown