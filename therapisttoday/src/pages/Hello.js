import heroImg from './images/pic2.jpg'
import {motion} from "framer-motion";


function Hello(props) {
    return(
<div className="landing">
  <div className='row row-1'>        
        <div className="hero-section">
            <img src={heroImg} alt='hero-img-woman-sitting'/>
          </div>    
        <div className="hero-section"> 
           <small>Best Online Therapy</small> 
           <h1>Individual and Group Therapy</h1>
           <p>Mental wellness is feeling and interacting in ways that help you enjoy life</p>
           <motion.button className="cta-btn" whileTap={{ scale: 0.85 }}>Start Now</motion.button>
        </div>
    </div>               
  </div>
      )
   } 
  
    export default Hello;