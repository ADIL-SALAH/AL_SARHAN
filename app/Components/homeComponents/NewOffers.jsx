'use client'
import React from 'react'
import Button from '../button'
import { useRouter } from 'next/navigation'

function NewOffers() {
    const router = useRouter()

    const offers = [
        {
            img: '/home/newOffers/1.png',
        },
        {
            img: '/home/newOffers/2.png',
            title: 'Up to 20% off on Davidoff Cool Water'
        },
        {
            img: '/home/newOffers/3.png',
            title: 'Save up to 20% on Samsung Smart Watch'

        },
        {
            img: '/home/newOffers/4.png',
            title: 'Samsung Smartphones | Up to 15% OFF'

        },
        {
            img: '/home/newOffers/5.png',
            title: 'NB  Footwears | Offers starting AED 20'
        },
        {
            img: '/home/newOffers/6.png'
        },
    ]
    return (
        <div className='lg:p-10 p-5 mt-5 lg:px-40 '>
            <h1 className='font-semibold lg:text-xl text-lg uppercase m-3'>New Offers</h1>
            <div className='md:h-auto h-[600px] overflow-auto scrollbar-none space-y-5 '>

                <div className='grid md:grid-cols-4 grid-cols-2  gap-5 '>
                    <div className='col-span-2 relative'>
                        <img src={offers[0].img} alt="" className='w-[100%] ' />
                        <Button btnName='Shop Now' onClick={() => router.push('shop')} btnStyle='absolute bottom-[100px] lg:left-[230px] left-[115px] bg-slate-100 md:px-[23px] px-8 py-2 animate-pulse lg:animate-bounce hover:bg-slate-200 shadow-2xl' />
                    </div>
                    <div className='flex col-span-2 gap-5' >

                        <div className="bg-white flex flex-col justify-between">
                            <div className="w-full p-3 ">
                                <p className="text-center lg:text-lg text-xs font-semibold ">
                                    {offers[1].title}
                                </p>
                            </div>
                            <img src={offers[1].img} alt="" className="w-full lg:h-[300px] " />
                        </div>

                        <div className="bg-white flex flex-col justify-between">
                            <div className="w-full p-3 ">
                                <p className="text-center lg:text-lg text-xs font-semibold ">
                                    {offers[2].title}
                                </p>
                            </div>
                            <img src={offers[2].img} alt="" className="w-full lg:h-[300px] " />
                        </div>


                    </div>

                </div>

                <div className='grid md:grid-cols-4 grid-cols-2 gap-5 '>
                    <div className='flex col-span-2 gap-5' >

                        <div className="bg-white flex flex-col justify-between">
                            <div className="w-full p-3">
                                <p className="text-center lg:text-lg text-xs font-semibold ">
                                    {offers[3].title}
                                </p>
                            </div>
                            <img src={offers[3].img} alt="" className="w-full lg:h-[300px] " />
                        </div>


                        <div className="bg-white flex flex-col justify-between">
                            <div className="w-full p-3">
                                <p className="text-center lg:text-lg text-xs font-semibold p-2">
                                    {offers[4].title}
                                </p>
                            </div>
                            <img src={offers[4].img} alt="" className="w-full lg:h-[300px] " />
                        </div>


                    </div>
                    <div className='col-span-2 relative'>
                        <img src={offers[5].img} alt="" className='w-[100%] ' />
                        <Button btnName='Shop Now' onClick={() => router.push('shop')} btnStyle='absolute bottom-[100px] lg:left-[230px] left-[115px] bg-slate-100 animate-pulse lg:animate-bounce md:px-[23px] hover:bg-slate-200 px-8 py-2 shadow-2xl' />

                    </div>

                </div>
            </div>
        </div>



    )
}

export default NewOffers 