'use client'

import React, { useState } from 'react'
import DropDown from './DropDown'
import ReactCountryFlag from "react-country-flag"

function MenuBar() {

    const [active, setactive] = useState(null)
    const [flag, setFlag] = useState(null)

    const categories = [
        'Recommented',
        'Clothes',
        'Gadgets',
        'Electronics',
        'Perfumes',
        'Shoes',
        'Makeups',
        'Sunglasses',
        'Belts'
    ]
    const languages = [
        'Eng',
        'Mal'
    ]
    const Country = [
        'India',
        'China',
        'Russia'
    ]

    return (
        <div className='px-20 p-5 flex justify-between items-center'>
            <div className={`flex justify-between w-2/3 text-sm text-gray-600`} >
                {categories.map((item, index) => (
                    <span className={`${active === index ? 'text-black font-semibold' : 'text-gray-500'} hover:cursor-pointer`} key={index} onClick={() => setactive(index)}>{item}</span>
                ))}
            </div>
            <div className=' flex items-center text-xs justify-around w-1/3'>
                <h1>|</h1>
                <div className='text-center '>
                    <p className='text-xs'>Language</p>
                    <DropDown name='Select Language' values={languages} />
                </div>
                <div className='text-center'>
                    <p className='text-xs'>Country</p>
                    <DropDown name='Select Country' values={Country} onclick={(countryName) => setFlag(countryName.slice(0, 2))} />

                    <ReactCountryFlag
                        countryCode={flag}
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                            marginLeft: '10px'
                        }}
                        title="US"
                    />


                </div>
            </div>

        </div>
    )
}

export default MenuBar