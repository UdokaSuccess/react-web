  import img from './pic4.jpg'
import {motion} from "framer-motion";
import { useRef } from "react";


function About(props){
  const scrollRef = useRef(null)

    return(
        <section ref={scrollRef} style={{ overflow: "scroll" }}>
    <div className='row'>
       <motion.div className="about"
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 10, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay: 0.1,
            ease: [0.5, 0.51, 1, 1],}}
          viewport={{ root: scrollRef }}> 
       <h1>About Us</h1> 
       <p>Mental wellness is feeling, thinking, and interacting in ways that help you enjoy life and deal effectively with difficult situations. <br/> We help you achieve that feeling of emotional and spiritual well-being that respects the importance of culture, equity, social justice, relationships and personal dignity.</p>
       <button className='cta-btn'>Read More...</button>
    </motion.div>

      <motion.div className="about2"
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 0, 50], opacity: 1, scale: 1 }}
          transition={{
                  duration: 3,
                  delay: 0.1,
                  ease: [0.5, 0.51, 1, 1],
                }}
          viewport={{ root: scrollRef }}>

        <img src={img} width={480}/>
      </motion.div>
</div>
                    <div className='row'>
                  <div className='col'>
                <h5>Our Mission</h5>
                <p> this is our attire in adire</p>
                </div>
                <div className='col'>
                <h5>Our Counsellors</h5>
                <p> this is our attire in adire</p>
                </div>     
                  <div className='col'>
                <h5>Our Support</h5>
                <p> this is our attire in adire</p>
                </div>
                      </div>
      </section>
      )
   } 

   export default About;