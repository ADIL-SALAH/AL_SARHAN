import React from 'react'
import MainBanner from './homeComponents/MainBanner'
import CategoryComp from './homeComponents/categoryComp'
import NewOffers from './homeComponents/NewOffers'

function Home() {


    return (
        <div className='bg-[#F0ECE2] h-full w-full '>
            <MainBanner />
            <CategoryComp />
            <NewOffers />
        </div>
    )
}

export default Home