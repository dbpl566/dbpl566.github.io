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

    const [info4, setInfo4] = useState(false)
    const handleClick4 = () => setInfo4(!info4)

    const [info5, setInfo5] = useState(false)
    const handleClick5 = () => setInfo5(!info5)

    const [info6, setInfo6] = useState(false)
    const handleClick6 = () => setInfo6(!info6)
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
                            <div className={!info ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
                                <div onClick={handleClick} className='hidden-lg z-10'>
                                    {!info ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-1" className='w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-4xl font-bold m-3 w-11/12 sm:w-full'>
                                        Estuary Escapades
                                    </h3>
                                    <div id='overlay-container-image-1' className='border border-pink-600 shadow-xl'>
                                        <img src={Project1} className='w-full' alt='Game start screen with artwork of an estuary and its wildlife'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h4 className='text-2xl text-white'>
                                            K-12 Educational Game
                                        </h4>
                                        <p className='overflow-auto max-h-14'>
                                        Three minigames, each about a minute long, with a cumulative scoring system: 
                                        Game 1: matching an animal in the estuary to its description. 
                                        Game 2: playing as an animal from game 1, dodge predators and other animals while searching for food. 
                                        Game 3: playing as a person, pick up trash using the right tools and receptacles.
                                        </p>
                                        <div className='flex'>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://github.com/CISC275-Fall2019/cisc275f19-project-cisc275f19-team-11-4'>
                                                <FaGithub className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    CODE
                                                </span>
                                            </a>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://www.youtube.com/watch?v=HeKU4qmBCKc'>
                                                <FaYoutube className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    DEMO
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>Java</p>
                                </div>
                                <div className='flex space-x-6 text-3xl'>
                                    <a href="https://github.com/CISC275-Fall2019/cisc275f19-project-cisc275f19-team-11-4" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=HeKU4qmBCKc" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaYoutube />
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
                        <div name='project image' onClick={handleClick2}>
                            <img id='Scrolling Game' src={Project2} className='w-full' alt='Game start screen with artwork of leafy beanstalk in front of cloudy sky'/>
                        </div>

                        {/* Project 2 Overlay */}
                        <div id='overlay-2'>
                            <div className={!info2 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
                                <div onClick={handleClick2} className='hidden-lg z-10'>
                                    {!info2 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-2" className='w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-4xl font-bold m-3 w-11/12 sm:w-full'>
                                        Fee Fi Fo Fall
                                    </h3>
                                    <div id='overlay-container-image-2' className='border border-pink-600 shadow-xl'>
                                        <img src={Project2} className='w-full' alt='Game start screen with artwork of leafy beanstalk in front of cloudy sky'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h6 className='text-2xl text-white'>
                                            Vertical Scrolling Game
                                        </h6>
                                        <p className='overflow-auto max-h-14'>
                                        This game is a vertical endless falling game. Players can use keys to move left or right. 
                                        Randomly generated bricks or obstacles will appear at the bottom along. 
                                        Try to avoid the obstacle and get land on the safe brick and survive as long as you can. 
                                        Score will be calculated according to both time and bricks you landed. Dungeon themed, similar to ns-shaft game.
                                        </p>
                                        <div className='flex'>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://github.com/dbpl566/474-Project-1'>
                                                <FaGithub className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    CODE
                                                </span>
                                            </a>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='/'>
                                                <FaYoutube className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    DEMO
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>JS</p>
                                    <p className='mr-3'>CSS</p>
                                    <p className='mr-3'>HTML</p>
                                </div>
                                <div className='flex space-x-6 text-3xl'>
                                    <a href="https://github.com/dbpl566/474-Project-1" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaGithub />
                                    </a>
                                    <a href="/" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaYoutube />
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

                        <div name='project image' onClick={handleClick3}>
                            <img id='Virtual Avatars' src={Project3} className='w-full' alt='Game start screen with male avatar standing behind counter at coffee shop'/>
                        </div>

                        {/* Project 3 Overlay */}
                        <div id='overlay-1'>
                            <div className={!info3 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
                                <div onClick={handleClick3} className='hidden-lg z-10'>
                                    {!info3 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-1" className='w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-4xl font-bold m-3 w-11/12 sm:w-full'>
                                        Virtual Avatars
                                    </h3>
                                    <div id='overlay-container-image-1' className='border border-pink-600 shadow-xl'>
                                        <img src={Project3} className='w-full' alt='Game start screen with male avatar standing behind counter at coffee shop'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h6 className='text-2xl text-white'>
                                            VR Experience
                                        </h6>
                                        <p className='overflow-auto max-h-14'>
                                        As we re-acclimate to social interactions following the pandemic and other issues of racial injustices, 
                                        we must be aware of how our actions may affect those around us. We must do this because there is a growing deficiency 
                                        in understanding the perspectives of people of different races/ethnicities.  
                                        As users, we need an application that allows us to practice mitigating this implicit racial bias in various social environments.
                                        </p>
                                        <div className='flex'>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://github.com/HCI-UD/finalproject-3virtualavatar'>
                                                <FaGithub className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    CODE
                                                </span>
                                            </a>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='/'>
                                                <FaYoutube className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    DEMO
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>C#</p>
                                    <p className='mr-3'>Unity</p>
                                </div>
                                <div className='flex space-x-6 text-3xl'>
                                    <a href="https://github.com/HCI-UD/finalproject-3virtualavatar" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaGithub />
                                    </a>
                                    <a href="/" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaYoutube />
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
                        
                        <div name='project image' onClick={handleClick4}>
                            <img id='Estuary Game' src={Project1} className='w-full' alt='Game start screen with artwork of an estuary and its wildlife'/>
                        </div>

                        {/* Project 1 Overlay */}
                        <div id='overlay-1'>
                            <div className={!info4 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
                                <div onClick={handleClick4} className='hidden-lg z-10'>
                                    {!info4 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-1" className='w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-4xl font-bold m-3 w-11/12 sm:w-full'>
                                        Estuary Escapades
                                    </h3>
                                    <div id='overlay-container-image-1' className='border border-pink-600 shadow-xl'>
                                        <img src={Project1} className='w-full' alt='Game start screen with artwork of an estuary and its wildlife'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h4 className='text-2xl text-white'>
                                            K-12 Educational Game
                                        </h4>
                                        <p className='overflow-auto max-h-14'>
                                        Three minigames, each about a minute long, with a cumulative scoring system: 
                                        Game 1: matching an animal in the estuary to its description. 
                                        Game 2: playing as an animal from game 1, dodge predators and other animals while searching for food. 
                                        Game 3: playing as a person, pick up trash using the right tools and receptacles.
                                        </p>
                                        <div className='flex'>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://github.com/CISC275-Fall2019/cisc275f19-project-cisc275f19-team-11-4'>
                                                <FaGithub className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    CODE
                                                </span>
                                            </a>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://www.youtube.com/watch?v=HeKU4qmBCKc'>
                                                <FaYoutube className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    DEMO
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>Java</p>
                                </div>
                                <div className='flex space-x-6 text-3xl'>
                                    <a href="https://github.com/CISC275-Fall2019/cisc275f19-project-cisc275f19-team-11-4" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=HeKU4qmBCKc" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaYoutube />
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
                        <div name='project image' onClick={handleClick5}>
                            <img id='Scrolling Game' src={Project2} className='w-full' alt='Game start screen with artwork of leafy beanstalk in front of cloudy sky'/>
                        </div>

                        {/* Project 5 Overlay */}
                        <div id='overlay-2'>
                            <div className={!info5 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
                                <div onClick={handleClick5} className='hidden-lg z-10'>
                                    {!info5 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-2" className='w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-4xl font-bold m-3 w-11/12 sm:w-full'>
                                        Fee Fi Fo Fall
                                    </h3>
                                    <div id='overlay-container-image-2' className='border border-pink-600 shadow-xl'>
                                        <img src={Project2} className='w-full' alt='Game start screen with artwork of leafy beanstalk in front of cloudy sky'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h6 className='text-2xl text-white'>
                                            Vertical Scrolling Game
                                        </h6>
                                        <p className='overflow-auto max-h-14'>
                                        This game is a vertical endless falling game. Players can use keys to move left or right. 
                                        Randomly generated bricks or obstacles will appear at the bottom along. 
                                        Try to avoid the obstacle and get land on the safe brick and survive as long as you can. 
                                        Score will be calculated according to both time and bricks you landed. Dungeon themed, similar to ns-shaft game.
                                        </p>
                                        <div className='flex'>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://github.com/dbpl566/474-Project-1'>
                                                <FaGithub className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    CODE
                                                </span>
                                            </a>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='/'>
                                                <FaYoutube className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    DEMO
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>JS</p>
                                    <p className='mr-3'>CSS</p>
                                    <p className='mr-3'>HTML</p>
                                </div>
                                <div className='flex space-x-6 text-3xl'>
                                    <a href="https://github.com/dbpl566/474-Project-1" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaGithub />
                                    </a>
                                    <a href="/" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaYoutube />
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

                        <div name='project image' onClick={handleClick6}>
                            <img id='Virtual Avatars' src={Project3} className='w-full' alt='Game start screen with male avatar standing behind counter at coffee shop'/>
                        </div>

                        {/* Project 6 Overlay */}
                        <div>
                            <div className={!info6 ? 'hidden' : 'fixed inset-0 z-10 overflow auto none flex top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
                                <div onClick={handleClick6} className='hidden-lg z-10'>
                                    {!info6 ? 'hidden' : <FaTimes className='absolute text-white text-2xl top-4 right-4 hover:text-pink-600' />}
                                </div>
                                <div id="overlay-container-1" className='w-full sm:w-3/6 flex flex-col items-center mb-5 pt-12 mx-auto'>
                                    <h3 className='text-white text-4xl font-bold m-3 w-11/12 sm:w-full'>
                                        Virtual Avatars
                                    </h3>
                                    <div id='overlay-container-image-1' className='border border-pink-600 shadow-xl'>
                                        <img src={Project3} className='w-full' alt='Game start screen with male avatar standing behind counter at coffee shop'/>
                                    </div>
                                    <div className='w-11/12 sm:w-full mt-3 text-white flex flex-col'>
                                        <h6 className='text-2xl text-white'>
                                            VR Experience
                                        </h6>
                                        <p className='overflow-auto max-h-14'>
                                        As we re-acclimate to social interactions following the pandemic and other issues of racial injustices, 
                                        we must be aware of how our actions may affect those around us. We must do this because there is a growing deficiency 
                                        in understanding the perspectives of people of different races/ethnicities.  
                                        As users, we need an application that allows us to practice mitigating this implicit racial bias in various social environments.
                                        </p>
                                        <div className='flex'>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='https://github.com/HCI-UD/finalproject-3virtualavatar'>
                                                <FaGithub className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    CODE
                                                </span>
                                            </a>
                                            <a className='w-3/6 sm:w-1/4 p-2 mt-4 flex items-center justify-center bg-[#030200] hover:bg-pink-600 border-2 border-gray-600 rounded-md transition-colors duration-300' href='/'>
                                                <FaYoutube className='text-xl'/>
                                                <span className='ml-3 text-xl'>
                                                    DEMO
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between flex-col sm:flex-row w-11/12 m-auto my-4'>
                                <div className='flex items-center mb-3 sm:mb-0 font-bold text-xl'>
                                    <p className='mr-3'>C#</p>
                                    <p className='mr-3'>Unity</p>
                                </div>
                                <div className='flex space-x-6 text-3xl'>
                                    <a href="https://github.com/HCI-UD/finalproject-3virtualavatar" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaGithub />
                                    </a>
                                    <a href="/" className='text-[#ff8ba7] hover:text-pink-600'>
                                        <FaYoutube />
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