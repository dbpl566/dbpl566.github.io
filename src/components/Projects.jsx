import React from 'react';
import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';
import {FaGithub, FaYoutube} from 'react-icons/fa';
import {useState} from 'react';
import {FaTimes} from 'react-icons/fa';

const Projects = () => {
    const [info, setInfo] = useState(false)
    const handleClick = () => setInfo(!info)

    const [info2, setInfo2] = useState(false)
    const handleClick2 = () => setInfo2(!info2)

    const [info3, setInfo3] = useState(false)
    const handleClick3 = () => setInfo3(!info3)

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
                        
                        <div name='project image' onClick={handleClick}>
                            <img id='Estuary Game' src={Project1} className='w-full' alt='Game start screen with artwork of an estuary and its wildlife'/>
                        </div>

                        {/* Project 1 Overlay */}
                        <div id='overlay-1'>
                            <div className={!info ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex w-full bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center overflow-auto max-h-screen overscroll-none'}>
                                <div onClick={handleClick} className='hidden-lg z-10'>
                                    {!info ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-1" className='w-full sm:w-3/6 h-screen flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-3xl font-bold flex items-center justify-center'>
                                        Estuary Escapades
                                    </h3>
                                    <div className='grid grid-cols-2'>
                                        <a className='p-2 my-4 mx-4 flex items-center justify-between bg-[#030200] hover:bg-pink-600 border-2 border-pink-600 rounded-md transition-colors duration-300' href='https://github.com/CISC275-Fall2019/cisc275f19-project-cisc275f19-team-11-4'>
                                            <FaGithub className='text-xl'/>
                                            <span className='ml-3 text-xl'>
                                                CODE
                                            </span>
                                        </a>
                                        <a className='p-2 my-4 mx-4 flex items-center justify-between bg-[#030200] hover:bg-pink-600 border-2 border-pink-600 rounded-md transition-colors duration-300' href='https://www.youtube.com/watch?v=HeKU4qmBCKc'>
                                            <FaYoutube className='text-xl'/>
                                            <span className='ml-3 text-xl'>
                                                DEMO
                                            </span>
                                        </a>
                                    </div>
                                    <div id='overlay-container-image-1' className='border border-pink-600 shadow-xl'>
                                        <img src={Project1} className='w-full' alt='Game start screen with artwork of an estuary and its wildlife'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h4 className='text-2xl text-white'>
                                            K-12 Educational Game
                                        </h4>
                                        <p className='pb-4'>
                                        Java game application consisting of three minigames, each about a minute long, with a cumulative scoring system: <br/>
                                        Game 1: matching an animal in the estuary to its description. <br/>
                                        Game 2: playing as an animal from game 1, dodge predators and other animals while searching for food. <br/>
                                        Game 3: playing as a person, pick up trash using the right tools and receptacles.<br/>
                                        </p>
                                        <h4 className='text-2xl'>
                                            App Features
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Cumulative scoring system</li>
                                            <li>Adheres to MVC principles</li>
                                        </ul>
                                        <h4 className='text-2xl'>
                                            Tech Stack
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Java</li>
                                            <li>JavaFX</li>
                                            <li>JUnit</li>
                                        </ul>
                                        <h4 className='text-2xl'>
                                            Purpose
                                        </h4>
                                        <p className='pb-4'>
                                            Created for the Delaware National Estuarine Research
                                            Reserve to educate children about Delaware's estuarine system.<br/> 
                                            Developed as part of a group project in an Intro to Software Engineering course (2019).
                                        </p>
                                        <h4 className='text-2xl'>
                                            Responsibilities
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Programming in Java</li>
                                            <li>Performing JUnit tests</li>
                                            <li>Creating gameplay tutorial video</li>
                                            <li>Creating and editing game graphics</li>
                                            <li>Updating UML and Asana tasks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>Java</p>
                                </div>
                                <div className='flex space-x-6 justify-center'>
                                    <button className='text-xl text-white rounded-md border-pink-600 border-2 px-2 py-2 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                                        <FaGithub className='text-xl' />
                                            <a href="https://github.com/CISC275-Fall2019/cisc275f19-project-cisc275f19-team-11-4" className='ml-3 text-xl'>
                                                CODE
                                            </a>
                                    </button>
                                    <button className='text-xl text-white rounded-md border-pink-600 border-2 px-2 py-2 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                                        <FaYoutube className='text-xl'/>
                                            <a href="https://www.youtube.com/watch?v=HeKU4qmBCKc" className='ml-3 text-xl'>
                                                DEMO
                                            </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Project */}
                    <div className='group container rounded-md bg-[#0a192f] text-gray-300'>
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

                        <div name='project image' onClick={handleClick2}>
                            <img id='Scrolling Game' src={Project2} className='w-full' alt='Game start screen with artwork of leafy beanstalk in front of cloudy sky'/>
                        </div>

                        {/* Project 2 Overlay */}
                        <div id='overlay-2'>
                            <div className={!info2 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex w-full bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center overflow-auto max-h-screen overscroll-none'}>
                                <div onClick={handleClick2} className='hidden-lg z-10'>
                                    {!info2 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-2" className='w-full sm:w-3/6 h-screen flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-3xl font-bold flex items-center justify-center'>
                                        Fee Fi Fo Fall
                                    </h3>
                                    <div className='grid grid-cols-2'>
                                        <a className='p-2 my-4 mx-4 flex items-center justify-between bg-[#030200] hover:bg-pink-600 border-2 border-pink-600 rounded-md transition-colors duration-300' href='https://github.com/dbpl566/474-Project-1'>
                                            <FaGithub className='text-xl'/>
                                            <span className='ml-3 text-xl'>
                                                CODE
                                            </span>
                                        </a>
                                        <a className='p-2 my-4 mx-4 flex items-center justify-between bg-[#030200] hover:bg-pink-600 border-2 border-pink-600 rounded-md transition-colors duration-300' href='/'>
                                            <FaYoutube className='text-xl'/>
                                            <span className='ml-3 text-xl'>
                                                DEMO
                                            </span>
                                        </a>
                                    </div>
                                    <div id='overlay-container-image-2' className='border border-pink-600 shadow-xl'>
                                        <img src={Project2} className='w-full' alt='Game start screen with artwork of leafy beanstalk in front of cloudy sky'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h6 className='text-2xl text-white'>
                                            Vertical Scrolling Game
                                        </h6>
                                        <p className='pb-4'>
                                        A vertical endless falling game based on the theme of the 'Jack and the Beanstalk' fairytale.
                                        The player can use arrow keys to move Jack left or right to dodge falling rocks and jump from leaf platforms.
                                        Randomly generated rocks will fall from the top of the screen. Some leaf platforms will disintegrate
                                        quickly after Jack lands on them.
                                        The player should try to avoid the obstacles and land on the safe platforms and survive as long as they can. 
                                        The final score is calculated according to both time and platforms the player landed on.
                                        </p>
                                        <h4 className='text-2xl'>
                                            App Features
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Cumulative scoring system</li>
                                            <li>Randomly generated platforms & obstacles</li>
                                        </ul>
                                        <h4 className='text-2xl'>
                                            Tech Stack
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>JavaScript</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>
                                        <h4 className='text-2xl'>
                                            Purpose
                                        </h4>
                                        <p className='pb-4'>
                                            Developed as part of a group project in an Advanced Web Technologies course (2020).
                                        </p>
                                        <h4 className='text-2xl'>
                                            Responsibilities
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>CSS styling</li>
                                            <li>Game assets</li>
                                            <li>Creating graphics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>JS</p>
                                    <p className='mr-3'>CSS</p>
                                    <p className='mr-3'>HTML</p>
                                </div>
                                <div className='flex space-x-6 justify-center'>
                                    <button className='text-xl text-white rounded-md border-pink-600 border-2 px-2 py-2 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                                        <FaGithub className='text-xl' />
                                            <a href="https://github.com/dbpl566/474-Project-1" className='ml-3 text-xl'>
                                                CODE
                                            </a>
                                    </button>
                                    <button className='text-xl text-white rounded-md border-pink-600 border-2 px-2 py-2 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                                        <FaYoutube className='text-xl'/>
                                            <a href="/" className='ml-3 text-xl'>
                                                DEMO
                                            </a>
                                    </button>
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

                        <div name='project image' onClick={handleClick3}>
                            <img id='Virtual Avatars' src={Project3} className='w-full' alt='Game start screen with male avatar standing behind counter at coffee shop'/>
                        </div>

                        {/* Project 3 Overlay */}
                        <div id='overlay-1'>
                            <div className={!info3 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex w-full bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center overflow-auto max-h-screen overscroll-none'}>
                                <div onClick={handleClick3} className='hidden-lg z-10'>
                                    {!info3 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-1" className='w-full sm:w-3/6 h-screen flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-3xl font-bold items-center justify-center'>
                                        Virtual Avatars
                                    </h3>
                                    <div className='grid grid-cols-2'>
                                        <a className='p-2 my-4 mx-4 flex items-center justify-between bg-[#030200] hover:bg-pink-600 border-2 border-pink-600 rounded-md transition-colors duration-300' href='https://github.com/HCI-UD/finalproject-3virtualavatar'>
                                            <FaGithub className='text-xl'/>
                                            <span className='ml-3 text-xl'>
                                                CODE
                                            </span>
                                        </a>
                                        <a className='p-2 my-4 mx-4 flex items-center justify-between bg-[#030200] hover:bg-pink-600 border-2 border-pink-600 rounded-md transition-colors duration-300' href='/'>
                                            <FaYoutube className='text-xl'/>
                                            <span className='ml-3 text-xl'>
                                                DEMO
                                            </span>
                                        </a>
                                    </div>
                                    <div id='overlay-container-image-1' className='border border-pink-600 shadow-xl'>
                                        <img src={Project3} className='w-full' alt='Game start screen with male avatar standing behind counter at coffee shop'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h6 className='text-2xl text-white'>
                                            VR Experience
                                        </h6>
                                        <p className='pb-4'>
                                        As we re-acclimate to social interactions following the pandemic and other issues of racial injustices, 
                                        we must be aware of how our actions may affect those around us. We must do this because there is a growing deficiency 
                                        in understanding the perspectives of people of different races/ethnicities.  
                                        </p>
                                        <h4 className='text-2xl'>
                                            App Features
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Interactive </li>
                                            <li>3D Avatar with speech and facial movement capabilities</li>
                                        </ul>
                                        <h4 className='text-2xl'>
                                            Tech Stack
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Unity</li>
                                            <li>C# Scripts</li>
                                        </ul>
                                        <h4 className='text-2xl'>
                                            Purpose
                                        </h4>
                                        <p className='pb-4'>
                                            Developed as part of a group project in an Intro to Human-Computer Interaction course (2021).
                                        </p>
                                        <h4 className='text-2xl'>
                                            Responsibilities
                                        </h4>
                                        <ul className='list-disc pl-4 pb-4'>
                                            <li>Programming in C#</li>
                                            <li>Linking C# Scripts for speech and facial movement to 3D Avatar</li>
                                            <li>Unity Avatar Sampling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>C#</p>
                                    <p className='mr-3'>Unity</p>
                                </div>
                                <div className='flex space-x-6 justify-center'>
                                    <button className='text-xl text-white rounded-md border-pink-600 border-2 px-2 py-2 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                                        <FaGithub className='text-xl' />
                                            <a href="https://github.com/HCI-UD/finalproject-3virtualavatar" className='ml-3 text-xl'>
                                                CODE
                                            </a>
                                    </button>
                                    <button className='text-xl text-white rounded-md border-pink-600 border-2 px-2 py-2 my-2 flex items-center hover:bg-pink-600 transition-colors duration-300'>
                                        <FaYoutube className='text-xl'/>
                                            <a href="/" className='ml-3 text-xl'>
                                                DEMO
                                            </a>
                                    </button>
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