import React from 'react'


function ImageSlider(props) {
    const { data, head, imgStyle } = props
    return (
        <div className="md:p-10 p-5 pt-9 space-y-2">
            <h1 className="font-semibold lg:text-2xl text-lg uppercase">{head}</h1>
            <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-slate-100 ">
                <div className="flex space-x-5 " style={{ width: "1750px" }}>
                    {data?.map((item, index) => (
                        <div key={index} className={`bg-white p-8 space-y-4 `}>
                            <div className="border border-b-2 flex justify-center items-center border-b-black border-x-0 border-t-0">
                                <img src={item.img} alt="" className={`${imgStyle} transition-transform hover:scale-125`} />
                            </div>
                            <div>
                                <h1>{item.category}</h1>
                                <h1>{item.brand ? 'by ' + item.brand : null}</h1>
                                <small className='text-xs'>{item.Desc}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ImageSlider