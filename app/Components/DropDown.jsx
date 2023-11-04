'use client'


import React, { useState } from 'react'

function DropDown(props) {
    const { name, values } = props
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative inline-block">
            <button className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-full dark:text-white dark:bg-gray-800 focus:outline-none hover:bg-gray-200 " onClick={() => setIsOpen(!isOpen)}>
                {name}
            </button>
            {isOpen ?

                <div className="absolute right-0 z-20 w-32 py-2 mt-2 origin-top-right bg-black rounded-md shadow-xl dark:bg-gray-800 bg-opacity-80">
                    {values.map((item, index) => (
                        <span key={index} onClick={item.onclick} className="block hover:cursor-pointer px-4 py-3 text-sm hover:text-gray-500 text-gray-300 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> {item.name} </span>
                    ))}
                </div >
                : null}
        </div >
    )
}

export default DropDown