import { NavLink } from 'react-router-dom';  

const NavBar = () => {
 return (
   <nav class="bg-teal-400 p-2">
      <div> 
         <div class="inline-block mx-2"> 
            <NavLink to="/home">Home</NavLink>
         </div>
         <div class="inline-block mx-2"> 
            <NavLink to="/about">About</NavLink>
         </div>
         <div class="inline-block mx-2"> 
            <NavLink to="/donate">Donate</NavLink>
         </div>
         <div class="inline-block mx-2"> 
            <NavLink to="/upcomingevents">Upcoming Events</NavLink>
         </div>
         <div class="inline-block mx-2">
            Habitat for Humanity
         </div>
      </div>
   </nav>
 );
};

export default NavBar;