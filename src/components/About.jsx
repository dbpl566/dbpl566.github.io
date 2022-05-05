import React from 'react';

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#030200]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 gap-8'>

                <div className='max-w-[1000px] w-full grid gap-8 px-4'>
                  <div className='text-left text-gray-300 my-auto'>
                  <div className='sm:text-left pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                      About
                    </h1>
                  </div>
                    <p>
                      Hi! I'm Debra. I'm a recent graduate (Computer Science, B.S.) with a passion for web development.
                      I love figuring out how visually stunning applications work under the hood,
                      and aim to create equally well-designed, user-centric applications using my skills
                      in Computer Science and my background in Visual Arts.
                      
                    </p>
                  </div>
                </div>
              </div>
          </div> 
      </div>
  )
}

export default About