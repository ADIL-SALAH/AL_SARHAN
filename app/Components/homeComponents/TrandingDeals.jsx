import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'

function TrandingDeals() {

    const topDeals = [
        {
            img: '/home/topDeals/1.png',
            category: 'Monitor ',
            Desc: 'Starting from 67,999*'
        },
        {
            img: '/home/topDeals/2.png',
            category: 'Toys',
            Desc: 'Starting from 10'
        },
        {
            img: '/home/topDeals/3.png',
            category: 'Ladies Hand Bag',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/topDeals/4.png',
            category: 'Cookery',
            Desc: 'Starting from 1999*'
        },
        {
            img: '/home/topDeals/5.png',
            category: 'Mens shoes',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/topDeals/1.png',
            category: 'Monitor',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/topDeals/2.png',
            category: 'Toys',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/topDeals/3.png',
            category: 'Ladies Hand Bag',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/topDeals/4.png',
            category: 'Cookery',
            Desc: 'Starting from 999*'
        },
    ]

    return (
        <div>
            <ImageSlider head='Trending Deals' data={topDeals} imgStyle='w-20 h-24 ' />
        </div>
    )
}

export default TrandingDeals