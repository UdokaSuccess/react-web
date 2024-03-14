import React from 'react'
import Img from './images/pic1.jpg'
import {motion} from "framer-motion";
import { useRef } from "react";


function Coaching() {
  const Ref = useRef(null)
  return (
    <div className='coaching'>
<div className='row'>         
        <motion.div className="coaching-section"
        initial={{ opacity: 0,  translateX: -10}}
        whileInView={{opacity: 1, translateX: 5}}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [1, 0.31, 1, 1],}}
        viewport={{ root: Ref }}> 
           <h1>Mental  health Coaching</h1>
           <p>Mental wellness is feeling and interacting in ways that help you enjoy life</p>
           <motion.button className="cta-btn"  whileTap={{ scale: 0.85 }}>Register</motion.button>
        </motion.div>
        <motion.div className="coaching-section"
         initial={{ translateY: -30}}
         whileInView={{translateY: 0}}
         transition={{
           duration: 1,
           delay: 0.1,
           ease: [1, 0.31, 1, 1],}}
         viewport={{ root: Ref }}>
            <img src={Img} width={400}/>
          </motion.div> 
    </div>  
    </div>
  )
} 

export default Coaching