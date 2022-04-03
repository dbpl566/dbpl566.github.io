import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link, animateScroll as scroll} from 'react-scroll';
import Projects from "./Projects";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#030200] pt-20'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Debra Lymon</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialize in building well-designed, user-centric applications.</p>
            <Link to="Projects" smooth={true}>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600'>
                  View Work
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                  </span>
                  </button>
            </Link>
            <div name='Socials'>
              <div className='mt-3 flex items-center justify-center space-x-6 text-gray-300 text-4xl pt-20'>
                <a className='hover:bg-pink-600' href=""><FaLinkedin /></a>
                <a className='hover:bg-pink-600' href="https://github.com/dbpl566"><FaGithub /></a>
                <a className='hover:bg-pink-600' href="mailto:debra.p.lymon@gmail.com"><HiOutlineMail /></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home