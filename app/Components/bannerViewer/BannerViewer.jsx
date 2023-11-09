'use client'

import Image from 'next/image'
import React from 'react'

function BannerViewer(props) {

    const { images, imgStyle, divStyle, textStyle } = props
    return (
        <div className={divStyle}>

            {images.map((item, index) => (

                <div key={index} className={`flex justify-center ${textStyle ? 'relative' : ''}`}>
                    <Image key={index} src={item.img ? item.img : item} width={100} height={100} alt='banner3 image' loading='lazy' layout='responsive' className={imgStyle} />
                    <h1 className={textStyle}>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default BannerViewer