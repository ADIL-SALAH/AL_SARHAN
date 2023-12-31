import React from 'react'
import Marquee from "react-fast-marquee";

function Ribbon() {
    const titles = [
        'offer zone',
        'special offers',
        'offers',
        'special offers',
        'offer zone'
    ]
    return (
        <Marquee pauseOnHover gradient gradientWidth='80px' gradientColor='#f2f2f2' >
            <div className='bg-black w-screen h-10 mt-8 flex  overflow-x-hidden relative'>
                {titles.map((item, index) => (
                    <div key={index} className='flex justify-around md:text-sm text-[9px] items-center text-slate-100 md:text-md w-full'>
                        <h1 className='uppercase font-semibold'>{item}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 576 512" fill='white'>
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    </div>
                ))}
            </div>
        </Marquee >

    )
}

export default Ribbon