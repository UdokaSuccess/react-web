import Hello from "./pages/Hello";
import Info from "./pages/Info";
import Comm from "./pages/Comm"
import Coaching from "./pages/Coaching";
import Connect from "./pages/Connect";
import Subs from "./pages/Subs";
import Footer from "./pages/Footer";

function Landing(props) {
  // const scrollRef = useRef(null)
    return(
    <div>
        <Hello/>
        <Info/>       
        <Comm/>
        <Coaching/>
        <Connect/>
        <Subs/>
        <Footer/>
      </div>
      )
   } 
  
    export default Landing;
   