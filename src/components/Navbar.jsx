import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ff8ba7] text-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-60 firefox:bg-opacity-90">
      <div>
        <a href="https://dbpl566.github.io/">
          <img src={Logo} alt="Logo of the Initials DL" style={{width: '50px'}} />
        </a>
      </div>

      {/*menu*/}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/*hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#ff8ba7] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* social icons
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-{160px} h-{60px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-{160px} h-{60px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/dbpl566">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-{160px} h-{60px} flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:debra.p.lymon@gmail.com">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Navbar