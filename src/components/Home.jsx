import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link, animateScroll as scroll} from 'react-scroll';
import Projects from "./Projects";


const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#030200] pt-16'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Debra Lymon</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Software Engineer.</h2>
            <p className='text-gray-300 py-4 max-w-[700px]'>I specialize in building well-designed responsive web applications.</p>
            <Link to="Projects" smooth={true}>
                <button className='text-white border-pink-600 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                  View Work
                  <HiArrowNarrowRight className='ml-3' />
                  </button>
            </Link>
        </div>
    </div>
  )
}

export default Home