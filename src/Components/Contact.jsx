import React, { useEffect } from 'react'
import Headings from './Headings';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactimg from '../Components/img/contactme.jpg';
import contactimage from '../assets/contact.jpg'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // You can change the easing
      once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
    });
  }, []);


  return (
    <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600 py-10 md:py-28'>
        <Headings portfolioheading = "Contact Me" />
         

        <div className='flex flex-col-reverse md:flex-row justify-around items-center mx-auto lg:mx-5 lg:py-5'>
            <div className=' p-1 md:p-3 m-1 flex justify-start items-center flex-col md:w-1/2' data-aos="fade-down">
            <h1 className='text-lg md:text-xl text-center md:text-start p-1'>If your want to discuss more in details, please contact me</h1>
            <a href="mailto:bharathi.jana01@gmail.com" className="curser-pointer text-lg md:text-xl p-3">
                Email: <strong className='hover:underline'>bharathi.jana01@gmail.com</strong>
            </a>
            <a href="tel:+6383765538" className="curser-pointer text-lg md:text-xl p-3 ">
            Mobile No: <strong className='hover:underline'>6383765538</strong>
            </a>
            
            </div>
            <div className='p-3 md:p-2 w-2/5 flex justify-center items-center '>
                <img src={contactimg} alt="home" width="500px" height="500px"
                  className='hover:shadow-md hover:shadow-fuchsia-800' />
            </div>
            
            
            

        </div>

        
        
      
    </div>
  )
}

export default Contact
