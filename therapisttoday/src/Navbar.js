import {Link} from 'react-router-dom'
import Logo from './cover2.png'


function Navbar(props) {
    return(
      <div className="navbar">
            <img src={Logo} width={116}/> 
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/therapists'>Therapists</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        </ul>
        
        {/* <button className="buttonNav">Get Started</button> */}

      </div>
      )
   } 
   export default Navbar;