import React from 'react'
import {motion} from "framer-motion";
import { useRef } from 'react';


function Info() {
  const Ref = useRef(null)

  return (
<motion.div className='row'>        
        <motion.div className="info-section"
        initial={{ opacity: 0,  translateX: -10}}
        whileInView={{opacity: 1, translateX: 5}}
        transition={{
          duration: 2,
          delay: 0.1,
          ease: [0.5, 0.51, 1, 1],}}
        viewport={{ root: Ref }}>
            <small>Information</small>
            <h2>A Psychologist can help you walk through your problems </h2>
            <hr></hr>
            <motion.button className='cta-btn' whileTap={{ scale: 0.85 }}>Contact Us</motion.button>
          </motion.div>    
        <motion.div className="info-section"
        initial={{ opacity: 0,  translateY: -10}}
        whileInView={{opacity: 1, translateY: 5}}
        transition={{
          duration: 2,
          delay: 0.1,
          ease: [0.5, 0.71, 1, 1],}}
        viewport={{ root: Ref }}> 
           <p>Emotional abuse is a form of manipulation used to maintain control in a relationship.<br></br>
             This type of abuse may include verbal attacks, humiliation, intimidation, bullying, and isolation.<br></br> 
            It can cause deep emotional harm that may last for years. Children are especially vulnerable to emotional abuse.
             Young children may not realize an adult’s abuse is unusual. <br></br> They may feel responsible for their parents’ behavior:
             if only they were better children, then their parents might be more loving. </p>
        </motion.div>
    </motion.div>  
    // </div>
  )
}

export default Info