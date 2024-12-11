import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'; // Hamburger icon from react-icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-between p-3 bg-black text-white'>
      <div className='text-2xl md:text-3xl font-bold tracking-wide flex justify-center items-center'>Bharathi</div>

      {/* Hamburger Icon for Mobile (Hidden on md and larger screens) */}
      <div className='lg:hidden flex items-center'>
        <button onClick={toggleMenu}>
          <HiMenu className='text-white text-2xl' />
        </button>
      </div>

      {/* Desktop Navigation Links (Visible on md and larger screens) */}
      <div className='hidden lg:flex gap-4 flex justify-center items-center'>
        <div className='group relative'>
          <Link to="/">
          <h1 className='text-xl p-1 cursor-pointer'>
            Home
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h1>
          </Link>
          
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/aboutme">
          <h2 className='text-xl p-1'>
            About Me
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/academic">
          <h2 className='text-xl p-1'>
          Academic
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/projects">
          <h2 className='text-xl p-1'>
            Projects
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/skills">
          <h2 className='text-xl p-1'>
            Skills
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        <div className='group relative cursor-pointer'>
          <Link to="/contact">
          <h2 className='text-xl p-1'>
            Contact Me
            <span className='absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
          </h2>
          </Link>
        </div>
        
        <button className='rounded-xl p-2 px-5 text-xl ' 
        style={{
        background: 'rgb(52,124,152)',
        background: 'radial-gradient(circle, rgba(127,51,171,1) 0%, rgba(80,23,112,1) 69%, rgba(29,0,45,1) 100%)',
      }}>
        <a href="./src/Components/img/Bharathi_Resume.pdf" download target='_blank'>Download CV</a>
      </button>
      </div>

      {/* Mobile Navigation Links (Visible when the hamburger menu is toggled) */}
      {isOpen && (
  <div className='lg:hidden absolute top-12 left-0 w-full border border-t-white bg-black text-white p-3 pt-2 z-10'>
    <Link to="/" >
      <h1 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Home</h1>
    </Link>
    <Link to="/aboutme">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>About Me</h2>
    </Link>
    <Link to="/academic">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Academic</h2>
    </Link>
    <Link to="/projects">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Projects</h2>
    </Link>
    <Link to="/skills">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Skills</h2>
    </Link>
    <Link to="/contact">
      <h2 className='hover:underline hover:transition-all duration-500 ease-in-out p-1 text-xl cursor-pointer' onClick={closeMenu}>Contact Me</h2>
    </Link>

    <button className='rounded-xl p-2 px-5 text-xl'
      style={{
        background: 'rgb(52,124,152)',
        background: 'radial-gradient(circle, rgba(127,51,171,1) 0%, rgba(80,23,112,1) 69%, rgba(29,0,45,1) 100%)',
      }}>
      <a href="./src/Components/img/Bharathi_Resume.docx" download target='_blank'>Download CV</a>
    </button>
  </div>
)}

    </div>
  );
};

export default NavBar;


