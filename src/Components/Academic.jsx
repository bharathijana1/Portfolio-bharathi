import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Headings from './Headings';

const Academic = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          easing: 'ease-in-out', // You can change the easing
          once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
        });
      }, []);
  return (
    <div className=' py-10 md:py-28 border border-black m-2 md:m-6 shadow-lg shadow-gray-600 '>
    <Headings portfolioheading = "Academic" /> 
    <div className='flex gap-5 justify-center items-center m-4 lg:m-10  flex-wrap lg:grid lg:grid-cols-2 lg:place-items-center' data-aos="fade-down">
        
        <div className='flex justify-center items-center gap-4 sm:gap-10 shadow-sm shadow-fuchsia-800 w-full xl:w-3/4 sm:h-52 p-5 lg:p-3 '>
        <h1 className='rounded-full bg-black text-white text-xl font-medium w-20 sm:w-10 h-10 flex justify-center items-center'>1</h1>
        <div className='flex flex-col'>
        <h1 className='font-semibold lg:font-bold text-xl capitalize py-2'>BCA - Bachelor of Computer Application</h1>
        <h1 className='text-lg capitalize *:py-2'>Hindustan college of arts and science, padur</h1>
        <h1 className='text-lg text-gray-700 py-2'>Year: 2019-2022</h1>
        <h1 className='text-lg text-gray-700 '>Percentage: 86%</h1>
        </div>
        </div>

        <div className='flex justify-center items-center gap-4 sm:gap-10 shadow-sm shadow-fuchsia-800 w-full xl:w-3/4 sm:h-52 p-5 lg:p-3 '>
        <h1 className='rounded-full bg-black text-xl font-medium  text-white w-20 sm:w-10 h-10 flex justify-center items-center'>2</h1>
        <div className='flex flex-col'>
        <h1 className='font-semibold lg:font-bold text-xl capitalize py-2'>HSC - 12th </h1>
        <h1 className='text-lg capitalize *:py-2'>Government higher secondary school, mambakkam</h1>
        <h1 className='text-lg text-gray-700 py-2'>Year: 2018 - 2019</h1>
        <h1 className='text-lg text-gray-700 '>Percentage: 80%</h1>
        </div>
        </div>
        
        <div className='flex justify-center items-center gap-4 sm:gap-10 shadow-sm shadow-fuchsia-800 w-full xl:w-3/4 sm:h-52 p-5 lg:p-3 '>
        <h1 className='rounded-full bg-black text-xl font-medium  text-white w-20 sm:w-10 h-10 flex justify-center items-center'>3</h1>
        <div className='flex flex-col'>
        <h1 className='font-semibold lg:font-bold text-xl capitalize py-2'>HSC - 11th</h1>
        <h1 className='text-lg capitalize *:py-2'>Government higher secondary school, mambakkam</h1>
        <h1 className='text-lg text-gray-700 py-2'>Year: 2017 - 2018</h1>
        <h1 className='text-lg text-gray-700 '>Percentage: 80%</h1>
        </div>
        </div>

        <div className='flex justify-center items-center gap-4 sm:gap-10 shadow-sm shadow-fuchsia-800 w-full xl:w-3/4 sm:h-52 p-5 lg:p-3 '>
        <h1 className='rounded-full bg-black text-xl font-medium  text-white w-20 sm:w-10 h-10 flex justify-center items-center'>4</h1>
        <div className='flex flex-col'>
        <h1 className='font-semibold lg:font-bold text-xl capitalize py-2'>SSLC - 10th</h1>
        <h1 className='text-lg capitalize *:py-2'>Government higher secondary school, mambakkam</h1>
        <h1 className='text-lg text-gray-700 py-2'>Year: 2016 - 2017</h1>
        <h1 className='text-lg text-gray-700 '>Percentage: 94%</h1>
        </div>
        </div>
        

       
        
      
    </div>
  
    </div>
    )
    
}

export default Academic
