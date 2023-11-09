import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'

function TrandingDeals() {

    const topDeals = [
        {
            img: '/home/trendingDeals/1.png',
            name: 'Monitor ',
            Desc: 'Starting from 67,999*'
        },
        {
            img: '/home/trendingDeals/2.png',
            name: 'Toys',
            Desc: 'Starting from 10'
        },
        {
            img: '/home/trendingDeals/3.png',
            name: 'Ladies Hand Bag',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/trendingDeals/4.png',
            name: 'Cookery',
            Desc: 'Starting from 1999*'
        },
        {
            img: '/home/trendingDeals/5.png',
            name: 'Mens shoes',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/trendingDeals/1.png',
            name: 'Monitor',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/trendingDeals/2.png',
            name: 'Toys',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/trendingDeals/3.png',
            name: 'Ladies Hand Bag',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/trendingDeals/4.png',
            name: 'Cookery',
            Desc: 'Starting from 999*'
        },
        {
            img: '/home/trendingDeals/4.png',
            name: 'Cookery',
            Desc: 'Starting from 999*'
        },
    ]

    return (
        <div>
            <ImageSlider head='Trending Deals' data={topDeals} imgStyle='w-auto h-24 ' />
        </div>
    )
}

export default TrandingDeals