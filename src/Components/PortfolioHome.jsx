import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import ProjectsMain from './ProjectsMain';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Academic from './Academic';
import Skills from './Skills';
import HeroImg from '../Components/img/hero.jpg';

const PortfolioHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // You can change the easing
      once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
    });
  }, []);
  return (
    <div>
        <div className='flex flex-col-reverse md:flex-row lg:flex-row justify-around items-center mx-auto lg:mx-5 lg:py-5 h-screen'>
            <div className=' p-1 md:p-3 m-1 flex justify-start flex-col w-full xl:w-1/2' data-aos="fade-down">
            <h1 className='text-3xl md:text-4xl text-center md:text-start p-1'>Hello</h1>
            <h1 className="text-center md:text-start p-1 font-bold text-3xl md:text-4xl">I'm <span className='text-fuchsia-900 font-bold'>Bharathi</span></h1>
            <h1 className='text-3xl md:text-4xl font-bold text-center md:text-start p-1'>Front End Developer</h1>
            <h1 className='text-xl text-center md:text-start p-1'>Expert in responsive, dynamic & interactive website using HTML5, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACT JS. I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</h1>
            <div className='flex justify-center mt-5'>
            <button className='border bg-fuchsia-900 p-2 px-8 py-3 m-2 text-lg font-medium text-white' 
            style={{
            background: 'rgb(52,124,152)',
            background: 'radial-gradient(circle, rgba(127,51,171,1) 0%, rgba(80,23,112,1) 69%, rgba(29,0,45,1) 100%)',
          }}>
            

          <a href="./Bharathi_ResumeC.pdf" download target='_blank' className='uppercase'>Download CV</a>
       </button>
       <Link to='projects'>
       <button className='border bg-fuchsia-900 p-2 px-8 py-3 m-2 text-lg font-medium text-white' 
            style={{
            background: 'rgb(52,124,152)',
            background: 'radial-gradient(circle, rgba(127,51,171,1) 0%, rgba(80,23,112,1) 69%, rgba(29,0,45,1) 100%)',
          }}>
            <h1 className='uppercase'>Projects</h1> 
       </button>
       </Link>
       
            </div>
            
            </div>
            <div className='p-3 md:p-2'>
                <img src={HeroImg} alt="home" className='hover:shadow-md hover:shadow-fuchsia-800' />
            </div>
            
            
            

        </div>

        <AboutMe />
        <Academic />
        <Skills />
        <ProjectsMain />
        <Contact />
        
      
    </div>
  )
}

export default PortfolioHome;
