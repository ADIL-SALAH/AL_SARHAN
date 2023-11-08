import React from 'react'

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
        <div className="flex overflow-x-auto space-x-10 md:justify-around mt-5 md:px-10 py-10 px-5">
            {categoryList.map((item, index) => (
                <div key={index} className="space-y-3 text-center">
                    <img
                        src={item.image}
                        alt=""
                        className="w-20 h-16 md:w-20 lg:h-20 transition-transform hover:scale-[115%]"
                    />
                    <h5>{item.title}</h5>
                </div>
            ))}
        </div>
    )
}

export default CategoryComp