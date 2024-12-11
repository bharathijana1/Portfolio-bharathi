import React, { useEffect } from 'react';
import Headings from './Headings';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = ({ projects }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // You can change the easing
      once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
    });
  }, []);

  return (
    <div>
      <Headings portfolioheading="Projects" />
      <h2 className='text-lg text-center p-2 md:p'>Here are some projects I've worked on recently</h2>
      <div className="flex  flex-wrap md:flex-row lg:flex-row justify-around items-center mx-auto gap-6 lg:mx-5 py-2 lg:py-5"  data-aos="fade-down">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-black shadow-inner shadow-fuchsia-200 p-2 m-2 rounded-md w-full sm:w-full md:w-80 lg:w-96 flex flex-col space-y-4" 
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-full h-[200px] object-contain border border-fuchsia-300 hover:border-fuchsia-900 hover:shadow-md hover:shadow-fuchsia-800 p-1 transition-transform duration-300 ease-in-out transform hover:scale-105" 
            />
            <p className="text-center font-medium text-lg">{project.title}</p>
            <div className="text-center">
              <a href={project.ahref} target="_blank" rel="noopener noreferrer">
                <button className="border p-2 text-xl px-4 text-white rounded-lg"
                 style={{
                  background: 'rgb(52,124,152)',
                  background: 'radial-gradient(circle, rgba(127,51,171,1) 0%, rgba(80,23,112,1) 69%, rgba(29,0,45,1) 100%)',
                }}>
                  {project.button}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='flex gap-6 justify-center items-center'>
      <button className='text-xl font-medium px-10 bg-fuchsia-900 hover:bg-fuchsia-950 text-white p-2 capitalize'>previous</button>
      <button className='text-xl font-medium px-10 bg-fuchsia-900 hover:bg-fuchsia-950 text-white p-2 capitalize'>Next</button>
      </div> */}
      
    </div>
  );
};

export default Projects;
