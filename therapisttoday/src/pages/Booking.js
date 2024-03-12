import Imgb from "./pic4.jpg"
import Imga from "./pic1.jpg"
// import Imgc from "./pic8.jpg"
// import Imgd from "./pic9.jpg"
import Imge from "./pic3.jpg"
// import Imgf from "./pic7.jpg"




const persons = [
    {
    name: "John",
    image: Imga,
    experience: "5 years of experience in health and psychology",
    rate: "$35/hr" 
},
{
    name: "Kathryn",
    image: Imgb,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},
{
    name: "Joel",
    image: Imge,
    experience: "3 years of experience in pediatrics, and psychology",
    rate: "$45/hr" 
},
{
    name: "Mabel",
    image: Imga,
    experience: "Doctor in psychology, MBA PHD",
    rate: "$35/hr" 
},
{
    name: "Kathryn",
    image: Imgb,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},
{
    name: "Joel",
    image: Imge,
    experience: "3 years of experience in pediatrics, and psychology",
    rate: "$45/hr" 
},    {
    name: "John",
    image: Imga,
    experience: "5 years of experience in health and psychology",
    rate: "$35/hr" 
},
{
    name: "Kathryn",
    image: Imgb,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},

]

 const booking = persons.map(function(item) {
    return(
        <div className= "card">
        <div>
         <img src={item.image} width={60} className="img"/>
         <h3 className='name'>{item.name}</h3>
         <p>{item.experience}</p>
        </div>
    </div>
    )}
 )


function Booking (arg) {
  return (
    <section className="heading">
        <small>Qualified,  Accredited,  Clinical Psychologists </small>
  <h1>TOP PROFESSIONALS</h1>
  <div className="card-row">{booking}</div>
  </section>
  )
  }
  
export default Booking;