// import { NavLink } from 'react-router-dom';  
// import habitatLogo from '../Resources/HabitatLogo.jpeg';

// const NavBar = () => {  
//  return (
//    <div>
//      <ul class="menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box w-full">
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/about">About</NavLink></li>
//       <li><NavLink to="/donate">Donate</NavLink></li>
//       <li><NavLink to="/upcomingevents">Upcoming Events</NavLink></li>
//      </ul> 
//    </div>
   
//  );
// };

// export default NavBar;

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './stylesheets/header.css'

export default function NavBar() {
    function handleClick() {
        document.getElementById('hamburger-toggle').click()
    }

    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>Walton Habitat</Link>
            <div className='mobile-nav'>
                <label className='hamburger-menu'>
                    <input type='checkbox' name='' id='hamburger-toggle' />
                </label>
                <aside className='sidebar'>
                    <ul>
                        <CustomLink to='/' onClick={handleClick}>Home</CustomLink>
                        <CustomLink to='about' onClick={handleClick}>About</CustomLink>
                        <CustomLink to='donate' onClick={handleClick}>Donate</CustomLink>
                        <CustomLink to='upcomingevents' onClick={handleClick}>Upcoming Events</CustomLink>
                    </ul>
                </aside>
            </div>
            <ul className='desktop-nav'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='about'>About</CustomLink>
                <CustomLink to='donate'>Donate</CustomLink>
                <CustomLink to='upcomingevents'>Upcoming Events</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}