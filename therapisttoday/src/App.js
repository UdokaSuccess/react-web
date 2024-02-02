 import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Booking from './pages/Booking.js'
import Reviews from './pages/Reviews.js'
import Blog from './pages/Blog.js'
import Hello from './pages/Landing.js'
import About from './pages/About.js'
import Navbar from './Navbar.js'


 function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hello/>} />
        <Route path="about" element={<About/>} />
        <Route path="booking" element={<Booking/>} />
        <Route path="reviews" element={<Reviews/>} />
        <Route path="blog" element={<Blog/>} />
      </Routes>
      </BrowserRouter>            
    </div>
  )
}

 export default App