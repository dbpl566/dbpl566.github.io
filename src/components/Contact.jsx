import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full md:h-screen bg-[#030200] flex flex-col justify-center items-center pt-16'>
      <form method='POST' action="https://getform.io/f/ac1d1f96-ae3e-4582-b9cc-d3f82dc3e482" className='flex flex-col max-w-[600px] w-full h-full p-8'>
          <div className='pb-8'>
              <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</h1>
              <p className='text-gray-300 py-4'>Submit the form below to get in touch!</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="7" placeholder='Message'></textarea>
          <button className='text-white border-2 border-pink-600 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact