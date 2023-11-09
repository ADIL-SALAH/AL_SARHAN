import React from 'react'
import BannerViewer from '../bannerViewer/BannerViewer'

function Banner3() {
    const images = [
        '/home/banner3/1.png',
        '/home/banner3/2.png',
        '/home/banner3/3.png',
    ]
    return (
        <div>
            <BannerViewer images={images} divStyle='grid md:grid-cols-3 gap-5 p-10' />
        </div>
    )
}

export default Banner3