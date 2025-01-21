import React, { useState } from 'react'
import Projects from './Projects'
import ProjectData from './ProjectData';


const ProjectsMain = () => {


  const imagesPerPage = 8;
  const totalPages = Math.ceil(ProjectData.length / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = ProjectData.slice(indexOfFirstImage, indexOfLastImage);

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
    <div className='border border-black m-2 shadow-lg shadow-gray-600 py-10 '>
      <div className='flex justify-center items-center'>
        <Projects projects={currentImages} />

      </div>


      <div className="flex justify-center items-center space-x-4 sm:pt-2">
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
