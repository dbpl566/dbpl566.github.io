import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Socials = () => {
  return (
    <div name='Socials' className='w-full h-[150px] bg-[#030200] flex flex-col justify-center items-center'>
      <div className='mt-3 flex justify-center items-center space-x-6 text-gray-300 text-4xl pb-4'>
        <a className='hover:text-pink-600' href=""><FaLinkedin /></a>
        <a className='hover:text-pink-600' href="https://github.com/dbpl566"><FaGithub /></a>
      </div>
      <div className='text-gray-300 flex justify-center items-center'>
        <p>
          Debra Lymon 2022
        </p>
      </div>
    </div>
  )
}

export default Socials