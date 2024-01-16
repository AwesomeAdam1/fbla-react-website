// import Quotes from '../Components/Quotes';
// import RecentEvents from '../Components/RecentEvents';
// import UpcomingEvents from '../Components/UpcomingEvents';
// import habitatLogo from '../Resources/HabitatLogo.jpeg';

// import './Stylesheets/Home.css'

// function Home() {
//   return (
//     <>
//     <img src={habitatLogo} className='logo'></img>
//     <div class="flex flex-col w-full">
//       <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
//         <div class="text-center">
//           <p class="text-7xl m-12">
//             Upcoming Events
//           </p>
//         </div>
//         <UpcomingEvents />
//       </div> 
//       <div class="divider w-2/3 mx-auto"></div> 
//       <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
//         <div class="text-center">
//           <p class="text-7xl m-12">
//             Recent Events
//           </p>
//         </div>
//         <RecentEvents />
//       </div>
//       <div class="divider w-2/3 mx-auto"></div> 
//       <div class="grid h-full card bg-base-300 rounded-box place-items-center m-10">
//       <div class="text-center">
//           <p class="text-5xl m-12">
//             Volunteer Quotes
//           </p>
//         </div>
//         <Quotes />
//       </div>
//     </div>
//     </>   
//   );
// }

// export default Home;

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './stylesheets/header.css'

export default function Header() {
    function handleClick() {
        document.getElementById('hamburger-toggle').click()
    }

    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>Walton CSHS</Link>
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
