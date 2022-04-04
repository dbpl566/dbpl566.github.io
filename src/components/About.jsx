import React from 'react';
import Headshot from "../assets/headshot.png";

const About = () => {
  return (
    <div name='About' className='flex w-full h-screen bg-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                      About
                    </p>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-left text-gray-300'>
                    <p>
                      Hi! I'm Debra. I'm a software engineer with a passion for web development.
                      I love figuring out how visually stunning applications work under the hood,
                      and aim to create equally well-designed, user-centric applications.
                      When I'm not programming, I enjoy painting, reading and cafe hopping.
                    </p>
                  </div>
                  <div>
                    <img className='mx-auto my-auto' src={Headshot} alt="Picture of Debra Lymon" style={{width: '300px'}} />
                  </div>
                </div>
              </div>
          </div> 
      </div>
  )
}

export default About