import { NavLink } from 'react-router-dom';  

const NavBar = () => {
 return (
   <div> 
      <nav class="bg-teal-400 p-3">
         <div class="inline-block"> 
            <NavLink to="/home">Home</NavLink>
         </div>
         <div class="inline-block"> 
            <NavLink to="/about">About</NavLink>
         </div>
         <div class="inline-block"> 
            <NavLink to="/donate">Donate</NavLink>
         </div>
         <div class="inline-block"> 
            <NavLink to="/gala">Gala</NavLink>
         </div>
      </nav>
   </div>
 
 );
};

export default NavBar;