import Imgb from "./pic1.jpg"
import Imga from "./pic2.jpg"
import Imgc from "./pic3.jpg"
import Imgd from "./pic4.jpg"



const persons = [
    {
    name: "Luke",
    image: Imga,
    experience: "I was completely impressed with their professionalism and customer service.",
},
{
    name: "Tara",
    image: Imgc,
    experience: "Pricing is fair and transparent - definitely value for money.",
},
{
    name: "Rooke",
    image: Imgb,
    experience: "The ambiance here is always inviting and comfortable.",
},
{
    name: "Mabel",
    image: Imgd,
    experience: "Pricing is fair and transparent - definitely value for money."
  }
]


const booking = persons.map(function(item) {
    return(
        <div className= "card">
        <div>
         <img src={item.image} width={200} className="review"/>
         <p className='name'>Name: {item.name}</p>
         <p className='heading'>{item.experience}</p>
        </div>
    </div>
    )}
 )
 


function Booking (arg) {
  return (
    <section>
  <h1>Reviews</h1>
  <div className="card-row">{booking}</div>
    </section>
  )
  }
  
export default Booking;