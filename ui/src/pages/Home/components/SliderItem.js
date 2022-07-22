import React from 'react'

const SliderItem = ({ item }) => {
    return (
        <div
            className="flex space-x-4 my-4 justify-center items-center md:flex-col md:items-start md:space-x-0 hover:bg-white p-4 rounded-lg cursor-pointer w-10/12 mx-auto"
        >
            <div className="w-10 h-10">
               {item.image ?  <img src={`${item.image}`} alt={item.ticker} />  : <div className='bg-transparent w-full h-full'></div>}
            </div>
            <div>
                <div className="flex space-x-4 font-medium items-center">
                    <h1 className="text-primary-gray">{item.ticker}</h1>
                    <span
                        className={`${item.history.change === 0
                            ? `bg-primary-gray`
                            : item.history.change < 0
                                ? `bg-primary-red`
                                : `bg-primary-green`
                            } rounded-full px-2 text-sm text-white`}
                    >
                        {item.history.change + " %"}
                    </span>
                </div>
                <span className="text-2xl font-bold">{item.history.close + " ₮"}</span>
            </div>
        </div>
    )
}

export default SliderItem