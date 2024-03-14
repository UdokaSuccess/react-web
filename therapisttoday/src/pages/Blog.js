import img from './images/pic6.jpg'
import imgb from './images/pic7.jpg'
import imgc from './images/pic8.jpg'
import Footer from './Footer'
import Subs from './Subs'
import {Link} from 'react-router-dom'



const date = new Date();


const posts = [
    {
      id: Math.floor(Math.random() * 1000),
      date: date.toDateString(),
      img: img,
      name: "Benefits of Psychotherapy",
      author: "Maria Michelle",
      experience: "For neurodivergent individuals, these special interests are a profound avenue for exploring and expressing.Special interests, often intense and focused passions, become a guiding compass in navigating emotions. The intensity and focus that neurodivergent individuals invest in these interests become conduits for expressing complex emotions that may be challenging to articulate in conventional ways."},
     
      {
      id:   1,
         img: imgb,
      date: date.toDateString(),
      author: "Kenzy Luck",
      name: "How to Improve your Mental Health",
      experience: "For neurodivergent individuals, these special interests are a profound avenue for exploring and expressing emotions. Special interests, often intense and focused passions, become a guiding compass in navigating emotions. The intensity and focus that neurodivergent individuals invest in these interests become conduits for expressing complex emotions that may be challenging to art in conventional ways."
          },

      {          
      id: Math.floor(Math.random() * 1000),
      img: imgc,
      date: date.toDateString(),
      author: "Luchy Kings",
      name: "Managing Stress In the Workplace",
      experience: "Escaping to Alternate RealitiesIn the face of the current global landscape, marked by uncertainties and stressors, the allure of alternate realities emerges as therapeutic oases where individuals find solace and reprieve. Geek fandoms offer a refuge, a place where individuals can momentarily escape the challenges of daily life. The majority of stories out there serve as either vessels of hope amid the chaos."
          },


]

const articles = posts.map(function(item) {
    return(
      <Link to='/' className='blog-link' key={item.id}>
        <div className= "blog-card">
          <img src={item.img} width={560}/>
          <small>by {item.author}</small>
         <h2 className='name'>{item.name}</h2>
         <p className='heading'>{item.experience}</p>
         <small> {item.date}</small>
        </div>
        </Link>
    )}
 )
 


function Blog (arg) {
  return (
    <>
       <section className='blog-sec'>
  <h1>Our Blog Posts</h1>
  <div className="blog-row">{articles}</div>
  </section>
    <Subs/>
    <Footer/>
    </>
  )
  }
  

export default Blog;