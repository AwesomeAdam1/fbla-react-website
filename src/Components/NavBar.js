import { NavLink } from 'react-router-dom';  
import habitatLogo from '../resources/HabitatLogo.jpeg';

const NavBar = () => {  
 return (
   <div>
     <ul class="menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box w-full">
      <li><NavLink to="/walton-fbla-website-design/home">Home</NavLink></li>
      <li><NavLink to="/walton-fbla-website-design/about">About</NavLink></li>
      <li><NavLink to="/walton-fbla-website-design/donate">Donate</NavLink></li>
      <li><NavLink to="/walton-fbla-website-design/upcomingevents">Upcoming Events</NavLink></li>
     </ul> 
   </div>
   
 );
};

export default NavBar;