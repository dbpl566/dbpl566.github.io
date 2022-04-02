import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {Link, animateScroll as scroll} from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ff8ba7] text-[#030200]">
      <div>
        <a href="https://dbpl566.github.io/">
          <img src={Logo} alt="Logo of the Initials DL" style={{width: '50px'}} />
        </a>
      </div>

      {/*Desktop menu*/}
      <ul className='hidden md:flex'>
        <Link to="Home" smooth={true}>
          <li>Home</li>
        </Link>

        <Link to="About" smooth={true}>
          <li>About</li>
        </Link>

        <Link to="Projects" smooth={true}>
          <li>Projects</li>
        </Link>

        <Link to="Contact" smooth={true}>
          <li>Contact</li>
        </Link>
      </ul>

      {/*Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes className='text-white' />}
      </div>

      {/*Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'flex md:hidden absolute top-0 left-0 w-full h-screen bg-[#030200] backdrop-filter backdrop-blur-lg bg-opacity-70 flex-col justify-center items-center'}>
        <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
          <li className='flex md:hidden py-6 text-4xl hover:text-pink-600 text-white'>Home</li>
        </Link>
        <Link onClick={handleClick} to="About" smooth={true} duration={500}>
          <li className='flex md:hidden py-6 text-4xl hover:text-pink-600 text-white'>About</li>
        </Link>
        <Link onClick={handleClick} to="Projects" smooth={true} duration={500}>
          <li className='flex md:hidden py-6 text-4xl hover:text-pink-600 text-white'>Projects</li>
        </Link>
        <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
          <li className='flex md:hidden py-6 text-4xl hover:text-pink-600 text-white'>Contact</li>
        </Link>
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