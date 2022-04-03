import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#030200]'>
      <div className='max-w-[1000px] mx-auto pl-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Contact
          </p>
          <p className='py-6 text-gray-300'>
            Feel free to send me an email - debra.p.lymon@gmail.com
          </p>
          <p className='text-gray-300'>
            Or submit the form below to get in touch!
          </p>
        </div>
      </div>
      <form method='POST' action="" className='w-full h-screen bg-[#030200] flex flex-col justify-center items-center px-4'>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact