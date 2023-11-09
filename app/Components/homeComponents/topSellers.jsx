import React from 'react'
import ImageSlider from '../imageSlider/ImageSlider'

function TopSellers() {

    const topSellers = [
        {
            img: '/home/topSellers/1.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },
        {
            img: '/home/topSellers/2.png',
            name: 'Earbuds',
            Desc: 'Up to 12 month No Cost EMI'
        },
        {
            img: '/home/topSellers/3.png',
            name: 'Earbuds',
            Desc: 'Up to 3 year Warranty'
        },
        {
            img: '/home/topSellers/4.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },

        {
            img: '/home/topSellers/3.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },
        {
            img: '/home/topSellers/4.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },
        {
            img: '/home/topSellers/1.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },
        {
            img: '/home/topSellers/2.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },
        {
            img: '/home/topSellers/3.png',
            name: 'Earbuds',
            Desc: 'Starting from AED 99'
        },
    ]

    return (
        <div>
            <ImageSlider data={topSellers} imgStyle='h-28 w-auto ' head='Top sellers' />
        </div>
    )
}

export default TopSellers