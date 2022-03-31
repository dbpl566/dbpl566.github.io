import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#030200] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                      About
                    </p>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                  <div className='sm:text-left text-4xl font-bold'>
                    <p>
                      Hi, I'm Debra. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
          </div> 
      </div>
  )
}

export default About