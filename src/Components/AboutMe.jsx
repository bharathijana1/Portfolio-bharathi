import React, { useEffect} from 'react'
import Headings from './Headings';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMeImg from '../Components/img/whatido.png';
import GithubImg from '../Components/img/github.png';
import WhatsappImg from '../Components/img/whatsapp.png';
import EmailImg from '../Components/img/email.png';
import FrontendImg from '../Components/img/frontend.jpg'

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          easing: 'ease-in-out', // You can change the easing
          once: true, // Animation happens once (you can set this to false to repeat the animation on scroll)
        });
      }, []);

  return (
    <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600  py-10 md:py-28'>
    <Headings portfolioheading = "What I Do" /> 
    <div className='flex flex-row-reverse flex-wrap md:flex-row lg:flex-row justify-center items-center mx-auto  lg:mx-5 lg:py-5'>
        
        <div className=''>
            <img src={AboutMeImg} alt="about me" width="800px" height="500px" className='hover:shadow-md hover:shadow-fuchsia-800' />
        </div>

        <div class="max-w-3xl mx-auto p-2" data-aos="fade-down">
        
        <p class="text-lg text-black">
        Hi! I'm Bharathi, a passionate Front-End Developer with a strong focus on building interactive, 
        responsive, and dynamic websites that are user-friendly and visually engaging. I specialize in 
        creating seamless user experiences and engaging web interfaces using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong> and <strong>React JS</strong>.
        </p>
        <p class="text-lg text-black my-4">
        I have hands-on experience working with <strong>React</strong> to build dynamic and high-performing web applications, 
        and I use <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong> to ensure responsiveness and flexibility in all my projects.
        </p>    
        <div className='m-6 lg:m-2 bg-white shadow-black shadow-lg border rounded-lg overflow-hidden '>
        <div className='text-center md:text-left p-5 md:flex w-full'>
            <img src={FrontendImg} alt="Front end" className="w-64 md:w-[150px] h-auto mx-auto" />
            <div>
            <h1 className="text-2xl font-semibold mt-4 md:ps-5">Web Development</h1>
            <h1 className="text-lg mt-2 text-black md:ps-5">Specializing in creating captivating and user-friendly websites that blend aesthetics with functionality</h1>
            </div>
            
        </div>
        </div>
        <div className='flex justify-center gap-4 pt-6'>
        <a href='https://github.com/bharathijana1?tab=repositories' target='_blank'>
            <img src={GithubImg} alt="github" width="70px" />
        </a>
        <a href='tel:+6383765538' target='_blank'>
            <img src={WhatsappImg} alt="whatsapp" width="70px" />
        </a>
        <a href='mailto:bharathi.jana01@gmail.com' target='_blank'>
            <img src={EmailImg} alt="email" width="70px" />
        </a>

        </div>

        


        </div>
        
      
    </div>
    </div>
    
  )
}

export default AboutMe
