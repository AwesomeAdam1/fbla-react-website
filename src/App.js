import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Donate from './Pages/Donate';
import About from './Pages/About';
import UpcomingEvents from './Pages/UpcomingEvents';
import NavBar from './Components/NavBar';
import { NavLink } from 'react-router-dom';  

function App() {
    return (
        <>
            <NavBar />  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/upcomingevents" element={<UpcomingEvents />} />
            </Routes>
            <footer>
                <div class="bg-base-300 rounded-box p-2 pl-5 mt-2">
                    <div class="text-xl">
                        Walton Habitat For Humanity
                    </div>
                    <div>
                        <ul class="menu-vertical lg:menu-vertical bg-base-300 rounded-box w-full">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/donate">Donate</NavLink></li>
                            <li><NavLink to="/upcomingevents">Upcoming Events</NavLink></li>
                        </ul> 
                    </div>                    
                </div>        
            </footer>
        </>
    );
}

export default App;