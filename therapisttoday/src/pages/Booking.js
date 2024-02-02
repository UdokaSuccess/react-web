import Imgb from "./pic1.jpg"
import Imga from "./pic2.jpg"
import Imgc from "./pic3.jpg"
import Imgd from "./pic4.jpg"


const persons = [
    {
    name: "John",
    image: Imga,
    experience: "5 years of experience in health and psychology",
    rate: "$35/hr" 
},
{
    name: "Kathryn",
    image: Imgc,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},
{
    name: "Joel",
    image: Imgb,
    experience: "3 years of experience in pediatrics, and psychology",
    rate: "$45/hr" 
},
{
    name: "Mabel",
    image: Imgd,
    experience: "Doctor in psychology, MBA PHD",
    rate: "$35/hr" 
},
{
    name: "Kathryn",
    image: Imgc,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},
{
    name: "Joel",
    image: Imgb,
    experience: "3 years of experience in pediatrics, and psychology",
    rate: "$45/hr" 
},
{
    name: "Mabel",
    image: Imgd,
    experience: "Doctor in psychology, MBA PHD",
    rate: "$35/hr" 
},
{
    name: "John",
    image: Imga,
    experience: "5 years of experience in health and psychology",
    rate: "$35/hr" 
},
{
    name: "Kathryn",
    image: Imgc,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},

]

 const booking = persons.map(function(item) {
    return(
        <div className= "card">
        <div>
         <img src={item.image} width={200} className="img"/>
         <p className='name'>Name: {item.name}</p>
         <p className='heading'>Headline: {item.experience}</p>
         <p className='rate'>Rate: {item.rate}</p>
         <button>Contact</button>
        </div>
    </div>
    )}
 )


function Booking (arg) {
  return (
    <section>
  <h1>Top Professionals</h1>
  <div className="card-row">{booking}</div>
    </section>
  )
  }
  
export default Booking;