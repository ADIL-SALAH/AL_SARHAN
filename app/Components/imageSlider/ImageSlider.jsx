import React from 'react'


function ImageSlider(props) {
    const { data, head, imgStyle } = props
    return (
        <div className="md:p-10 p-5 pt-9 space-y-2">
            <h1 className="font-semibold lg:text-2xl text-lg uppercase">{head}</h1>
            <div className="overflow-auto scroll-smooth md:scrollbar-none scrollbar-thumb-gray-200 scrollbar-track-slate-100 ">
                <div className="flex space-x-4 " style={{ width: "1750px" }}>
                    {data?.map((item, index) => (
                        <div key={index} className={`bg-gray-50 p-8 space-y-4 hover:bg-slate-100 w-64`}>
                            <div className="border border-b-2 flex justify-center items-center  border-b-black border-x-0 border-t-0">
                                <img src={item.img} alt="" className={`${imgStyle} transition-transform hover:scale-125`} />
                            </div>
                            <div className='w-full text-center '>
                                <h1>{item.name}</h1>
                                <h1>{item.brand ? 'by ' + item.brand : null}</h1>
                                <p className='text-xs text-slate-500'>{item.Desc}</p>
                            </div>
                            <div className='space-y-1'>
                                {item.offer ? <span className='text-[10px] text-white font-semibold p-1 bg-red-500 '>{item.offer}</span> : null}
                                {item.price ? <p className='text-xs '>{item.price}</p> : null}
                                {item.price ? <p className='text-slate-400 text-[10px] line-through' >{item.price}</p> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    )
}

export default ImageSlider