import heroImg from './pic2.jpg'

function Hello(props) {
    return(
<div className="landing">
  <div className='row row-1'>        
        <div className="hero-section">
            <img src={heroImg} width={560}/>
          </div>    
        <div className="hero-section"> 
           <small>Best Online Therapy</small> 
           <h1>Individual and Group Therapy</h1>
           <p>Mental wellness is feeling and interacting in ways that help you enjoy life</p>
           <button className="cta-btn">Start Now</button>
        </div>
    </div>               
  </div>
      )
   } 
  
    export default Hello;