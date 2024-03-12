import React from 'react'
import Img from './pic1.jpg'


function Coaching() {
  return (
    <div className='coaching'>
<div className='row'>         
        <div className="hero-section"> 
           <h1>Mental  health Coaching</h1>
           <p>Mental wellness is feeling and interacting in ways that help you enjoy life</p>
           <button className="cta-btn">Register</button>
        </div>
        <div className="hero-section">
            <img src={Img} width={400}/>
          </div> 
    </div>  
    </div>
  )
}

export default Coaching