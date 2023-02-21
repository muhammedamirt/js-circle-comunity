import React from 'react'
import PersonCard from '../components/cards/PersonCard'

const About = () => {
  return (
    <div className='aboutBgColor'>
      <div className='py-3 text-center'>
        <h2 className='text-4xl font-semibold text-red-600'>Our People</h2>
        <div className='px-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum, labore facere quam, ex quis consectetur explicabo ratione nisi, ipsam animi neque fugiat quasi commodi nihil mollitia tempora laudantium corrupti.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 mx-10 my-4'>
          <div>
            <PersonCard />
          </div>
          <div>
            <PersonCard />
          </div> <div>
            <PersonCard />
          </div> <div>
            <PersonCard />
          </div> <div>
            <PersonCard />
          </div> <div>
            <PersonCard />
          </div> <div>
            <PersonCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About