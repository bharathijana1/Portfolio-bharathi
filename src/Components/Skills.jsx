import React, { useEffect } from 'react'
import Headings from './Headings';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HtmlImg from '../Components/img/html-5.png';

const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          easing: 'ease-in-out', // You can change the easing
          once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
        });
      }, []);

    const frontend = [
        {
            img: HtmlImg,
            text: "HTML",
            alt: "html"
        },
        {
            img: "../Components/img/css-3.png",
            text: "CSS",
            alt: "css"
        },
        {
            img: "../src/Components/img/bootstrap.png",
            text: "Bootstrap",
            alt: "bottstrap"
        },
        {
            img: "../src/Components/img/Tailwind.png",
            text: "Tailwind",
            alt: "tailwind"
        },
        {
            img: "../src/Components/img/js.png",
            text: "Javascript",
            alt: "js"
        },
        {
            img: "../src/Components/img/reactjs.png",
            text: "React Js",
            alt: "reactjs"
        }

    ]
    const database = [
        {
            img: "../src/Components/img/mongodb.png",
            text: "MongoDB",
            alt: "mongodb"
        },
        {
            img: "../src/Components/img/figma.png",
            text: "Figma",
            alt: "figma"
        },
        {
            img: "../src/Components/img/ms-office.png",
            text: "MS Office",
            alt: "MS Office"
        },
    ]

  return (
    <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600 '>
        <Headings portfolioheading = "Skills" />
        <h1 className='text-center pb-3 text-2xl font-bold'>Front-End</h1>
        <div className='grid grid-cols-2 md:grid-cols-6  p-2 md:flex md:flex-row md:m-7 flex-wrap justify-center items-center md:gap-8' data-aos="fade-down">
            {
                frontend.map((frontend, index) => (
                    <div className='flex flex-col justify-center items-center pt-5 p-4 hover:shadow-md hover:shadow-fuchsia-800'>
                    <img key={index} src={frontend.img} alt={frontend.alt} width="100px" height="100px" />
                    <h1 className='p-5 text-lg font-medium'>{frontend.text}</h1>
                    </div>
                    
                ) )
            }

        </div>
        
        <h1 className='text-center pb-10 text-2xl font-bold'>Database & UI/UX Design & Others</h1>
        <div className='flex flex-row justify-center items-center gap-10  m-7'>
            {
                database.map((database, index) => (
                    <div className='flex flex-col justify-center items-center pt-5 p-4 hover:shadow-md hover:shadow-fuchsia-800 ' data-aos="fade-down">
                    <img key={index} src={database.img} alt={database.alt} width="100px" height="100px" />
                    <h1 className='p-5 text-lg font-medium'>{database.text}</h1>
                    </div>
                    
                ) )
            }

        </div>
        

      
    </div>
  )
}

export default Skills
