'use client'

import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'


function Fashion() {
    const data = [
        {
            img: '/home/Fashion/1.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/2.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/3.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/4.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/2.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/1.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/2.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/3.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
        {
            img: '/home/Fashion/4.png',
            category: 'Mens and Women ',
            brand: 'Zara'
        },
    ]

    return (
        <div>
            <ImageSlider head='Fashion' data={data} imgStyle='w-32 h-36' />
        </div>
    )
}

export default Fashion