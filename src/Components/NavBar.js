import { NavLink } from 'react-router-dom';  

const NavBar = () => {
 return (
   <div> 
      <nav class="bg-teal-400 p-2">
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
            <NavLink to="/gala">Gala</NavLink>
         </div>
         <div class="inline-block absolute right-full right-6">
            Habitat for Humanity
         </div>
      </nav>
   </div>
 
 );
};

export default NavBar;