import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'

function TopDeals() {
    const topDeals = [
        {
            img: '/home/topDeals/1.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/2.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/3.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/4.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/1.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/2.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/3.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },
        {
            img: '/home/topDeals/4.png',
            name: 'Monitor',
            Desc: 'Starting from 67,999'
        },

    ]
    return (
        <div>

            <ImageSlider data={topDeals} head='top deals' imgStyle='w-36 h-28' />
        </div>
    )
}

export default TopDeals