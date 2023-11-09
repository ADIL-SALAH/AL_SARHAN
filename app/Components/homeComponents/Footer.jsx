import React from 'react'

function Footer() {
    return (
        <div className='bg-[#580713] w-full h-full md:pb-28 text-slate-200 p-10 md:gap-0 gap-10 md:ps-24 grid md:grid-cols-4 grid-cols-2 '>
            <div >
                <h1 className='font-semibold mb-3'>Details</h1>
                <div className='space-y-1'>
                    <p>Address</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold mb-3'>Category</h1>
                <div className='space-y-1'>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold mb-3'>Category</h1>
                <div className='space-y-1'>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                    <p>Subcategory</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold mb-3'>Our policy</h1>
                <div className='space-y-1'>
                    <p>Support</p>
                    <p>Warranty And Return Policy</p>
                    <p>Terms of use</p>
                    <p>FAQ</p>
                    <p>Terms of sales</p>
                </div>
            </div>

        </div>
    )
}

export default Footer