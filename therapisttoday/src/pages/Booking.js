import Imgb from "./images/pic11.jpg"
import Imga from "./images/pic16.jpg"
import Imgc from "./images/pic18.jpg"
import Imgd from "./images/pic17.jpg"
import Imge from "./images/pic14.jpg"
import Imgf from "./images/pic13.jpg"
import { GrContact } from "react-icons/gr";

const persons = [
    {
    id: Math.floor(Math.random() * 1000),
    name: "Joler",
    image: Imgc,
    experience: "5 years of experience in health and psychology",
    rate: "$35/hr" 
},
{
      id: Math.floor(Math.random() * 1000),
      name: "Kathryn",
    image: Imgd,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},
{
      id: Math.floor(Math.random() * 1000),
      name: "Grace",
    image: Imgf,
    experience: "3 years of experience in pediatrics, and psychology",
    rate: "$45/hr" 
},
{
      id: Math.floor(Math.random() * 1000),
      name: "Mabel",
    image: Imga,
    experience: "Doctor in psychology, MBA PHD",
    rate: "$35/hr" 
},
{
      id: Math.floor(Math.random() * 1000),
      name: "Joel",
    image: Imge,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},
{
      id: Math.floor(Math.random() * 1000),
      name: "Bene",
    image: Imgc,
    experience: "3 years of experience in pediatrics, and psychology",
    rate: "$45/hr" 
},    {
      id: Math.floor(Math.random() * 1000),
      name: "John",
    image: Imge,
    experience: "5 years of experience in health and psychology",
    rate: "$35/hr" 
},
{
    id: Math.floor(Math.random() * 1000),
    name: "Kathryn",
    image: Imgc,
    experience: "Enthusaistic about Helping people with mental disorders",
    rate: "$35/hr" 
},

]

 const booking = persons.map(function(item) {
    return(
        <div className= "card" key={item.id}>
         <img src={item.image} width={60} className="img" alt="professional therapist"/>
         <div className="title"><h3 className='name'>{item.name}</h3>  <a href="#">< GrContact/></a></div>
         <p>{item.experience}</p>
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