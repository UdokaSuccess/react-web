import img from './images/pic3.jpg'


function About(props){
    return(
        <section className='about-sec'>
    <div className='row'>
       <div className="about">
       <h1>About Us</h1> 
       <p>Mental wellness is feeling, thinking, and interacting in ways that help you enjoy life and deal effectively with difficult situations. <br/> We help you achieve that feeling of emotional and spiritual well-being that respects the importance of culture, equity, social justice, relationships and personal dignity.</p>
       <button className='cta-btn'>Read More...</button>
    </div>

      <div className="about2">
        <img src={img} width={480}/>
      </div>
</div>
             <div className='row'>
                      <div className='col'>
                    <h5>Our Mission</h5>
                    <p>To spread the power of optimism. Our mission is to empower every <br></br> person and inspire creativity in them.</p>
                    </div>
                    <div className='col'>
                    <h5>Our Counsellors</h5>
                    <p>Our Counsellors empower every person and every organization on the planet to achieve more, <br></br>and cherish moments that matter in everyday life</p>
                    </div>     
                      <div className='col'>
                    <h5>Our Support</h5>
                    <p>our aim is to capture and present the world's creativity, knowledge, <br></br> and moments that matter in everyday life</p>
                    </div>
            </div>
      </section>
      )
   } 

   export default About;