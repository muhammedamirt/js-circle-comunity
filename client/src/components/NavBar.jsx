import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-black w-full py-4 px-20'>
            <div className='flex justify-between'>
                <div>
                    <span className='text-2xl font-bold text-white '>
                        JS
                    </span>
                </div>
                <div className='flex text-white gap-5'>
                    <div>
                        <p className='font-semibold text-sm cursor-pointer hover:text-yellow-400 transition'>
                            HOME
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-sm cursor-pointer hover:text-yellow-400 transition'>
                            ABOUT US
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-sm cursor-pointer hover:text-yellow-400 transition'>
                            BLOGS
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-sm cursor-pointer hover:text-yellow-400 transition'>
                            VOLUNTEERS
                        </p>
                    </div>
                    <div>
                        <p className='font-semibold text-sm cursor-pointer hover:text-yellow-400 transition'>
                            COMMUNITY PORTAL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar