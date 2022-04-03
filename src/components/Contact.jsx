import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#030200] flex justify-center items-center p-4'>
      <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4'>Feel free to send me an email - debra.p.lymon@gmail.com</p>
              <p className='text-gray-300'>Or submit the form below to get in touch!</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact