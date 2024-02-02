  import Img from './woman2.png'

function About(props){
    return(
        <section>
        <div className='row'>
       <div className="about"> 
       <h1>About Us</h1> 
       <p>Mental wellness is feeling, thinking, and interacting in ways that help you enjoy life and deal effectively with difficult situations. <br/> We help you achieve that feeling of emotional and spiritual well-being that respects the importance of culture, equity, social justice, relationships and personal dignity.</p>
       <button>Read More...</button>
    </div>
      <div className="about2">
        <img src={Img} width={400}/>
      </div>
      </div>
      </section>
      )
   } 

   export default About;