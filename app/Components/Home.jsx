import React from 'react'
import MainBanner from './homeComponents/MainBanner'
import CategoryComp from './homeComponents/categoryComp'
import NewOffers from './homeComponents/NewOffers'
import Ribbon from './homeComponents/Ribbon'
import Fashion from './homeComponents/Fashion'
import Banner2 from './homeComponents/banner2'
import TrendingDeals from './homeComponents/TrandingDeals'
import NewArrivals from './homeComponents/NewArrivals'
import Banner3 from './homeComponents/banner3'
import TopSellers from './homeComponents/topSellers'
import TopDeals from './homeComponents/TopDeals'
import BestProducts from './homeComponents/bestProducts'
import Footer from './homeComponents/Footer'

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
            <Banner3 />
            <TopSellers />
            <TopDeals />
            <BestProducts />
            <Footer />
        </div>
    )
}

export default Home