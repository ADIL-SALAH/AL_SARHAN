import React from 'react'
import Carousel from 'react-elastic-carousel'
import Image from "next/image";

function CarouselComp(props) {
    // const {items}=props

    const items = [
        '/home/BannerImg.png',
        '/home/BannerImg.png',
        '/home/BannerImg.png',
        '/home/BannerImg.png',
    ]
    const customBtn = ({ type, onClick, isEdge }) => (
        <div className='md:flex hidden items-center '>
            <button onClick={onClick} disabled={isEdge} className={`${type === 'PREV' ? 'rotate-180 left-10' : 'right-10'} absolute bg-black bg-opacity-50  md:h-[115px] p-2 z-10 text-white ${isEdge ? 'bg-yellow-800' : ''
                } ${isEdge ? 'bg-yellow-800 !important' : ''}`} >
                {`>`}
            </button>
        </div>
    )

    const customPagination = ({ pages, activePage, onClick }) => (
        <div className='flex space-x-1 absolute lg:top-[570px] md:top-[475px] top-[335px]'>
            {pages.map((page) => {
                const isActivePage = activePage === page
                return (
                    <div
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                        className={`bg-white rounded-full md:w-3 md:h-3 w-1.5 h-1.5 ${isActivePage ? 'bg-slate-600 ' : null}`}
                    />
                )
            })}

        </div>
    )
    return (
        <Carousel itemsToShow={1} renderArrow={customBtn} renderPagination={customPagination} >
            {items.map((item, index) => (
                // <img key={index} src={item} alt="bannerImg" className='p-0 m-0' />
                <Image key={index} src={item} alt="bannerImg" width={1500} height={1500} loading='lazy' className='w-full h-48 lg:h-[422px] md:h-80 p-0 m-0' />
            ))}
        </Carousel>
    )
}

export default CarouselComp