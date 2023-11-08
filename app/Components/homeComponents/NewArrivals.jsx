import React from 'react'
import Imageviewer from '../imageSlider/ImageSlider'

function NewArrivals() {

    const newArrivals = [
        {
            img: '/home/new arrivals/1.png',
            category: 'Monitor ',
            Desc: 'Starting from 67,999*'
        },
        {
            img: '/home/new arrivals/2.png',
            category: 'Toys',
            Desc: 'Starting from 10'
        },
        {
            img: '/home/new arrivals/3.png',
            category: 'Ladies Hand Bag',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/new arrivals/4.png',
            category: 'Cookery',
            Desc: 'Starting from 1999*'
        },
        {
            img: '/home/new arrivals/3.png',
            category: 'Mens shoes',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/new arrivals/1.png',
            category: 'Monitor',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/new arrivals/2.png',
            category: 'Toys',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/new arrivals/3.png',
            category: 'Ladies Hand Bag',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/new arrivals/4.png',
            category: 'Cookery',
            Desc: 'Starting from 999*'
        },
    ]
    return (
        <div>
            <Imageviewer data={newArrivals} head='New Arrivals|shoes' imgStyle='w-28 h-36' />
        </div>
    )
}

export default NewArrivals