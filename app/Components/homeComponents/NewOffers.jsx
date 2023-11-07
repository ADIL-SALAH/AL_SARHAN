import React from 'react'

function NewOffers() {
    return (
        <div className='lg:p-10 p-5 lg:px-28 space-y-5'>
            <h1 className='font-semibold lg:text-xl text-md uppercase m-3'>New Offers</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='col-span-2 '>
                    <img src="/home/newOffers/1.png" alt="" className='w-full ' />
                </div>
                <div className='flex col-span-2 gap-5' >
                    <div className='bg-white flex items-end'>

                        <img src="/home/newOffers/2.png" alt="" className='lg:h-72 ' />
                    </div>
                    <div className='bg-white flex items-end'>

                        <img src="/home/newOffers/2.png" alt="" className='lg:h-72 ' />
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-4  gap-5'>
                <div className='flex col-span-2 gap-5' >

                    <div className=' bg-white flex items-end overflow-clip'>
                        <img src="/home/newOffers/2.png" alt="" className='lg:h-72 ' />
                    </div>

                    <div className='bg-white flex items-end'>

                        <img src="/home/newOffers/2.png" alt="" className='lg:h-72 ' />
                    </div>
                </div>
                <div className='col-span-2 '>
                    <img src="/home/newOffers/1.png" alt="" className='w-[600px]' />
                </div>

            </div>
        </div>



    )
}

export default NewOffers