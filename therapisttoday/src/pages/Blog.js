const posts = [
    {
    name: "How To Improve Your Mental Health",
    experience: "For neurodivergent individuals, these special interests are a profound avenue for exploring and expressing emotions. Special interests, often intense and focused passions, become a guiding compass in navigating emotions. The intensity and focus that neurodivergent individuals invest in these interests become conduits for expressing complex emotions that may be challenging to articulate in conventional ways. Whether it’s the relatability of a character’s struggles or the resonance of a particular storyline, these narratives become mirrors reflecting the spectrum of emotions that individuals experience. Geek fandoms provide a shared language. Special interests become bridges that connect individuals with others who share similar passions, fostering a sense of belonging and understanding..."    },
    {
      name: "The Mind Awakens: Geek Fandoms and Mental Health",
      experience: "Escaping to Alternate RealitiesIn the face of the current global landscape, marked by uncertainties and stressors, the allure of alternate realities emerges as therapeutic oases where individuals find solace and reprieve. Geek fandoms offer a refuge, a place where individuals can momentarily escape the challenges of daily life. The majority of stories out there serve as either vessels of hope amid the chaos, or to help encourage creativity..."
      
      },
      {
        name: "The Therapeutic Medium",
        experience: "These alternate realms aren’t just an escape—they’re also transformative spaces that unveil the resilience and understanding within the stories we love. Personally, I find that engaging in these alternate realities helps recalibrate our minds as we temporarily suspend the weight of our current burdens. When we allow ourselves to take a step back from our current struggle, we may come back with new perspectives. Finding temporary sanctuary allows room for strength, insights, and greater understanding..."
        
        },
        {
          name: "How To Improve Your Mental Health",
          experience: "For neurodivergent individuals, these special interests are a profound avenue for exploring and expressing emotions. Special interests, often intense and focused passions, become a guiding compass in navigating emotions. The intensity and focus that neurodivergent individuals invest in these interests become conduits for expressing complex emotions that may be challenging to articulate in conventional ways. Whether it’s the relatability of a character’s struggles or the resonance of a particular storyline, these narratives become mirrors reflecting the spectrum of emotions that individuals experience. Geek fandoms provide a shared language. Special interests become bridges that connect individuals with others who share similar passions, fostering a sense of belonging and understanding..."
          
          },


]

 const articles = posts.map(function(item) {
    return(
        <div className= "blog-card">
        <div>
         <h2 className='name'>Title: {item.name}</h2>
         <p className='heading'>{item.experience}</p>
        </div>
    </div>
    )}
 )


function Blog (arg) {
  return (
    <section>
  <h1>Blog Post</h1>
  <div className="blog-row">{articles}</div>
    </section>
  )
  }
  

export default Blog;