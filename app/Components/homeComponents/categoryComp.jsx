import React from 'react'
import Image from "next/image";

function CategoryComp() {
    const categoryList = [
        {
            image: '/home/categories/crockery.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/Gadgets.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/electronics.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/fashion.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/Footwear.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/Grocery.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/crockery.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/Gadgets.png',
            title: 'crockery'
        },
        {
            image: '/home/categories/electronics.png',
            title: 'crockery'
        },
    ]
    return (
        <div className="flex overflow-x-auto scrollbar-none space-x-7 md:justify-around mt-8 md:px-10 py-5 px-5">
            {categoryList.map((item, index) => (
                <div key={index} className="space-y-3 text-center">
                    <img
                        src={item.image}
                        alt=""
                        className="w-16 h-16 lg:w-20 lg:h-20 transition-transform hover:scale-[115%]"
                    />
                    <h5>{item.title}</h5>
                </div>
            ))}
        </div>
    )
}

export default CategoryComp