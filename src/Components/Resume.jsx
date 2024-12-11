import React from 'react'

const Resume = () => {
  return (
    <div>
      <div className='flex justify-center' >
      <button className='rounded-xl p-2 px-5 text-xl bg-cyan-500' 
        style={{
        background: 'rgb(52,124,152)',
        background: 'linear-gradient(90deg, rgba(52,124,152,1) 0%, rgba(88,205,224,1) 50%, rgba(88,205,224,1) 53%, rgba(52,124,152,1) 100%)',
      }}> 
        <a href="./src/Components/img/Bharathi_Resume.docx" download target='_blank'>Download CV</a>
      </button>
      </div>

      


      

    </div>
  )
}

export default Resume

