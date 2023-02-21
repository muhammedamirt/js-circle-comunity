import React from 'react'

const Section3 = () => {
    return (
        <div className='bg-black'>
            <div className='w-full '>
                <div className='flex justify-around py-5 px-5'>
                    <span>
                        <p className='font-bold text-pink-400 text-6xl'>
                            30K
                        </p>
                        <p className='text-center text-white'>Lorem ipsum dolor</p>
                    </span>
                    <span>
                        <p className='font-bold text-pink-400 text-6xl'>
                            30K
                        </p>
                        <p className='text-center text-white'>Lorem ipsum dolor</p>
                    </span>
                    <span>
                        <p className='font-bold text-pink-400 text-6xl'>
                            30K
                        </p>
                        <p className='text-center text-white'>Lorem ipsum dolor</p>
                    </span>
                </div>
            </div>
            <div className='md:flex'>
                <div className=' md:w-1/2'>
                    <img src="https://images.pexels.com/photos/37650/new-zealand-lake-mountain-landscape-37650.jpeg?cs=srgb&dl=pexels-pixabay-37650.jpg&fm=jpg" alt="" className='rounded-sm' />
                </div>
                <div className='md:w-1/2 text-white py-2 px-5 font-bold text-2xl break-words'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam accusantium, hic officia doloremque fugiat id quo nulla nam, quaerat suscipit, dolorem incidunt cumque non voluptates. Consequuntur cumque magnam quae aliquid.</p>
                </div>
            </div>
            <div className='px-10 py-5'>
                <div className='border-b border-t border-pink-400 text-pink-400 py-2 px-5 font-semibold text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa molestias quam at amet iste modi dolores omnis. Eligendi praesentium veniam velit quisquam distinctio facere non blanditiis maiores et. A.
                </div>
            </div>
        </div>
    )
}

export default Section3