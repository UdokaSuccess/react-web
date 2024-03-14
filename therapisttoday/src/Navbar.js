import {Link} from 'react-router-dom'
import Logo from './cover2.png'
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';





function Navbar(props) { 
    return(
      <div className="navbar">
        <Link to='/'><img src={Logo} width={116}/></Link>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/therapists'>Therapists</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li> 
         </ul>
         <IoMenuSharp className='icon' size={32}/>
         </div>
      )
   } 
   export default Navbar;