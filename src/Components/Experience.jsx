import React from 'react'

function Experience({ title, subTitle, des }) {
    return (
        <div className='w-full h-1/3 group'>
            <div className='w-8 h-[6px] bg-gray-900 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 justify-center items-center bg-black'>
                    <span className='w-3 h-3 rounded-full  bg-gray-800 group-hover:bg-red-500 duration-300'>

                    </span>


                </span>
            </div>
            <div className='ml-8  shadow-lg    -mt-20'>
                <div className='w-full bg-gray-900 hover:bg-gradient-to-t from-transparent to-black  hover:bg-opacity-25 duration-300 rounded-lg p-4 md:p-10 flex flex-col justify-center gap-4  md:gap-10 shadow-lg'>
                    <h3 className=' text-lg md:text-2xl font-bold text-red-400 group-hover:text-gray-200 duration-300'>{title}</h3>
                    <h4 className='text-base md:text-xl font-semibold text-gray-300 group-hover:text-white duration-300'>{subTitle}</h4>

                    <div className=' list-disc list-inside  text-sm md:text-md text-gray-700 flex flex-col  w-full h-auto  '>

                        <p className=' text-red-800 bg-black bg-opacity-25 group-hover:bg-black group-hover:text-gray-400 rounded-lg  shadow-xl text-sm font-medium p-4 '>
                            {des.split("\n").map((item,index)=>(
                                <span key={index} className='block'>
                                    {item.trim()}
                                </span>
                            ))}

                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Experience