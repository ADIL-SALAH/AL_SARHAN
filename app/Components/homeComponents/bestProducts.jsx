import React from 'react'
import BannerViewer from '../bannerViewer/BannerViewer'

function BestProducts() {
    const bestProducts = [
        {
            img: '/home/bestProducts/1.png',
            title: 'Laptop'
        },
        {
            img: '/home/bestProducts/2.png',
            title: 'Phones'
        },
        {
            img: '/home/bestProducts/3.png',
            title: 'Laptop'
        },
        {
            img: '/home/bestProducts/4.png',
            title: 'Laptop'
        }
    ]
    return (
        <div>
            <BannerViewer images={bestProducts} divStyle='grid md:grid-cols-4 grid-cols-2 gap-5 p-10 ' textStyle='absolute text-white lg:bottom-20 lg:text-2xl text-transparent bg-clip-text bottom-10 font-bold bg-gradient-to-r from-slate-100 to-slate-600 ' />
        </div>
    )
}

export default BestProducts