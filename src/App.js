import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Donate from './pages/Donate';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import NavBar from './components/NavBar';
import { NavLink } from 'react-router-dom';  

function App() {
    return (
        <>
            <NavBar />  
            <Routes>
                <Route path="/walton-fbla-website-design/" element={<Home />} />
                <Route path="/home" element={<Home />} />
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
                            <li><NavLink to="/walton-fbla-website-design/home">Home</NavLink></li>
                            <li><NavLink to="/walton-fbla-website-design/about">About</NavLink></li>
                            <li><NavLink to="/walton-fbla-website-design/donate">Donate</NavLink></li>
                            <li><NavLink to="/walton-fbla-website-design/upcomingevents">Upcoming Events</NavLink></li>
                        </ul> 
                    </div>                    
                </div>        
            </footer>
        </>
    );
}

export default App;