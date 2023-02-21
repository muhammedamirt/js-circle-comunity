import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const PersonCard = () => {
    return (
        <div className='px-3 py-2 bg-white rounded-sm shadow-md shadow-gray-600'>
            <div>
                <div className='flex justify-center '>
                    <img className="overflow-hidden border-2 border-red-600 h-16 rounded-full w-16 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                </div>
                <div className='my-3'>
                    <p className='text-red-600 text-center font-semibold text-sm'>MERN DEV</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione totam corporis dolorum aliquid itaque, </p>
                </div>
                <div className='flex gap-3 justify-center text-2xl py-2'>
                    <Link to={'#'}>
                        <AiFillLinkedin />
                    </Link>
                    <Link to={'#'}>
                        <AiFillGithub />
                    </Link>
                    <Link to={'#'}>
                        <AiFillInstagram />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PersonCard