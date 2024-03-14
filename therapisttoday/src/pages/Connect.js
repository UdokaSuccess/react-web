import React from 'react'
import img from './images/pic6.jpg'
import imgb from './images/pic7.jpg'
import imgc from './images/pic8.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from "react";




     
 function Connect() {
  const Ref = useRef(null)

  return (    
    <div className='connect'>
    <h1>Not Sure If Therapy is For You?</h1>
    <p>fostering a sense of belonging and understanding..."</p>

    <div className='row'>

      <Link to='/blog'>
      <motion.div className='post'
      initial={{ opacity: 0,  translateX: -100}}
      whileInView={{opacity: 1, translateX: 0}}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0.5, 0.51, 1, 1],}}
      viewport={{ root: Ref }}>
        <img src={img} width={300} alt='Woman in stress'/>
        <p>Benefits of Psychotherapy</p>
        </motion.div>
        </Link>

        <Link to='/blog'>
      <div className='post'>
        <img src={imgb} width={300} alt='Happy woman'/>
        <p>Improve Your Mental Health</p>
        </div>
        </Link>

        <Link to='/blog'>
      <motion.div className='post'
            initial={{ opacity: 0,  translateX: 100}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.5, 0.51, 1, 1],}}
            viewport={{ root: Ref }}>
        <img src={imgc} width={300} alt='Woman in stress'/>
        <p>Socially Managing Stress</p>
        </motion.div>
        </Link>
    </div>
    </div>
  )
}

export default Connect

