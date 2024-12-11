import React from 'react'

const PageNotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
    <div className='flex justify-center'>
        <img src="./src/Components/img/error.jpg" alt="Page not found" />
        
    </div>
    <h1 className='text-center text-2xl md:text-3xl font-bold font-serif'>Sorry, Page not found</h1>
    <h1 className='text-center text-xl md:text-2xl font-medium font-serif py-2'>The page you are looking for doesn't exist</h1>
    </div>
    
  )
}

export default PageNotFound
