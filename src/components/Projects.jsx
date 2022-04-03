import React from 'react';
import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';

const Projects = () => {
  return (
    <div name='Projects' className='w-full h-screen bg-[#030200] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Projects
                </p>
                <p className='py-6'>
                    Here's some of my recent work
                </p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* First Project */}
                <div 
                style={{backgroundImage: `url(${Project1})`}}
                className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                            
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Java K-12 Educational Game
                        </span>
                            
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'>
                                    View on GitHub
                                </button>
                            </a>
                        </div>
                        
                    </div>
                </div>
                
                {/* Second Project */}
                <div 
                style={{backgroundImage: `url(${Project2})`}}
                className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                            
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Vertical Scrolling Game
                        </span>
                            
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/dbpl566/474-Project-1">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'>
                                    View on GitHub
                                </button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                {/* Third Project */}
                <div 
                style={{backgroundImage: `url(${Project3})`}}
                className='group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                            
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Virtual Avatars
                        </span>
                            
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/HCI-UD/finalproject-3virtualavatar">
                                <button className='text-center rounded-lg px-4 py-3 n-2 bg-white text-gray-700 font-bold text-lg'>
                                    View on GitHub
                                </button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects