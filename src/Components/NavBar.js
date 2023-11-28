import { NavLink } from 'react-router-dom';  
import habitatLogo from '../resources/HabitatLogo.jpeg';

const NavBar = () => {  
 return (
   <div>
     <ul class="menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box w-full">
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/donate">Donate</NavLink></li>
      <li><NavLink to="/upcomingevents">Upcoming Events</NavLink></li>
     </ul> 
   </div>
   
 );
};

export default NavBar;