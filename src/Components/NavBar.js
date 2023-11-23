import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <NavLink to="/home">Home</NavLink>
          </li>
          <li>
             <NavLink to="/about">About</NavLink>
          </li>
          <li>
             <NavLink to="/donate">Donate</NavLink>
          </li>
          <li>
             <NavLink to="/events">Events</NavLink>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;