import Img from './pic3.jpg'

function Comm(props){
    return(
      <section className="comm-section">
     <div className='row community'>        
     <div className="comm">
        <img src={Img} width={560}/>
      </div>
    <div className="comm"> 
       <h3>Emptiness</h3> 
       <p>Feelings of emptiness— a lack of meaning or purpose, are experienced
         by most people at some point in life.</p>
      <h3>Depression</h3>
      <p>Prolonged Feelings of sadness or emptiness making
         the simplest activities sometimes feel impossible.</p>
    </div>
      </div>
      </section>
      )
   } 

   export default Comm;