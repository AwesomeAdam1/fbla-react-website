import { NavLink } from 'react-router-dom';  

const NavBar = () => {
 return (
   <div> 
      <nav class="bg-teal-400">
          <ul>
               <li >
                  <NavLink to="/home">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/about">About</NavLink>
               </li>
               <li>
                  <NavLink to="/donate">Donate</NavLink>
               </li>
               <li>
                  <NavLink to="/gala">Gala</NavLink>
               </li>
            </ul>
      </nav>
   </div>
 
 );
};

export default NavBar;