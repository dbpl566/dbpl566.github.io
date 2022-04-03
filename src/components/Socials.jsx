import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Socials = () => {
  return (
    <div name='Socials' className='w-full h-48 bg-[#030200] flex justify-center items-center pt-8'>
    <div className='mt-3 flex items-center justify-center space-x-6 text-gray-300 text-4xl'>
      <a className='hover:bg-pink-600' href=""><FaLinkedin /></a>
      <a className='hover:bg-pink-600' href="https://github.com/dbpl566"><FaGithub /></a>
      <a className='hover:bg-pink-600' href="mailto:debra.p.lymon@gmail.com"><HiOutlineMail /></a>
    </div>
  </div>
  )
}

export default Socials