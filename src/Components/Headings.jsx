import React from 'react'

const Headings = ({portfolioheading}) => {
  return (
    <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-center md:m-5 py-5" style={{ textShadow: '2px 2px 2px gray', fontSize:"33px" }} >{portfolioheading}</h2>
      
    </div>
  )
}

export default Headings
