import React from 'react';

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#030200]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                      About
                    </p>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-left pb-8 text-gray-300'>
                    <p>
                      Hi! I'm Debra. I'm a software engineer with a passion for web development.
                      I love figuring out how visually stunning applications work under the hood,
                      and aim to create equally well-designed, user-centric applications.
                      When I'm not programming, I enjoy painting, reading and cafe hopping.
                    </p>
                  </div>
                  <div className='text-gray-300'>
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