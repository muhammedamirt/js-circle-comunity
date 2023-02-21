import React from 'react'

const Section1 = () => {
    return (
        <div className='py-1  bg-yellow-50 sm:flex justify-center'>
            <div className=' md:w-7/12  px-3 flex justify-center'>
                <div>
                <div className='py-1 px-5'>
                    <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold text-yellow-400'>Lorem ipsum  consectetur adipisicing elit.</h1>
                </div>
                <div className='py-10 flex justify-center'>
                    <button className='bg-yellow-400 py-2 px-10 rounded-full  font-semibold text-blue-700'>
                        Sign Up
                    </button>
                </div>
                </div>
            </div>
            <div className=' mt-10 flex md:justify-end justify-center h-full '>
                <img src="https://wearebgc.org/wp-content/uploads/2022/08/BGC-HOME.png" alt="" className='object-cover h-96 sm:w-96 md:w-full md:h-96' />
            </div>
        </div>
    )
}

export default Section1