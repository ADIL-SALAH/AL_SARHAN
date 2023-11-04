import React from 'react'
import MainBanner from './homeComponents/MainBanner'

function Home() {

    const banner = [
        {
            src: 'https://image.shutterstock.com/image-illustration/metaverse-concert-party-avatars-online-260nw-2159457681.jpg',
            title: 'hai'
        },
        {
            src: 'https://image.shutterstock.com/image-illustration/avatars-metaverse-online-store-empty-260nw-2174572027.jpg',
            title: 'hai'
        },
        {
            src: 'https://image.shutterstock.com/image-photo/young-asian-man-wearing-vr-260nw-2174244129.jpg',
            title: 'hai'
        },
        {
            src: 'https://image.shutterstock.com/image-illustration/avatars-metaverse-vr-glasses-online-260nw-2155022743.jpg',
            title: 'hai'
        },
    ]

    return (
        <div className='bg-[#F0ECE2] h-screen p-0'>
            <MainBanner banner={banner} />
        </div>
    )
}

export default Home