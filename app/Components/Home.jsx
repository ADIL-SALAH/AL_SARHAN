import React from 'react'
import MainBanner from './homeComponents/MainBanner'
import CategoryComp from './homeComponents/categoryComp'
import NewOffers from './homeComponents/NewOffers'
import Ribbon from './homeComponents/Ribbon'
import Fashion from './homeComponents/Fashion'
import Banner2 from './homeComponents/banner2'
import TrendingDeals from './homeComponents/TrandingDeals'
import NewArrivals from './homeComponents/NewArrivals'

function Home() {


    return (
        <div className='bg-[#F0ECE2] h-full w-full '>
            <MainBanner />
            <CategoryComp />
            <NewOffers />
            <Ribbon />
            <Fashion />
            <Banner2 />
            <TrendingDeals />
            <NewArrivals />
        </div>
    )
}

export default Home