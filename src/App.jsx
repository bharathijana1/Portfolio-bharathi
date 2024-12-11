import { useState } from 'react'
import './App.css'
import PortfolioHome from './Components/PortfolioHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import PageNotFound from './Components/PageNotFound'
import ProjectsMain from './Components/ProjectsMain'
import Skills from './Components/Skills'
import Academic from './Components/Academic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-sans'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<PortfolioHome />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<ProjectsMain />} />
        <Route path='/academic' element={<Academic />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
            
    </div>
  )
}

export default App
