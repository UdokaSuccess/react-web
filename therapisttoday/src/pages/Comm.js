import Img from './images/pic3.jpg'
import {motion} from 'framer-motion'
import {useRef } from 'react';


function Comm(props){
  const Ref = useRef(null)
    return(
      <section className="comm-section">
     <motion.div className='row community'> 

     <motion.div className="comm" 
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{
       duration: 2,
       delay: 0.1,
       ease: [0.5, 0.51, 1, 1],}}
     viewport={{ root: Ref }}>
        <img src={Img} width={560}/>
      </motion.div>
    <div className="comm"> 
       <h3>Emptiness</h3> 
       <p>Feelings of emptiness— a lack of meaning or purpose, are experienced
         by most people at some point in life.</p>
      <h3>Depression</h3>
      <p>Prolonged Feelings of sadness or emptiness making
         the simplest activities sometimes feel impossible.</p>
    </div>
      </motion.div>
      </section>
      )
   } 

   export default Comm;