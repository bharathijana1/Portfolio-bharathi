import React, { useState } from 'react'
import Projects from './Projects'

const ProjectsMain = () => {

    const projects = [
        {
            img: "../src/Components/img/formvalidation.png",
            title: "Form Validation",
            button: "Go To netlify",
            alt: "Form validation",
            ahref: "https://formvalide.netlify.app/"
        },
        {
            img: "../src/Components/img/learnandgrow.png",
            title: "Learn And Grow",
            button: "Go To netlify",
            alt: "Learn And Grow",
            ahref: "https://learn-and-grow.netlify.app/"
        },
        {
            img: "../src/Components/img/librarymanagmentsysterm.png",
            title: "Library Managment system",
            button: "Go To netlify",
            alt: "Library Managment system",
            ahref: "https://librarymanagementsys.netlify.app/"
        },
        {
            img: "../src/Components/img/freshcart.png",
            title: "FreshCart E-Commerce",
            button: "Go To netlify",
            alt: "FreshCart",
            ahref: "https://e-commerce-freshcart-website.netlify.app"
        },
        {
            img: "../src/Components/img/adviseapp.png",
            title: "Adviser APP",
            button: "Go To netlify",
            alt: "Adviser APP",
            ahref: "https://adviser-application.netlify.app"
        },
        {
            img: "../src/Components/img/qrcode.png",
            title: "Generate QR Code",
            button: "Go To netlify",
            alt: "Generate QR Code",
            ahref: "https://generate-qr-code-for-website.netlify.app"
        },
        {
            img: "../src/Components/img/weather-api-app.png",
            title: "Weather API App",
            button: "Go To netlify",
            alt: "Weather API App",
            ahref: "https://weather-api-app-proj.netlify.app"
        },
        {
            img: "../src/Components/img/bmicalculator.png",
            title: "BMI Calculator",
            button: "Go To Github",
            alt: "BMI calulator",
            ahref: "https://github.com/bharathijana1/BIM-Calculator-REACT"
        },
        {
            img: "../src/Components/img/currency-converter.png",
            title: "Currency Converter",
            button: "Go To Github",
            alt: "Currency Converter",
            ahref: "https://github.com/bharathijana1/Currency-Converter-REACT"
        },
        {
            img: "../src/Components/img/profile-card.png",
            title: "Profile Card",
            button: "Go To Github",
            alt: "Profile Card",
            ahref: "https://github.com/bharathijana1/profilecard-props-REACT"
        },
        {
            img: "../src/Components/img/quizgame.png",
            title: "Quizgame",
            button: "Go To Github",
            alt: "Quizgame",
            ahref: "https://quisgames.netlify.app/"
        },
        {
            img: "../src/Components/img/stopwatch.png",
            title: "Stop watch",
            button: "Go To Github",
            alt: "Stop watch",
            ahref: "https://github.com/bharathijana1/StopWatch-REACTJS"
        },
        {
            img: "../src/Components/img/weatherapp.png",
            title: "Weather app",
            button: "Go To Github",
            alt: "Weather app",
            ahref: "https://weathercheckweb.netlify.app/"
        },
        {
            img: "../src/Components/img/studio.png",
            title: "Studio",
            button: "Go To Github",
            alt: "Studio",
            ahref: "https://github.com/bharathijana1/studio_PROJ-HTML"
        },
        {
            img: "../src/Components/img/toursandtravels.png",
            title: "Tours and travels",
            button: "Go To Github",
            alt: "Tours and travels",
            ahref: "https://github.com/bharathijana1/Tour-and-travells"
        },
        {
            img: "../src/Components/img/calculation.png",
            title: "Calculation",
            button: "Go To Github",
            alt: "Calculation",
            ahref: "https://github.com/bharathijana1/Calculation-REACTJS"
        },
        {
            img: "../src/Components/img/digitalclock.png",
            title: "Digital clock",
            button: "Go To Github",
            alt: "Digital clock",
            ahref: "https://digitclk.netlify.app/"
        },
        {
            img: "../src/Components/img/photozone.png",
            title: "Photozone",
            button: "Go To Github",
            alt: "Photozone",
            ahref: "https://github.com/bharathijana1/photozone-res_PROJ-HTML-CSS-JS"
        },
        
    ];
    const imagesPerPage = 4;
  const totalPages = Math.ceil(projects.length / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = projects.slice(indexOfFirstImage, indexOfLastImage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='border border-black m-2 md:m-6 shadow-lg shadow-gray-600 py-10 md:py-28'>

        <Projects projects={currentImages} />
        <div className="flex justify-center items-center mt-6 space-x-4 sm:pt-10">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-900 hover:bg-purple-950 text-white text-xl capitalize disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-purple-900 hover:bg-purple-950 text-white text-xl capitalize disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      
    </div>
  )
}

export default ProjectsMain
