import React from 'react';
import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';
import {FaGithub} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';

const Projects = () => {
  return (
    <div name='Projects' className='flex w-full md:h-screen bg-[#030200] text-gray-300 pt-16'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pl-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Projects
                </p>
                <p className='py-6'>
                    Here's some of my recent work:
                </p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/* First Project */}
                <div className='group container rounded-md bg-[#0a192f] text-gray-300'>
                    <div className='flex flex-col'>
                        <div className='w-11/12 m-auto'>
                            <h5 className='text-xl pt-3 font-bold'>
                                Estuary Escapades
                            </h5>
                            <h2 name='Project Title'>
                                K-12 Educational Game
                            </h2>
                        </div>
                    </div>
                    <div name='project image'>
                        <img src={Project1} className='w-full'/>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                            <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                <p className='mr-3'>Java</p>
                            </div>
                            <div className='flex space-x-6 text-3xl'>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FaGithub />
                                </a>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Project */}
                <div className='group container rounded-md bg-[#0a192f]'>
                    <div className='flex flex-col'>
                        <div className='w-11/12 m-auto'>
                            <h5 className='text-xl pt-3 font-bold'>
                                Fee Fi Fo Fall
                            </h5>
                            <h2 name='Project Title'>
                                Vertical Scrolling Game
                            </h2>
                        </div>
                    </div>
                    <div name='project image'>
                        <img src={Project2} className='w-full'/>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                            <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                <p className='mr-3'>JS</p>
                                <p className='mr-3'>CSS</p>
                                <p className='mr-3'>HTML</p>
                            </div>
                            <div className='flex space-x-6 text-3xl'>
                                <a href="https://github.com/dbpl566/474-Project-1" className='hover:text-[#ff8ba7]'>
                                    <FaGithub />
                                </a>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        

                {/* Third Project */}
                <div className='group container rounded-md bg-[#0a192f]'>
                    <div className='flex flex-col'>
                        <div className='w-11/12 m-auto'>
                            <h5 className='text-xl pt-3 font-bold'>
                                Virtual Avatars
                            </h5>
                            <h2 name='Project Title'>
                                VR Experience
                            </h2>
                        </div>
                    </div>
                    <div name='project image'>
                        <img src={Project3} className='w-full'/>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                            <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                <p className='mr-3'>C#</p>
                                <p className='mr-3'>Unity</p>
                            </div>
                            <div className='flex space-x-6 text-3xl'>
                                <a href="https://github.com/HCI-UD/finalproject-3virtualavatar" className='hover:text-[#ff8ba7]'>
                                    <FaGithub />
                                </a>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* Fourth Project */}
                <div className='group container rounded-md bg-[#0a192f] text-gray-300'>
                    <div className='flex flex-col'>
                        <div className='w-11/12 m-auto'>
                            <h5 className='text-xl pt-3 font-bold'>
                                Estuary Escapades
                            </h5>
                            <h2 name='Project Title'>
                                K-12 Educational Game
                            </h2>
                        </div>
                    </div>
                    <div name='project image'>
                        <img src={Project1} className='w-full'/>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                            <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                <p className='mr-3'>Java</p>
                            </div>
                            <div className='flex space-x-6 text-3xl'>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FaGithub />
                                </a>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fifth Project */}
                <div className='group container rounded-md bg-[#0a192f]'>
                    <div className='flex flex-col'>
                        <div className='w-11/12 m-auto'>
                            <h5 className='text-xl pt-3 font-bold'>
                                Fee Fi Fo Fall
                            </h5>
                            <h2 name='Project Title'>
                                Vertical Scrolling Game
                            </h2>
                        </div>
                    </div>
                    <div name='project image'>
                        <img src={Project2} className='w-full'/>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                            <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                <p className='mr-3'>JS</p>
                                <p className='mr-3'>CSS</p>
                                <p className='mr-3'>HTML</p>
                            </div>
                            <div className='flex space-x-6 text-3xl'>
                                <a href="https://github.com/dbpl566/474-Project-1" className='hover:text-[#ff8ba7]'>
                                    <FaGithub />
                                </a>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        

                {/* Sixth Project */}
                <div className='group container rounded-md bg-[#0a192f]'>
                    <div className='flex flex-col'>
                        <div className='w-11/12 m-auto'>
                            <h5 className='text-xl pt-3 font-bold'>
                                Virtual Avatars
                            </h5>
                            <h2 name='Project Title'>
                                VR Experience
                            </h2>
                        </div>
                    </div>
                    <div name='project image'>
                        <img src={Project3} className='w-full'/>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                            <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                <p className='mr-3'>C#</p>
                                <p className='mr-3'>Unity</p>
                            </div>
                            <div className='flex space-x-6 text-3xl'>
                                <a href="https://github.com/HCI-UD/finalproject-3virtualavatar" className='hover:text-[#ff8ba7]'>
                                    <FaGithub />
                                </a>
                                <a href="/" className='hover:text-[#ff8ba7]'>
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects