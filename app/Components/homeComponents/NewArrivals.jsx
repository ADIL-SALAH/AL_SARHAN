import React from 'react'
import Imageviewer from '../imageSlider/ImageSlider'

function NewArrivals() {

    const newArrivals = [
        {
            img: '/home/new arrivals/1.png',
            name: 'Monitor ',
            offer: '50% off',
            offerPrice: 'AED 110',
            price: 'AED 110',

        },
        {
            img: '/home/new arrivals/2.png',
            name: 'Toys',
            offer: '50% off',
            offerPrice: 'AED 99.99'
            , price: 'AED 99.99'
        },
        {
            img: '/home/new arrivals/3.png',
            name: 'Ladies Hand Bag',
            offer: '50% off',
            offerPrice: 'AED 192.09',
            price: 'AED 192.09'
        },
        {
            img: '/home/new arrivals/4.png',
            name: 'Cookery',
            offer: '50% off',
            offerPrice: 'AED 152.09',
            price: 'AED 152.09'
        },
        {
            img: '/home/new arrivals/3.png',
            name: 'Mens shoes',
            offer: '50% off',
            offerPrice: 'AED 152.09',
            price: 'AED 152.09'
        },
        {
            img: '/home/new arrivals/1.png',
            name: 'Monitor',
            offer: '50% off',
            offerPrice: 'AED 152.09',
            price: 'AED 152.09'
        },
        {
            img: '/home/new arrivals/2.png',
            name: 'Toys',
            offer: '50% off',
            offerPrice: 'AED 152.09',
            price: 'AED 152.09'
        },
        {
            img: '/home/new arrivals/3.png',
            name: 'Ladies Hand Bag',
            offer: '50% off',
            offerPrice: 'AED 152.09',
            price: 'AED 152.09'
        },
        {
            img: '/home/new arrivals/4.png',
            name: 'Cookery',
            offer: '50% off',
            offerPrice: 'AED 152.09',
            price: 'AED 152.09'
        },
    ]
    return (
        <div>
            <Imageviewer data={newArrivals} head='New Arrivals | shoes' imgStyle='w-auto h-36' />
        </div>
    )
}

export default NewArrivals