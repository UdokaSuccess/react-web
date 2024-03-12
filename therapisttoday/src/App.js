 import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog.js'
import Landing from './Landing.js'
import Navbar from './Navbar.js'
import AboutMain from './AboutMain.js'
import TherapistMain from './TherapistMain.js'


 function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="about" element={<AboutMain/>} />
        <Route path="therapists" element={<TherapistMain/>} />


      </Routes>
      </BrowserRouter>            
    </div>
  )
}

 export default App